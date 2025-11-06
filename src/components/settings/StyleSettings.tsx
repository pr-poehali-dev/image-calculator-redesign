import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface StyleSettingsProps {
  headerGradient: string;
  onHeaderGradientChange: (gradient: string) => void;
  sliderColor: string;
  onSliderColorChange: (color: string) => void;
  buttonColor: string;
  onButtonColorChange: (color: string) => void;
  buttonShape: string;
  onButtonShapeChange: (shape: string) => void;
  formBorderRadius: string;
  onFormBorderRadiusChange: (radius: string) => void;
  animationType: string;
  onAnimationTypeChange: (type: string) => void;
}

const StyleSettings = ({
  headerGradient,
  onHeaderGradientChange,
  sliderColor,
  onSliderColorChange,
  buttonColor,
  onButtonColorChange,
  buttonShape,
  onButtonShapeChange,
  formBorderRadius,
  onFormBorderRadiusChange,
  animationType,
  onAnimationTypeChange,
}: StyleSettingsProps) => {
  const gradientOptions = [
    { value: 'from-cyan-400 to-blue-500', label: 'Синий', preview: 'linear-gradient(to bottom right, #22d3ee, #3b82f6)' },
    { value: 'from-purple-400 to-pink-500', label: 'Фиолетовый', preview: 'linear-gradient(to bottom right, #c084fc, #ec4899)' },
    { value: 'from-orange-400 to-red-500', label: 'Оранжевый', preview: 'linear-gradient(to bottom right, #fb923c, #ef4444)' },
    { value: 'from-green-400 to-emerald-500', label: 'Зелёный', preview: 'linear-gradient(to bottom right, #4ade80, #10b981)' },
    { value: 'from-yellow-400 to-orange-500', label: 'Жёлтый', preview: 'linear-gradient(to bottom right, #facc15, #f97316)' },
    { value: 'from-indigo-400 to-purple-500', label: 'Индиго', preview: 'linear-gradient(to bottom right, #818cf8, #a855f7)' },
  ];

  const buttonColorOptions = [
    { value: 'from-blue-500 to-blue-600', label: 'Синяя', preview: 'linear-gradient(to right, #3b82f6, #2563eb)' },
    { value: 'from-green-500 to-green-600', label: 'Зелёная', preview: 'linear-gradient(to right, #22c55e, #16a34a)' },
    { value: 'from-red-500 to-red-600', label: 'Красная', preview: 'linear-gradient(to right, #ef4444, #dc2626)' },
    { value: 'from-orange-500 to-orange-600', label: 'Оранжевая', preview: 'linear-gradient(to right, #f97316, #ea580c)' },
    { value: 'from-purple-500 to-purple-600', label: 'Фиолетовая', preview: 'linear-gradient(to right, #a855f7, #9333ea)' },
    { value: 'from-yellow-500 to-yellow-600', label: 'Жёлтая', preview: 'linear-gradient(to right, #eab308, #ca8a04)' },
  ];

  const sliderColorOptions = [
    { value: '#fb923c', label: 'Оранжевый' },
    { value: '#3b82f6', label: 'Синий' },
    { value: '#22c55e', label: 'Зелёный' },
    { value: '#ef4444', label: 'Красный' },
    { value: '#a855f7', label: 'Фиолетовый' },
    { value: '#eab308', label: 'Жёлтый' },
  ];

  return (
    <>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="Palette" size={20} />
          Цвет шапки
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {gradientOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onHeaderGradientChange(option.value)}
              className={`p-3 rounded-lg border-2 transition-all ${
                headerGradient === option.value
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div
                className="w-full h-12 rounded-md mb-2"
                style={{ background: option.preview }}
              />
              <span className="text-sm font-medium">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="Sliders" size={20} />
          Цвет слайдера
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {sliderColorOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onSliderColorChange(option.value)}
              className={`p-3 rounded-lg border-2 transition-all ${
                sliderColor === option.value
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div
                className="w-full h-8 rounded-md mb-2"
                style={{ backgroundColor: option.value }}
              />
              <span className="text-xs font-medium">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="MousePointerClick" size={20} />
          Цвет кнопки
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {buttonColorOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onButtonColorChange(option.value)}
              className={`p-3 rounded-lg border-2 transition-all ${
                buttonColor === option.value
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div
                className="w-full h-12 rounded-md mb-2"
                style={{ background: option.preview }}
              />
              <span className="text-sm font-medium">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="Square" size={20} />
          Форма кнопки
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <Button
            type="button"
            variant={buttonShape === 'rounded' ? 'default' : 'outline'}
            onClick={() => onButtonShapeChange('rounded')}
            className="rounded-lg"
          >
            Скруглённая
          </Button>
          <Button
            type="button"
            variant={buttonShape === 'rounded-xl' ? 'default' : 'outline'}
            onClick={() => onButtonShapeChange('rounded-xl')}
            className="rounded-xl"
          >
            Средняя
          </Button>
          <Button
            type="button"
            variant={buttonShape === 'rounded-full' ? 'default' : 'outline'}
            onClick={() => onButtonShapeChange('rounded-full')}
            className="rounded-full"
          >
            Круглая
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="RectangleHorizontal" size={20} />
          Скругление формы
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Button
            type="button"
            variant={formBorderRadius === 'none' ? 'default' : 'outline'}
            onClick={() => onFormBorderRadiusChange('none')}
          >
            Нет
          </Button>
          <Button
            type="button"
            variant={formBorderRadius === 'lg' ? 'default' : 'outline'}
            onClick={() => onFormBorderRadiusChange('lg')}
          >
            Малое
          </Button>
          <Button
            type="button"
            variant={formBorderRadius === '2xl' ? 'default' : 'outline'}
            onClick={() => onFormBorderRadiusChange('2xl')}
          >
            Среднее
          </Button>
          <Button
            type="button"
            variant={formBorderRadius === '3xl' ? 'default' : 'outline'}
            onClick={() => onFormBorderRadiusChange('3xl')}
          >
            Большое
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="Sparkles" size={20} />
          Анимация появления
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Button
            type="button"
            variant={animationType === 'none' ? 'default' : 'outline'}
            onClick={() => onAnimationTypeChange('none')}
          >
            Нет
          </Button>
          <Button
            type="button"
            variant={animationType === 'slide' ? 'default' : 'outline'}
            onClick={() => onAnimationTypeChange('slide')}
          >
            Снизу
          </Button>
          <Button
            type="button"
            variant={animationType === 'fade' ? 'default' : 'outline'}
            onClick={() => onAnimationTypeChange('fade')}
          >
            Плавно
          </Button>
          <Button
            type="button"
            variant={animationType === 'bounce' ? 'default' : 'outline'}
            onClick={() => onAnimationTypeChange('bounce')}
          >
            Прыжок
          </Button>
        </div>
      </div>
    </>
  );
};

export default StyleSettings;
