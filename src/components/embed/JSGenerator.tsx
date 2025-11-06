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

interface JSGeneratorProps {
  texts: CalculatorTexts;
  loanParams: LoanParams;
}

export const generateJS = ({
  texts,
  loanParams,
}: JSGeneratorProps): string => {
  return `(function() {
  const container = document.getElementById('loan-calculator');
  if (!container) return;

  const params = ${JSON.stringify(loanParams, null, 2)};
  let amount = params.minAmount;
  let days = params.minDays;

  function formatNumber(num) {
    return new Intl.NumberFormat('ru-RU').format(num);
  }

  function calculateInterest(amount, days, rate) {
    if (!params.calculateInterest || rate === 0) return 0;
    return (amount * rate * days) / (365 * 100);
  }

  function updateDisplay() {
    const amountValue = document.querySelector('#loan-calculator .loan-calc-value-amount');
    const daysValue = document.querySelector('#loan-calculator .loan-calc-value-days');
    if (amountValue) amountValue.textContent = formatNumber(amount) + '₽';
    if (daysValue) daysValue.textContent = days + ' дн.';
  }

  const html = \`
    <div class="loan-calc-header">
      <h1>${texts.title}</h1>
      <p>${texts.subtitle}</p>
    </div>
    <div class="loan-calc-card">
      <div class="loan-calc-group">
        <div class="loan-calc-label">
          <span>${texts.amountLabel}</span>
          <span class="loan-calc-value loan-calc-value-amount">\${formatNumber(amount)}₽</span>
        </div>
        <input 
          type="range" 
          class="loan-calc-slider" 
          id="amount-slider"
          min="\${params.minAmount}" 
          max="\${params.maxAmount}" 
          step="\${params.stepAmount}"
          value="\${amount}"
        />
        ${texts.amountHint ? `<div class="loan-calc-hint">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <span>${texts.amountHint}</span>
        </div>` : ''}
      </div>

      <div class="loan-calc-group">
        <div class="loan-calc-label">
          <span>${texts.daysLabel}</span>
          <span class="loan-calc-value loan-calc-value-days">\${days} дн.</span>
        </div>
        <input 
          type="range" 
          class="loan-calc-slider" 
          id="days-slider"
          min="\${params.minDays}" 
          max="\${params.maxDays}" 
          step="\${params.stepDays}"
          value="\${days}"
        />
        ${texts.daysHint ? `<div class="loan-calc-hint">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <span>${texts.daysHint}</span>
        </div>` : ''}
      </div>

      <div class="loan-calc-buttons">
        ${texts.button1Link ? `<a href="${texts.button1Link}" target="_blank" rel="noopener noreferrer" class="loan-calc-btn loan-calc-btn-primary">
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span>${texts.button1Text}</span>
        </a>` : ''}
        ${texts.button2Link ? `<a href="${texts.button2Link}" target="_blank" rel="noopener noreferrer" class="loan-calc-btn loan-calc-btn-secondary">
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span>${texts.button2Text}</span>
        </a>` : ''}
      </div>
    </div>
  \`;

  container.innerHTML = html;

  const amountSlider = document.getElementById('amount-slider');
  const daysSlider = document.getElementById('days-slider');

  if (amountSlider) {
    amountSlider.addEventListener('input', function(e) {
      amount = parseInt(e.target.value);
      updateDisplay();
    });
  }

  if (daysSlider) {
    daysSlider.addEventListener('input', function(e) {
      days = parseInt(e.target.value);
      updateDisplay();
    });
  }
})();`;
};
