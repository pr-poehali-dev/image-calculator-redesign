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
  button1Link: string;
  button2Link: string;
  headerImage?: string;
  headerImageOpacity?: number;
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

interface LoanCalculatorProps {
  texts: CalculatorTexts;
  colorScheme: string;
  designStyle: string;
  amount: number;
  days: number;
  onAmountChange: (value: number) => void;
  onDaysChange: (value: number) => void;
  calculatorWidth: number;
  sliderSize: number;
  sliderTrackColor: string;
  loanParams: LoanParams;
}

const LoanCalculator = ({ texts, colorScheme, designStyle, amount, days, onAmountChange, onDaysChange, calculatorWidth, sliderSize, sliderTrackColor, loanParams }: LoanCalculatorProps) => {
  const colorSchemes: Record<string, { gradient: string; text: string; border: string }> = {
    teal: { gradient: 'from-emerald-400 via-teal-400 to-cyan-400', text: 'text-teal-500', border: 'border-teal-400' },
    purple: { gradient: 'from-purple-400 via-violet-400 to-indigo-400', text: 'text-violet-500', border: 'border-violet-400' },
    orange: { gradient: 'from-orange-400 via-amber-400 to-yellow-400', text: 'text-orange-500', border: 'border-orange-400' },
    pink: { gradient: 'from-pink-400 via-rose-400 to-red-400', text: 'text-rose-500', border: 'border-rose-400' },
    blue: { gradient: 'from-blue-400 via-sky-400 to-cyan-400', text: 'text-blue-500', border: 'border-blue-400' },
    green: { gradient: 'from-green-400 via-emerald-400 to-teal-400', text: 'text-green-500', border: 'border-green-400' },
  };

  const designStyles: Record<string, { gradient: string; rounded: string; roundedTop: string; roundedBottom: string; shadow: string }> = {
    rounded: { gradient: 'from-emerald-400 to-teal-400', rounded: 'rounded-3xl', roundedTop: 'rounded-t-2xl sm:rounded-t-3xl', roundedBottom: 'rounded-b-2xl sm:rounded-b-3xl', shadow: 'shadow-2xl' },
    sharp: { gradient: 'from-slate-400 to-gray-400', rounded: 'rounded-lg', roundedTop: 'rounded-t-lg', roundedBottom: 'rounded-b-lg', shadow: 'shadow-xl' },
    minimal: { gradient: 'from-gray-300 to-gray-400', rounded: 'rounded-xl', roundedTop: 'rounded-t-xl', roundedBottom: 'rounded-b-xl', shadow: 'shadow-lg' },
    'gradient-modern': { gradient: 'from-purple-500 via-pink-500 to-red-500', rounded: 'rounded-2xl', roundedTop: 'rounded-t-2xl', roundedBottom: 'rounded-b-2xl', shadow: 'shadow-2xl' },
    neon: { gradient: 'from-cyan-400 via-blue-500 to-purple-600', rounded: 'rounded-3xl', roundedTop: 'rounded-t-3xl', roundedBottom: 'rounded-b-3xl', shadow: 'shadow-[0_0_30px_rgba(0,200,255,0.5)]' },
    sunset: { gradient: 'from-orange-400 via-pink-500 to-purple-600', rounded: 'rounded-2xl', roundedTop: 'rounded-t-2xl', roundedBottom: 'rounded-b-2xl', shadow: 'shadow-2xl' },
    ocean: { gradient: 'from-blue-400 via-cyan-400 to-teal-500', rounded: 'rounded-3xl', roundedTop: 'rounded-t-3xl', roundedBottom: 'rounded-b-3xl', shadow: 'shadow-xl' },
    forest: { gradient: 'from-green-500 via-emerald-500 to-teal-600', rounded: 'rounded-2xl', roundedTop: 'rounded-t-2xl', roundedBottom: 'rounded-b-2xl', shadow: 'shadow-2xl' },
    fire: { gradient: 'from-red-500 via-orange-500 to-yellow-400', rounded: 'rounded-2xl', roundedTop: 'rounded-t-2xl', roundedBottom: 'rounded-b-2xl', shadow: 'shadow-2xl' },
    pastel: { gradient: 'from-pink-200 via-purple-200 to-indigo-200', rounded: 'rounded-3xl', roundedTop: 'rounded-t-3xl', roundedBottom: 'rounded-b-3xl', shadow: 'shadow-lg' },
    dark: { gradient: 'from-gray-800 via-gray-900 to-black', rounded: 'rounded-2xl', roundedTop: 'rounded-t-2xl', roundedBottom: 'rounded-b-2xl', shadow: 'shadow-2xl' },
    gold: { gradient: 'from-yellow-400 via-amber-500 to-orange-400', rounded: 'rounded-2xl', roundedTop: 'rounded-t-2xl', roundedBottom: 'rounded-b-2xl', shadow: 'shadow-[0_0_20px_rgba(255,200,0,0.4)]' },
    silver: { gradient: 'from-gray-300 via-slate-400 to-zinc-400', rounded: 'rounded-2xl', roundedTop: 'rounded-t-2xl', roundedBottom: 'rounded-b-2xl', shadow: 'shadow-xl' },
    candy: { gradient: 'from-pink-400 via-rose-400 to-red-400', rounded: 'rounded-3xl', roundedTop: 'rounded-t-3xl', roundedBottom: 'rounded-b-3xl', shadow: 'shadow-2xl' },
    mint: { gradient: 'from-green-300 via-emerald-300 to-teal-400', rounded: 'rounded-3xl', roundedTop: 'rounded-t-3xl', roundedBottom: 'rounded-b-3xl', shadow: 'shadow-lg' },
    lavender: { gradient: 'from-purple-300 via-violet-300 to-indigo-400', rounded: 'rounded-3xl', roundedTop: 'rounded-t-3xl', roundedBottom: 'rounded-b-3xl', shadow: 'shadow-lg' },
    retro: { gradient: 'from-yellow-300 via-orange-400 to-red-400', rounded: 'rounded-lg', roundedTop: 'rounded-t-lg', roundedBottom: 'rounded-b-lg', shadow: 'shadow-xl' },
    cyber: { gradient: 'from-fuchsia-500 via-cyan-400 to-yellow-400', rounded: 'rounded-xl', roundedTop: 'rounded-t-xl', roundedBottom: 'rounded-b-xl', shadow: 'shadow-[0_0_40px_rgba(255,0,255,0.5)]' },
    premium: { gradient: 'from-indigo-600 via-purple-600 to-pink-600', rounded: 'rounded-2xl', roundedTop: 'rounded-t-2xl', roundedBottom: 'rounded-b-2xl', shadow: 'shadow-2xl' },
    classic: { gradient: 'from-blue-500 to-blue-700', rounded: 'rounded-xl', roundedTop: 'rounded-t-xl', roundedBottom: 'rounded-b-xl', shadow: 'shadow-xl' },
  };

  const currentColor = colorSchemes[colorScheme] || colorSchemes.teal;
  const currentStyle = designStyles[designStyle] || designStyles.rounded;
  const headerGradient = currentStyle.gradient;

  const calculateTotal = () => {
    if (loanParams.calculateInterest) {
      return amount + (amount * loanParams.interestRate / 100 * days);
    }
    return amount;
  };

  const total = calculateTotal();

  return (
    <div className="w-full mx-auto touch-manipulation" style={{ maxWidth: `${calculatorWidth}px` }}>
      <div className={`bg-gradient-to-br ${headerGradient} ${currentStyle.roundedTop} p-6 sm:p-10 md:p-12 text-center relative overflow-hidden`}>
        {texts.headerImage && (
          <div className="absolute inset-0" style={{ opacity: (texts.headerImageOpacity || 30) / 100 }}>
            <img src={texts.headerImage} alt="Header background" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left flex-1">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-5">
              {texts.title}
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl text-white font-medium">
              {texts.subtitle}
            </p>
          </div>
          {days === 7 && (
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border-2 border-white/50 min-w-[140px] sm:min-w-[180px]">
              <div className="text-4xl sm:text-6xl font-black bg-gradient-to-br from-green-500 to-emerald-600 bg-clip-text text-transparent leading-tight">
                0%
              </div>
              <div className="text-xs sm:text-sm font-bold text-red-600 mt-1">
                НА 7 ДНЕЙ
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`bg-white ${currentStyle.roundedBottom} ${currentStyle.shadow} p-5 sm:p-8 md:p-10`}>
        <div className="space-y-6 sm:space-y-8">
          <div>
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <label className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">{texts.amountLabel}</label>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${currentColor.text}`}>
                {amount.toLocaleString('ru-RU')} ₽
              </div>
            </div>
            <div style={{ transform: `scale(${sliderSize / 100})`, transformOrigin: 'left center' }}>
              <Slider
                value={[amount]}
                onValueChange={(value) => onAmountChange(value[0])}
                min={loanParams.minAmount}
                max={loanParams.maxAmount}
                step={loanParams.stepAmount}
                className="w-full mb-3"
                colorScheme={colorScheme}
                trackColor={sliderTrackColor}
              />
            </div>
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
            <div style={{ transform: `scale(${sliderSize / 100})`, transformOrigin: 'left center' }}>
              <Slider
                value={[days]}
                onValueChange={(value) => onDaysChange(value[0])}
                min={loanParams.minDays}
                max={loanParams.maxDays}
                step={loanParams.stepDays}
                className="w-full mb-3"
                colorScheme={colorScheme}
                trackColor={sliderTrackColor}
              />
            </div>
            <div className="text-sm sm:text-base text-gray-400">
              {texts.daysHint}
            </div>
          </div>

          {texts.button1Link ? (
            <a 
              href={texts.button1Link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full h-14 sm:h-16 md:h-20 text-lg sm:text-xl md:text-2xl font-bold ${currentStyle.rounded} border-3 sm:border-4 ${currentColor.border} bg-white ${currentColor.text} hover:bg-opacity-10 transition-all duration-200 shadow-lg flex items-center justify-center no-underline`}
            >
              {texts.button1Text}
            </a>
          ) : (
            <Button
              className={`w-full h-14 sm:h-16 md:h-20 text-lg sm:text-xl md:text-2xl font-bold ${currentStyle.rounded} border-3 sm:border-4 ${currentColor.border} bg-white ${currentColor.text} hover:bg-opacity-10 transition-all duration-200 shadow-lg`}
            >
              {texts.button1Text}
            </Button>
          )}

          {texts.button2Link ? (
            <a 
              href={texts.button2Link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full h-14 sm:h-16 md:h-20 text-lg sm:text-xl md:text-2xl font-bold ${currentStyle.rounded} bg-gradient-to-r ${currentColor.gradient} text-white hover:opacity-90 active:scale-[0.98] shadow-lg transition-all duration-200 touch-manipulation flex items-center justify-center no-underline`}
            >
              {texts.button2Text} {total.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₽
            </a>
          ) : (
            <Button 
              className={`w-full h-14 sm:h-16 md:h-20 text-lg sm:text-xl md:text-2xl font-bold ${currentStyle.rounded} bg-gradient-to-r ${currentColor.gradient} text-white hover:opacity-90 active:scale-[0.98] shadow-lg transition-all duration-200 touch-manipulation`}
            >
              {texts.button2Text} {total.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₽
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;