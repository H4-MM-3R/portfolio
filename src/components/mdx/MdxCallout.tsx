"use client"

import { cn } from "@/lib/utils"
import { CalloutProps } from "@/types/nav"

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-md border-text border border-l-4 py-4 bg-background-highlights", {
        "border-red-900 bg-red": type === "danger",
        "border-yellow-900 bg-yellow": type === "warning",
      })}
      {...props}
    >
      {icon && <span className="mx-1 text-lg sm:text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  )
}
