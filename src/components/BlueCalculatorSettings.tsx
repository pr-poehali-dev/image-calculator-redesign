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
}

const BlueCalculatorSettings = ({
  texts,
  onTextsChange,
  calculatorWidth,
  onCalculatorWidthChange,
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
      minAmount,
      maxAmount,
      stepAmount,
      interestRate,
      showCharacter,
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
    onMinAmountChange(1000);
    onMaxAmountChange(100000);
    onStepAmountChange(1000);
    onInterestRateChange(20);
    onShowCharacterChange(true);
    
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
              <Icon name="Maximize2" size={20} />
              Размеры
            </h3>
            <div>
              <Label>Ширина калькулятора (px)</Label>
              <Input
                type="number"
                value={calculatorWidth}
                onChange={(e) => onCalculatorWidthChange(Number(e.target.value))}
                min={320}
                max={1200}
              />
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