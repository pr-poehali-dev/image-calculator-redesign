import { useState, useEffect } from 'react';
import LoanCalculator from '@/components/LoanCalculator';
import CalculatorSettings from '@/components/CalculatorSettings';
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
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8 md:py-12 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-2 sm:mb-4">
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
        </div>

        {!showCode ? (
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
            />
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