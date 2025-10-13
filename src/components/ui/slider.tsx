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
      "relative flex w-full touch-none select-none items-center py-3",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 sm:h-2.5 w-full grow overflow-hidden rounded-full bg-gray-300 touch-manipulation">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-teal-400 to-cyan-400" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="relative block h-10 w-10 sm:h-12 sm:w-12 rounded-full border-4 border-white bg-gradient-to-br from-teal-400 to-cyan-400 shadow-xl transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing touch-manipulation" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
