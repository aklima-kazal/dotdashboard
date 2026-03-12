import PageHeader from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  FileText,
  MessageSquare,
  User,
  Settings,
  Eye,
  Edit,
  Trash2,
} from 'lucide-react'

const activities = [
  {
    id: 1,
    user: 'John Doe',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    action: 'published',
    type: 'article',
    target: '10 Tips for Better SEO in 2026',
    time: '5 minutes ago',
    icon: FileText,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 2,
    user: 'Sarah Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    action: 'commented on',
    type: 'comment',
    target: 'React Best Practices',
    time: '12 minutes ago',
    icon: MessageSquare,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 3,
    user: 'Mike Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    action: 'updated',
    type: 'article',
    target: 'Understanding JavaScript Closures',
    time: '1 hour ago',
    icon: Edit,
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    id: 4,
    user: 'Emily Brown',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    action: 'created draft',
    type: 'draft',
    target: 'Future of Web Development',
    time: '2 hours ago',
    icon: FileText,
    iconColor: 'text-gray-600',
    bgColor: 'bg-gray-50',
  },
  {
    id: 5,
    user: 'Alex Turner',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    action: 'viewed',
    type: 'view',
    target: 'Analytics Dashboard',
    time: '3 hours ago',
    icon: Eye,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 6,
    user: 'Lisa Wang',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    action: 'deleted',
    type: 'delete',
    target: 'Outdated Marketing Article',
    time: '4 hours ago',
    icon: Trash2,
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    id: 7,
    user: 'David Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    action: 'updated profile',
    type: 'user',
    target: 'Profile settings',
    time: '5 hours ago',
    icon: User,
    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    id: 8,
    user: 'System',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=System',
    action: 'auto-published',
    type: 'scheduled',
    target: 'Weekly Newsletter #47',
    time: '6 hours ago',
    icon: Settings,
    iconColor: 'text-teal-600',
    bgColor: 'bg-teal-50',
  },
]

export default function RecentActivity() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Recent Activity"
        description="Track all activities and changes in your news platform"
      />

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Activity</TabsTrigger>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                      <activity.icon
                        className={`size-5 ${activity.iconColor}`}
                      />
                    </div>
                    <Avatar className="size-10">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>{activity.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{' '}
                        <span className="text-gray-500">{activity.action}</span>{' '}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-gray-400">{activity.time}</p>
                        <Badge variant="secondary" className="text-xs">
                          {activity.type}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="today" className="mt-6">
          <Card className="rounded-xl">
            <CardContent className="p-6">
              <div className="space-y-4">
                {activities.slice(0, 3).map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                      <activity.icon
                        className={`size-5 ${activity.iconColor}`}
                      />
                    </div>
                    <Avatar className="size-10">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>{activity.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{' '}
                        <span className="text-gray-500">{activity.action}</span>{' '}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-gray-400">{activity.time}</p>
                        <Badge variant="secondary" className="text-xs">
                          {activity.type}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="mt-6">
          <Card className="rounded-xl">
            <CardContent className="p-6">
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                      <activity.icon
                        className={`size-5 ${activity.iconColor}`}
                      />
                    </div>
                    <Avatar className="size-10">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>{activity.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{' '}
                        <span className="text-gray-500">{activity.action}</span>{' '}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-gray-400">{activity.time}</p>
                        <Badge variant="secondary" className="text-xs">
                          {activity.type}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="month" className="mt-6">
          <Card className="rounded-xl">
            <CardContent className="p-6">
              <div className="text-center py-12 text-gray-500">
                <p>Showing activities from the past 30 days</p>
                <p className="text-sm mt-2">
                  Total activities: {activities.length * 4}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
