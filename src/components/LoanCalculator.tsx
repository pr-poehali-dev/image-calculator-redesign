import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

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
  onTextsChange?: (texts: CalculatorTexts) => void;
}

const LoanCalculator = ({ texts, colorScheme, designStyle, amount, days, onAmountChange, onDaysChange, calculatorWidth, sliderSize, sliderTrackColor, loanParams, onTextsChange }: LoanCalculatorProps) => {
  const colorSchemes: Record<string, { gradient: string; text: string; border: string }> = {
    teal: { gradient: 'from-emerald-400 via-teal-400 to-cyan-400', text: 'text-teal-500', border: 'border-teal-400' },
    purple: { gradient: 'from-purple-400 via-violet-400 to-indigo-400', text: 'text-violet-500', border: 'border-violet-400' },
    orange: { gradient: 'from-orange-400 via-amber-400 to-yellow-400', text: 'text-orange-500', border: 'border-orange-400' },
    pink: { gradient: 'from-pink-400 via-rose-400 to-red-400', text: 'text-rose-500', border: 'border-rose-400' },
    blue: { gradient: 'from-blue-500 via-blue-600 to-indigo-600', text: 'text-blue-600', border: 'border-blue-500' },
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onTextsChange) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onTextsChange({ ...texts, headerImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    if (onTextsChange) {
      onTextsChange({ ...texts, headerImage: '' });
    }
  };

  return (
    <div className="w-full mx-auto touch-manipulation" style={{ maxWidth: `${calculatorWidth}px` }}>
      <div className={`bg-gradient-to-br ${headerGradient} ${currentStyle.roundedTop} p-5 sm:p-10 md:p-12 text-center relative overflow-hidden group`}>
        {texts.headerImage && (
          <div className="absolute inset-0" style={{ opacity: (texts.headerImageOpacity || 30) / 100 }}>
            <img src={texts.headerImage} alt="Header background" className="w-full h-full object-cover" />
          </div>
        )}
        
        {onTextsChange && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex gap-2">
            <label className="cursor-pointer bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100">
              <Icon name="Image" size={18} className="text-gray-700 sm:w-5 sm:h-5" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            {texts.headerImage && (
              <button
                onClick={handleRemoveImage}
                className="bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100"
              >
                <Icon name="X" size={18} className="text-gray-700 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        )}
        
        <div className="relative z-10">
          <div className="text-center">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4 leading-tight px-2">
              {texts.title}
            </h1>
            <p className="text-base sm:text-xl md:text-3xl text-white font-medium px-2">
              {texts.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className={`bg-white ${currentStyle.roundedBottom} ${currentStyle.shadow} p-4 sm:p-8 md:p-10`}>
        <div className="space-y-5 sm:space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-2 border-blue-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
              <label className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-900">{texts.amountLabel}</label>
              <div className={`text-3xl sm:text-3xl md:text-4xl font-bold ${currentColor.text} bg-white rounded-xl px-4 py-2 shadow-sm`}>
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
            {texts.amountHint && (
              <div className="flex items-start gap-2 text-sm sm:text-base text-gray-600 bg-white/70 rounded-lg p-3 mt-3">
                <Icon name="Info" size={18} className="flex-shrink-0 mt-0.5 text-blue-500" />
                <span>{texts.amountHint}</span>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-2 border-blue-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
              <label className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-900">{texts.daysLabel}</label>
              <div className={`text-3xl sm:text-3xl md:text-4xl font-bold ${currentColor.text} bg-white rounded-xl px-4 py-2 shadow-sm`}>
                {days} дн.
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
            {texts.daysHint && (
              <div className="flex items-start gap-2 text-sm sm:text-base text-gray-600 bg-white/70 rounded-lg p-3 mt-3">
                <Icon name="Info" size={18} className="flex-shrink-0 mt-0.5 text-blue-500" />
                <span>{texts.daysHint}</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {texts.button1Link ? (
              <a 
                href={texts.button1Link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full h-14 sm:h-16 md:h-20 text-base sm:text-lg md:text-2xl font-bold ${currentStyle.rounded} bg-gradient-to-r ${currentColor.gradient} text-white hover:shadow-xl active:scale-95 transition-all duration-200 shadow-lg flex items-center justify-center gap-2 no-underline`}
              >
                <Icon name="ArrowRight" size={20} className="sm:w-6 sm:h-6" />
                <span>{texts.button1Text}</span>
              </a>
            ) : (
              <Button
                className={`w-full h-14 sm:h-16 md:h-20 text-base sm:text-lg md:text-2xl font-bold ${currentStyle.rounded} bg-gradient-to-r ${currentColor.gradient} text-white hover:shadow-xl active:scale-95 transition-all duration-200 shadow-lg flex items-center justify-center gap-2`}
              >
                <Icon name="ArrowRight" size={20} className="sm:w-6 sm:h-6" />
                <span>{texts.button1Text}</span>
              </Button>
            )}

            {texts.button2Link ? (
              <a 
                href={texts.button2Link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full h-14 sm:h-16 md:h-20 text-base sm:text-lg md:text-2xl font-bold ${currentStyle.rounded} border-3 ${currentColor.border} bg-white ${currentColor.text} hover:bg-blue-50 active:scale-95 shadow-lg transition-all duration-200 touch-manipulation flex items-center justify-center gap-2 no-underline`}
              >
                <Icon name="Calculator" size={20} className="sm:w-6 sm:h-6" />
                <span>{texts.button2Text}</span>
              </a>
            ) : (
              <Button 
                className={`w-full h-14 sm:h-16 md:h-20 text-base sm:text-lg md:text-2xl font-bold ${currentStyle.rounded} border-3 ${currentColor.border} bg-white ${currentColor.text} hover:bg-blue-50 active:scale-95 shadow-lg transition-all duration-200 touch-manipulation flex items-center justify-center gap-2`}
              >
                <Icon name="Calculator" size={20} className="sm:w-6 sm:h-6" />
                <span>{texts.button2Text}</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;