'use client'

import PageHeader from '@/components/PageHeader'
import StatsCard from '@/components/StatsCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Share2, MessageCircle, TrendingUp } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const engagementData = [
  { day: 'Mon', likes: 240, shares: 120, comments: 80 },
  { day: 'Tue', likes: 300, shares: 150, comments: 90 },
  { day: 'Wed', likes: 280, shares: 140, comments: 75 },
  { day: 'Thu', likes: 350, shares: 180, comments: 110 },
  { day: 'Fri', likes: 400, shares: 200, comments: 130 },
  { day: 'Sat', likes: 320, shares: 160, comments: 95 },
  { day: 'Sun', likes: 290, shares: 145, comments: 85 },
]

export default function EngagementOverview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Social Engagement"
        description="Track your social media performance"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Likes"
          value="12.5K"
          icon={Heart}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Total Shares"
          value="6.2K"
          icon={Share2}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Comments"
          value="3.8K"
          icon={MessageCircle}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Engagement Rate"
          value="4.2%"
          icon={TrendingUp}
          trend={{ value: 5, isPositive: false }}
        />
      </div>
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Engagement Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="likes"
                stroke="#f43f5e"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="shares"
                stroke="#3b82f6"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="comments"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
