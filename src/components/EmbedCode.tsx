import { useState, useMemo } from 'react';
import { useToast } from '@/hooks/use-toast';
import EmbedCodeBlock from '@/components/embed/EmbedCodeBlock';
import EmbedInstructions from '@/components/embed/EmbedInstructions';
import { generateCssCode, generateHtmlCode, generateJsCode, generateFullCode } from '@/components/embed/CodeGenerators';

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

  const cssCode = useMemo(() => 
    generateCssCode(colorScheme, designStyle, calculatorWidth, sliderSize, sliderTrackColor, texts),
    [colorScheme, designStyle, calculatorWidth, sliderSize, sliderTrackColor, texts]
  );

  const htmlCode = useMemo(() => 
    generateHtmlCode(texts, loanParams),
    [texts, loanParams]
  );

  const jsCode = useMemo(() => 
    generateJsCode(loanParams),
    [loanParams]
  );

  const fullCode = useMemo(() => 
    generateFullCode(cssCode, htmlCode, jsCode),
    [cssCode, htmlCode, jsCode]
  );

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

      <EmbedCodeBlock
        title="Полный код (всё в одном)"
        subtitle="⚡ CSS + HTML + JS"
        code={fullCode}
        iconName="Package"
        iconColor="text-teal-500"
        buttonColor="bg-teal-500"
        textColor="text-teal-400"
        borderColor="border-teal-300"
        onCopy={() => copyToClipboard(fullCode, 'Полный код')}
        showCopyLabel={!copied}
        size="large"
      />

      <div className="grid md:grid-cols-3 gap-4">
        <EmbedCodeBlock
          title="CSS стили"
          code={cssCode}
          iconName="Paintbrush"
          iconColor="text-purple-500"
          buttonColor="bg-purple-500"
          textColor="text-purple-400"
          borderColor="border-purple-200"
          onCopy={() => copyToClipboard(cssCode, 'CSS')}
          showCopyLabel={false}
          size="small"
        />

        <EmbedCodeBlock
          title="HTML разметка"
          code={htmlCode}
          iconName="Code"
          iconColor="text-blue-500"
          buttonColor="bg-blue-500"
          textColor="text-blue-400"
          borderColor="border-blue-200"
          onCopy={() => copyToClipboard(htmlCode, 'HTML')}
          showCopyLabel={false}
          size="small"
        />

        <EmbedCodeBlock
          title="JavaScript"
          code={jsCode}
          iconName="Zap"
          iconColor="text-yellow-500"
          buttonColor="bg-yellow-500"
          textColor="text-yellow-400"
          borderColor="border-yellow-200"
          onCopy={() => copyToClipboard(jsCode, 'JavaScript')}
          showCopyLabel={false}
          size="small"
        />
      </div>

      <EmbedInstructions />
    </div>
  );
};

export default EmbedCode;
