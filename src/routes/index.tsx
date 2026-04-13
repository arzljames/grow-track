import { Calendar } from "@/components/ui/calendar"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ArtificialIntelligence01FreeIcons,
  ArtificialIntelligence08Icon,
  BabyBottleIcon,
  DiaperIcon,
  SleepingIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { createFileRoute } from "@tanstack/react-router"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const weeklyActivityData = [
  { day: "Mon", feeding: 7, sleeping: 13, diaper: 6 },
  { day: "Tue", feeding: 8, sleeping: 12, diaper: 5 },
  { day: "Wed", feeding: 6, sleeping: 14, diaper: 7 },
  { day: "Thu", feeding: 7, sleeping: 13, diaper: 6 },
  { day: "Fri", feeding: 9, sleeping: 11, diaper: 5 },
  { day: "Sat", feeding: 8, sleeping: 12, diaper: 6 },
  { day: "Sun", feeding: 7, sleeping: 13, diaper: 5 },
]

const chartConfig = {
  feeding: {
    label: "Feedings",
    color: "#67c49f",
  },
  sleeping: {
    label: "Sleep Hours",
    color: "#ffbfa3",
  },
  diaper: {
    label: "Diaper Changes",
    color: "#6ec1e4",
  },
} satisfies ChartConfig

function getCurrentWeekRange(date: Date) {
  const start = new Date(date)
  const day = start.getDay()
  const diff = day === 0 ? -6 : 1 - day

  start.setDate(start.getDate() + diff)
  start.setHours(0, 0, 0, 0)

  const end = new Date(start)
  end.setDate(start.getDate() + 6)
  end.setHours(23, 59, 59, 999)

  return { from: start, to: end }
}

const currentWeek = getCurrentWeekRange(new Date())

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <>
      <div className="flex w-full flex-row gap-4">
        <div className="flex flex-1 flex-col">
          <div className="flex w-full flex-1 justify-between gap-4">
            <Card className="flex-1 bg-[#67c49f] ring-0">
              <CardContent className="flex flex-row items-baseline">
                <HugeiconsIcon
                  size={26}
                  icon={BabyBottleIcon}
                  strokeWidth={1.5}
                  color="#FFF"
                />
                <div className="ml-6">
                  <h1 className="text-4xl font-bold text-white">0</h1>
                  <p className="text-white">Feedings Today</p>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 bg-[#6EC1E4] ring-0">
              <CardContent className="flex flex-row items-baseline">
                <HugeiconsIcon
                  size={26}
                  icon={DiaperIcon}
                  strokeWidth={1.5}
                  color="#FFF"
                />
                <div className="ml-6">
                  <h1 className="text-4xl font-bold text-white">0</h1>
                  <p className="text-white">Diapers Today</p>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 bg-[#FFBFA3] ring-0">
              <CardContent className="flex flex-row items-baseline">
                <HugeiconsIcon
                  size={26}
                  icon={SleepingIcon}
                  strokeWidth={1.5}
                  color="#FFF"
                />
                <div className="ml-6">
                  <h1 className="text-4xl font-bold text-white">0</h1>
                  <p className="text-white">Sleep Today</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-4 border-0 bg-white shadow-none ring-1 ring-gray-100">
            <CardHeader className="mb-0">
              <CardTitle>Weekly Activity</CardTitle>
              <CardDescription>Last 7 days</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ChartContainer config={chartConfig} className="h-[320px] w-full">
                <BarChart
                  accessibilityLayer
                  data={weeklyActivityData}
                  margin={{ left: 8, right: 8, top: 8 }}
                >
                  <CartesianGrid vertical={false} strokeDasharray="6 4" />
                  <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="feeding"
                    fill="var(--color-feeding)"
                    radius={[6, 6, 0, 0]}
                    barSize={20}
                  />
                  <Bar
                    dataKey="sleeping"
                    fill="var(--color-sleeping)"
                    radius={[6, 6, 0, 0]}
                    barSize={20}
                  />
                  <Bar
                    dataKey="diaper"
                    fill="var(--color-diaper)"
                    radius={[6, 6, 0, 0]}
                    barSize={20}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="max-h-150 w-full max-w-80 overflow-y-auto bg-white ring-0">
          <CardHeader>
            <HugeiconsIcon
              icon={ArtificialIntelligence08Icon}
              className="text-emerald-800"
            />
            <CardTitle>Activity AI Predictions</CardTitle>
            <CardDescription>
              Predicts baby sleep, feeding, and diaper patterns.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 pt-0">
            <Item className="rounded-none border-b border-b-gray-200">
              <ItemMedia variant="image">
                <HugeiconsIcon icon={BabyBottleIcon} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>02:25 PM</ItemTitle>
                <ItemDescription>
                  Feeding every 12 hours expected
                </ItemDescription>
              </ItemContent>
            </Item>
            <Item className="rounded-none border-b border-b-gray-200">
              <ItemMedia variant="image">
                <HugeiconsIcon icon={DiaperIcon} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>09:00 AM</ItemTitle>
                <ItemDescription>Wet diaper change needed soon</ItemDescription>
              </ItemContent>
            </Item>
            <Item className="rounded-none">
              <ItemMedia variant="image">
                <HugeiconsIcon icon={SleepingIcon} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>09:30 AM</ItemTitle>
                <ItemDescription>Nap after waking up possible</ItemDescription>
              </ItemContent>
            </Item>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 flex flex-row gap-4">
        <Card className="flex min-h-50 flex-1 ring-0">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Item className="bg-white">
              <ItemContent>
                <ItemTitle>09:30 AM</ItemTitle>
                <ItemDescription>Nap after waking up possible</ItemDescription>
              </ItemContent>
            </Item>
          </CardContent>
        </Card>
        <Card className="flex min-h-50 flex-1 ring-0">
          <CardHeader>
            <CardTitle>Appointment</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  )
}
