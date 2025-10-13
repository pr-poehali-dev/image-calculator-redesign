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

interface LoanParams {
  minAmount: number;
  maxAmount: number;
  stepAmount: number;
  minDays: number;
  maxDays: number;
  stepDays: number;
  interestRate: number;
  calculateInterest: boolean;
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

export const colorSchemes: Record<string, ColorScheme> = {
  teal: { cssGradient: '#34d399, #14b8a6, #22d3ee', cssText: '#14b8a6', cssBorder: '#14b8a6' },
  purple: { cssGradient: '#a78bfa, #8b5cf6, #6366f1', cssText: '#8b5cf6', cssBorder: '#8b5cf6' },
  orange: { cssGradient: '#fb923c, #fbbf24, #facc15', cssText: '#f97316', cssBorder: '#f97316' },
  pink: { cssGradient: '#f472b6, #fb7185, #ef4444', cssText: '#fb7185', cssBorder: '#fb7185' },
  blue: { cssGradient: '#60a5fa, #38bdf8, #22d3ee', cssText: '#3b82f6', cssBorder: '#3b82f6' },
  green: { cssGradient: '#4ade80, #34d399, #14b8a6', cssText: '#22c55e', cssBorder: '#22c55e' },
};

export const designStyles: Record<string, DesignStyle> = {
  rounded: { cssGradient: '#34d399, #14b8a6', borderRadius: '24px', shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
  sharp: { cssGradient: '#94a3b8, #6b7280', borderRadius: '8px', shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
  minimal: { cssGradient: '#d1d5db, #9ca3af', borderRadius: '12px', shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  'gradient-modern': { cssGradient: '#a855f7, #ec4899, #ef4444', borderRadius: '16px', shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
  neon: { cssGradient: '#22d3ee, #3b82f6, #9333ea', borderRadius: '24px', shadow: '0 0 30px rgba(0,200,255,0.5)' },
  sunset: { cssGradient: '#fb923c, #ec4899, #9333ea', borderRadius: '16px', shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
  ocean: { cssGradient: '#60a5fa, #22d3ee, #14b8a6', borderRadius: '24px', shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
  forest: { cssGradient: '#22c55e, #10b981, #0d9488', borderRadius: '16px', shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
  fire: { cssGradient: '#ef4444, #f97316, #facc15', borderRadius: '16px', shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
  pastel: { cssGradient: '#fbcfe8, #ddd6fe, #c7d2fe', borderRadius: '24px', shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  dark: { cssGradient: '#1f2937, #111827, #000000', borderRadius: '16px', shadow: '0 20px 25px -5px rgb(0 0 0 / 0.3)' },
  gold: { cssGradient: '#fbbf24, #f59e0b, #fb923c', borderRadius: '16px', shadow: '0 0 20px rgba(255,200,0,0.4)' },
  silver: { cssGradient: '#d1d5db, #94a3b8, #71717a', borderRadius: '16px', shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
  candy: { cssGradient: '#f472b6, #fb7185, #ef4444', borderRadius: '24px', shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
  mint: { cssGradient: '#86efac, #6ee7b7, #2dd4bf', borderRadius: '24px', shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  lavender: { cssGradient: '#d8b4fe, #c4b5fd, #a5b4fc', borderRadius: '24px', shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  retro: { cssGradient: '#fde047, #fb923c, #ef4444', borderRadius: '8px', shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
  cyber: { cssGradient: '#d946ef, #22d3ee, #facc15', borderRadius: '12px', shadow: '0 0 40px rgba(255,0,255,0.5)' },
  premium: { cssGradient: '#4f46e5, #7c3aed, #db2777', borderRadius: '16px', shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
  classic: { cssGradient: '#3b82f6, #1d4ed8', borderRadius: '12px', shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
};

export const generateCssCode = (
  colorScheme: string,
  designStyle: string,
  calculatorWidth: number,
  sliderSize: number,
  sliderTrackColor: string,
  texts: CalculatorTexts
): string => {
  const cc = colorSchemes[colorScheme] || colorSchemes.teal;
  const cs = designStyles[designStyle] || designStyles.rounded;
  const hi = texts.headerImage ? `#loan-calculator .loan-calc-header::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:url('${texts.headerImage}') center/cover;opacity:${(texts.headerImageOpacity || 30) / 100};z-index:0}` : '';
  return `#loan-calculator{max-width:${calculatorWidth}px;margin:0 auto;font-family:-apple-system,sans-serif}#loan-calculator *{box-sizing:border-box}#loan-calculator .loan-calc-header{background:linear-gradient(to bottom right,${cs.cssGradient});border-radius:${cs.borderRadius} ${cs.borderRadius} 0 0;padding:24px 20px;text-align:center;position:relative;overflow:hidden}${hi}#loan-calculator .loan-calc-header *{position:relative;z-index:1}#loan-calculator .loan-calc-header h1{color:#fff;font-size:24px;font-weight:700;margin:0 0 12px;line-height:1.2}#loan-calculator .loan-calc-header p{color:#fff;font-size:18px;font-weight:500;margin:0;line-height:1.3}#loan-calculator .loan-calc-card{background:#fff;border-radius:0 0 ${cs.borderRadius} ${cs.borderRadius};padding:20px;box-shadow:0 20px 50px rgba(0,0,0,.15)}#loan-calculator .loan-calc-group{margin-bottom:24px}#loan-calculator .loan-calc-label{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}#loan-calculator .loan-calc-label span{font-size:20px;font-weight:600;color:#111827}#loan-calculator .loan-calc-value{color:${cc.cssText};font-size:24px;font-weight:700}#loan-calculator .loan-calc-slider{width:100%;height:${8 * sliderSize / 100}px;background:${sliderTrackColor};border-radius:10px;outline:0;-webkit-appearance:none;appearance:none;cursor:pointer;margin:8px 0;transform:scaleY(${sliderSize / 100});transform-origin:left}#loan-calculator .loan-calc-slider::-webkit-slider-track{height:8px;background:${sliderTrackColor};border-radius:10px}#loan-calculator .loan-calc-slider::-moz-range-track{height:8px;background:${sliderTrackColor};border-radius:10px;border:0}#loan-calculator .loan-calc-slider::-webkit-slider-thumb{-webkit-appearance:none;width:${36 * sliderSize / 100}px;height:${36 * sliderSize / 100}px;border-radius:50%;background:linear-gradient(to bottom right,${cc.cssGradient});cursor:pointer;border:${3 * sliderSize / 100}px solid #fff;box-shadow:0 4px 12px rgba(0,0,0,.2)}#loan-calculator .loan-calc-slider::-moz-range-thumb{width:${36 * sliderSize / 100}px;height:${36 * sliderSize / 100}px;border-radius:50%;background:linear-gradient(to bottom right,${cc.cssGradient});cursor:pointer;border:${3 * sliderSize / 100}px solid #fff;box-shadow:0 4px 12px rgba(0,0,0,.2)}#loan-calculator .loan-calc-hint{color:#9ca3af;font-size:14px;margin-top:8px}#loan-calculator .loan-calc-btn{width:100%;background:#fff;color:${cc.cssText};border:3px solid ${cc.cssBorder};border-radius:${cs.borderRadius};padding:14px;font-size:18px;font-weight:700;cursor:pointer;margin-bottom:16px;box-shadow:0 4px 12px rgba(0,0,0,.1);transition:background .2s;text-decoration:none;display:block;text-align:center}#loan-calculator .loan-calc-btn:hover{background:#f0fdfa}#loan-calculator .loan-calc-btn-primary{background:linear-gradient(to right,${cc.cssGradient});color:#fff;border:0;margin-bottom:0}#loan-calculator .loan-calc-btn-primary:hover{opacity:.9}@media (min-width:640px){#loan-calculator .loan-calc-header{padding:40px 32px}#loan-calculator .loan-calc-header h1{font-size:40px;margin-bottom:20px}#loan-calculator .loan-calc-header p{font-size:24px}#loan-calculator .loan-calc-card{padding:32px}#loan-calculator .loan-calc-group{margin-bottom:32px}#loan-calculator .loan-calc-label{margin-bottom:16px}#loan-calculator .loan-calc-label span{font-size:24px}#loan-calculator .loan-calc-value{font-size:32px}#loan-calculator .loan-calc-slider::-webkit-slider-thumb{width:44px;height:44px;border:4px solid #fff}#loan-calculator .loan-calc-slider::-moz-range-thumb{width:44px;height:44px;border:4px solid #fff}#loan-calculator .loan-calc-hint{font-size:16px}#loan-calculator .loan-calc-btn{padding:16px;font-size:20px;margin-bottom:20px}}@media (min-width:768px){#loan-calculator .loan-calc-header{padding:48px 40px}#loan-calculator .loan-calc-header h1{font-size:48px}#loan-calculator .loan-calc-header p{font-size:30px}#loan-calculator .loan-calc-card{padding:40px}#loan-calculator .loan-calc-label span{font-size:28px}#loan-calculator .loan-calc-value{font-size:36px}#loan-calculator .loan-calc-slider::-webkit-slider-thumb{width:48px;height:48px}#loan-calculator .loan-calc-slider::-moz-range-thumb{width:48px;height:48px}#loan-calculator .loan-calc-btn{padding:20px;font-size:22px}}`;
};

export const generateHtmlCode = (texts: CalculatorTexts, loanParams: LoanParams): string => {
  const da = Math.min(16000, loanParams.maxAmount);
  const dd = Math.min(10, loanParams.maxDays);
  return `<div id="loan-calculator"><div class="loan-calc-header"><h1>${texts.title}</h1><p>${texts.subtitle}</p></div><div class="loan-calc-card"><div class="loan-calc-group"><div class="loan-calc-label"><span>${texts.amountLabel}</span><span class="loan-calc-value" id="amount-value">${da.toLocaleString('ru-RU')} ₽</span></div><input type="range" min="${loanParams.minAmount}" max="${loanParams.maxAmount}" step="${loanParams.stepAmount}" value="${da}" class="loan-calc-slider" id="amount-slider"><div class="loan-calc-hint">${texts.amountHint}</div></div><div class="loan-calc-group"><div class="loan-calc-label"><span>${texts.daysLabel}</span><span class="loan-calc-value" id="days-value">${dd} дней</span></div><input type="range" min="${loanParams.minDays}" max="${loanParams.maxDays}" step="${loanParams.stepDays}" value="${dd}" class="loan-calc-slider" id="days-slider"><div class="loan-calc-hint">${texts.daysHint}</div></div>${texts.button1Link ? `<a href="${texts.button1Link}" target="_blank" rel="noopener noreferrer" class="loan-calc-btn">${texts.button1Text}</a>` : `<button class="loan-calc-btn">${texts.button1Text}</button>`}${texts.button2Link ? `<a href="${texts.button2Link}" target="_blank" rel="noopener noreferrer" class="loan-calc-btn loan-calc-btn-primary">${texts.button2Text} <span id="total-amount">${da.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> ₽</a>` : `<button class="loan-calc-btn loan-calc-btn-primary">${texts.button2Text} <span id="total-amount">${da.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> ₽</button>`}</div></div>`;
};

export const generateJsCode = (loanParams: LoanParams): string => {
  return `(function(){const a=document.getElementById('amount-slider'),d=document.getElementById('days-slider'),av=document.getElementById('amount-value'),dv=document.getElementById('days-value'),t=document.getElementById('total-amount'),ci=${loanParams.calculateInterest},r=${loanParams.interestRate};function fn(n){return n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g,' ')}function fd(n){return n.toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g,' ').replace('.',',')}function ct(amt,days){return ci?amt+(amt*r/100*days):amt}function u(){const amt=parseInt(a.value),days=parseInt(d.value);av.textContent=fn(amt)+' ₽';dv.textContent=days+' дней';t.textContent=fd(ct(amt,days))}a.addEventListener('input',u);d.addEventListener('input',u);u()})();`;
};

export const generateFullCode = (cssCode: string, htmlCode: string, jsCode: string): string => {
  return `<style>${cssCode}</style>${htmlCode}<script>${jsCode}</script>`;
};
