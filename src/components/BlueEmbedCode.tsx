import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface BlueCalculatorTexts {
  title: string;
  subtitle: string;
  amountLabel: string;
  returnLabel: string;
  buttonText: string;
  buttonLink: string;
  headerImage?: string;
  characterImage?: string;
}

interface BlueEmbedCodeProps {
  texts: BlueCalculatorTexts;
  calculatorWidth: number;
  minAmount: number;
  maxAmount: number;
  stepAmount: number;
  interestRate: number;
  showCharacter: boolean;
}

const BlueEmbedCode = ({
  texts,
  calculatorWidth,
  minAmount,
  maxAmount,
  stepAmount,
  interestRate,
  showCharacter,
}: BlueEmbedCodeProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const cssCode = useMemo(() => `#blue-loan-calculator {
  max-width: ${calculatorWidth}px !important;
  margin: 0 auto !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  box-sizing: border-box !important;
}
#blue-loan-calculator * {
  box-sizing: border-box !important;
}
#blue-loan-calculator .blue-header {
  background: linear-gradient(to bottom right, #22d3ee, #3b82f6) !important;
  border-radius: 24px 24px 0 0 !important;
  padding: 32px 24px !important;
  position: relative !important;
  overflow: hidden !important;
  min-height: 180px !important;
}
${texts.headerImage ? `
#blue-loan-calculator .blue-header::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background-image: url('${texts.headerImage}') !important;
  background-size: cover !important;
  background-position: center !important;
  opacity: 0.3 !important;
  z-index: 0 !important;
}` : ''}
#blue-loan-calculator .blue-header-content {
  position: relative !important;
  z-index: 1 !important;
}
#blue-loan-calculator .blue-header h1 {
  color: white !important;
  font-size: 36px !important;
  font-weight: bold !important;
  margin: 0 0 8px 0 !important;
  line-height: 1.2 !important;
}
#blue-loan-calculator .blue-header p {
  color: white !important;
  font-size: 18px !important;
  margin: 0 !important;
}
${showCharacter ? `
#blue-loan-calculator .blue-character {
  position: absolute !important;
  bottom: 0 !important;
  right: 0 !important;
  width: 192px !important;
  height: 192px !important;
  z-index: 1 !important;
}
#blue-loan-calculator .blue-character img {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
}` : ''}
#blue-loan-calculator .blue-body {
  background: white !important;
  border-radius: 0 0 24px 24px !important;
  padding: 32px 24px !important;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
  margin-top: -32px !important;
  position: relative !important;
  z-index: 2 !important;
}
#blue-loan-calculator .blue-card {
  background: white !important;
  border-radius: 16px !important;
  padding: 24px !important;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1) !important;
}
#blue-loan-calculator .blue-promo {
  text-align: center !important;
  margin-bottom: 32px !important;
}
#blue-loan-calculator .blue-promo h2 {
  font-size: 24px !important;
  font-weight: bold !important;
  margin: 0 0 8px 0 !important;
  color: #111827 !important;
}
#blue-loan-calculator .blue-promo .red-text {
  color: #ef4444 !important;
}
#blue-loan-calculator .blue-promo p {
  font-size: 14px !important;
  color: #6b7280 !important;
  margin: 0 !important;
}
#blue-loan-calculator .blue-amount-section {
  margin-bottom: 32px !important;
}
#blue-loan-calculator .blue-amount-label {
  display: flex !important;
  justify-content: space-between !important;
  align-items: baseline !important;
  margin-bottom: 16px !important;
  gap: 8px !important;
}
#blue-loan-calculator .blue-amount-label span:first-child {
  font-size: 20px !important;
  font-weight: 600 !important;
  color: #374151 !important;
}
#blue-loan-calculator .blue-amount-value {
  font-size: 48px !important;
  font-weight: bold !important;
  color: #111827 !important;
}
#blue-loan-calculator .blue-slider {
  width: 100% !important;
  height: 8px !important;
  background: #d1d5db !important;
  border-radius: 10px !important;
  outline: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  cursor: pointer !important;
  margin: 8px 0 16px 0 !important;
}
#blue-loan-calculator .blue-slider::-webkit-slider-track {
  height: 8px !important;
  background: #d1d5db !important;
  border-radius: 10px !important;
}
#blue-loan-calculator .blue-slider::-moz-range-track {
  height: 8px !important;
  background: #d1d5db !important;
  border-radius: 10px !important;
  border: none !important;
}
#blue-loan-calculator .blue-slider::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  background: linear-gradient(to bottom right, #fb923c, #f97316) !important;
  cursor: pointer !important;
  border: 3px solid white !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
}
#blue-loan-calculator .blue-slider::-moz-range-thumb {
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  background: linear-gradient(to bottom right, #fb923c, #f97316) !important;
  cursor: pointer !important;
  border: 3px solid white !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
}
#blue-loan-calculator .blue-return-box {
  background: #f9fafb !important;
  border-radius: 12px !important;
  padding: 16px !important;
  margin-bottom: 24px !important;
}
#blue-loan-calculator .blue-return-content {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  gap: 8px !important;
}
#blue-loan-calculator .blue-return-content span:first-child {
  font-size: 18px !important;
  color: #4b5563 !important;
}
#blue-loan-calculator .blue-return-values {
  text-align: right !important;
}
#blue-loan-calculator .blue-return-old {
  text-decoration: line-through !important;
  color: #9ca3af !important;
  font-size: 18px !important;
  margin-right: 8px !important;
}
#blue-loan-calculator .blue-return-new {
  font-size: 24px !important;
  font-weight: bold !important;
  color: #111827 !important;
}
#blue-loan-calculator .blue-button {
  width: 100% !important;
  background: linear-gradient(to right, #ef4444, #ec4899) !important;
  color: white !important;
  font-size: 20px !important;
  font-weight: bold !important;
  padding: 28px 24px !important;
  border: none !important;
  border-radius: 16px !important;
  cursor: pointer !important;
  box-shadow: 0 4px 20px rgba(239, 68, 68, 0.3) !important;
  transition: all 0.3s ease !important;
}
#blue-loan-calculator .blue-button:hover {
  background: linear-gradient(to right, #dc2626, #db2777) !important;
  box-shadow: 0 6px 25px rgba(239, 68, 68, 0.4) !important;
  transform: translateY(-2px) !important;
}
@media (max-width: 640px) {
  #blue-loan-calculator .blue-header {
    padding: 16px !important;
    min-height: 140px !important;
    border-radius: 16px 16px 0 0 !important;
  }
  #blue-loan-calculator .blue-header h1 {
    font-size: 20px !important;
  }
  #blue-loan-calculator .blue-header p {
    font-size: 14px !important;
  }
  #blue-loan-calculator .blue-character {
    width: 96px !important;
    height: 96px !important;
  }
  #blue-loan-calculator .blue-body {
    padding: 16px !important;
    margin-top: -16px !important;
    border-radius: 0 0 16px 16px !important;
  }
  #blue-loan-calculator .blue-card {
    padding: 16px !important;
  }
  #blue-loan-calculator .blue-promo h2 {
    font-size: 18px !important;
  }
  #blue-loan-calculator .blue-promo p {
    font-size: 12px !important;
  }
  #blue-loan-calculator .blue-amount-label span:first-child {
    font-size: 16px !important;
  }
  #blue-loan-calculator .blue-amount-value {
    font-size: 24px !important;
  }
  #blue-loan-calculator .blue-return-content span:first-child {
    font-size: 14px !important;
  }
  #blue-loan-calculator .blue-return-old {
    font-size: 14px !important;
  }
  #blue-loan-calculator .blue-return-new {
    font-size: 18px !important;
  }
  #blue-loan-calculator .blue-button {
    font-size: 16px !important;
    padding: 20px 16px !important;
  }
}`, [calculatorWidth, texts.headerImage, showCharacter]);

  const htmlCode = useMemo(() => {
    const characterImageSrc = texts.characterImage || 'https://cdn.poehali.dev/files/23264a37-7b0d-4b2e-8b9e-4d4af3979e60.jpg';
    
    return `<div id="blue-loan-calculator">
  <div class="blue-header">
    <div class="blue-header-content">
      <h1>${texts.title}</h1>
      <p>${texts.subtitle}</p>
    </div>
    ${showCharacter ? `<div class="blue-character">
      <img src="${characterImageSrc}" alt="Character">
    </div>` : ''}
  </div>
  <div class="blue-body">
    <div class="blue-card">
      <div class="blue-promo">
        <h2>Заём онлайн на карту <span class="red-text">от 0%</span></h2>
        <p>При условии возврата займа в срок</p>
      </div>
      <div class="blue-amount-section">
        <div class="blue-amount-label">
          <span>${texts.amountLabel}</span>
          <span class="blue-amount-value" id="blue-amount-display">${minAmount.toLocaleString('ru-RU')}₽</span>
        </div>
        <input 
          type="range" 
          class="blue-slider" 
          id="blue-amount-slider"
          min="${minAmount}" 
          max="${maxAmount}" 
          step="${stepAmount}" 
          value="${minAmount}"
        >
      </div>
      <div class="blue-return-box">
        <div class="blue-return-content">
          <span>${texts.returnLabel}</span>
          <div class="blue-return-values">
            ${interestRate > 0 ? `<span class="blue-return-old" id="blue-return-old">${Math.round(minAmount * (1 + interestRate / 100)).toLocaleString('ru-RU')}₽</span>` : ''}
            <span class="blue-return-new" id="blue-return-new">${minAmount.toLocaleString('ru-RU')}₽</span>
          </div>
        </div>
      </div>
      <button class="blue-button" onclick="window.open('${texts.buttonLink}', '_blank')">
        ${texts.buttonText}
      </button>
    </div>
  </div>
</div>`;
  }, [texts, minAmount, maxAmount, stepAmount, interestRate, showCharacter]);

  const jsCode = useMemo(() => `<script>
(function() {
  var slider = document.getElementById('blue-amount-slider');
  var display = document.getElementById('blue-amount-display');
  var returnNew = document.getElementById('blue-return-new');
  var returnOld = document.getElementById('blue-return-old');
  var interestRate = ${interestRate};
  
  function formatNumber(num) {
    return num.toLocaleString('ru-RU') + '₽';
  }
  
  function updateValues() {
    var amount = parseInt(slider.value);
    display.textContent = formatNumber(amount);
    returnNew.textContent = formatNumber(amount);
    if (returnOld && interestRate > 0) {
      returnOld.textContent = formatNumber(Math.round(amount * (1 + interestRate / 100)));
    }
  }
  
  slider.addEventListener('input', updateValues);
  updateValues();
})();
</script>`, [interestRate]);

  const fullCode = `<style>\n${cssCode}\n</style>\n\n${htmlCode}\n\n${jsCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    toast({
      title: "✅ Код скопирован!",
      description: "Вставьте код в HTML-блок на вашем сайте",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Icon name="Code" size={24} />
            Код для встраивания синего калькулятора
          </h2>
          <Button onClick={handleCopy} className="gap-2">
            <Icon name={copied ? "Check" : "Copy"} size={18} />
            {copied ? 'Скопировано!' : 'Скопировать код'}
          </Button>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap break-words">
            {fullCode}
          </pre>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <Icon name="Info" size={18} />
              Как встроить на Tilda
            </h3>
            <ol className="text-sm text-blue-800 space-y-2 ml-4 list-decimal">
              <li>Откройте страницу в редакторе Tilda</li>
              <li>Добавьте блок "T123 HTML-код"</li>
              <li>Вставьте скопированный код в поле</li>
              <li>Сохраните и опубликуйте страницу</li>
            </ol>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
              <Icon name="Info" size={18} />
              Для других платформ
            </h3>
            <ul className="text-sm text-green-800 space-y-2 ml-4 list-disc">
              <li><strong>WordPress:</strong> Вставьте код в блок "Произвольный HTML"</li>
              <li><strong>Wix:</strong> Добавьте элемент "Встраивание кода" и вставьте код</li>
              <li><strong>Bitrix:</strong> Используйте компонент "HTML-код"</li>
              <li><strong>Обычный сайт:</strong> Вставьте код в нужное место HTML</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlueEmbedCode;
