import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

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

interface BlueCalculatorProps {
  texts: BlueCalculatorTexts;
  amount: number;
  onAmountChange: (value: number) => void;
  calculatorWidth: number;
  minAmount: number;
  maxAmount: number;
  stepAmount: number;
  interestRate: number;
  onTextsChange?: (texts: BlueCalculatorTexts) => void;
  showCharacter: boolean;
  onShowCharacterChange?: (show: boolean) => void;
}

const BlueCalculator = ({ 
  texts, 
  amount, 
  onAmountChange, 
  calculatorWidth, 
  minAmount, 
  maxAmount, 
  stepAmount, 
  interestRate,
  onTextsChange,
  showCharacter,
  onShowCharacterChange
}: BlueCalculatorProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const calculateReturn = () => {
    return amount + (amount * interestRate / 100);
  };

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

  const handleCharacterImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onTextsChange) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onTextsChange({ ...texts, characterImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCharacterImage = () => {
    if (onTextsChange) {
      onTextsChange({ ...texts, characterImage: '' });
    }
  };

  const returnAmount = calculateReturn();

  return (
    <div className="w-full mx-auto touch-manipulation" style={{ maxWidth: `${calculatorWidth}px` }}>
      <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-t-2xl sm:rounded-t-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden group min-h-[140px] sm:min-h-[180px]">
        {texts.headerImage && (
          <div className="absolute inset-0">
            <img src={texts.headerImage} alt="Header background" className="w-full h-full object-cover opacity-30" />
          </div>
        )}
        
        {onTextsChange && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 flex gap-2">
            <label className="cursor-pointer bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
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
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}

        <div className="relative z-10">
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 leading-tight pr-12 sm:pr-0">{texts.title}</h1>
          <p className="text-white text-sm sm:text-base md:text-lg">{texts.subtitle}</p>
        </div>

        {showCharacter && (
          <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 z-10 group/char">
            <img 
              src={texts.characterImage || "https://cdn.poehali.dev/files/23264a37-7b0d-4b2e-8b9e-4d4af3979e60.jpg"}
              alt="Character" 
              className="w-full h-full object-contain"
            />
            {onTextsChange && (
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover/char:opacity-100 transition-opacity">
                <label className="cursor-pointer bg-white/90 hover:bg-white rounded-full p-2 shadow-lg">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCharacterImageUpload}
                    className="hidden"
                  />
                </label>
                {texts.characterImage && (
                  <button
                    onClick={handleRemoveCharacterImage}
                    className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg"
                  >
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative -mt-4 sm:-mt-8 z-20">
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
              Заём онлайн на карту <span className="text-red-500">от 0%</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-500">При условии возврата займа в срок</p>
          </div>

          <div className="mb-4 sm:mb-6 md:mb-8">
            <div className="flex justify-between items-baseline mb-3 sm:mb-4 gap-2">
              <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">{texts.amountLabel}</span>
              <span className="text-2xl sm:text-4xl md:text-5xl font-bold">{amount.toLocaleString('ru-RU')}₽</span>
            </div>
            
            <div className="relative">
              <Slider
                value={[amount]}
                onValueChange={(value) => {
                  onAmountChange(value[0]);
                  setIsDragging(true);
                }}
                onValueCommit={() => setIsDragging(false)}
                min={minAmount}
                max={maxAmount}
                step={stepAmount}
                className="mb-3 sm:mb-4"
                colorScheme="orange"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm sm:text-base md:text-lg text-gray-600">{texts.returnLabel}</span>
              <div className="text-right">
                {interestRate > 0 && (
                  <span className="text-gray-400 line-through text-sm sm:text-base md:text-lg mr-1 sm:mr-2">
                    {Math.round(returnAmount).toLocaleString('ru-RU')}₽
                  </span>
                )}
                <span className="text-lg sm:text-xl md:text-2xl font-bold">{amount.toLocaleString('ru-RU')}₽</span>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white text-base sm:text-lg md:text-xl py-5 sm:py-6 md:py-7 rounded-xl sm:rounded-2xl font-bold shadow-lg"
            onClick={() => {
              if (texts.buttonLink) {
                window.open(texts.buttonLink, '_blank');
              }
            }}
          >
            {texts.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlueCalculator;