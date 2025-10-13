import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const LoanCalculator = () => {
  const [amount, setAmount] = useState(16000);
  const [days, setDays] = useState(10);

  return (
    <div className="w-full max-w-2xl mx-auto touch-manipulation">
      <div className="bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-t-2xl sm:rounded-t-3xl p-6 sm:p-10 md:p-12 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-5">
          Займ на карту
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl text-white font-medium">
          Не выходя из дома
        </p>
      </div>

      <div className="bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl p-5 sm:p-8 md:p-10">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <label className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">Сумма</label>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-500">
                {amount.toLocaleString('ru-RU')} ₽
              </div>
            </div>
            <Slider
              value={[amount]}
              onValueChange={(value) => setAmount(value[0])}
              min={3000}
              max={20000}
              step={1000}
              className="w-full mb-3"
            />
            <div className="text-sm sm:text-base text-gray-400">
              Максимальная сумма: 20 000,00 ₽
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <label className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">Срок</label>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-500">
                {days} дней
              </div>
            </div>
            <Slider
              value={[days]}
              onValueChange={(value) => setDays(value[0])}
              min={7}
              max={15}
              step={1}
              className="w-full mb-3"
            />
            <div className="text-sm sm:text-base text-gray-400">
              Максимальный срок: 15 дней
            </div>
          </div>

          <Button
            className="w-full h-14 sm:h-16 md:h-20 text-lg sm:text-xl md:text-2xl font-bold rounded-full border-3 sm:border-4 border-teal-400 bg-white text-teal-500 hover:bg-teal-50 transition-all duration-200 shadow-lg"
          >
            госуслуги
          </Button>

          <Button 
            className="w-full h-14 sm:h-16 md:h-20 text-lg sm:text-xl md:text-2xl font-bold rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-white hover:from-emerald-500 hover:to-teal-500 active:scale-[0.98] shadow-lg transition-all duration-200 touch-manipulation"
          >
            Получить {amount.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₽
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;