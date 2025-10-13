import { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const LoanCalculator = () => {
  const [amount, setAmount] = useState(15000);
  const [days, setDays] = useState(7);

  const calculations = useMemo(() => {
    const interestRate = 0.01;
    const dailyRate = interestRate * days;
    const interest = amount * dailyRate;
    const totalReturn = amount + interest;
    
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + days);
    
    const formattedDate = returnDate.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long'
    });

    return {
      interest: Math.round(interest),
      totalReturn: Math.round(totalReturn),
      returnDate: formattedDate,
    };
  }, [amount, days]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 mb-4 md:mb-6 shadow-xl relative overflow-hidden">
        <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 opacity-20">
          <div className="text-6xl sm:text-8xl md:text-[100px] font-bold text-white">%</div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
          Первый заём бесплатно!*
        </h1>
        <p className="text-blue-50 text-sm sm:text-base md:text-lg">
          При условии возврата в срок
        </p>
      </div>

      <Card className="rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-5 md:p-8 bg-white">
        <div className="space-y-5 md:space-y-6">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-5">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm sm:text-base text-gray-600 font-medium">Сумма</label>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                {amount.toLocaleString('ru-RU')} ₽
              </div>
            </div>
            <Slider
              value={[amount]}
              onValueChange={(value) => setAmount(value[0])}
              min={3000}
              max={30000}
              step={1000}
              className="w-full"
            />
            <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
              <span>3000</span>
              <span>30000</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-5">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm sm:text-base text-gray-600 font-medium">Срок</label>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                {days} {days === 1 ? 'день' : days < 5 ? 'дня' : 'дней'}
              </div>
            </div>
            <Slider
              value={[days]}
              onValueChange={(value) => setDays(value[0])}
              min={7}
              max={30}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
              <span>7</span>
              <span>30</span>
            </div>
          </div>

          <div className="text-center py-2 md:py-3">
            <div className="inline-flex items-center gap-2 text-gray-600 text-sm sm:text-base mb-1">
              <Icon name="Clock" size={20} className="text-blue-500" />
              <span>Деньги у вас уже в</span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">12:56</div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-5">
              <div className="text-xs sm:text-sm text-gray-500 mb-1">Возвращаете</div>
              <div className="text-lg sm:text-xl font-bold text-gray-400 line-through mb-1">
                {calculations.totalReturn.toLocaleString('ru-RU')} ₽
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-green-600">
                {amount.toLocaleString('ru-RU')} ₽
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-5">
              <div className="text-xs sm:text-sm text-gray-500 mb-1">Дата возврата</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                {calculations.returnDate}
              </div>
            </div>
          </div>

          <Button 
            className="w-full h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl font-bold rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            ПОЛУЧИТЬ БЕСПЛАТНО
          </Button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 bg-green-50 border-2 border-green-200 rounded-xl md:rounded-2xl p-3 md:p-4">
            <div className="bg-green-500 rounded-full p-1 shrink-0">
              <Icon name="Check" size={14} className="text-white" />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
              <span className="text-gray-700 text-xs sm:text-sm md:text-base">
                При возврате до {calculations.returnDate}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                {amount.toLocaleString('ru-RU')}
              </span>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-4 md:mt-6 text-center px-2">
        <p className="text-xs sm:text-sm text-gray-600">
          * Первый заём предоставляется без процентов при условии возврата в установленный срок. 
          При просрочке начисляются проценты согласно тарифам.
        </p>
      </div>
    </div>
  );
};

export default LoanCalculator;
