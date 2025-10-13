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
    <div className="w-full max-w-2xl mx-auto touch-manipulation">
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-7 mb-2 sm:mb-4 shadow-xl relative overflow-hidden">
        <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <div className="text-4xl sm:text-6xl md:text-[100px] font-bold text-white leading-none">%</div>
        </div>
        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-0.5 sm:mb-2 relative z-10 leading-tight">
          Первый заём бесплатно!*
        </h1>
        <p className="text-blue-50 text-xs sm:text-base md:text-lg relative z-10">
          При условии возврата в срок
        </p>
      </div>

      <Card className="rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-3 sm:p-5 md:p-7 bg-white">
        <div className="space-y-2.5 sm:space-y-4">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <div className="flex justify-between items-center mb-2 gap-2">
              <label className="text-xs sm:text-base text-gray-600 font-medium">Сумма</label>
              <div className="text-lg sm:text-2xl font-bold text-gray-900 whitespace-nowrap">
                {amount.toLocaleString('ru-RU')} ₽
              </div>
            </div>
            <div className="py-1.5">
              <Slider
                value={[amount]}
                onValueChange={(value) => setAmount(value[0])}
                min={3000}
                max={30000}
                step={1000}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-1">
              <span>3 000</span>
              <span>30 000</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <div className="flex justify-between items-center mb-2 gap-2">
              <label className="text-xs sm:text-base text-gray-600 font-medium">Срок</label>
              <div className="text-lg sm:text-2xl font-bold text-gray-900 whitespace-nowrap">
                {days} {days === 1 ? 'день' : days < 5 ? 'дня' : 'дней'}
              </div>
            </div>
            <div className="py-1.5">
              <Slider
                value={[days]}
                onValueChange={(value) => setDays(value[0])}
                min={7}
                max={30}
                step={1}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-1">
              <span>7</span>
              <span>30</span>
            </div>
          </div>

          <div className="text-center py-2 sm:py-3">
            <div className="inline-flex items-center gap-1.5 text-gray-600 text-xs sm:text-sm mb-0.5 sm:mb-1">
              <Icon name="Clock" size={16} className="text-blue-500" />
              <span>Деньги у вас уже в</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">12:56</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
              <div className="bg-green-500 rounded-full p-1 sm:p-1.5">
                <Icon name="Check" size={14} className="text-white sm:w-4 sm:h-4" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">Условия возврата</h3>
            </div>
            
            <div className="space-y-2 sm:space-y-2.5">
              <div className="flex justify-between items-center bg-white rounded-lg p-2.5 sm:p-3">
                <div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5">Сумма займа</div>
                  <div className="text-base sm:text-xl font-bold text-gray-900">
                    {amount.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
                <div className="text-gray-300 text-xl">→</div>
                <div className="text-right">
                  <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5">Вы возвращаете</div>
                  <div className="text-base sm:text-xl font-bold text-green-600">
                    {amount.toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-[9px] sm:text-xs text-gray-400 line-through">
                    было {calculations.totalReturn.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-2.5 sm:p-3">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 rounded-full p-1.5 sm:p-2 shrink-0">
                    <Icon name="Calendar" size={16} className="text-blue-600 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-gray-500">Дата возврата</div>
                    <div className="text-sm sm:text-base font-bold text-gray-900">
                      {calculations.returnDate}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-2.5 sm:p-3 text-white">
                <div className="flex items-start gap-2">
                  <Icon name="Sparkles" size={16} className="mt-0.5 shrink-0 sm:w-5 sm:h-5" />
                  <div className="flex-1">
                    <div className="font-bold text-xs sm:text-sm mb-0.5">Экономия при возврате в срок:</div>
                    <div className="text-lg sm:text-2xl font-bold">
                      {calculations.interest.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button 
            className="w-full h-12 sm:h-14 text-sm sm:text-base font-bold rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-[0.98] shadow-lg hover:shadow-xl transition-all duration-200 touch-manipulation"
          >
            ПОЛУЧИТЬ БЕСПЛАТНО
          </Button>


        </div>
      </Card>

      <div className="mt-2 sm:mt-3 text-center px-2">
        <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
          * Первый заём предоставляется без процентов при условии возврата в установленный срок. 
          При просрочке начисляются проценты согласно тарифам.
        </p>
      </div>
    </div>
  );
};

export default LoanCalculator;
