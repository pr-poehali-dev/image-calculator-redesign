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
  headerImageOpacity: number;
}

interface LoanParams {
  minAmount: number;
  maxAmount: number;
  stepAmount: number;
  minDays: number;
  maxDays: number;
  stepDays: number;
  interestRate: number;
  calculateInterest: boolean;
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
  loanParams: LoanParams;
  onLoanParamsChange: (params: LoanParams) => void;
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
  { id: 'rounded', name: 'Закруглённый', gradient: 'from-emerald-400 to-teal-400', borderRadius: 'rounded-3xl', shadow: 'shadow-2xl' },
  { id: 'sharp', name: 'Острые углы', gradient: 'from-slate-400 to-gray-400', borderRadius: 'rounded-lg', shadow: 'shadow-xl' },
  { id: 'minimal', name: 'Минимализм', gradient: 'from-gray-300 to-gray-400', borderRadius: 'rounded-xl', shadow: 'shadow-lg' },
  { id: 'gradient-modern', name: 'Градиент Modern', gradient: 'from-purple-500 via-pink-500 to-red-500', borderRadius: 'rounded-2xl', shadow: 'shadow-2xl' },
  { id: 'neon', name: 'Неон', gradient: 'from-cyan-400 via-blue-500 to-purple-600', borderRadius: 'rounded-3xl', shadow: 'shadow-[0_0_30px_rgba(0,200,255,0.5)]' },
  { id: 'sunset', name: 'Закат', gradient: 'from-orange-400 via-pink-500 to-purple-600', borderRadius: 'rounded-2xl', shadow: 'shadow-2xl' },
  { id: 'ocean', name: 'Океан', gradient: 'from-blue-400 via-cyan-400 to-teal-500', borderRadius: 'rounded-3xl', shadow: 'shadow-xl' },
  { id: 'forest', name: 'Лес', gradient: 'from-green-500 via-emerald-500 to-teal-600', borderRadius: 'rounded-2xl', shadow: 'shadow-2xl' },
  { id: 'fire', name: 'Огонь', gradient: 'from-red-500 via-orange-500 to-yellow-400', borderRadius: 'rounded-2xl', shadow: 'shadow-2xl' },
  { id: 'pastel', name: 'Пастель', gradient: 'from-pink-200 via-purple-200 to-indigo-200', borderRadius: 'rounded-3xl', shadow: 'shadow-lg' },
  { id: 'dark', name: 'Тёмный', gradient: 'from-gray-800 via-gray-900 to-black', borderRadius: 'rounded-2xl', shadow: 'shadow-2xl' },
  { id: 'gold', name: 'Золото', gradient: 'from-yellow-400 via-amber-500 to-orange-400', borderRadius: 'rounded-2xl', shadow: 'shadow-[0_0_20px_rgba(255,200,0,0.4)]' },
  { id: 'silver', name: 'Серебро', gradient: 'from-gray-300 via-slate-400 to-zinc-400', borderRadius: 'rounded-2xl', shadow: 'shadow-xl' },
  { id: 'candy', name: 'Конфета', gradient: 'from-pink-400 via-rose-400 to-red-400', borderRadius: 'rounded-3xl', shadow: 'shadow-2xl' },
  { id: 'mint', name: 'Мята', gradient: 'from-green-300 via-emerald-300 to-teal-400', borderRadius: 'rounded-3xl', shadow: 'shadow-lg' },
  { id: 'lavender', name: 'Лаванда', gradient: 'from-purple-300 via-violet-300 to-indigo-400', borderRadius: 'rounded-3xl', shadow: 'shadow-lg' },
  { id: 'retro', name: 'Ретро', gradient: 'from-yellow-300 via-orange-400 to-red-400', borderRadius: 'rounded-lg', shadow: 'shadow-xl' },
  { id: 'cyber', name: 'Киберпанк', gradient: 'from-fuchsia-500 via-cyan-400 to-yellow-400', borderRadius: 'rounded-xl', shadow: 'shadow-[0_0_40px_rgba(255,0,255,0.5)]' },
  { id: 'premium', name: 'Премиум', gradient: 'from-indigo-600 via-purple-600 to-pink-600', borderRadius: 'rounded-2xl', shadow: 'shadow-2xl' },
  { id: 'classic', name: 'Классика', gradient: 'from-blue-500 to-blue-700', borderRadius: 'rounded-xl', shadow: 'shadow-xl' },
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
  onSliderSizeChange,
  loanParams,
  onLoanParamsChange
}: CalculatorSettingsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleTextChange = (field: keyof CalculatorTexts, value: string | number) => {
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
      loanParams,
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
      headerImageOpacity: 30,
    });
    onColorSchemeChange('teal');
    onDesignStyleChange('rounded');
    onLoanParamsChange({
      minAmount: 3000,
      maxAmount: 20000,
      stepAmount: 1000,
      minDays: 7,
      maxDays: 15,
      stepDays: 1,
      interestRate: 1,
      calculateInterest: true,
    });
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
              <Icon name="Sparkles" size={20} />
              Готовые дизайны (20 вариантов)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {designStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => onDesignStyleChange(style.id)}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    designStyle === style.id
                      ? 'border-gray-900 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <div className={`h-16 bg-gradient-to-r ${style.gradient} ${style.borderRadius} ${style.shadow} mb-2`}></div>
                  <div className="text-xs font-medium text-gray-700 text-center">{style.name}</div>
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
              <Icon name="Calculator" size={20} />
              Параметры займа
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <Label className="text-sm font-medium text-gray-700">Расчёт процентов</Label>
                <button
                  onClick={() => onLoanParamsChange({ ...loanParams, calculateInterest: !loanParams.calculateInterest })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    loanParams.calculateInterest ? 'bg-teal-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      loanParams.calculateInterest ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              {loanParams.calculateInterest && (
                <div>
                  <Label className="text-sm font-medium text-gray-700">Процентная ставка (% в день): {loanParams.interestRate}%</Label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={loanParams.interestRate}
                    onChange={(e) => onLoanParamsChange({ ...loanParams, interestRate: Number(e.target.value) })}
                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">Мин. сумма</Label>
                  <Input
                    type="number"
                    min="100"
                    value={loanParams.minAmount}
                    onChange={(e) => onLoanParamsChange({ ...loanParams, minAmount: Number(e.target.value) })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Макс. сумма</Label>
                  <Input
                    type="number"
                    min={loanParams.minAmount}
                    value={loanParams.maxAmount}
                    onChange={(e) => onLoanParamsChange({ ...loanParams, maxAmount: Number(e.target.value) })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Шаг суммы</Label>
                  <Input
                    type="number"
                    min="100"
                    value={loanParams.stepAmount}
                    onChange={(e) => onLoanParamsChange({ ...loanParams, stepAmount: Number(e.target.value) })}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">Мин. срок (дней)</Label>
                  <Input
                    type="number"
                    min="1"
                    value={loanParams.minDays}
                    onChange={(e) => onLoanParamsChange({ ...loanParams, minDays: Number(e.target.value) })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Макс. срок (дней)</Label>
                  <Input
                    type="number"
                    min={loanParams.minDays}
                    value={loanParams.maxDays}
                    onChange={(e) => onLoanParamsChange({ ...loanParams, maxDays: Number(e.target.value) })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Шаг срока</Label>
                  <Input
                    type="number"
                    min="1"
                    value={loanParams.stepDays}
                    onChange={(e) => onLoanParamsChange({ ...loanParams, stepDays: Number(e.target.value) })}
                    className="mt-1"
                  />
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
                <Label className="text-sm font-medium text-gray-700 mb-3 block">Изображение в шапке</Label>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-4">
                  {[
                    { url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800', name: 'Деньги' },
                    { url: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800', name: 'Финансы' },
                    { url: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800', name: 'Монеты' },
                    { url: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800', name: 'Карта' },
                    { url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800', name: 'Банк' },
                    { url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800', name: 'График' },
                    { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800', name: 'Успех' },
                    { url: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800', name: 'Рост' },
                  ].map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => onTextsChange({ ...texts, headerImage: image.url })}
                      className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        texts.headerImage === image.url
                          ? 'border-teal-500 scale-105 shadow-lg'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                      title={image.name}
                    >
                      <img src={image.url} alt={image.name} className="w-full h-full object-cover" />
                      {texts.headerImage === image.url && (
                        <div className="absolute inset-0 bg-teal-500/20 flex items-center justify-center">
                          <Icon name="Check" size={20} className="text-white drop-shadow-lg" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors mb-4">
                  <input
                    type="file"
                    id="headerImage"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label htmlFor="headerImage" className="cursor-pointer">
                    <Icon name="Upload" size={24} className="mx-auto text-gray-400 mb-1" />
                    <p className="text-sm text-gray-600">Или загрузите своё изображение</p>
                    <p className="text-xs text-gray-400 mt-1">JPG, PNG до 5MB</p>
                  </label>
                </div>

                {texts.headerImage && (
                  <div className="space-y-3">
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
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Прозрачность изображения: {texts.headerImageOpacity}%</Label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={texts.headerImageOpacity}
                        onChange={(e) => handleTextChange('headerImageOpacity', e.target.value)}
                        className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0% (прозрачно)</span>
                        <span>100% (непрозрачно)</span>
                      </div>
                    </div>
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