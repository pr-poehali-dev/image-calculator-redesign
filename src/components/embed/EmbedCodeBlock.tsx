import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface EmbedCodeBlockProps {
  title: string;
  subtitle?: string;
  code: string;
  iconName: string;
  iconColor: string;
  buttonColor: string;
  textColor: string;
  borderColor: string;
  onCopy: () => void;
  showCopyLabel?: boolean;
  size?: 'small' | 'large';
}

const EmbedCodeBlock = ({
  title,
  subtitle,
  code,
  iconName,
  iconColor,
  buttonColor,
  textColor,
  borderColor,
  onCopy,
  showCopyLabel = true,
  size = 'small'
}: EmbedCodeBlockProps) => {
  const isLarge = size === 'large';

  return (
    <Card className={`${isLarge ? 'rounded-2xl shadow-lg p-5 md:p-6' : 'rounded-xl shadow-md p-4'} bg-${isLarge ? 'gradient-to-br from-teal-50 to-cyan-50' : 'white'} border-2 ${borderColor}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {isLarge && (
            <div className={`${buttonColor} rounded-lg p-2`}>
              <Icon name={iconName} size={24} className="text-white" />
            </div>
          )}
          {!isLarge && <Icon name={iconName} size={20} className={iconColor} />}
          <div>
            <h3 className={`${isLarge ? 'text-lg md:text-xl' : 'text-base'} font-bold text-gray-900`}>{title}</h3>
            {subtitle && <p className="text-xs text-teal-700 font-semibold">{subtitle}</p>}
          </div>
        </div>
        <Button
          onClick={onCopy}
          className={`gap-2 ${buttonColor} hover:${buttonColor.replace('bg-', 'bg-').replace('-500', '-600')} ${isLarge ? '' : 'h-8 px-2'}`}
          size="sm"
        >
          <Icon name="Copy" size={isLarge ? 16 : 14} />
          {showCopyLabel && isLarge && <span className="hidden sm:inline">Копировать всё</span>}
        </Button>
      </div>
      <div className={`bg-gray-900 ${isLarge ? 'rounded-xl' : 'rounded-lg'} p-${isLarge ? '4' : '3'} overflow-x-auto ${isLarge ? 'max-h-96' : 'max-h-48'}`}>
        <pre className={`${isLarge ? 'text-xs md:text-sm' : 'text-xs'} ${textColor} font-mono whitespace-pre`}>
          {code}
        </pre>
      </div>
    </Card>
  );
};

export default EmbedCodeBlock;
