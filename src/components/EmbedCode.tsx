import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { colorSchemes, designStyles } from '@/components/embed/ColorSchemes';
import { generateCSS } from '@/components/embed/CSSGenerator';
import { generateJS } from '@/components/embed/JSGenerator';
import { generateHTML } from '@/components/embed/HTMLGenerator';

interface CalculatorTexts {
  title: string;
  subtitle: string;
  amountLabel: string;
  daysLabel: string;
  amountHint: string;
  daysHint: string;
  button1Text: string;
  button2Text: string;
  button1Link: string;
  button2Link: string;
  headerImage?: string;
  headerImageOpacity?: number;
}

interface LoanParams {
  minAmount: number;
  maxAmount: number;
  stepAmount: number;
  minDays: number;
  maxDays: number;
  stepDays: number;
  interestRate: number;
  calculateInterest: boolean;
}

interface EmbedCodeProps {
  texts: CalculatorTexts;
  colorScheme: string;
  designStyle: string;
  calculatorWidth: number;
  sliderSize: number;
  sliderTrackColor: string;
  loanParams: LoanParams;
}

const EmbedCode = ({ texts, colorScheme, designStyle, calculatorWidth, sliderSize, sliderTrackColor, loanParams }: EmbedCodeProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const currentColor = colorSchemes[colorScheme] || colorSchemes.teal;
  const currentStyle = designStyles[designStyle] || designStyles.rounded;

  const cssCode = useMemo(() => generateCSS({
    texts,
    currentColor,
    currentStyle,
    calculatorWidth,
    sliderSize,
    sliderTrackColor,
  }), [texts, currentColor, currentStyle, calculatorWidth, sliderSize, sliderTrackColor]);

  const jsCode = useMemo(() => generateJS({
    texts,
    loanParams,
  }), [texts, loanParams]);

  const htmlCode = useMemo(() => generateHTML({
    cssCode,
    jsCode,
  }), [cssCode, jsCode]);

  const embedCode = useMemo(() => `<div id="loan-calculator"></div>
<style>
${cssCode}
</style>
<script>
${jsCode}
</script>`, [cssCode, jsCode]);

  const handleCopy = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    toast({
      title: "✅ Скопировано!",
      description: message,
    });
  };

  const handleDownload = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "✅ Файл скачан!",
      description: `${filename} успешно сохранён`,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 mb-12">
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-500 rounded-lg">
            <Icon name="Code" size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Встроить калькулятор на сайт</h3>
            <p className="text-gray-600 mb-4">
              Скопируйте код ниже и вставьте его на свой сайт. Калькулятор будет работать автономно без зависимостей.
            </p>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Embed код (для вставки на сайт)</span>
                  <Button
                    size="sm"
                    onClick={() => handleCopy(embedCode, 'Код для встраивания скопирован в буфер обмена')}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Icon name={copied ? "Check" : "Copy"} size={16} className="mr-2" />
                    {copied ? 'Скопировано!' : 'Копировать'}
                  </Button>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm max-h-64">
                  <code>{embedCode}</code>
                </pre>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Полный HTML файл</span>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleCopy(htmlCode, 'HTML код скопирован в буфер обмена')}
                      variant="outline"
                    >
                      <Icon name="Copy" size={16} className="mr-2" />
                      Копировать
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleDownload(htmlCode, 'loan-calculator.html')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать HTML
                    </Button>
                  </div>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm max-h-64">
                  <code>{htmlCode}</code>
                </pre>
              </div>

              <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={20} className="text-blue-700 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    <p className="font-semibold mb-1">Инструкция по использованию:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Скопируйте embed код и вставьте в нужное место на вашем сайте</li>
                      <li>Или скачайте HTML файл и разместите на хостинге</li>
                      <li>Калькулятор автоматически адаптируется под мобильные устройства</li>
                      <li>Все настройки применяются сразу, обновите код для изменений</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EmbedCode;
