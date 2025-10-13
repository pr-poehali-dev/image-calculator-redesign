import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface CalculatorTexts {
  title: string;
  subtitle: string;
  amountLabel: string;
  daysLabel: string;
  amountHint: string;
  daysHint: string;
  button1Text: string;
  button2Text: string;
  button1Link: string;
  button2Link: string;
  headerImage: string;
}

interface CalculatorSettingsProps {
  texts: CalculatorTexts;
  onTextsChange: (texts: CalculatorTexts) => void;
  colorScheme: string;
  onColorSchemeChange: (scheme: string) => void;
  designStyle: string;
  onDesignStyleChange: (style: string) => void;
  calculatorWidth: number;
  onCalculatorWidthChange: (width: number) => void;
  sliderSize: number;
  onSliderSizeChange: (size: number) => void;
}

const colorSchemes = [
  { id: 'teal', name: 'Бирюзовый', gradient: 'from-emerald-400 via-teal-400 to-cyan-400', text: 'teal-500', border: 'teal-400' },
  { id: 'purple', name: 'Фиолетовый', gradient: 'from-purple-400 via-violet-400 to-indigo-400', text: 'violet-500', border: 'violet-400' },
  { id: 'orange', name: 'Оранжевый', gradient: 'from-orange-400 via-amber-400 to-yellow-400', text: 'orange-500', border: 'orange-400' },
  { id: 'pink', name: 'Розовый', gradient: 'from-pink-400 via-rose-400 to-red-400', text: 'rose-500', border: 'rose-400' },
  { id: 'blue', name: 'Синий', gradient: 'from-blue-400 via-sky-400 to-cyan-400', text: 'blue-500', border: 'blue-400' },
  { id: 'green', name: 'Зелёный', gradient: 'from-green-400 via-emerald-400 to-teal-400', text: 'green-500', border: 'green-400' },
];

const designStyles = [
  { id: 'rounded', name: 'Закруглённый', preview: 'rounded-3xl' },
  { id: 'sharp', name: 'Острые углы', preview: 'rounded-lg' },
  { id: 'minimal', name: 'Минимализм', preview: 'rounded-xl' },
];

