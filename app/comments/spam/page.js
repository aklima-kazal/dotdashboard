import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Trash2, RotateCcw } from 'lucide-react'

const spamComments = [
  {
    id: 1,
    user: 'Spammer123',
    comment: 'Click here for amazing deals!!!',
    article: 'Tech Article',
    date: 'Feb 6, 2026',
  },
  {
    id: 2,
    user: 'Bot456',
    comment: 'Visit my website for free stuff',
    article: 'Marketing Post',
    date: 'Feb 5, 2026',
  },
]

export default function Spam() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Spam Comments"
        description="Manage spam and unwanted comments"
        action={<Button variant="destructive">Delete All Spam</Button>}
      />
      <Card className="rounded-xl">
        <CardContent className="p-6 space-y-4">
          {spamComments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 border-2 border-red-200 dark:border-red-900 rounded-lg bg-red-50 dark:bg-red-950"
            >
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarFallback>{comment.user[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <span className="font-medium text-red-700 dark:text-red-400">
                    {comment.user}
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {comment.comment}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                    <span>On: {comment.article}</span>
                    <span>{comment.date}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline">
                      <RotateCcw className="size-4 mr-1" />
                      Not Spam
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash2 className="size-4 mr-1" />
                      Delete
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
