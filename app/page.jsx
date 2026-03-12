'use client'

import {
  FileText,
  Users,
  DollarSign,
  TrendingUp,
  Eye,
  MessageSquare,
} from 'lucide-react'
import StatsCard from '@/components/StatsCard'
import PageHeader from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const trafficData = [
  { name: 'Mon', visits: 4000 },
  { name: 'Tue', visits: 3000 },
  { name: 'Wed', visits: 5000 },
  { name: 'Thu', visits: 4500 },
  { name: 'Fri', visits: 6000 },
  { name: 'Sat', visits: 5500 },
  { name: 'Sun', visits: 4800 },
]

const recentActivity = [
  {
    user: 'John Doe',
    action: 'Published article',
    article: '10 Tips for Better SEO',
    time: '5 minutes ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  },
  {
    user: 'Sarah Smith',
    action: 'Commented on',
    article: 'React Best Practices 2026',
    time: '12 minutes ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    user: 'Mike Johnson',
    action: 'Updated article',
    article: 'Understanding JavaScript Closures',
    time: '1 hour ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
  },
  {
    user: 'Emily Brown',
    action: 'Created draft',
    article: 'Future of Web Development',
    time: '2 hours ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
  },
]

const pendingApprovals = [
  {
    title: 'The Rise of AI in Content Creation',
    author: 'Alex Turner',
    category: 'Technology',
    date: 'Feb 14, 2026',
    status: 'pending',
  },
  {
    title: '5 Marketing Strategies for 2026',
    author: 'Lisa Wang',
    category: 'Marketing',
    date: 'Feb 13, 2026',
    status: 'pending',
  },
  {
    title: 'Sustainable Living Tips',
    author: 'David Chen',
    category: 'Lifestyle',
    date: 'Feb 13, 2026',
    status: 'pending',
  },
]

export default function Overview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard Overview"
        description="Welcome back! Here's what's happening with your news platform today."
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Articles"
          value="2,847"
          icon={FileText}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Total Users"
          value="18,234"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Revenue"
          value="$45,231"
          icon={DollarSign}
          trend={{ value: 23, isPositive: true }}
        />
        <StatsCard
          title="Page Views"
          value="342K"
          icon={TrendingUp}
          trend={{ value: 5, isPositive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Chart */}
        <Card className="lg:col-span-2 rounded-xl">
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  className="stroke-gray-200"
                />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="visits"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorVisits)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <FileText className="size-4 mr-2" />
              New Article
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="size-4 mr-2" />
              Add User
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="size-4 mr-2" />
              Review Comments
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Eye className="size-4 mr-2" />
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Avatar className="size-10">
                    <AvatarImage src={activity.avatar} />
                    <AvatarFallback>{activity.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-gray-500">{activity.action}</span>{' '}
                      <span className="font-medium">{activity.article}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingApprovals.map((article, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-medium text-sm">{article.title}</h4>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-700"
                    >
                      Pending
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>{article.author}</span>
                      <span>{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="h-7 text-xs">
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="h-7 text-xs">
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
