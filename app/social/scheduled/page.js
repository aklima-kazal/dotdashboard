import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  Twitter,
  Facebook,
  Linkedin,
  Edit,
  Trash2,
} from 'lucide-react'

const scheduledPosts = [
  {
    id: 1,
    title: '10 Tips for Better SEO',
    platforms: ['Twitter', 'Facebook'],
    scheduledFor: 'Feb 15, 2026 10:00 AM',
  },
  {
    id: 2,
    title: 'React Best Practices',
    platforms: ['Twitter', 'LinkedIn'],
    scheduledFor: 'Feb 16, 2026 09:00 AM',
  },
  {
    id: 3,
    title: 'Marketing Strategies',
    platforms: ['Facebook', 'LinkedIn'],
    scheduledFor: 'Feb 17, 2026 11:00 AM',
  },
]

const platformIcons = { Twitter, Facebook, LinkedIn: Linkedin }

export default function ScheduledPosts() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Scheduled Social Posts"
        description="Manage your scheduled social media posts"
        action={<Button>Schedule New Post</Button>}
      />
      <div className="grid grid-cols-1 gap-4">
        {scheduledPosts.map((post) => (
          <Card key={post.id} className="rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{post.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      {post.scheduledFor}
                    </div>
                    <div className="flex items-center gap-2">
                      {post.platforms.map((platform) => {
                        const Icon = platformIcons[platform]
                        return (
                          <Badge key={platform} variant="secondary">
                            <Icon className="size-3 mr-1" />
                            {platform}
                          </Badge>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">
                    <Edit className="size-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
