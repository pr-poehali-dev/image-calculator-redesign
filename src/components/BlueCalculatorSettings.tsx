import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface BlueCalculatorTexts {
  title: string;
  subtitle: string;
  amountLabel: string;
  returnLabel: string;
  buttonText: string;
  buttonLink: string;
  headerImage?: string;
  characterImage?: string;
}

interface BlueCalculatorSettingsProps {
  texts: BlueCalculatorTexts;
  onTextsChange: (texts: BlueCalculatorTexts) => void;
  calculatorWidth: number;
  onCalculatorWidthChange: (width: number) => void;
  mobileWidth: number;
  onMobileWidthChange: (width: number) => void;
  minAmount: number;
  onMinAmountChange: (value: number) => void;
  maxAmount: number;
  onMaxAmountChange: (value: number) => void;
  stepAmount: number;
  onStepAmountChange: (value: number) => void;
  interestRate: number;
  onInterestRateChange: (value: number) => void;
  showCharacter: boolean;
  onShowCharacterChange: (show: boolean) => void;
  headerGradient: string;
  onHeaderGradientChange: (gradient: string) => void;
  sliderColor: string;
  onSliderColorChange: (color: string) => void;
}

const BlueCalculatorSettings = ({
  texts,
  onTextsChange,
  calculatorWidth,
  onCalculatorWidthChange,
  mobileWidth,
  onMobileWidthChange,
  minAmount,
  onMinAmountChange,
  maxAmount,
  onMaxAmountChange,
  stepAmount,
  onStepAmountChange,
  interestRate,
  onInterestRateChange,
  showCharacter,
  onShowCharacterChange,
  headerGradient,
  onHeaderGradientChange,
  sliderColor,
  onSliderColorChange,
}: BlueCalculatorSettingsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleTextChange = (field: keyof BlueCalculatorTexts, value: string) => {
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

  const handleCharacterImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onTextsChange({ ...texts, characterImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCharacterImage = () => {
    onTextsChange({ ...texts, characterImage: '' });
  };

  const handleSaveDesign = () => {
    const settings = {
      texts,
      calculatorWidth,
      mobileWidth,
      minAmount,
      maxAmount,
      stepAmount,
      interestRate,
      showCharacter,
      headerGradient,
      sliderColor,
      savedAt: new Date().toISOString(),
    };
    
    localStorage.setItem('blueCalculatorSettings', JSON.stringify(settings));
    
    toast({
      title: "✅ Дизайн сохранён!",
      description: "Все настройки синего калькулятора успешно сохранены",
    });
  };

  const handleResetDesign = () => {
    localStorage.removeItem('blueCalculatorSettings');
    
    onTextsChange({
      title: 'Первые три займа бесплатно!',
      subtitle: 'При условии возврата займа в срок',
      amountLabel: 'Сумма займа',
      returnLabel: 'Вы вернете',
      buttonText: 'Получить бесплатно',
      buttonLink: '',
      headerImage: '',
      characterImage: '',
    });
    onCalculatorWidthChange(672);
    onMobileWidthChange(100);
    onMinAmountChange(1000);
    onMaxAmountChange(100000);
    onStepAmountChange(1000);
    onInterestRateChange(20);
    onShowCharacterChange(true);
    onHeaderGradientChange('from-cyan-400 to-blue-500');
    onSliderColorChange('#fb923c');
    
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
        {isOpen ? 'Скрыть настройки синего калькулятора' : 'Настроить синий калькулятор'}
      </Button>

      {isOpen && (
        <div className="mt-4 bg-white rounded-2xl shadow-lg p-6 space-y-6 border border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Type" size={20} />
              Тексты
            </h3>
            <div className="space-y-4">
              <div>
                <Label>Заголовок</Label>
                <Input
                  value={texts.title}
                  onChange={(e) => handleTextChange('title', e.target.value)}
                  placeholder="Первые три займа бесплатно!"
                />
              </div>
              <div>
                <Label>Подзаголовок</Label>
                <Input
                  value={texts.subtitle}
                  onChange={(e) => handleTextChange('subtitle', e.target.value)}
                  placeholder="При условии возврата займа в срок"
                />
              </div>
              <div>
                <Label>Метка суммы</Label>
                <Input
                  value={texts.amountLabel}
                  onChange={(e) => handleTextChange('amountLabel', e.target.value)}
                  placeholder="Сумма займа"
                />
              </div>
              <div>
                <Label>Метка возврата</Label>
                <Input
                  value={texts.returnLabel}
                  onChange={(e) => handleTextChange('returnLabel', e.target.value)}
                  placeholder="Вы вернете"
                />
              </div>
              <div>
                <Label>Текст кнопки</Label>
                <Input
                  value={texts.buttonText}
                  onChange={(e) => handleTextChange('buttonText', e.target.value)}
                  placeholder="Получить бесплатно"
                />
              </div>
              <div>
                <Label>Ссылка кнопки</Label>
                <Input
                  value={texts.buttonLink}
                  onChange={(e) => handleTextChange('buttonLink', e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Image" size={20} />
              Фоновое изображение
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <label className="flex-1">
                  <Button asChild className="w-full">
                    <span>
                      <Icon name="Upload" size={18} className="mr-2" />
                      Загрузить изображение
                    </span>
                  </Button>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {texts.headerImage && (
                  <Button variant="destructive" onClick={handleRemoveImage}>
                    <Icon name="Trash2" size={18} className="mr-2" />
                    Удалить
                  </Button>
                )}
              </div>
              {texts.headerImage && (
                <div className="relative w-full h-32 rounded-lg overflow-hidden border-2 border-gray-200">
                  <img src={texts.headerImage} alt="Header preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Smile" size={20} />
              Персонаж
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 mb-3">
                <input
                  type="checkbox"
                  id="showCharacter"
                  checked={showCharacter}
                  onChange={(e) => onShowCharacterChange(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <Label htmlFor="showCharacter" className="cursor-pointer">
                  Показать персонажа в правом углу
                </Label>
              </div>
              {showCharacter && (
                <>
                  <div className="flex gap-3">
                    <label className="flex-1">
                      <Button asChild className="w-full">
                        <span>
                          <Icon name="Upload" size={18} className="mr-2" />
                          Загрузить иконку персонажа
                        </span>
                      </Button>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleCharacterImageUpload}
                        className="hidden"
                      />
                    </label>
                    {texts.characterImage && (
                      <Button variant="destructive" onClick={handleRemoveCharacterImage}>
                        <Icon name="Trash2" size={18} className="mr-2" />
                        Удалить
                      </Button>
                    )}
                  </div>
                  {texts.characterImage ? (
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-gray-200">
                      <img src={texts.characterImage} alt="Character preview" className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">
                      По умолчанию: кекс с вишенкой 🧁
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Sliders" size={20} />
              Параметры займа
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Минимальная сумма</Label>
                  <Input
                    type="number"
                    value={minAmount}
                    onChange={(e) => onMinAmountChange(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label>Максимальная сумма</Label>
                  <Input
                    type="number"
                    value={maxAmount}
                    onChange={(e) => onMaxAmountChange(Number(e.target.value))}
                  />
                </div>
              </div>
              <div>
                <Label>Шаг изменения</Label>
                <Input
                  type="number"
                  value={stepAmount}
                  onChange={(e) => onStepAmountChange(Number(e.target.value))}
                />
              </div>
              <div>
                <Label>Процентная ставка (%)</Label>
                <Input
                  type="number"
                  value={interestRate}
                  onChange={(e) => onInterestRateChange(Number(e.target.value))}
                  step="0.1"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Palette" size={20} />
              Цвета и стиль
            </h3>
            <div className="space-y-4">
              <div>
                <Label>Цвет шапки</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {[
                    { name: 'Голубой', value: 'from-cyan-400 to-blue-500', preview: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
                    { name: 'Фиолетовый', value: 'from-purple-400 to-indigo-500', preview: 'bg-gradient-to-r from-purple-400 to-indigo-500' },
                    { name: 'Розовый', value: 'from-pink-400 to-rose-500', preview: 'bg-gradient-to-r from-pink-400 to-rose-500' },
                    { name: 'Зелёный', value: 'from-green-400 to-emerald-500', preview: 'bg-gradient-to-r from-green-400 to-emerald-500' },
                    { name: 'Оранжевый', value: 'from-orange-400 to-amber-500', preview: 'bg-gradient-to-r from-orange-400 to-amber-500' },
                    { name: 'Бирюзовый', value: 'from-teal-400 to-cyan-500', preview: 'bg-gradient-to-r from-teal-400 to-cyan-500' },
                  ].map((color) => (
                    <button
                      key={color.value}
                      onClick={() => onHeaderGradientChange(color.value)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        headerGradient === color.value
                          ? 'border-blue-500 ring-2 ring-blue-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`h-8 rounded ${color.preview} mb-2`}></div>
                      <span className="text-sm font-medium">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label>Цвет ползунка</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[
                    { name: 'Оранжевый', value: '#fb923c', bg: 'bg-orange-400' },
                    { name: 'Синий', value: '#3b82f6', bg: 'bg-blue-500' },
                    { name: 'Красный', value: '#ef4444', bg: 'bg-red-500' },
                    { name: 'Зелёный', value: '#22c55e', bg: 'bg-green-500' },
                    { name: 'Фиолетовый', value: '#a855f7', bg: 'bg-purple-500' },
                    { name: 'Розовый', value: '#ec4899', bg: 'bg-pink-500' },
                  ].map((color) => (
                    <button
                      key={color.value}
                      onClick={() => onSliderColorChange(color.value)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        sliderColor === color.value
                          ? 'border-blue-500 ring-2 ring-blue-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`h-6 w-6 rounded-full ${color.bg} mx-auto mb-1`}></div>
                      <span className="text-xs font-medium">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Maximize2" size={20} />
              Размеры
            </h3>
            <div className="space-y-4">
              <div>
                <Label>Ширина для ПК (px)</Label>
                <Input
                  type="number"
                  value={calculatorWidth}
                  onChange={(e) => onCalculatorWidthChange(Number(e.target.value))}
                  min={320}
                  max={1200}
                />
                <p className="text-xs text-gray-500 mt-1">Ширина калькулятора на десктопе</p>
              </div>
              <div>
                <Label>Ширина для мобильных (%)</Label>
                <Input
                  type="number"
                  value={mobileWidth}
                  onChange={(e) => onMobileWidthChange(Number(e.target.value))}
                  min={80}
                  max={100}
                />
                <p className="text-xs text-gray-500 mt-1">Процент от ширины экрана на мобильных</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <Button onClick={handleSaveDesign} className="flex-1">
              <Icon name="Save" size={18} className="mr-2" />
              Сохранить настройки
            </Button>
            <Button onClick={handleResetDesign} variant="outline" className="flex-1">
              <Icon name="RotateCcw" size={18} className="mr-2" />
              Сбросить
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlueCalculatorSettings;