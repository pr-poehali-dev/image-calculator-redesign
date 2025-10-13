import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const EmbedInstructions = () => {
  return (
    <>
      <Card className="rounded-2xl shadow-lg p-5 md:p-6 bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200">
        <div className="flex items-start gap-3">
          <div className="bg-teal-500 rounded-full p-2">
            <Icon name="Lightbulb" size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-3">Инструкция по установке:</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <Icon name="Package" size={16} className="text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Вариант 1: Полный код</p>
                  <p className="text-xs text-gray-600">Скопируйте "Полный код" и вставьте на сайт - готово!</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <Icon name="Layers" size={16} className="text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Вариант 2: Отдельно (для Tilda)</p>
                  <p className="text-xs text-gray-600">CSS и JS вставьте в блок T123 "HTML-код", HTML в блок T120 "HTML-код для вставки"</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <Icon name="CheckCircle" size={16} className="text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Готово!</p>
                  <p className="text-xs text-gray-600">Калькулятор сразу заработает на вашем сайте</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <Card className="p-4 text-center bg-white rounded-xl shadow-md">
          <Icon name="Smartphone" size={32} className="mx-auto mb-2 text-teal-500" />
          <h4 className="font-bold text-gray-900 mb-1">Адаптивный</h4>
          <p className="text-sm text-gray-600">Отлично работает на всех устройствах</p>
        </Card>
        <Card className="p-4 text-center bg-white rounded-xl shadow-md">
          <Icon name="Zap" size={32} className="mx-auto mb-2 text-yellow-500" />
          <h4 className="font-bold text-gray-900 mb-1">Быстрый</h4>
          <p className="text-sm text-gray-600">Загрузка менее 1 секунды</p>
        </Card>
        <Card className="p-4 text-center bg-white rounded-xl shadow-md">
          <Icon name="Wrench" size={32} className="mx-auto mb-2 text-purple-500" />
          <h4 className="font-bold text-gray-900 mb-1">Настраиваемый</h4>
          <p className="text-sm text-gray-600">Легко изменить параметры в коде</p>
        </Card>
      </div>
    </>
  );
};

export default EmbedInstructions;
