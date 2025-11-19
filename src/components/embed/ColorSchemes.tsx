export interface ColorScheme {
  cssGradient: string;
  cssText: string;
  cssBorder: string;
}

export const colorSchemes: Record<string, ColorScheme> = {
  teal: { cssGradient: '#34d399, #14b8a6, #22d3ee', cssText: '#14b8a6', cssBorder: '#14b8a6' },
  purple: { cssGradient: '#a78bfa, #8b5cf6, #6366f1', cssText: '#8b5cf6', cssBorder: '#8b5cf6' },
  orange: { cssGradient: '#fb923c, #fbbf24, #facc15', cssText: '#f97316', cssBorder: '#f97316' },
  pink: { cssGradient: '#f472b6, #fb7185, #ef4444', cssText: '#fb7185', cssBorder: '#fb7185' },
  blue: { cssGradient: '#3b82f6, #2563eb, #4f46e5', cssText: '#2563eb', cssBorder: '#3b82f6' },
  green: { cssGradient: '#4ade80, #34d399, #14b8a6', cssText: '#22c55e', cssBorder: '#22c55e' },
};

export interface DesignStyle {
  cssGradient: string;
  borderRadius: string;
  shadow: string;
}

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