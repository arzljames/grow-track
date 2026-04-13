"use client"

import * as React from "react"
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { DayPicker } from "react-day-picker"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  weekOnly = false,
  ...props
}: React.ComponentProps<typeof DayPicker> & { weekOnly?: boolean }) {
  const id = React.useId().replace(/:/g, "")

  return (
    <div data-week-only={weekOnly} data-calendar-id={id}>
      {weekOnly ? (
        <style>
          {`
            [data-calendar-id="${id}"][data-week-only="true"] .rdp-month_caption {
              display: none;
            }

            [data-calendar-id="${id}"][data-week-only="true"] .rdp-week {
              display: none;
            }

            [data-calendar-id="${id}"][data-week-only="true"] .rdp-week:has(.rdp-range_start),
            [data-calendar-id="${id}"][data-week-only="true"] .rdp-week:has(.rdp-range_middle),
            [data-calendar-id="${id}"][data-week-only="true"] .rdp-week:has(.rdp-range_end),
            [data-calendar-id="${id}"][data-week-only="true"] .rdp-week:has(.rdp-selected) {
              display: table-row;
            }
          `}
        </style>
      ) : null}

      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          months: "flex flex-col gap-4",
          month: "flex flex-col gap-4",
          caption:
            "relative flex items-center justify-center pt-1 text-sm font-medium",
          caption_label: "text-sm font-semibold",
          nav: "flex items-center gap-1",
          button_previous: cn(
            buttonVariants({ variant: "ghost", size: "icon-sm" }),
            "absolute left-1 h-8 w-8 p-0 opacity-70 hover:opacity-100"
          ),
          button_next: cn(
            buttonVariants({ variant: "ghost", size: "icon-sm" }),
            "absolute right-1 h-8 w-8 p-0 opacity-70 hover:opacity-100"
          ),
          month_grid: "w-full border-collapse space-y-1",
          weekdays: "flex",
          weekday:
            "text-muted-foreground w-9 rounded-md text-[0.8rem] font-normal",
          week: "mt-2 flex w-full",
          day: "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
          range_start: "day-range-start",
          range_end: "day-range-end",
          selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          today: "bg-accent text-accent-foreground",
          outside:
            "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
          disabled: "text-muted-foreground opacity-50",
          range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          hidden: "invisible",
          ...classNames,
        }}
        components={{
          Chevron: ({ orientation }) =>
            orientation === "left" ? (
              <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={1.8} />
            ) : (
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.8} />
            ),
        }}
        {...props}
      />
    </div>
  )
}

export { Calendar }
