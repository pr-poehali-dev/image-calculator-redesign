import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center py-2",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-3 sm:h-3.5 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-blue-100 to-blue-200 shadow-inner touch-manipulation">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-sm" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="relative block h-8 w-8 sm:h-9 sm:w-9 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg ring-4 ring-blue-100 transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing touch-manipulation before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-20" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }