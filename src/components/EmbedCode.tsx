import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const EmbedCode = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const standaloneCode = `<!-- КАЛЬКУЛЯТОР ЗАЙМОВ - ВСТАВЬТЕ НА ЛЮБОЙ САЙТ -->
<!-- Работает без внешних ссылок и библиотек -->

<div id="loan-calculator-container"></div>

<script>
(function(){
  const container = document.getElementById('loan-calculator-container');
  
  // Стили
  const style = document.createElement('style');
  style.textContent = \`
    #loan-calculator-container * { margin: 0; padding: 0; box-sizing: border-box; }
    #loan-calculator-container { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; width: 100%; max-width: 800px; margin: 0 auto; padding: 20px; }
    .calc-header { background: linear-gradient(135deg, #34d399 0%, #14b8a6 50%, #22d3ee 100%); border-radius: 32px 32px 0 0; padding: 48px 32px; text-align: center; }
    .calc-header h1 { color: white; font-size: 48px; font-weight: 800; margin-bottom: 16px; }
    .calc-header p { color: white; font-size: 28px; font-weight: 500; }
    .calc-card { background: white; border-radius: 0 0 32px 32px; padding: 48px 40px; box-shadow: 0 25px 70px rgba(0,0,0,0.2); }
    .calc-slider-group { margin-bottom: 48px; }
    .calc-slider-label { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .calc-slider-label span { color: #111827; font-size: 24px; font-weight: 600; }
    .calc-slider-value { color: #14b8a6; font-size: 32px; font-weight: 800; }
    .calc-slider { width: 100%; height: 8px; border-radius: 10px; background: #d1d5db; outline: none; -webkit-appearance: none; margin: 8px 0; }
    .calc-slider::-webkit-slider-track { height: 8px; background: #d1d5db; border-radius: 10px; }
    .calc-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #14b8a6, #22d3ee); cursor: pointer; border: 4px solid white; box-shadow: 0 4px 16px rgba(20, 184, 166, 0.5); }
    .calc-slider::-moz-range-thumb { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #14b8a6, #22d3ee); cursor: pointer; border: 4px solid white; box-shadow: 0 4px 16px rgba(20, 184, 166, 0.5); }
    .calc-hint { color: #9ca3af; font-size: 16px; margin-top: 12px; }
    .calc-btn { width: 100%; background: white; color: #14b8a6; border: 4px solid #14b8a6; border-radius: 50px; padding: 20px; font-size: 24px; font-weight: 700; cursor: pointer; margin-bottom: 20px; transition: all 0.2s; }
    .calc-btn:hover { background: #f0fdfa; transform: translateY(-2px); }
    .calc-btn-primary { background: linear-gradient(135deg, #34d399 0%, #14b8a6 100%); color: white; border: none; box-shadow: 0 10px 30px rgba(20, 184, 166, 0.4); margin-bottom: 0; }
    .calc-btn-primary:hover { background: linear-gradient(135deg, #10b981 0%, #0d9488 100%); }
    @media (max-width: 640px) {
      .calc-header { padding: 32px 24px; }
      .calc-header h1 { font-size: 28px; }
      .calc-header p { font-size: 18px; }
      .calc-card { padding: 24px 20px; }
      .calc-slider-value { font-size: 24px; }
      .calc-slider-label span { font-size: 16px; }
      .calc-slider::-webkit-slider-thumb { width: 32px; height: 32px; }
      .calc-slider::-moz-range-thumb { width: 32px; height: 32px; }
      .calc-btn { font-size: 18px; }
    }
  \`;
  document.head.appendChild(style);
  
  // HTML
  container.innerHTML = \`
    <div class="calc-header">
      <h1>Займ на карту</h1>
      <p>Не выходя из дома</p>
    </div>
    <div class="calc-card">
      <div class="calc-slider-group">
        <div class="calc-slider-label">
          <span>Сумма</span>
          <span class="calc-slider-value" id="calc-amount-val">16 000 ₽</span>
        </div>
        <input type="range" min="3000" max="20000" step="1000" value="16000" class="calc-slider" id="calc-amount-slider">
        <div class="calc-hint">Максимальная сумма: 20 000,00 ₽</div>
      </div>
      <div class="calc-slider-group">
        <div class="calc-slider-label">
          <span>Срок</span>
          <span class="calc-slider-value" id="calc-days-val">10 дней</span>
        </div>
        <input type="range" min="7" max="15" step="1" value="10" class="calc-slider" id="calc-days-slider">
        <div class="calc-hint">Максимальный срок: 15 дней</div>
      </div>
      <button class="calc-btn" onclick="alert('Переход на госуслуги')">госуслуги</button>
      <button class="calc-btn calc-btn-primary" onclick="alert('Оформление займа')">Получить <span id="calc-total">16 000,00</span> ₽</button>
    </div>
  \`;
  
  // Логика
  const amountSlider = document.getElementById('calc-amount-slider');
  const daysSlider = document.getElementById('calc-days-slider');
  
  function fmt(n) { return n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' '); }
  function fmtDecimal(n) { return n.toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ').replace('.', ','); }
  
  function calc() {
    const a = parseInt(amountSlider.value);
    const d = parseInt(daysSlider.value);
    document.getElementById('calc-amount-val').textContent = fmt(a) + ' ₽';
    document.getElementById('calc-days-val').textContent = d + ' дней';
    document.getElementById('calc-total').textContent = fmtDecimal(a);
  }
  
  amountSlider.addEventListener('input', calc);
  daysSlider.addEventListener('input', calc);
  calc();
})();
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
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Универсальный код</h3>
              <p className="text-xs text-teal-700 font-semibold">⚡ Работает везде без ссылок!</p>
            </div>
          </div>
          <Button
            onClick={() => copyToClipboard(standaloneCode, 'универсальный код')}
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
                <span className="hidden sm:inline">Копировать</span>
              </>
            )}
          </Button>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto max-h-96">
          <pre className="text-xs md:text-sm text-teal-400 font-mono whitespace-pre">
            {standaloneCode}
          </pre>
        </div>
        <div className="mt-4 space-y-3">
          <div className="p-4 bg-white rounded-lg border-2 border-teal-300">
            <div className="flex items-start gap-2 mb-3">
              <Icon name="Rocket" size={20} className="text-teal-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Как использовать:</p>
                <p className="text-sm text-gray-600">Просто скопируйте и вставьте код в любое место на вашем сайте!</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              <div className="p-3 bg-teal-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="font-semibold text-sm">Копируйте код</span>
                </div>
                <p className="text-xs text-gray-600 ml-8">Нажмите кнопку "Копировать"</p>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="font-semibold text-sm">Вставьте на сайт</span>
                </div>
                <p className="text-xs text-gray-600 ml-8">В любой HTML блок</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg text-white">
            <div className="flex items-start gap-3">
              <Icon name="CheckCircle" size={24} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-2">Преимущества этого кода:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={14} />
                    <span>Работает БЕЗ внешних ссылок и библиотек</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={14} />
                    <span>Подходит для Tilda, WordPress, любых сайтов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={14} />
                    <span>Быстрая загрузка и полная автономность</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={14} />
                    <span>Адаптивный дизайн под все экраны</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>



      <Card className="rounded-2xl shadow-lg p-5 md:p-6 bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200">
        <div className="flex items-start gap-3">
          <div className="bg-teal-500 rounded-full p-2">
            <Icon name="Lightbulb" size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-3">Инструкция по установке:</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <Icon name="Copy" size={16} className="text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">1. Скопируйте код</p>
                  <p className="text-xs text-gray-600">Нажмите кнопку "Копировать" выше</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <Icon name="Code" size={16} className="text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">2. Вставьте на сайт</p>
                  <p className="text-xs text-gray-600">В любой HTML блок или виджет на вашей странице</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <Icon name="CheckCircle" size={16} className="text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">3. Готово!</p>
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
          <Icon name="Paintbrush" size={32} className="mx-auto mb-2 text-purple-500" />
          <h4 className="font-bold text-gray-900 mb-1">Настраиваемый</h4>
          <p className="text-sm text-gray-600">Легко изменить параметры</p>
        </Card>
      </div>
    </div>
  );
};

export default EmbedCode;
