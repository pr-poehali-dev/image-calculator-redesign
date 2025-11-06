import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface CalculatorSettingsProps {
  minAmount: number;
  onMinAmountChange: (value: number) => void;
  maxAmount: number;
  onMaxAmountChange: (value: number) => void;
  stepAmount: number;
  onStepAmountChange: (value: number) => void;
  interestRate: number;
  onInterestRateChange: (value: number) => void;
}

const CalculatorSettings = ({
  minAmount,
  onMinAmountChange,
  maxAmount,
  onMaxAmountChange,
  stepAmount,
  onStepAmountChange,
  interestRate,
  onInterestRateChange,
}: CalculatorSettingsProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Icon name="Calculator" size={20} />
        Настройки калькулятора
      </h3>
      <div className="space-y-4">
        <div>
          <Label>Минимальная сумма (₽)</Label>
          <Input
            type="number"
            value={minAmount}
            onChange={(e) => onMinAmountChange(Number(e.target.value))}
            min={0}
          />
        </div>
        <div>
          <Label>Максимальная сумма (₽)</Label>
          <Input
            type="number"
            value={maxAmount}
            onChange={(e) => onMaxAmountChange(Number(e.target.value))}
            min={minAmount}
          />
        </div>
        <div>
          <Label>Шаг изменения (₽)</Label>
          <Input
            type="number"
            value={stepAmount}
            onChange={(e) => onStepAmountChange(Number(e.target.value))}
            min={1}
          />
        </div>
        <div>
          <Label>Процентная ставка (%)</Label>
          <Input
            type="number"
            value={interestRate}
            onChange={(e) => onInterestRateChange(Number(e.target.value))}
            min={0}
            max={100}
            step={0.1}
          />
          <p className="text-sm text-gray-500 mt-1">
            0% = бесплатный займ (зачеркнутая сумма не показывается)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSettings;
