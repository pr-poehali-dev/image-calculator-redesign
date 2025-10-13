import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface CalculatorTexts {
  title: string;
  subtitle: string;
  amountLabel: string;
  daysLabel: string;
  amountHint: string;
  daysHint: string;
  button1Text: string;
  button2Text: string;
}

interface EmbedCodeProps {
  texts: CalculatorTexts;
  colorScheme: string;
  designStyle: string;
}

const EmbedCode = ({ texts, colorScheme, designStyle }: EmbedCodeProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const colorSchemes: Record<string, { cssGradient: string; cssText: string; cssBorder: string }> = {
    teal: { cssGradient: '#34d399, #14b8a6, #22d3ee', cssText: '#14b8a6', cssBorder: '#14b8a6' },
    purple: { cssGradient: '#a78bfa, #8b5cf6, #6366f1', cssText: '#8b5cf6', cssBorder: '#8b5cf6' },
    orange: { cssGradient: '#fb923c, #fbbf24, #facc15', cssText: '#f97316', cssBorder: '#f97316' },
    pink: { cssGradient: '#f472b6, #fb7185, #ef4444', cssText: '#fb7185', cssBorder: '#fb7185' },
    blue: { cssGradient: '#60a5fa, #38bdf8, #22d3ee', cssText: '#3b82f6', cssBorder: '#3b82f6' },
    green: { cssGradient: '#4ade80, #34d399, #14b8a6', cssText: '#22c55e', cssBorder: '#22c55e' },
  };

  const designStyles: Record<string, { borderRadius: string }> = {
    rounded: { borderRadius: '24px' },
    sharp: { borderRadius: '8px' },
    minimal: { borderRadius: '12px' },
  };

  const currentColor = colorSchemes[colorScheme] || colorSchemes.teal;
  const currentStyle = designStyles[designStyle] || designStyles.rounded;

  const cssCode = useMemo(() => `#loan-calculator {
  max-width: 672px !important;
  margin: 0 auto !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  box-sizing: border-box !important;
}
#loan-calculator * {
  box-sizing: border-box !important;
}
#loan-calculator .loan-calc-header {
  background: linear-gradient(to bottom right, ${currentColor.cssGradient}) !important;
  border-radius: ${currentStyle.borderRadius} ${currentStyle.borderRadius} 0 0 !important;
  padding: 24px 20px !important;
  text-align: center !important;
}
#loan-calculator .loan-calc-header h1 {
  color: white !important;
  font-size: 24px !important;
  font-weight: bold !important;
  margin: 0 0 12px 0 !important;
  line-height: 1.2 !important;
}
#loan-calculator .loan-calc-header p {
  color: white !important;
  font-size: 18px !important;
  font-weight: 500 !important;
  margin: 0 !important;
  line-height: 1.3 !important;
}
#loan-calculator .loan-calc-card {
  background: white !important;
  border-radius: 0 0 ${currentStyle.borderRadius} ${currentStyle.borderRadius} !important;
  padding: 20px !important;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
}
#loan-calculator .loan-calc-group {
  margin-bottom: 24px !important;
}
#loan-calculator .loan-calc-label {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  margin-bottom: 12px !important;
}
#loan-calculator .loan-calc-label span {
  font-size: 20px !important;
  font-weight: 600 !important;
  color: #111827 !important;
}
#loan-calculator .loan-calc-value {
  color: ${currentColor.cssText} !important;
  font-size: 24px !important;
  font-weight: bold !important;
}
#loan-calculator .loan-calc-slider {
  width: 100% !important;
  height: 8px !important;
  background: #d1d5db !important;
  border-radius: 10px !important;
  outline: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  cursor: pointer !important;
  margin: 8px 0 !important;
}
#loan-calculator .loan-calc-slider::-webkit-slider-track {
  height: 8px !important;
  background: #d1d5db !important;
  border-radius: 10px !important;
}
#loan-calculator .loan-calc-slider::-moz-range-track {
  height: 8px !important;
  background: #d1d5db !important;
  border-radius: 10px !important;
  border: none !important;
}
#loan-calculator .loan-calc-slider::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  background: linear-gradient(to bottom right, ${currentColor.cssGradient}) !important;
  cursor: pointer !important;
  border: 3px solid white !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
}
#loan-calculator .loan-calc-slider::-moz-range-thumb {
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  background: linear-gradient(to bottom right, ${currentColor.cssGradient}) !important;
  cursor: pointer !important;
  border: 3px solid white !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
}
#loan-calculator .loan-calc-hint {
  color: #9ca3af !important;
  font-size: 14px !important;
  margin-top: 8px !important;
}
#loan-calculator .loan-calc-btn {
  width: 100% !important;
  background: white !important;
  color: ${currentColor.cssText} !important;
  border: 3px solid ${currentColor.cssBorder} !important;
  border-radius: ${currentStyle.borderRadius} !important;
  padding: 14px !important;
  font-size: 18px !important;
  font-weight: bold !important;
  cursor: pointer !important;
  margin-bottom: 16px !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
  transition: background 0.2s !important;
  text-decoration: none !important;
  display: block !important;
  text-align: center !important;
}
#loan-calculator .loan-calc-btn:hover {
  background: #f0fdfa !important;
}
#loan-calculator .loan-calc-btn-primary {
  background: linear-gradient(to right, ${currentColor.cssGradient}) !important;
  color: white !important;
  border: none !important;
  margin-bottom: 0 !important;
}
#loan-calculator .loan-calc-btn-primary:hover {
  opacity: 0.9 !important;
}
@media (min-width: 640px) {
  #loan-calculator .loan-calc-header {
    border-radius: 20px 20px 0 0 !important;
    padding: 40px 32px !important;
  }
  #loan-calculator .loan-calc-header h1 {
    font-size: 40px !important;
    margin-bottom: 20px !important;
  }
  #loan-calculator .loan-calc-header p {
    font-size: 24px !important;
  }
  #loan-calculator .loan-calc-card {
    border-radius: 0 0 20px 20px !important;
    padding: 32px !important;
  }
  #loan-calculator .loan-calc-group {
    margin-bottom: 32px !important;
  }
  #loan-calculator .loan-calc-label {
    margin-bottom: 16px !important;
  }
  #loan-calculator .loan-calc-label span {
    font-size: 24px !important;
  }
  #loan-calculator .loan-calc-value {
    font-size: 32px !important;
  }
  #loan-calculator .loan-calc-slider::-webkit-slider-thumb {
    width: 44px !important;
    height: 44px !important;
    border: 4px solid white !important;
  }
  #loan-calculator .loan-calc-slider::-moz-range-thumb {
    width: 44px !important;
    height: 44px !important;
    border: 4px solid white !important;
  }
  #loan-calculator .loan-calc-hint {
    font-size: 16px !important;
  }
  #loan-calculator .loan-calc-btn {
    padding: 16px !important;
    font-size: 20px !important;
    margin-bottom: 20px !important;
  }
}
@media (min-width: 768px) {
  #loan-calculator .loan-calc-header {
    border-radius: 24px 24px 0 0 !important;
    padding: 48px 40px !important;
  }
  #loan-calculator .loan-calc-header h1 {
    font-size: 48px !important;
  }
  #loan-calculator .loan-calc-header p {
    font-size: 30px !important;
  }
  #loan-calculator .loan-calc-card {
    border-radius: 0 0 24px 24px !important;
    padding: 40px !important;
  }
  #loan-calculator .loan-calc-label span {
    font-size: 28px !important;
  }
  #loan-calculator .loan-calc-value {
    font-size: 36px !important;
  }
  #loan-calculator .loan-calc-slider::-webkit-slider-thumb {
    width: 48px !important;
    height: 48px !important;
  }
  #loan-calculator .loan-calc-slider::-moz-range-thumb {
    width: 48px !important;
    height: 48px !important;
  }
  #loan-calculator .loan-calc-btn {
    padding: 20px !important;
    font-size: 22px !important;
  }
}`, [colorScheme, designStyle]);

  const htmlCode = useMemo(() => `<div id="loan-calculator">
  <div class="loan-calc-header">
    <h1>${texts.title}</h1>
    <p>${texts.subtitle}</p>
  </div>
  <div class="loan-calc-card">
    <div class="loan-calc-group">
      <div class="loan-calc-label">
        <span>${texts.amountLabel}</span>
        <span class="loan-calc-value" id="amount-value">16 000 ₽</span>
      </div>
      <input type="range" min="3000" max="20000" step="1000" value="16000" class="loan-calc-slider" id="amount-slider">
      <div class="loan-calc-hint">${texts.amountHint}</div>
    </div>
    
    <div class="loan-calc-group">
      <div class="loan-calc-label">
        <span>${texts.daysLabel}</span>
        <span class="loan-calc-value" id="days-value">10 дней</span>
      </div>
      <input type="range" min="7" max="15" step="1" value="10" class="loan-calc-slider" id="days-slider">
      <div class="loan-calc-hint">${texts.daysHint}</div>
    </div>
    
    <button class="loan-calc-btn" onclick="alert('Переход: ${texts.button1Text}')">${texts.button1Text}</button>
    <button class="loan-calc-btn loan-calc-btn-primary" onclick="alert('Оформление займа')">${texts.button2Text} <span id="total-amount">16 000,00</span> ₽</button>
  </div>
</div>`, [texts]);

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

  const fullCode = useMemo(() => `<!-- КАЛЬКУЛЯТОР ЗАЙМОВ -->
<style>
${cssCode}
</style>

${htmlCode}

<script>
${jsCode}
</script>`, [cssCode, htmlCode, jsCode]);

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