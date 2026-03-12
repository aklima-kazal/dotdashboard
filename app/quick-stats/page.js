'use client'

import {
  FileText,
  Users,
  MessageSquare,
  Eye,
  Clock,
  CheckCircle,
  TrendingUp,
  TrendingDown,
} from 'lucide-react'
import StatsCard from '@/components/StatsCard'
import PageHeader from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const articleStats = [
  { name: 'Published', value: 234 },
  { name: 'Drafts', value: 45 },
  { name: 'Scheduled', value: 18 },
  { name: 'Pending', value: 12 },
]

const COLORS = ['#22c55e', '#6b7280', '#3b82f6', '#f59e0b']

const dailyPublications = [
  { day: 'Mon', articles: 12 },
  { day: 'Tue', articles: 15 },
  { day: 'Wed', articles: 10 },
  { day: 'Thu', articles: 18 },
  { day: 'Fri', articles: 14 },
  { day: 'Sat', articles: 8 },
  { day: 'Sun', articles: 6 },
]

export default function QuickStats() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Quick Stats"
        description="Real-time performance metrics and KPIs"
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Articles Published"
          value="234"
          icon={FileText}
          trend={{ value: 12, isPositive: true }}
          subtitle="this week"
        />
        <StatsCard
          title="Active Users"
          value="1,432"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
          subtitle="this week"
        />
        <StatsCard
          title="Comments"
          value="3,847"
          icon={MessageSquare}
          trend={{ value: 5, isPositive: false }}
          subtitle="this week"
        />
        <StatsCard
          title="Total Views"
          value="124K"
          icon={Eye}
          trend={{ value: 15, isPositive: true }}
          subtitle="this week"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Reading Time</p>
                <p className="text-2xl font-semibold mt-1">4:32</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="size-4 text-green-600" />
                  <span className="text-sm text-green-600">+18%</span>
                </div>
              </div>
              <Clock className="size-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Approval Rate</p>
                <p className="text-2xl font-semibold mt-1">94%</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="size-4 text-green-600" />
                  <span className="text-sm text-green-600">+3%</span>
                </div>
              </div>
              <CheckCircle className="size-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Bounce Rate</p>
                <p className="text-2xl font-semibold mt-1">32%</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingDown className="size-4 text-red-600" />
                  <span className="text-sm text-red-600">-7%</span>
                </div>
              </div>
              <TrendingDown className="size-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Article Status Distribution */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Article Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={articleStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {articleStats.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Daily Publications */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Daily Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyPublications}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  className="stroke-gray-200"
                />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Bar dataKey="articles" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Growth Indicators */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Growth Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Article Growth</span>
                <span className="text-sm font-medium text-green-600">+12%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-600 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">User Growth</span>
                <span className="text-sm font-medium text-green-600">+8%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-600 rounded-full"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Revenue Growth</span>
                <span className="text-sm font-medium text-green-600">+23%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-600 rounded-full"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Traffic Growth</span>
                <span className="text-sm font-medium text-red-600">-5%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-600 rounded-full"
                  style={{ width: '45%' }}
                ></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
