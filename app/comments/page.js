import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Check, X, Flag } from 'lucide-react'

const comments = [
  {
    id: 1,
    user: 'John Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    comment: 'Great article! Very informative.',
    article: '10 Tips for Better SEO',
    date: 'Feb 10, 2026',
    status: 'approved',
  },
  {
    id: 2,
    user: 'Jane Doe',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    comment: 'Thanks for sharing this!',
    article: 'React Best Practices',
    date: 'Feb 9, 2026',
    status: 'approved',
  },
  {
    id: 3,
    user: 'Bob Wilson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    comment: 'Could you elaborate on point #3?',
    article: 'JavaScript Closures',
    date: 'Feb 8, 2026',
    status: 'pending',
  },
]

export default function AllComments() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="All Comments"
        description="Manage user comments and feedback"
      />
      <Card className="rounded-xl">
        <CardContent className="p-6 space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={comment.avatar} />
                  <AvatarFallback>{comment.user[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{comment.user}</span>
                    <Badge
                      variant="secondary"
                      className={
                        comment.status === 'approved'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }
                    >
                      {comment.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {comment.comment}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>On: {comment.article}</span>
                    <span>{comment.date}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm">
                      <Check className="size-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline">
                      <X className="size-4 mr-1" />
                      Reject
                    </Button>
                    <Button size="sm" variant="outline">
                      <Flag className="size-4 mr-1" />
                      Report
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
