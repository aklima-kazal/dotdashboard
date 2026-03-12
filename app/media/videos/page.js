import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Trash2, Download, Eye } from 'lucide-react'

const videos = [
  {
    id: 1,
    title: 'Product Demo 2026',
    duration: '3:42',
    size: '24.5 MB',
    date: 'Feb 10, 2026',
    thumbnail:
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Tutorial: Getting Started',
    duration: '8:15',
    size: '68.2 MB',
    date: 'Feb 8, 2026',
    thumbnail:
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Company Overview',
    duration: '2:30',
    size: '18.7 MB',
    date: 'Feb 5, 2026',
    thumbnail:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop',
  },
]

export default function Videos() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Video Library"
        description="Manage your video content"
        action={<Button>Upload Video</Button>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="rounded-xl overflow-hidden group">
            <div className="relative aspect-video overflow-hidden bg-gray-900">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                  <Play
                    className="size-8 text-gray-900 ml-1"
                    fill="currentColor"
                  />
                </div>
              </div>
              <Badge className="absolute top-2 right-2 bg-black bg-opacity-70">
                {video.duration}
              </Badge>
            </div>
            <CardContent className="p-4">
              <p className="font-medium text-sm truncate">{video.title}</p>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{video.size}</span>
                <span>{video.date}</span>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="size-4" />
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Download className="size-4" />
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
