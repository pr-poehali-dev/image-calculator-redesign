import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

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

interface TextSettingsProps {
  texts: BlueCalculatorTexts;
  onTextsChange: (texts: BlueCalculatorTexts) => void;
}

const TextSettings = ({ texts, onTextsChange }: TextSettingsProps) => {
  const handleTextChange = (field: keyof BlueCalculatorTexts, value: string) => {
    onTextsChange({ ...texts, [field]: value });
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Icon name="Type" size={20} />
        Тексты
      </h3>
      <div className="space-y-4">
        <div>
          <Label>Заголовок</Label>
          <Input
            value={texts.title}
            onChange={(e) => handleTextChange('title', e.target.value)}
            placeholder="Первые три займа бесплатно!"
          />
        </div>
        <div>
          <Label>Подзаголовок</Label>
          <Input
            value={texts.subtitle}
            onChange={(e) => handleTextChange('subtitle', e.target.value)}
            placeholder="При условии возврата займа в срок"
          />
        </div>
        <div>
          <Label>Метка суммы</Label>
          <Input
            value={texts.amountLabel}
            onChange={(e) => handleTextChange('amountLabel', e.target.value)}
            placeholder="Сумма займа"
          />
        </div>
        <div>
          <Label>Метка возврата</Label>
          <Input
            value={texts.returnLabel}
            onChange={(e) => handleTextChange('returnLabel', e.target.value)}
            placeholder="Вы вернете"
          />
        </div>
        <div>
          <Label>Текст кнопки</Label>
          <Input
            value={texts.buttonText}
            onChange={(e) => handleTextChange('buttonText', e.target.value)}
            placeholder="Получить бесплатно"
          />
        </div>
        <div>
          <Label>Ссылка кнопки</Label>
          <Input
            value={texts.buttonLink}
            onChange={(e) => handleTextChange('buttonLink', e.target.value)}
            placeholder="https://example.com"
          />
        </div>
      </div>
    </div>
  );
};

export default TextSettings;
