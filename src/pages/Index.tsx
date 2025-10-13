import { useState } from 'react';
import LoanCalculator from '@/components/LoanCalculator';
import EmbedCode from '@/components/EmbedCode';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8 md:py-12 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-2 sm:mb-4">
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <Button
              onClick={() => setShowCode(false)}
              variant={!showCode ? "default" : "ghost"}
              className="rounded-full px-6"
            >
              <Icon name="Calculator" size={18} className="mr-2" />
              Калькулятор
            </Button>
            <Button
              onClick={() => setShowCode(true)}
              variant={showCode ? "default" : "ghost"}
              className="rounded-full px-6"
            >
              <Icon name="Code" size={18} className="mr-2" />
              Получить код
            </Button>
          </div>
        </div>

        {!showCode ? (
          <LoanCalculator />
        ) : (
          <EmbedCode />
        )}
      </div>
    </div>
  );
};

export default Index;