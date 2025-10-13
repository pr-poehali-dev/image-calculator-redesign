import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

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

interface LoanCalculatorProps {
  texts: CalculatorTexts;
  colorScheme: string;
  designStyle: string;
  amount: number;
  days: number;
  onAmountChange: (value: number) => void;
  onDaysChange: (value: number) => void;
}

const LoanCalculator = ({ texts, colorScheme, designStyle, amount, days, onAmountChange, onDaysChange }: LoanCalculatorProps) => {
  const colorSchemes: Record<string, { gradient: string; text: string; border: string }> = {
    teal: { gradient: 'from-emerald-400 via-teal-400 to-cyan-400', text: 'text-teal-500', border: 'border-teal-400' },
    purple: { gradient: 'from-purple-400 via-violet-400 to-indigo-400', text: 'text-violet-500', border: 'border-violet-400' },
    orange: { gradient: 'from-orange-400 via-amber-400 to-yellow-400', text: 'text-orange-500', border: 'border-orange-400' },
    pink: { gradient: 'from-pink-400 via-rose-400 to-red-400', text: 'text-rose-500', border: 'border-rose-400' },
    blue: { gradient: 'from-blue-400 via-sky-400 to-cyan-400', text: 'text-blue-500', border: 'border-blue-400' },
    green: { gradient: 'from-green-400 via-emerald-400 to-teal-400', text: 'text-green-500', border: 'border-green-400' },
  };

  const designStyles: Record<string, { rounded: string; roundedTop: string; roundedBottom: string }> = {
    rounded: { rounded: 'rounded-3xl', roundedTop: 'rounded-t-2xl sm:rounded-t-3xl', roundedBottom: 'rounded-b-2xl sm:rounded-b-3xl' },
    sharp: { rounded: 'rounded-lg', roundedTop: 'rounded-t-lg', roundedBottom: 'rounded-b-lg' },
    minimal: { rounded: 'rounded-xl', roundedTop: 'rounded-t-xl', roundedBottom: 'rounded-b-xl' },
  };

  const currentColor = colorSchemes[colorScheme] || colorSchemes.teal;
  const currentStyle = designStyles[designStyle] || designStyles.rounded;

  return (
    <div className="w-full max-w-2xl mx-auto touch-manipulation">
      <div className={`bg-gradient-to-br ${currentColor.gradient} ${currentStyle.roundedTop} p-6 sm:p-10 md:p-12 text-center`}>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-5">
          {texts.title}
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl text-white font-medium">
          {texts.subtitle}
        </p>
      </div>

      <div className={`bg-white ${currentStyle.roundedBottom} shadow-2xl p-5 sm:p-8 md:p-10`}>
        <div className="space-y-6 sm:space-y-8">
          <div>
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <label className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">{texts.amountLabel}</label>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${currentColor.text}`}>
                {amount.toLocaleString('ru-RU')} ₽
              </div>
            </div>
            <Slider
              value={[amount]}
              onValueChange={(value) => onAmountChange(value[0])}
              min={3000}
              max={20000}
              step={1000}
              className="w-full mb-3"
              colorScheme={colorScheme}
            />
            <div className="text-sm sm:text-base text-gray-400">
              {texts.amountHint}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <label className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">{texts.daysLabel}</label>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${currentColor.text}`}>
                {days} дней
              </div>
            </div>
            <Slider
              value={[days]}
              onValueChange={(value) => onDaysChange(value[0])}
              min={7}
              max={15}
              step={1}
              className="w-full mb-3"
              colorScheme={colorScheme}
            />
            <div className="text-sm sm:text-base text-gray-400">
              {texts.daysHint}
            </div>
          </div>

          <Button
            className={`w-full h-14 sm:h-16 md:h-20 text-lg sm:text-xl md:text-2xl font-bold ${currentStyle.rounded} border-3 sm:border-4 ${currentColor.border} bg-white ${currentColor.text} hover:bg-opacity-10 transition-all duration-200 shadow-lg`}
          >
            {texts.button1Text}
          </Button>

          <Button 
            className={`w-full h-14 sm:h-16 md:h-20 text-lg sm:text-xl md:text-2xl font-bold ${currentStyle.rounded} bg-gradient-to-r ${currentColor.gradient} text-white hover:opacity-90 active:scale-[0.98] shadow-lg transition-all duration-200 touch-manipulation`}
          >
            {texts.button2Text} {amount.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₽
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;