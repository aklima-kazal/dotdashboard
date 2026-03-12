import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Clock, CheckCircle, AlertCircle } from 'lucide-react'

const assignments = [
  {
    id: 1,
    title: 'Review Tech Article',
    priority: 'high',
    assignee: 'Sarah',
    dueDate: 'Feb 15',
    status: 'in-progress',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    id: 2,
    title: 'Approve Product Review',
    priority: 'medium',
    assignee: 'Mike',
    dueDate: 'Feb 18',
    status: 'pending',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
  },
  {
    id: 3,
    title: 'Edit News Update',
    priority: 'high',
    assignee: 'John',
    dueDate: 'Feb 14',
    status: 'in-progress',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  },
  {
    id: 4,
    title: 'Review Comments',
    priority: 'low',
    assignee: 'Emily',
    dueDate: 'Feb 20',
    status: 'pending',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
  },
  {
    id: 5,
    title: 'Update Categories',
    priority: 'medium',
    assignee: 'Sarah',
    dueDate: 'Feb 16',
    status: 'pending',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
]

const priorityColors = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-yellow-100 text-yellow-700',
  low: 'bg-green-100 text-green-700',
}

const statusIcons = {
  'in-progress': <CheckCircle className="size-4 text-blue-500" />,
  pending: <AlertCircle className="size-4 text-orange-500" />,
  completed: <CheckCircle className="size-4 text-green-500" />,
}

export default function Assignments() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Task Assignments"
        description="Track and manage all assigned tasks"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((task) => (
          <Card
            key={task.id}
            className="rounded-xl hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg flex-1">{task.title}</h3>
                <Badge className={priorityColors[task.priority]}>
                  {task.priority}
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="size-8">
                  <AvatarImage src={task.avatar} />
                  <AvatarFallback>{task.assignee[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {task.assignee}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Clock className="size-4" />
                {task.dueDate}
              </div>
              <div className="flex items-center gap-2">
                {statusIcons[task.status]}
                <span className="text-sm capitalize">{task.status}</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
