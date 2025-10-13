import { useState } from 'react';
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
}

const Index = () => {
  const [showCode, setShowCode] = useState(false);
  const [amount, setAmount] = useState(16000);
  const [days, setDays] = useState(10);
  const [colorScheme, setColorScheme] = useState('teal');
  const [designStyle, setDesignStyle] = useState('rounded');
  const [texts, setTexts] = useState<CalculatorTexts>({
    title: 'Займ на карту',
    subtitle: 'Не выходя из дома',
    amountLabel: 'Сумма',
    daysLabel: 'Срок',
    amountHint: 'Максимальная сумма: 20 000,00 ₽',
    daysHint: 'Максимальный срок: 15 дней',
    button1Text: 'госуслуги',
    button2Text: 'Получить',
  });

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
            />
            <LoanCalculator
              texts={texts}
              colorScheme={colorScheme}
              designStyle={designStyle}
              amount={amount}
              days={days}
              onAmountChange={setAmount}
              onDaysChange={setDays}
            />
          </>
        ) : (
          <EmbedCode
            texts={texts}
            colorScheme={colorScheme}
            designStyle={designStyle}
          />
        )}
      </div>
    </div>
  );
};

export default Index;