const CalculatorSettings = ({ 
  texts, 
  onTextsChange, 
  colorScheme, 
  onColorSchemeChange,
  designStyle,
  onDesignStyleChange,
  calculatorWidth,
  onCalculatorWidthChange,
  sliderSize,
  onSliderSizeChange
}: CalculatorSettingsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleTextChange = (field: keyof CalculatorTexts, value: string) => {
    onTextsChange({ ...texts, [field]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onTextsChange({ ...texts, headerImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    onTextsChange({ ...texts, headerImage: '' });
  };

  const handleSaveDesign = () => {
    const settings = {
      texts,
      colorScheme,
      designStyle,
      calculatorWidth,
      sliderSize,
      savedAt: new Date().toISOString(),
    };
    
    localStorage.setItem('calculatorSettings', JSON.stringify(settings));
    
    toast({
      title: "✅ Дизайн сохранён!",
      description: "Все настройки успешно сохранены",
    });
  };

  const handleResetDesign = () => {
    localStorage.removeItem('calculatorSettings');
    
    onTextsChange({
      title: 'Займ на карту',
      subtitle: 'Не выходя из дома',
      amountLabel: 'Сумма',
      daysLabel: 'Срок',
      amountHint: 'Максимальная сумма: 20 000,00 ₽',
      daysHint: 'Максимальный срок: 15 дней',
      button1Text: 'госуслуги',
      button2Text: 'Получить',
      button1Link: '',
      button2Link: 'https://www.money-financei.ru/theapplicationisoffline',
      headerImage: '',
    });
    onColorSchemeChange('teal');
    onDesignStyleChange('rounded');
    onCalculatorWidthChange(672);
    onSliderSizeChange(100);
    
    toast({
      title: "🔄 Настройки сброшены",
      description: "Восстановлены значения по умолчанию",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
      >
        <Icon name="Settings" size={20} />
        {isOpen ? 'Скрыть настройки' : 'Настроить калькулятор'}
      </Button>

      {isOpen && (
        <div className="mt-4 bg-white rounded-2xl shadow-lg p-6 space-y-6 border border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Palette" size={20} />
              Цветовая схема
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {colorSchemes.map((scheme) => (
                <button
                  key={scheme.id}
                  onClick={() => onColorSchemeChange(scheme.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    colorScheme === scheme.id
                      ? 'border-gray-900 shadow-md'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <div className={`h-12 rounded-lg bg-gradient-to-r ${scheme.gradient} mb-2`}></div>
                  <div className="text-sm font-medium text-gray-700">{scheme.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Layout" size={20} />
              Стиль дизайна
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {designStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => onDesignStyleChange(style.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    designStyle === style.id
                      ? 'border-gray-900 shadow-md'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <div className={`h-12 bg-gray-200 ${style.preview} mb-2`}></div>
                  <div className="text-sm font-medium text-gray-700">{style.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Sliders" size={20} />
              Размеры
            </h3>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-gray-700">Ширина калькулятора: {calculatorWidth}px</Label>
                <input
                  type="range"
                  min="300"
                  max="1200"
                  step="10"
                  value={calculatorWidth}
                  onChange={(e) => onCalculatorWidthChange(Number(e.target.value))}
                  className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>300px</span>
                  <span>1200px</span>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">Размер ползунков: {sliderSize}%</Label>
                <input
                  type="range"
                  min="70"
                  max="130"
                  step="5"
                  value={sliderSize}
                  onChange={(e) => onSliderSizeChange(Number(e.target.value))}
                  className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>70%</span>
                  <span>130%</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Type" size={20} />
              Тексты и изображение
            </h3>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Изображение в шапке</Label>
                {texts.headerImage ? (
                  <div className="relative">
                    <img src={texts.headerImage} alt="Header" className="w-full h-32 object-cover rounded-lg border-2 border-gray-200" />
                    <Button
                      onClick={handleRemoveImage}
                      size="sm"
                      variant="destructive"
                      className="absolute top-2 right-2"
                    >
                      <Icon name="X" size={16} />
                    </Button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <input
                      type="file"
                      id="headerImage"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <label htmlFor="headerImage" className="cursor-pointer">
                      <Icon name="Upload" size={32} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">Нажмите для загрузки изображения</p>
                      <p className="text-xs text-gray-400 mt-1">JPG, PNG до 5MB</p>
                    </label>
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="title" className="text-sm font-medium text-gray-700">Заголовок</Label>
                <Input
                  id="title"
                  value={texts.title}
                  onChange={(e) => handleTextChange('title', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="subtitle" className="text-sm font-medium text-gray-700">Подзаголовок</Label>
                <Input
                  id="subtitle"
                  value={texts.subtitle}
                  onChange={(e) => handleTextChange('subtitle', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="amountLabel" className="text-sm font-medium text-gray-700">Метка суммы</Label>
                  <Input
                    id="amountLabel"
                    value={texts.amountLabel}
                    onChange={(e) => handleTextChange('amountLabel', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="daysLabel" className="text-sm font-medium text-gray-700">Метка срока</Label>
                  <Input
                    id="daysLabel"
                    value={texts.daysLabel}
                    onChange={(e) => handleTextChange('daysLabel', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="amountHint" className="text-sm font-medium text-gray-700">Подсказка суммы</Label>
                <Input
                  id="amountHint"
                  value={texts.amountHint}
                  onChange={(e) => handleTextChange('amountHint', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="daysHint" className="text-sm font-medium text-gray-700">Подсказка срока</Label>
                <Input
                  id="daysHint"
                  value={texts.daysHint}
                  onChange={(e) => handleTextChange('daysHint', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="button1Text" className="text-sm font-medium text-gray-700">Текст кнопки 1</Label>
                  <Input
                    id="button1Text"
                    value={texts.button1Text}
                    onChange={(e) => handleTextChange('button1Text', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="button1Link" className="text-sm font-medium text-gray-700">Ссылка кнопки 1</Label>
                  <Input
                    id="button1Link"
                    value={texts.button1Link}
                    onChange={(e) => handleTextChange('button1Link', e.target.value)}
                    className="mt-1"
                    placeholder="https://example.com"
                    type="url"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="button2Text" className="text-sm font-medium text-gray-700">Текст кнопки 2</Label>
                  <Input
                    id="button2Text"
                    value={texts.button2Text}
                    onChange={(e) => handleTextChange('button2Text', e.target.value)}
                    className="mt-1"
                    placeholder="Получить"
                  />
                </div>
                <div>
                  <Label htmlFor="button2Link" className="text-sm font-medium text-gray-700">Ссылка кнопки 2</Label>
                  <Input
                    id="button2Link"
                    value={texts.button2Link}
                    onChange={(e) => handleTextChange('button2Link', e.target.value)}
                    className="mt-1"
                    placeholder="https://example.com"
                    type="url"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                onClick={handleSaveDesign}
                className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white hover:from-emerald-500 hover:to-teal-500 flex items-center justify-center gap-2"
              >
                <Icon name="Save" size={20} />
                Сохранить дизайн
              </Button>
              <Button
                onClick={handleResetDesign}
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <Icon name="RotateCcw" size={20} />
                Сбросить
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorSettings;