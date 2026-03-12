import { Card, CardContent } from './ui/card'
import { cn } from './ui/utils'

export default function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  subtitle,
}) {
  return (
    <Card className="rounded-xl">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-3xl font-semibold">{value}</p>
            {trend && (
              <div className="flex items-center gap-1">
                <span
                  className={cn(
                    'text-sm font-medium',
                    trend.isPositive ? 'text-green-600' : 'text-red-600'
                  )}
                >
                  {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                </span>
                <span className="text-sm text-gray-500">
                  {subtitle || 'vs last month'}
                </span>
              </div>
            )}
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-xl">
            <Icon className="size-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
