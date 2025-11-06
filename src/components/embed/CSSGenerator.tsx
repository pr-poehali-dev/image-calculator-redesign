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

interface ColorScheme {
  cssGradient: string;
  cssText: string;
  cssBorder: string;
}

interface DesignStyle {
  cssGradient: string;
  borderRadius: string;
  shadow: string;
}

interface CSSGeneratorProps {
  texts: CalculatorTexts;
  currentColor: ColorScheme;
  currentStyle: DesignStyle;
  calculatorWidth: number;
  sliderSize: number;
  sliderTrackColor: string;
}

export const generateCSS = ({
  texts,
  currentColor,
  currentStyle,
  calculatorWidth,
  sliderSize,
  sliderTrackColor,
}: CSSGeneratorProps): string => {
  return `#loan-calculator {
  max-width: ${calculatorWidth}px !important;
  margin: 0 auto !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  box-sizing: border-box !important;
}
#loan-calculator * {
  box-sizing: border-box !important;
}
#loan-calculator .loan-calc-header {
  background: linear-gradient(to bottom right, ${currentStyle.cssGradient}) !important;
  border-radius: ${currentStyle.borderRadius} ${currentStyle.borderRadius} 0 0 !important;
  padding: 24px 20px !important;
  text-align: center !important;
  position: relative !important;
  overflow: hidden !important;
}
${texts.headerImage ? `
#loan-calculator .loan-calc-header::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background-image: url('${texts.headerImage}') !important;
  background-size: cover !important;
  background-position: center !important;
  opacity: ${(texts.headerImageOpacity || 30) / 100} !important;
  z-index: 0 !important;
}` : ''}
#loan-calculator .loan-calc-header * {
  position: relative !important;
  z-index: 1 !important;
}
#loan-calculator .loan-calc-header h1 {
  color: white !important;
  font-size: 24px !important;
  font-weight: bold !important;
  margin: 0 0 12px 0 !important;
  line-height: 1.2 !important;
}
#loan-calculator .loan-calc-header p {
  color: white !important;
  font-size: 18px !important;
  font-weight: 500 !important;
  margin: 0 !important;
  line-height: 1.3 !important;
}
#loan-calculator .loan-calc-card {
  background: white !important;
  border-radius: 0 0 ${currentStyle.borderRadius} ${currentStyle.borderRadius} !important;
  padding: 20px !important;
  box-shadow: ${currentStyle.shadow} !important;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
}
#loan-calculator .loan-calc-group {
  margin-bottom: 24px !important;
}
#loan-calculator .loan-calc-label {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  margin-bottom: 12px !important;
}
#loan-calculator .loan-calc-label span {
  font-size: 20px !important;
  font-weight: 600 !important;
  color: #111827 !important;
}
#loan-calculator .loan-calc-value {
  color: ${currentColor.cssText} !important;
  font-size: 24px !important;
  font-weight: bold !important;
}
#loan-calculator .loan-calc-slider {
  width: 100% !important;
  height: ${8 * sliderSize / 100}px !important;
  background: ${sliderTrackColor} !important;
  border-radius: 10px !important;
  outline: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  cursor: pointer !important;
  margin: 8px 0 !important;
  transform: scaleY(${sliderSize / 100}) !important;
  transform-origin: left center !important;
}
#loan-calculator .loan-calc-slider::-webkit-slider-track {
  height: 8px !important;
  background: ${sliderTrackColor} !important;
  border-radius: 10px !important;
}
#loan-calculator .loan-calc-slider::-moz-range-track {
  height: 8px !important;
  background: ${sliderTrackColor} !important;
  border-radius: 10px !important;
  border: none !important;
}
#loan-calculator .loan-calc-slider::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  width: ${36 * sliderSize / 100}px !important;
  height: ${36 * sliderSize / 100}px !important;
  border-radius: 50% !important;
  background: linear-gradient(to bottom right, ${currentColor.cssGradient}) !important;
  cursor: pointer !important;
  border: ${3 * sliderSize / 100}px solid white !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
}
#loan-calculator .loan-calc-slider::-moz-range-thumb {
  width: ${36 * sliderSize / 100}px !important;
  height: ${36 * sliderSize / 100}px !important;
  border-radius: 50% !important;
  background: linear-gradient(to bottom right, ${currentColor.cssGradient}) !important;
  cursor: pointer !important;
  border: ${3 * sliderSize / 100}px solid white !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
}
#loan-calculator .loan-calc-slider:hover::-webkit-slider-thumb {
  transform: scale(1.1) !important;
}
#loan-calculator .loan-calc-slider:hover::-moz-range-thumb {
  transform: scale(1.1) !important;
}
#loan-calculator .loan-calc-hint {
  font-size: 16px !important;
  color: #6b7280 !important;
  margin-top: 6px !important;
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
}
#loan-calculator .loan-calc-hint svg {
  width: 18px !important;
  height: 18px !important;
  flex-shrink: 0 !important;
  stroke: currentColor !important;
  fill: none !important;
  stroke-width: 2px !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
}
#loan-calculator .loan-calc-buttons {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 12px !important;
  margin-top: 24px !important;
}
#loan-calculator .loan-calc-btn {
  padding: 20px 24px !important;
  border-radius: 12px !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: all 0.2s !important;
  border: none !important;
  text-decoration: none !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
}
#loan-calculator .loan-calc-btn-primary {
  background: linear-gradient(to bottom right, ${currentColor.cssGradient}) !important;
  color: white !important;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
}
#loan-calculator .loan-calc-btn-primary:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 25px rgba(0,0,0,0.25) !important;
}
#loan-calculator .loan-calc-btn-primary:active {
  transform: translateY(0) !important;
}
#loan-calculator .loan-calc-btn-secondary {
  background: white !important;
  color: ${currentColor.cssText} !important;
  border: 2px solid ${currentColor.cssBorder} !important;
}
#loan-calculator .loan-calc-btn-secondary:hover {
  background: ${currentColor.cssText} !important;
  color: white !important;
}
#loan-calculator .loan-calc-btn svg {
  width: 20px !important;
  height: 20px !important;
  stroke: currentColor !important;
  fill: none !important;
  stroke-width: 2px !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
}
@media (max-width: 640px) {
  #loan-calculator {
    max-width: 100% !important;
  }
  #loan-calculator .loan-calc-header h1 {
    font-size: 20px !important;
  }
  #loan-calculator .loan-calc-header p {
    font-size: 16px !important;
  }
  #loan-calculator .loan-calc-label span {
    font-size: 18px !important;
  }
  #loan-calculator .loan-calc-value {
    font-size: 22px !important;
  }
  #loan-calculator .loan-calc-buttons {
    grid-template-columns: 1fr !important;
  }
  #loan-calculator .loan-calc-btn {
    font-size: 16px !important;
    padding: 16px 20px !important;
  }
}`;
};
