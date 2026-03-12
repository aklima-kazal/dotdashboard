import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Check, X } from 'lucide-react'

const pendingComments = [
  {
    id: 1,
    user: 'Bob Wilson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    comment: 'Could you elaborate on point #3?',
    article: 'JavaScript Closures',
    date: 'Feb 8, 2026',
  },
  {
    id: 2,
    user: 'Alice Brown',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    comment: 'Looking forward to more content like this!',
    article: 'Future of Web Dev',
    date: 'Feb 7, 2026',
  },
]

export default function Pending() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Pending Comments"
        description="Review and moderate pending comments"
      />
      <Card className="rounded-xl">
        <CardContent className="p-6 space-y-4">
          {pendingComments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 border-2 border-yellow-200 dark:border-yellow-900 rounded-lg bg-yellow-50 dark:bg-yellow-950"
            >
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={comment.avatar} />
                  <AvatarFallback>{comment.user[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <span className="font-medium">{comment.user}</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {comment.comment}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                    <span>On: {comment.article}</span>
                    <span>{comment.date}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Check className="size-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive">
                      <X className="size-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
