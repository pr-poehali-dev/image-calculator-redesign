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
  onTextsChange 
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

  const returnAmount = calculateReturn();

  return (
    <div className="w-full mx-auto touch-manipulation" style={{ maxWidth: `${calculatorWidth}px` }}>
      <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-t-3xl p-8 relative overflow-hidden group">
        {texts.headerImage && (
          <div className="absolute inset-0">
            <img src={texts.headerImage} alt="Header background" className="w-full h-full object-cover opacity-30" />
          </div>
        )}
        
        {onTextsChange && (
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <label className="cursor-pointer bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}

        <div className="relative z-10">
          <h1 className="text-white text-4xl font-bold mb-2">{texts.title}</h1>
          <p className="text-white text-lg">{texts.subtitle}</p>
        </div>

        {texts.headerImage && (
          <div className="absolute bottom-0 right-0 w-48 h-48 z-10">
            <img 
              src="https://cdn.poehali.dev/files/23264a37-7b0d-4b2e-8b9e-4d4af3979e60.jpg" 
              alt="Character" 
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>

      <div className="bg-white rounded-b-3xl shadow-2xl p-8 relative -mt-8 z-20">
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Заём онлайн на карту <span className="text-red-500">от 0%</span>
            </h2>
            <p className="text-gray-500">При условии возврата займа в срок</p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-gray-700">{texts.amountLabel}</span>
              <span className="text-5xl font-bold">{amount.toLocaleString('ru-RU')}₽</span>
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
                className="mb-4"
                colorScheme="orange"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-lg text-gray-600">{texts.returnLabel}</span>
              <div className="text-right">
                {interestRate > 0 && (
                  <span className="text-gray-400 line-through text-lg mr-2">
                    {Math.round(returnAmount).toLocaleString('ru-RU')}₽
                  </span>
                )}
                <span className="text-2xl font-bold">{amount.toLocaleString('ru-RU')}₽</span>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white text-xl py-7 rounded-2xl font-bold shadow-lg"
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
