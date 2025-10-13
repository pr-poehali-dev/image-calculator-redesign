import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const EmbedCode = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const cssCode = `#loan-calculator {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}
.loan-calc-header {
  background: linear-gradient(135deg, #34d399, #14b8a6, #22d3ee);
  border-radius: 20px 20px 0 0;
  padding: 40px 20px;
  text-align: center;
}
.loan-calc-header h1 {
  color: white;
  font-size: 36px;
  margin: 0 0 10px 0;
}
.loan-calc-header p {
  color: white;
  font-size: 20px;
  margin: 0;
}
.loan-calc-card {
  background: white;
  border-radius: 0 0 20px 20px;
  padding: 30px 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}
.loan-calc-group {
  margin-bottom: 30px;
}
.loan-calc-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.loan-calc-label span {
  font-size: 18px;
  font-weight: bold;
}
.loan-calc-value {
  color: #14b8a6;
  font-size: 24px;
  font-weight: bold;
}
.loan-calc-slider {
  width: 100%;
  height: 6px;
  background: #d1d5db;
  border-radius: 10px;
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
}
.loan-calc-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #14b8a6;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.loan-calc-slider::-moz-range-thumb {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #14b8a6;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.loan-calc-hint {
  color: #9ca3af;
  font-size: 14px;
  margin-top: 5px;
}
.loan-calc-btn {
  width: 100%;
  background: white;
  color: #14b8a6;
  border: 3px solid #14b8a6;
  border-radius: 50px;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 15px;
}
.loan-calc-btn-primary {
  background: linear-gradient(135deg, #34d399, #14b8a6);
  color: white;
  border: none;
  margin-bottom: 0;
}
@media (max-width: 640px) {
  .loan-calc-header h1 {
    font-size: 24px;
  }
  .loan-calc-header p {
    font-size: 16px;
  }
  .loan-calc-value {
    font-size: 20px;
  }
}`;

  const htmlCode = `<div id="loan-calculator">
  <div class="loan-calc-header">
    <h1>Займ на карту</h1>
    <p>Не выходя из дома</p>
  </div>
  <div class="loan-calc-card">
    <div class="loan-calc-group">
      <div class="loan-calc-label">
        <span>Сумма</span>
        <span class="loan-calc-value" id="amount-value">16 000 ₽</span>
      </div>
      <input type="range" min="3000" max="20000" step="1000" value="16000" class="loan-calc-slider" id="amount-slider">
      <div class="loan-calc-hint">Максимальная сумма: 20 000,00 ₽</div>
    </div>
    
    <div class="loan-calc-group">
      <div class="loan-calc-label">
        <span>Срок</span>
        <span class="loan-calc-value" id="days-value">10 дней</span>
      </div>
      <input type="range" min="7" max="15" step="1" value="10" class="loan-calc-slider" id="days-slider">
      <div class="loan-calc-hint">Максимальный срок: 15 дней</div>
    </div>
    
    <button class="loan-calc-btn" onclick="alert('Переход на госуслуги')">госуслуги</button>
    <button class="loan-calc-btn loan-calc-btn-primary" onclick="alert('Оформление займа')">Получить <span id="total-amount">16 000,00</span> ₽</button>
  </div>
</div>`;

  const jsCode = `(function() {
  const amountSlider = document.getElementById('amount-slider');
  const daysSlider = document.getElementById('days-slider');
  const amountValue = document.getElementById('amount-value');
  const daysValue = document.getElementById('days-value');
  const totalAmount = document.getElementById('total-amount');
  
  function formatNumber(num) {
    return num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');
  }
  
  function formatDecimal(num) {
    return num.toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ').replace('.', ',');
  }
  
  function updateCalculator() {
    const amount = parseInt(amountSlider.value);
    const days = parseInt(daysSlider.value);
    
    amountValue.textContent = formatNumber(amount) + ' ₽';
    daysValue.textContent = days + ' дней';
    totalAmount.textContent = formatDecimal(amount);
  }
  
  amountSlider.addEventListener('input', updateCalculator);
  daysSlider.addEventListener('input', updateCalculator);
  
  updateCalculator();
})();`;

  const fullCode = `<!-- КАЛЬКУЛЯТОР ЗАЙМОВ -->
<style>
${cssCode}
</style>

${htmlCode}

<script>
${jsCode}
</script>`;



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

      <Card className="rounded-2xl shadow-lg p-5 md:p-6 bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-teal-500 rounded-lg p-2">
              <Icon name="Package" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Полный код (всё в одном)</h3>
              <p className="text-xs text-teal-700 font-semibold">⚡ CSS + HTML + JS</p>
            </div>
          </div>
          <Button
            onClick={() => copyToClipboard(fullCode, 'Полный код')}
            className="gap-2 bg-teal-500 hover:bg-teal-600"
            size="sm"
          >
            {copied ? (
              <>
                <Icon name="Check" size={16} />
                <span className="hidden sm:inline">Скопировано</span>
              </>
            ) : (
              <>
                <Icon name="Copy" size={16} />
                <span className="hidden sm:inline">Копировать всё</span>
              </>
            )}
          </Button>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto max-h-96">
          <pre className="text-xs md:text-sm text-teal-400 font-mono whitespace-pre">
            {fullCode}
          </pre>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="rounded-xl shadow-md p-4 bg-white border-2 border-purple-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Icon name="Paintbrush" size={20} className="text-purple-500" />
              <h3 className="font-bold text-gray-900">CSS стили</h3>
            </div>
            <Button
              onClick={() => copyToClipboard(cssCode, 'CSS')}
              className="gap-1 bg-purple-500 hover:bg-purple-600 h-8 px-2"
              size="sm"
            >
              <Icon name="Copy" size={14} />
            </Button>
          </div>
          <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto max-h-48">
            <pre className="text-xs text-purple-400 font-mono whitespace-pre">
              {cssCode}
            </pre>
          </div>
        </Card>

        <Card className="rounded-xl shadow-md p-4 bg-white border-2 border-blue-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Icon name="Code" size={20} className="text-blue-500" />
              <h3 className="font-bold text-gray-900">HTML разметка</h3>
            </div>
            <Button
              onClick={() => copyToClipboard(htmlCode, 'HTML')}
              className="gap-1 bg-blue-500 hover:bg-blue-600 h-8 px-2"
              size="sm"
            >
              <Icon name="Copy" size={14} />
            </Button>
          </div>
          <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto max-h-48">
            <pre className="text-xs text-blue-400 font-mono whitespace-pre">
              {htmlCode}
            </pre>
          </div>
        </Card>

        <Card className="rounded-xl shadow-md p-4 bg-white border-2 border-yellow-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={20} className="text-yellow-500" />
              <h3 className="font-bold text-gray-900">JavaScript</h3>
            </div>
            <Button
              onClick={() => copyToClipboard(jsCode, 'JavaScript')}
              className="gap-1 bg-yellow-500 hover:bg-yellow-600 h-8 px-2"
              size="sm"
            >
              <Icon name="Copy" size={14} />
            </Button>
          </div>
          <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto max-h-48">
            <pre className="text-xs text-yellow-400 font-mono whitespace-pre">
              {jsCode}
            </pre>
          </div>
        </Card>
      </div>

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
    </div>
  );
};

export default EmbedCode;