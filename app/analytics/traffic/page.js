'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import StatsCard from '@/components/StatsCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Eye, Users, Clock, TrendingUp } from 'lucide-react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const trafficData = [
  { date: 'Feb 1', pageViews: 12000, visitors: 8000, avgTime: 180 },
  { date: 'Feb 4', pageViews: 15000, visitors: 9500, avgTime: 195 },
  { date: 'Feb 7', pageViews: 13500, visitors: 8800, avgTime: 185 },
  { date: 'Feb 10', pageViews: 18000, visitors: 11000, avgTime: 210 },
  { date: 'Feb 13', pageViews: 16500, visitors: 10200, avgTime: 200 },
]

export default function TrafficOverview() {
  const [dateRange, setDateRange] = useState('7days')

  return (
    <div className="space-y-6">
      <PageHeader
        title="Traffic Overview"
        description="Monitor your website traffic and user behavior"
        action={
          <div className="flex gap-2">
            <Button
              variant={dateRange === '7days' ? 'default' : 'outline'}
              onClick={() => setDateRange('7days')}
            >
              7 Days
            </Button>
            <Button
              variant={dateRange === '30days' ? 'default' : 'outline'}
              onClick={() => setDateRange('30days')}
            >
              30 Days
            </Button>
            <Button
              variant={dateRange === '90days' ? 'default' : 'outline'}
              onClick={() => setDateRange('90days')}
            >
              90 Days
            </Button>
          </div>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Page Views"
          value="342K"
          icon={Eye}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Visitors"
          value="124K"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Avg. Session"
          value="4:32"
          icon={Clock}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Bounce Rate"
          value="32%"
          icon={TrendingUp}
          trend={{ value: 5, isPositive: false }}
        />
      </div>
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Traffic Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={trafficData}>
              <defs>
                <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="pageViews"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorPageViews)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
