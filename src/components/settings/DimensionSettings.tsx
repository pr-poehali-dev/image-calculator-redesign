import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface DimensionSettingsProps {
  calculatorWidth: number;
  onCalculatorWidthChange: (width: number) => void;
  mobileWidth: number;
  onMobileWidthChange: (width: number) => void;
  formHeight: number;
  onFormHeightChange: (height: number) => void;
  mobileFormHeight: number;
  onMobileFormHeightChange: (height: number) => void;
}

const DimensionSettings = ({
  calculatorWidth,
  onCalculatorWidthChange,
  mobileWidth,
  onMobileWidthChange,
  formHeight,
  onFormHeightChange,
  mobileFormHeight,
  onMobileFormHeightChange,
}: DimensionSettingsProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Icon name="Maximize2" size={20} />
        Размеры
      </h3>
      <div className="space-y-4">
        <div>
          <Label>Ширина на десктопе (px)</Label>
          <Input
            type="number"
            value={calculatorWidth}
            onChange={(e) => onCalculatorWidthChange(Number(e.target.value))}
            min={300}
            max={1200}
          />
        </div>
        <div>
          <Label>Ширина на мобильных (%)</Label>
          <Input
            type="number"
            value={mobileWidth}
            onChange={(e) => onMobileWidthChange(Number(e.target.value))}
            min={50}
            max={100}
          />
        </div>
        <div>
          <Label>Высота формы на десктопе (коэффициент)</Label>
          <Input
            type="number"
            value={formHeight}
            onChange={(e) => onFormHeightChange(Number(e.target.value))}
            min={50}
            max={200}
            step={10}
          />
          <p className="text-sm text-gray-500 mt-1">
            100 = стандартная высота. Увеличьте для большего пространства.
          </p>
        </div>
        <div>
          <Label>Высота формы на мобильных (коэффициент)</Label>
          <Input
            type="number"
            value={mobileFormHeight}
            onChange={(e) => onMobileFormHeightChange(Number(e.target.value))}
            min={50}
            max={200}
            step={10}
          />
          <p className="text-sm text-gray-500 mt-1">
            100 = стандартная высота. Увеличьте для большего пространства.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DimensionSettings;
