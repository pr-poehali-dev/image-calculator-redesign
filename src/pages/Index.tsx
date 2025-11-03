import { useState, useEffect } from 'react';
import LoanCalculator from '@/components/LoanCalculator';
import CalculatorSettings from '@/components/CalculatorSettings';
import BlueCalculator from '@/components/BlueCalculator';
import BlueCalculatorSettings from '@/components/BlueCalculatorSettings';
import EmbedCode from '@/components/EmbedCode';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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

const Index = () => {
  const [showCode, setShowCode] = useState(false);
  const [calculatorType, setCalculatorType] = useState<'classic' | 'blue'>('classic');
  const [amount, setAmount] = useState(16000);
  const [days, setDays] = useState(10);
  const [colorScheme, setColorScheme] = useState('teal');
  const [designStyle, setDesignStyle] = useState('rounded');
  const [calculatorWidth, setCalculatorWidth] = useState(672);
  const [sliderSize, setSliderSize] = useState(100);
  const [sliderTrackColor, setSliderTrackColor] = useState('#d1d5db');
  const [texts, setTexts] = useState<CalculatorTexts>({
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
  const [loanParams, setLoanParams] = useState<LoanParams>({
    minAmount: 3000,
    maxAmount: 20000,
    stepAmount: 1000,
    minDays: 7,
    maxDays: 15,
    stepDays: 1,
    interestRate: 1,
    calculateInterest: true,
  });

  const [blueTexts, setBlueTexts] = useState({
    title: 'Первые три займа бесплатно!',
    subtitle: 'При условии возврата займа в срок',
    amountLabel: 'Сумма займа',
    returnLabel: 'Вы вернете',
    buttonText: 'Получить бесплатно',
    buttonLink: '',
    headerImage: '',
    characterImage: '',
  });
  const [blueAmount, setBlueAmount] = useState(90000);
  const [blueCalculatorWidth, setBlueCalculatorWidth] = useState(672);
  const [blueMinAmount, setBlueMinAmount] = useState(1000);
  const [blueMaxAmount, setBlueMaxAmount] = useState(100000);
  const [blueStepAmount, setBlueStepAmount] = useState(1000);
  const [blueInterestRate, setBlueInterestRate] = useState(20);
  const [showCharacter, setShowCharacter] = useState(true);

  useEffect(() => {
    const savedSettings = localStorage.getItem('calculatorSettings');
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        if (settings.texts) setTexts(settings.texts);
        if (settings.colorScheme) setColorScheme(settings.colorScheme);
        if (settings.designStyle) setDesignStyle(settings.designStyle);
        if (settings.calculatorWidth) setCalculatorWidth(settings.calculatorWidth);
        if (settings.sliderSize) setSliderSize(settings.sliderSize);
        if (settings.sliderTrackColor) setSliderTrackColor(settings.sliderTrackColor);
        if (settings.loanParams) setLoanParams(settings.loanParams);
      } catch (e) {
        console.error('Ошибка загрузки настроек:', e);
      }
    }

    const savedBlueSettings = localStorage.getItem('blueCalculatorSettings');
    if (savedBlueSettings) {
      try {
        const settings = JSON.parse(savedBlueSettings);
        if (settings.texts) setBlueTexts(settings.texts);
        if (settings.calculatorWidth) setBlueCalculatorWidth(settings.calculatorWidth);
        if (settings.minAmount) setBlueMinAmount(settings.minAmount);
        if (settings.maxAmount) setBlueMaxAmount(settings.maxAmount);
        if (settings.stepAmount) setBlueStepAmount(settings.stepAmount);
        if (settings.interestRate) setBlueInterestRate(settings.interestRate);
        if (settings.showCharacter !== undefined) setShowCharacter(settings.showCharacter);
      } catch (e) {
        console.error('Ошибка загрузки настроек синего калькулятора:', e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8 md:py-12 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 items-center mb-2 sm:mb-4">
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <Button
              onClick={() => setShowCode(false)}
              variant={!showCode ? "default" : "ghost"}
              className="rounded-full px-6"
            >
              <Icon name="Calculator" size={18} className="mr-2" />
              Калькулятор
            </Button>
            <Button
              onClick={() => setShowCode(true)}
              variant={showCode ? "default" : "ghost"}
              className="rounded-full px-6"
            >
              <Icon name="Code" size={18} className="mr-2" />
              Получить код
            </Button>
          </div>
          
          {!showCode && (
            <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
              <Button
                onClick={() => setCalculatorType('classic')}
                variant={calculatorType === 'classic' ? "default" : "ghost"}
                className="rounded-full px-6"
              >
                Классический
              </Button>
              <Button
                onClick={() => setCalculatorType('blue')}
                variant={calculatorType === 'blue' ? "default" : "ghost"}
                className="rounded-full px-6"
              >
                Синий
              </Button>
            </div>
          )}
        </div>

        {!showCode ? (
          <>
            {calculatorType === 'classic' ? (
              <>
                <CalculatorSettings
                  texts={texts}
                  onTextsChange={setTexts}
                  colorScheme={colorScheme}
                  onColorSchemeChange={setColorScheme}
                  designStyle={designStyle}
                  onDesignStyleChange={setDesignStyle}
                  calculatorWidth={calculatorWidth}
                  onCalculatorWidthChange={setCalculatorWidth}
                  sliderSize={sliderSize}
                  onSliderSizeChange={setSliderSize}
                  sliderTrackColor={sliderTrackColor}
                  onSliderTrackColorChange={setSliderTrackColor}
                  loanParams={loanParams}
                  onLoanParamsChange={setLoanParams}
                />
                <LoanCalculator
                  texts={texts}
                  colorScheme={colorScheme}
                  designStyle={designStyle}
                  amount={amount}
                  days={days}
                  onAmountChange={setAmount}
                  onDaysChange={setDays}
                  calculatorWidth={calculatorWidth}
                  sliderSize={sliderSize}
                  sliderTrackColor={sliderTrackColor}
                  loanParams={loanParams}
                  onTextsChange={setTexts}
                />
              </>
            ) : (
              <>
                <BlueCalculatorSettings
                  texts={blueTexts}
                  onTextsChange={setBlueTexts}
                  calculatorWidth={blueCalculatorWidth}
                  onCalculatorWidthChange={setBlueCalculatorWidth}
                  minAmount={blueMinAmount}
                  onMinAmountChange={setBlueMinAmount}
                  maxAmount={blueMaxAmount}
                  onMaxAmountChange={setBlueMaxAmount}
                  stepAmount={blueStepAmount}
                  onStepAmountChange={setBlueStepAmount}
                  interestRate={blueInterestRate}
                  onInterestRateChange={setBlueInterestRate}
                  showCharacter={showCharacter}
                  onShowCharacterChange={setShowCharacter}
                />
                <BlueCalculator
                  texts={blueTexts}
                  amount={blueAmount}
                  onAmountChange={setBlueAmount}
                  calculatorWidth={blueCalculatorWidth}
                  minAmount={blueMinAmount}
                  maxAmount={blueMaxAmount}
                  stepAmount={blueStepAmount}
                  interestRate={blueInterestRate}
                  onTextsChange={setBlueTexts}
                  showCharacter={showCharacter}
                  onShowCharacterChange={setShowCharacter}
                />
              </>
            )}
          </>
        ) : (
          <EmbedCode
            texts={texts}
            colorScheme={colorScheme}
            designStyle={designStyle}
            calculatorWidth={calculatorWidth}
            sliderSize={sliderSize}
            sliderTrackColor={sliderTrackColor}
            loanParams={loanParams}
          />
        )}
      </div>
    </div>
  );
};

export default Index;