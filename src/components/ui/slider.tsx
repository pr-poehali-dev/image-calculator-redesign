import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { colorScheme?: string; trackColor?: string; customColor?: string }
>(({ className, colorScheme = 'teal', trackColor, customColor, ...props }, ref) => {
  const colorClasses: Record<string, { track: string; thumb: string }> = {
    teal: { track: 'bg-gradient-to-r from-teal-400 to-cyan-400', thumb: 'bg-gradient-to-br from-teal-400 to-cyan-400' },
    purple: { track: 'bg-gradient-to-r from-purple-400 to-indigo-400', thumb: 'bg-gradient-to-br from-purple-400 to-indigo-400' },
    orange: { track: 'bg-gradient-to-r from-orange-400 to-yellow-400', thumb: 'bg-gradient-to-br from-orange-400 to-yellow-400' },
    pink: { track: 'bg-gradient-to-r from-pink-400 to-red-400', thumb: 'bg-gradient-to-br from-pink-400 to-red-400' },
    blue: { track: 'bg-gradient-to-r from-blue-400 to-cyan-400', thumb: 'bg-gradient-to-br from-blue-400 to-cyan-400' },
    green: { track: 'bg-gradient-to-r from-green-400 to-teal-400', thumb: 'bg-gradient-to-br from-green-400 to-teal-400' },
  };

  const currentColor = colorClasses[colorScheme] || colorClasses.teal;

  return (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center py-3",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track 
      className="relative h-2 w-full grow overflow-hidden rounded-full touch-manipulation"
      style={{ backgroundColor: trackColor || '#d1d5db' }}
    >
      <SliderPrimitive.Range 
        className={customColor ? 'absolute h-full' : `absolute h-full ${currentColor.track}`}
        style={customColor ? { backgroundColor: customColor } : undefined}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb 
      className={customColor ? 'relative block h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full border-3 sm:border-4 border-white shadow-xl transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-opacity-30 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing touch-manipulation' : `relative block h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full border-3 sm:border-4 border-white ${currentColor.thumb} shadow-xl transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-opacity-30 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing touch-manipulation`}
      style={customColor ? { backgroundColor: customColor } : undefined}
    />
  </SliderPrimitive.Root>
  );
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }