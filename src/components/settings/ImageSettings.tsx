import { Button } from '@/components/ui/button';
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

interface ImageSettingsProps {
  texts: BlueCalculatorTexts;
  onTextsChange: (texts: BlueCalculatorTexts) => void;
  showCharacter: boolean;
  onShowCharacterChange: (show: boolean) => void;
}

const ImageSettings = ({ 
  texts, 
  onTextsChange, 
  showCharacter, 
  onShowCharacterChange 
}: ImageSettingsProps) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onTextsChange({ ...texts, headerImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    onTextsChange({ ...texts, headerImage: '' });
  };

  const handleCharacterImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onTextsChange({ ...texts, characterImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCharacterImage = () => {
    onTextsChange({ ...texts, characterImage: '' });
  };

  return (
    <>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="Image" size={20} />
          Фоновое изображение
        </h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <label className="flex-1">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => document.getElementById('header-image-upload')?.click()}
              >
                <Icon name="Upload" size={16} className="mr-2" />
                Загрузить фон
              </Button>
              <input
                id="header-image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            {texts.headerImage && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleRemoveImage}
              >
                <Icon name="Trash2" size={16} />
              </Button>
            )}
          </div>
          {texts.headerImage && (
            <div className="rounded-lg overflow-hidden border-2 border-gray-200">
              <img src={texts.headerImage} alt="Header preview" className="w-full h-32 object-cover" />
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="User" size={20} />
          Персонаж
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Label className="flex-1">Показать персонажа</Label>
            <Button
              type="button"
              variant={showCharacter ? "default" : "outline"}
              size="sm"
              onClick={() => onShowCharacterChange(!showCharacter)}
            >
              {showCharacter ? 'Включено' : 'Выключено'}
            </Button>
          </div>
          {showCharacter && (
            <>
              <div className="flex gap-3">
                <label className="flex-1">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => document.getElementById('character-image-upload')?.click()}
                  >
                    <Icon name="Upload" size={16} className="mr-2" />
                    Загрузить персонажа
                  </Button>
                  <input
                    id="character-image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleCharacterImageUpload}
                    className="hidden"
                  />
                </label>
                {texts.characterImage && (
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={handleRemoveCharacterImage}
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                )}
              </div>
              {texts.characterImage && (
                <div className="rounded-lg overflow-hidden border-2 border-gray-200">
                  <img src={texts.characterImage} alt="Character preview" className="w-full h-32 object-contain bg-gray-50" />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageSettings;
