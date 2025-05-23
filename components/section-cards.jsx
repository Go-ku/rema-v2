import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Card 1 */}
      <Card className="@container/card">
        <CardHeader className="flex items-start justify-between">
          <div className="flex flex-col space-y-1 min-w-0">
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums break-all whitespace-normal">
              K1,250,000.00
            </CardTitle>
          </div>
          <CardAction>
            <Badge variant="outline" className="whitespace-nowrap">
              <IconTrendingUp className="mr-1" />+12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Revenue for the last 6 months
          </div>
        </CardFooter>
      </Card>

      {/* Card 2 */}
      <Card className="@container/card">
        <CardHeader className="flex items-start justify-between">
          <div className="flex flex-col space-y-1 min-w-0">
            <CardDescription>New Customers</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums break-all whitespace-normal">
              1,234,567,890
            </CardTitle>
          </div>
          <CardAction>
            <Badge variant="outline" className="whitespace-nowrap">
              <IconTrendingDown className="mr-1" />-20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>

      {/* Card 3 */}
      <Card className="@container/card">
        <CardHeader className="flex items-start justify-between">
          <div className="flex flex-col space-y-1 min-w-0">
            <CardDescription>Active Accounts</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums break-all whitespace-normal">
              45,678
            </CardTitle>
          </div>
          <CardAction>
            <Badge variant="outline" className="whitespace-nowrap">
              <IconTrendingUp className="mr-1" />+12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Engagement exceed targets
          </div>
        </CardFooter>
      </Card>

      {/* Card 4 */}
      <Card className="@container/card">
        <CardHeader className="flex items-start justify-between">
          <div className="flex flex-col space-y-1 min-w-0">
            <CardDescription>Growth Rate</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums break-all whitespace-normal">
              4.5%
            </CardTitle>
          </div>
          <CardAction>
            <Badge variant="outline" className="whitespace-nowrap">
              <IconTrendingUp className="mr-1" />+4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Meets growth projections
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
