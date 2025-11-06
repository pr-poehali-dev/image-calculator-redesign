import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import TextSettings from '@/components/settings/TextSettings';
import ImageSettings from '@/components/settings/ImageSettings';
import CalculatorSettings from '@/components/settings/CalculatorSettings';
import StyleSettings from '@/components/settings/StyleSettings';
import DimensionSettings from '@/components/settings/DimensionSettings';

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
  buttonColor: string;
  onButtonColorChange: (color: string) => void;
  buttonShape: string;
  onButtonShapeChange: (shape: string) => void;
  formBorderRadius: string;
  onFormBorderRadiusChange: (radius: string) => void;
  animationType: string;
  onAnimationTypeChange: (type: string) => void;
  formHeight: number;
  onFormHeightChange: (height: number) => void;
  mobileFormHeight: number;
  onMobileFormHeightChange: (height: number) => void;
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
  buttonColor,
  onButtonColorChange,
  buttonShape,
  onButtonShapeChange,
  formBorderRadius,
  onFormBorderRadiusChange,
  animationType,
  onAnimationTypeChange,
  formHeight,
  onFormHeightChange,
  mobileFormHeight,
  onMobileFormHeightChange,
}: BlueCalculatorSettingsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

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
      buttonColor,
      buttonShape,
      formBorderRadius,
      animationType,
      formHeight,
      mobileFormHeight,
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
    onButtonColorChange('from-blue-500 to-blue-600');
    onButtonShapeChange('rounded');
    onFormBorderRadiusChange('2xl');
    onAnimationTypeChange('slide');
    onFormHeightChange(100);
    onMobileFormHeightChange(100);
    
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
          <TextSettings 
            texts={texts}
            onTextsChange={onTextsChange}
          />

          <ImageSettings 
            texts={texts}
            onTextsChange={onTextsChange}
            showCharacter={showCharacter}
            onShowCharacterChange={onShowCharacterChange}
          />

          <CalculatorSettings 
            minAmount={minAmount}
            onMinAmountChange={onMinAmountChange}
            maxAmount={maxAmount}
            onMaxAmountChange={onMaxAmountChange}
            stepAmount={stepAmount}
            onStepAmountChange={onStepAmountChange}
            interestRate={interestRate}
            onInterestRateChange={onInterestRateChange}
          />

          <StyleSettings 
            headerGradient={headerGradient}
            onHeaderGradientChange={onHeaderGradientChange}
            sliderColor={sliderColor}
            onSliderColorChange={onSliderColorChange}
            buttonColor={buttonColor}
            onButtonColorChange={onButtonColorChange}
            buttonShape={buttonShape}
            onButtonShapeChange={onButtonShapeChange}
            formBorderRadius={formBorderRadius}
            onFormBorderRadiusChange={onFormBorderRadiusChange}
            animationType={animationType}
            onAnimationTypeChange={onAnimationTypeChange}
          />

          <DimensionSettings 
            calculatorWidth={calculatorWidth}
            onCalculatorWidthChange={onCalculatorWidthChange}
            mobileWidth={mobileWidth}
            onMobileWidthChange={onMobileWidthChange}
            formHeight={formHeight}
            onFormHeightChange={onFormHeightChange}
            mobileFormHeight={mobileFormHeight}
            onMobileFormHeightChange={onMobileFormHeightChange}
          />

          <div className="flex gap-3 pt-4 border-t">
            <Button
              onClick={handleSaveDesign}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              <Icon name="Save" size={16} className="mr-2" />
              Сохранить дизайн
            </Button>
            <Button
              onClick={handleResetDesign}
              variant="outline"
              className="flex-1"
            >
              <Icon name="RotateCcw" size={16} className="mr-2" />
              Сбросить
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlueCalculatorSettings;
