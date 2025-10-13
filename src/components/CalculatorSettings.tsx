import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

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

interface CalculatorSettingsProps {
  texts: CalculatorTexts;
  onTextsChange: (texts: CalculatorTexts) => void;
  colorScheme: string;
  onColorSchemeChange: (scheme: string) => void;
  designStyle: string;
  onDesignStyleChange: (style: string) => void;
}

const colorSchemes = [
  { id: 'teal', name: 'Бирюзовый', gradient: 'from-emerald-400 via-teal-400 to-cyan-400', text: 'teal-500', border: 'teal-400' },
  { id: 'purple', name: 'Фиолетовый', gradient: 'from-purple-400 via-violet-400 to-indigo-400', text: 'violet-500', border: 'violet-400' },
  { id: 'orange', name: 'Оранжевый', gradient: 'from-orange-400 via-amber-400 to-yellow-400', text: 'orange-500', border: 'orange-400' },
  { id: 'pink', name: 'Розовый', gradient: 'from-pink-400 via-rose-400 to-red-400', text: 'rose-500', border: 'rose-400' },
  { id: 'blue', name: 'Синий', gradient: 'from-blue-400 via-sky-400 to-cyan-400', text: 'blue-500', border: 'blue-400' },
  { id: 'green', name: 'Зелёный', gradient: 'from-green-400 via-emerald-400 to-teal-400', text: 'green-500', border: 'green-400' },
];

const designStyles = [
  { id: 'rounded', name: 'Закруглённый', preview: 'rounded-3xl' },
  { id: 'sharp', name: 'Острые углы', preview: 'rounded-lg' },
  { id: 'minimal', name: 'Минимализм', preview: 'rounded-xl' },
];

const CalculatorSettings = ({ 
  texts, 
  onTextsChange, 
  colorScheme, 
  onColorSchemeChange,
  designStyle,
  onDesignStyleChange 
}: CalculatorSettingsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTextChange = (field: keyof CalculatorTexts, value: string) => {
    onTextsChange({ ...texts, [field]: value });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
      >
        <Icon name="Settings" size={20} />
        {isOpen ? 'Скрыть настройки' : 'Настроить калькулятор'}
      </Button>

      {isOpen && (
        <div className="mt-4 bg-white rounded-2xl shadow-lg p-6 space-y-6 border border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Palette" size={20} />
              Цветовая схема
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {colorSchemes.map((scheme) => (
                <button
                  key={scheme.id}
                  onClick={() => onColorSchemeChange(scheme.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    colorScheme === scheme.id
                      ? 'border-gray-900 shadow-md'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <div className={`h-12 rounded-lg bg-gradient-to-r ${scheme.gradient} mb-2`}></div>
                  <div className="text-sm font-medium text-gray-700">{scheme.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Layout" size={20} />
              Стиль дизайна
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {designStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => onDesignStyleChange(style.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    designStyle === style.id
                      ? 'border-gray-900 shadow-md'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <div className={`h-12 bg-gray-200 ${style.preview} mb-2`}></div>
                  <div className="text-sm font-medium text-gray-700">{style.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="Type" size={20} />
              Тексты
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-sm font-medium text-gray-700">Заголовок</Label>
                <Input
                  id="title"
                  value={texts.title}
                  onChange={(e) => handleTextChange('title', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="subtitle" className="text-sm font-medium text-gray-700">Подзаголовок</Label>
                <Input
                  id="subtitle"
                  value={texts.subtitle}
                  onChange={(e) => handleTextChange('subtitle', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="amountLabel" className="text-sm font-medium text-gray-700">Метка суммы</Label>
                  <Input
                    id="amountLabel"
                    value={texts.amountLabel}
                    onChange={(e) => handleTextChange('amountLabel', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="daysLabel" className="text-sm font-medium text-gray-700">Метка срока</Label>
                  <Input
                    id="daysLabel"
                    value={texts.daysLabel}
                    onChange={(e) => handleTextChange('daysLabel', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="amountHint" className="text-sm font-medium text-gray-700">Подсказка суммы</Label>
                <Input
                  id="amountHint"
                  value={texts.amountHint}
                  onChange={(e) => handleTextChange('amountHint', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="daysHint" className="text-sm font-medium text-gray-700">Подсказка срока</Label>
                <Input
                  id="daysHint"
                  value={texts.daysHint}
                  onChange={(e) => handleTextChange('daysHint', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="button1Text" className="text-sm font-medium text-gray-700">Текст кнопки 1</Label>
                <Input
                  id="button1Text"
                  value={texts.button1Text}
                  onChange={(e) => handleTextChange('button1Text', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="button2Text" className="text-sm font-medium text-gray-700">Текст кнопки 2</Label>
                <Input
                  id="button2Text"
                  value={texts.button2Text}
                  onChange={(e) => handleTextChange('button2Text', e.target.value)}
                  className="mt-1"
                  placeholder="Получить"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorSettings;
