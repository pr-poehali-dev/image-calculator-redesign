import { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
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
      discount: Math.round(interest * 0.95)
    };
  }, [amount, days]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 rounded-3xl p-8 md:p-12 mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
            <div className="text-[120px] font-bold text-white">%</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Первый заём бесплатно!*
          </h1>
          <p className="text-blue-50 text-lg md:text-xl">
            При условии возврата в срок
          </p>
        </div>

        <Card className="rounded-3xl shadow-2xl p-6 md:p-10 bg-white">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg text-gray-600 font-medium">Сумма</label>
                <div className="text-3xl font-bold text-gray-900">
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
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>3000</span>
                <span>30000</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg text-gray-600 font-medium">Срок</label>
                <div className="text-3xl font-bold text-gray-900">
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
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>7</span>
                <span>30</span>
              </div>
            </div>

            <div className="text-center py-4">
              <div className="inline-flex items-center gap-2 text-gray-600 text-lg mb-2">
                <Icon name="Clock" size={24} className="text-blue-500" />
                <span>Деньги у вас уже в</span>
              </div>
              <div className="text-4xl font-bold text-gray-900">12:56</div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                <div className="text-sm text-gray-500 mb-2">Возвращаете</div>
                <div className="text-2xl font-bold text-gray-400 line-through mb-1">
                  {calculations.totalReturn.toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-3xl font-bold text-green-600">
                  {amount.toLocaleString('ru-RU')} ₽
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                <div className="text-sm text-gray-500 mb-2">Дата возврата</div>
                <div className="text-3xl font-bold text-gray-900 mt-3">
                  {calculations.returnDate}
                </div>
              </div>
            </div>

            <Button 
              className="w-full h-16 text-xl font-bold rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              ПОЛУЧИТЬ БЕСПЛАТНО
            </Button>

            <div className="flex items-start gap-3 bg-green-50 border-2 border-green-200 rounded-2xl p-4">
              <div className="bg-green-500 rounded-full p-1 mt-1">
                <Icon name="Check" size={16} className="text-white" />
              </div>
              <div className="flex-1 flex justify-between items-center">
                <span className="text-gray-700 text-base">
                  При возврате до {calculations.returnDate}
                </span>
                <span className="text-2xl font-bold text-gray-900 ml-4">
                  {amount.toLocaleString('ru-RU')}
                </span>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            * Первый заём предоставляется без процентов при условии возврата в установленный срок. 
            При просрочке начисляются проценты согласно тарифам.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
