import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const EmbedCode = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const embedCode = `<!-- Калькулятор займов -->
<div id="loan-calculator-widget"></div>
<script src="https://cdn.jsdelivr.net/gh/yourusername/loan-calculator@latest/widget.min.js"></script>
<script>
  LoanCalculator.init({
    container: '#loan-calculator-widget',
    minAmount: 3000,
    maxAmount: 30000,
    minDays: 7,
    maxDays: 30,
    interestRate: 0.01
  });
</script>`;

  const reactCode = `import LoanCalculator from '@/components/LoanCalculator';

function App() {
  return (
    <div>
      <LoanCalculator />
    </div>
  );
}`;

  const copyToClipboard = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast({
      title: "Скопировано!",
      description: `Код для ${type} скопирован в буфер обмена`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Код для встраивания
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Скопируйте код и вставьте на свой сайт
        </p>
      </div>

      <Card className="rounded-2xl shadow-lg p-5 md:p-6 bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Icon name="Code" size={24} className="text-blue-500" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900">HTML + JavaScript</h3>
          </div>
          <Button
            onClick={() => copyToClipboard(embedCode, 'HTML')}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            {copied ? (
              <>
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="hidden sm:inline">Скопировано</span>
              </>
            ) : (
              <>
                <Icon name="Copy" size={16} />
                <span className="hidden sm:inline">Копировать</span>
              </>
            )}
          </Button>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs md:text-sm text-green-400 font-mono whitespace-pre">
            {embedCode}
          </pre>
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <Icon name="Info" size={16} className="inline mr-1 text-blue-500" />
            Вставьте этот код в любое место HTML страницы, где хотите отобразить калькулятор
          </p>
        </div>
      </Card>

      <Card className="rounded-2xl shadow-lg p-5 md:p-6 bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Icon name="Braces" size={24} className="text-purple-500" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900">React компонент</h3>
          </div>
          <Button
            onClick={() => copyToClipboard(reactCode, 'React')}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <Icon name="Copy" size={16} />
            <span className="hidden sm:inline">Копировать</span>
          </Button>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs md:text-sm text-blue-400 font-mono whitespace-pre">
            {reactCode}
          </pre>
        </div>
        <div className="mt-4 p-3 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <Icon name="Info" size={16} className="inline mr-1 text-purple-500" />
            Для React проектов просто импортируйте компонент LoanCalculator
          </p>
        </div>
      </Card>

      <Card className="rounded-2xl shadow-lg p-5 md:p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
        <div className="flex items-start gap-3">
          <div className="bg-green-500 rounded-full p-2">
            <Icon name="Lightbulb" size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Параметры настройки:</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><code className="bg-white px-2 py-0.5 rounded text-xs">minAmount</code> - минимальная сумма займа</li>
              <li><code className="bg-white px-2 py-0.5 rounded text-xs">maxAmount</code> - максимальная сумма займа</li>
              <li><code className="bg-white px-2 py-0.5 rounded text-xs">minDays</code> - минимальный срок в днях</li>
              <li><code className="bg-white px-2 py-0.5 rounded text-xs">maxDays</code> - максимальный срок в днях</li>
              <li><code className="bg-white px-2 py-0.5 rounded text-xs">interestRate</code> - процентная ставка (0.01 = 1%)</li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <Card className="p-4 text-center bg-white rounded-xl shadow-md">
          <Icon name="Smartphone" size={32} className="mx-auto mb-2 text-blue-500" />
          <h4 className="font-bold text-gray-900 mb-1">Адаптивный</h4>
          <p className="text-sm text-gray-600">Отлично работает на всех устройствах</p>
        </Card>
        <Card className="p-4 text-center bg-white rounded-xl shadow-md">
          <Icon name="Zap" size={32} className="mx-auto mb-2 text-yellow-500" />
          <h4 className="font-bold text-gray-900 mb-1">Быстрый</h4>
          <p className="text-sm text-gray-600">Загрузка менее 1 секунды</p>
        </Card>
        <Card className="p-4 text-center bg-white rounded-xl shadow-md">
          <Icon name="Paintbrush" size={32} className="mx-auto mb-2 text-purple-500" />
          <h4 className="font-bold text-gray-900 mb-1">Настраиваемый</h4>
          <p className="text-sm text-gray-600">Легко изменить параметры</p>
        </Card>
      </div>
    </div>
  );
};

export default EmbedCode;
