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
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-blue-100 to-blue-200 shadow-inner">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-sm" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="relative block h-7 w-7 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg ring-4 ring-blue-100 transition-all hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-20" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }