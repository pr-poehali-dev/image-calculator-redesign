import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const EmbedCode = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const tildaCode = `<style>
.loan-calc-container {
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}
.loan-calc-frame {
  width: 100%;
  height: 1000px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}
@media (max-width: 768px) {
  .loan-calc-frame {
    height: 1100px;
  }
}
</style>

<div class="loan-calc-container">
  <iframe 
    src="ВСТАВЬТЕ_ССЫЛКУ_НА_ВАШ_САЙТ_ЗДЕСЬ" 
    class="loan-calc-frame"
    frameborder="0"
    scrolling="no">
  </iframe>
</div>`;

  const embedCode = `<!-- Универсальная вставка для любого сайта -->
<div id="loan-calculator-widget"></div>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script>
  // Вставьте ссылку на ваш опубликованный сайт
  var calculatorUrl = 'https://ваш-сайт.ru';
  var div = document.getElementById('loan-calculator-widget');
  var iframe = document.createElement('iframe');
  iframe.src = calculatorUrl;
  iframe.style.cssText = 'width:100%;border:none;min-height:900px;border-radius:16px';
  div.appendChild(iframe);
</script>`;

  const wordpressCode = `<!-- Для WordPress: вставьте в HTML блок -->
<div id="loan-calculator-wp"></div>
<script>
jQuery(document).ready(function($){
  $('#loan-calculator-wp').html(
    '<iframe src="https://ваш-сайт.ru" style="width:100%;border:none;min-height:900px;border-radius:16px;box-shadow:0 10px 40px rgba(0,0,0,0.1)"></iframe>'
  );
});
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

      <Card className="rounded-2xl shadow-lg p-5 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 rounded-lg p-2">
              <Icon name="Layout" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Tilda</h3>
              <p className="text-xs text-gray-600">Блок T123 (HTML)</p>
            </div>
          </div>
          <Button
            onClick={() => copyToClipboard(tildaCode, 'Tilda')}
            className="gap-2 bg-orange-500 hover:bg-orange-600"
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
        <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs md:text-sm text-orange-400 font-mono whitespace-pre">
            {tildaCode}
          </pre>
        </div>
        <div className="mt-4 space-y-3">
          <div className="p-4 bg-white rounded-lg border-2 border-orange-300">
            <div className="flex items-start gap-2 mb-2">
              <Icon name="AlertCircle" size={18} className="text-orange-600 mt-0.5 shrink-0" />
              <p className="font-bold text-gray-900">Пошаговая инструкция для Tilda:</p>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 ml-6">
              <li className="pl-2">
                <span className="font-semibold">Опубликуйте калькулятор</span>
                <p className="text-xs text-gray-600 mt-0.5 ml-6">В редакторе poehali.dev нажмите "Опубликовать" и скопируйте URL</p>
              </li>
              <li className="pl-2">
                <span className="font-semibold">Откройте редактор Tilda</span>
                <p className="text-xs text-gray-600 mt-0.5 ml-6">Перейдите на страницу, куда хотите добавить калькулятор</p>
              </li>
              <li className="pl-2">
                <span className="font-semibold">Добавьте блок T123</span>
                <p className="text-xs text-gray-600 mt-0.5 ml-6">Нажмите "Добавить блок" → "Другое" → найдите "T123 HTML-код"</p>
              </li>
              <li className="pl-2">
                <span className="font-semibold">Вставьте код</span>
                <p className="text-xs text-gray-600 mt-0.5 ml-6">Скопируйте код выше и вставьте в блок T123</p>
              </li>
              <li className="pl-2">
                <span className="font-semibold">Замените ссылку</span>
                <p className="text-xs text-gray-600 mt-0.5 ml-6">Найдите <code className="bg-orange-100 px-1 rounded">ВСТАВЬТЕ_ССЫЛКУ_НА_ВАШ_САЙТ_ЗДЕСЬ</code> и замените на ваш URL</p>
              </li>
              <li className="pl-2">
                <span className="font-semibold">Сохраните и опубликуйте</span>
                <p className="text-xs text-gray-600 mt-0.5 ml-6">Нажмите "Сохранить" и "Опубликовать" страницу</p>
              </li>
            </ol>
          </div>
          
          <div className="p-3 bg-orange-100 rounded-lg flex items-start gap-2">
            <Icon name="Lightbulb" size={16} className="text-orange-600 mt-0.5 shrink-0" />
            <div className="text-xs text-gray-700">
              <p className="font-semibold mb-1">Совет:</p>
              <p>Если калькулятор обрезается, увеличьте значение <code className="bg-white px-1 rounded">height: 1000px</code> в коде</p>
            </div>
          </div>
        </div>
      </Card>

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
            Вставьте этот код в любое место HTML страницы
          </p>
        </div>
      </Card>

      <Card className="rounded-2xl shadow-lg p-5 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 rounded-lg p-2">
              <Icon name="FileText" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">WordPress</h3>
              <p className="text-xs text-gray-600">HTML блок</p>
            </div>
          </div>
          <Button
            onClick={() => copyToClipboard(wordpressCode, 'WordPress')}
            className="gap-2 bg-blue-500 hover:bg-blue-600"
            size="sm"
          >
            <Icon name="Copy" size={16} />
            <span className="hidden sm:inline">Копировать</span>
          </Button>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs md:text-sm text-blue-400 font-mono whitespace-pre">
            {wordpressCode}
          </pre>
        </div>
        <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
          <p className="text-sm text-gray-700">
            <Icon name="Info" size={16} className="inline mr-1 text-blue-500" />
            Добавьте HTML блок в редакторе WordPress и вставьте код
          </p>
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