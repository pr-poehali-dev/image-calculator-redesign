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
    .calc-header { background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #6366f1 100%); border-radius: 24px; padding: 40px 30px; margin-bottom: 20px; position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3); }
    .calc-header::before { content: '%'; position: absolute; right: 30px; top: 50%; transform: translateY(-50%); font-size: 100px; font-weight: bold; color: rgba(255,255,255,0.2); }
    .calc-header h1 { color: white; font-size: 32px; font-weight: 800; margin-bottom: 8px; position: relative; z-index: 1; }
    .calc-header p { color: rgba(255,255,255,0.9); font-size: 16px; position: relative; z-index: 1; }
    .calc-card { background: white; border-radius: 24px; padding: 40px 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
    .calc-slider-group { background: linear-gradient(135deg, #f9fafb 0%, #e0f2fe 100%); border-radius: 16px; padding: 24px; margin-bottom: 24px; }
    .calc-slider-label { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .calc-slider-label span { color: #6b7280; font-size: 16px; font-weight: 500; }
    .calc-slider-value { color: #111827; font-size: 28px; font-weight: 700; }
    .calc-slider { width: 100%; height: 12px; border-radius: 10px; background: linear-gradient(to right, #dbeafe, #bfdbfe); outline: none; -webkit-appearance: none; }
    .calc-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #2563eb); cursor: pointer; border: 4px solid white; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4); }
    .calc-slider::-moz-range-thumb { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #2563eb); cursor: pointer; border: 4px solid white; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4); }
    .calc-slider-range { display: flex; justify-content: space-between; margin-top: 8px; color: #9ca3af; font-size: 13px; }
    .calc-time { text-align: center; padding: 20px 0; }
    .calc-time-label { color: #6b7280; font-size: 14px; margin-bottom: 8px; }
    .calc-time-value { color: #111827; font-size: 36px; font-weight: 700; }
    .calc-info { background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border: 2px solid #bbf7d0; border-radius: 16px; padding: 24px; margin-bottom: 24px; }
    .calc-info-row { background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; }
    .calc-info-row:last-child { margin-bottom: 0; }
    .calc-info-flex { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
    .calc-amount { color: #111827; font-size: 28px; font-weight: 700; }
    .calc-amount-green { color: #16a34a; }
    .calc-old { color: #9ca3af; font-size: 16px; text-decoration: line-through; margin-top: 4px; }
    .calc-btn { width: 100%; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; border: none; border-radius: 16px; padding: 20px; font-size: 20px; font-weight: 700; cursor: pointer; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4); text-transform: uppercase; }
    .calc-btn:hover { transform: translateY(-2px); }
    @media (max-width: 640px) {
      .calc-header { padding: 24px 20px; }
      .calc-header h1 { font-size: 24px; }
      .calc-card { padding: 20px; }
      .calc-slider-value { font-size: 22px; }
      .calc-amount { font-size: 22px; }
    }
  \`;
  document.head.appendChild(style);
  
  // HTML
  container.innerHTML = \`
    <div class="calc-header">
      <h1>Первый заём бесплатно!*</h1>
      <p>При условии возврата в срок</p>
    </div>
    <div class="calc-card">
      <div class="calc-slider-group">
        <div class="calc-slider-label">
          <span>Сумма</span>
          <span class="calc-slider-value" id="calc-amount-val">15 000 ₽</span>
        </div>
        <input type="range" min="3000" max="30000" step="1000" value="15000" class="calc-slider" id="calc-amount-slider">
        <div class="calc-slider-range"><span>3 000</span><span>30 000</span></div>
      </div>
      <div class="calc-slider-group">
        <div class="calc-slider-label">
          <span>Срок</span>
          <span class="calc-slider-value" id="calc-days-val">7 дней</span>
        </div>
        <input type="range" min="7" max="30" step="1" value="7" class="calc-slider" id="calc-days-slider">
        <div class="calc-slider-range"><span>7</span><span>30</span></div>
      </div>
      <div class="calc-time">
        <div class="calc-time-label">⏰ Деньги у вас уже в</div>
        <div class="calc-time-value">12:56</div>
      </div>
      <div class="calc-info">
        <div class="calc-info-row">
          <div class="calc-info-flex">
            <div>
              <div style="color: #6b7280; font-size: 12px; margin-bottom: 4px;">Сумма займа</div>
              <div class="calc-amount" id="calc-loan">15 000 ₽</div>
            </div>
            <div style="color: #d1d5db; font-size: 24px;">→</div>
            <div style="text-align: right;">
              <div style="color: #6b7280; font-size: 12px; margin-bottom: 4px;">Вы возвращаете</div>
              <div class="calc-amount calc-amount-green" id="calc-return">15 000 ₽</div>
              <div class="calc-old" id="calc-old">было 15 105 ₽</div>
            </div>
          </div>
        </div>
        <div class="calc-info-row">
          <div style="color: #6b7280; font-size: 12px; margin-bottom: 4px;">Дата возврата</div>
          <div class="calc-amount" style="font-size: 24px;" id="calc-date">20 октября</div>
        </div>
        <div style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); border-radius: 12px; padding: 20px; color: white;">
          <div style="font-size: 14px; margin-bottom: 4px;">✨ Экономия при возврате в срок:</div>
          <div style="font-size: 32px; font-weight: 700;" id="calc-save">105 ₽</div>
        </div>
      </div>
      <button class="calc-btn" onclick="alert('Переход на форму заявки')">Получить бесплатно</button>
      <div style="text-align: center; color: #6b7280; font-size: 13px; line-height: 1.6;">
        * Первый заём предоставляется без процентов при условии возврата в установленный срок.
      </div>
    </div>
  \`;
  
  // Логика
  const amountSlider = document.getElementById('calc-amount-slider');
  const daysSlider = document.getElementById('calc-days-slider');
  
  function fmt(n) { return n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' '); }
  function getDaysWord(d) { return d === 1 ? 'день' : d >= 2 && d <= 4 ? 'дня' : 'дней'; }
  function getDate(d) {
    const date = new Date();
    date.setDate(date.getDate() + d);
    const m = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    return date.getDate() + ' ' + m[date.getMonth()];
  }
  
  function calc() {
    const a = parseInt(amountSlider.value);
    const d = parseInt(daysSlider.value);
    const i = Math.round(a * 0.01 * d);
    const t = a + i;
    document.getElementById('calc-amount-val').textContent = fmt(a) + ' ₽';
    document.getElementById('calc-days-val').textContent = d + ' ' + getDaysWord(d);
    document.getElementById('calc-loan').textContent = fmt(a) + ' ₽';
    document.getElementById('calc-return').textContent = fmt(a) + ' ₽';
    document.getElementById('calc-old').textContent = 'было ' + fmt(t) + ' ₽';
    document.getElementById('calc-date').textContent = getDate(d);
    document.getElementById('calc-save').textContent = fmt(i) + ' ₽';
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

      <Card className="rounded-2xl shadow-lg p-5 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 rounded-lg p-2">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Универсальный код</h3>
              <p className="text-xs text-green-700 font-semibold">⚡ Работает везде без ссылок!</p>
            </div>
          </div>
          <Button
            onClick={() => copyToClipboard(standaloneCode, 'универсальный код')}
            className="gap-2 bg-green-500 hover:bg-green-600"
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
          <pre className="text-xs md:text-sm text-green-400 font-mono whitespace-pre">
            {standaloneCode}
          </pre>
        </div>
        <div className="mt-4 space-y-3">
          <div className="p-4 bg-white rounded-lg border-2 border-green-300">
            <div className="flex items-start gap-2 mb-3">
              <Icon name="Rocket" size={20} className="text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Как использовать:</p>
                <p className="text-sm text-gray-600">Просто скопируйте и вставьте код в любое место на вашем сайте!</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="font-semibold text-sm">Копируйте код</span>
                </div>
                <p className="text-xs text-gray-600 ml-8">Нажмите кнопку "Копировать"</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="font-semibold text-sm">Вставьте на сайт</span>
                </div>
                <p className="text-xs text-gray-600 ml-8">В любой HTML блок</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white">
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



      <Card className="rounded-2xl shadow-lg p-5 md:p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
        <div className="flex items-start gap-3">
          <div className="bg-green-500 rounded-full p-2">
            <Icon name="Lightbulb" size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-3">Перед вставкой кода:</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <Icon name="MousePointerClick" size={16} className="text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">1. Опубликуйте калькулятор</p>
                  <p className="text-xs text-gray-600">Нажмите "Опубликовать" в редакторе poehali.dev</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <Icon name="Link" size={16} className="text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">2. Скопируйте URL</p>
                  <p className="text-xs text-gray-600">Замените 'ваш-сайт.ru' на ваш реальный URL</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <Icon name="Code" size={16} className="text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">3. Вставьте код</p>
                  <p className="text-xs text-gray-600">Используйте подходящий код для вашей платформы</p>
                </div>
              </div>
            </div>
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