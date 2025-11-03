export interface CalculatorTexts {
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

export interface LoanParams {
  minAmount: number;
  maxAmount: number;
  stepAmount: number;
  minDays: number;
  maxDays: number;
  stepDays: number;
  interestRate: number;
  calculateInterest: boolean;
}

export interface EmbedCodeProps {
  texts: CalculatorTexts;
  colorScheme: string;
  designStyle: string;
  calculatorWidth: number;
  sliderSize: number;
  sliderTrackColor: string;
  loanParams: LoanParams;
}
