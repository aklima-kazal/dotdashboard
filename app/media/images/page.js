'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Upload, Trash2, Download, Eye } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    name: 'tech-setup.jpg',
    size: '2.4 MB',
    date: 'Feb 10, 2026',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    name: 'workspace.jpg',
    size: '1.8 MB',
    date: 'Feb 9, 2026',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    name: 'code-screen.jpg',
    size: '3.1 MB',
    date: 'Feb 8, 2026',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    name: 'technology.jpg',
    size: '2.7 MB',
    date: 'Feb 7, 2026',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop',
    name: 'laptop-desk.jpg',
    size: '2.2 MB',
    date: 'Feb 6, 2026',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    name: 'coding.jpg',
    size: '2.9 MB',
    date: 'Feb 5, 2026',
  },
]

export default function Images() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <PageHeader
        title="Image Library"
        description="Manage your media images"
        action={
          <Button>
            <Upload className="size-4 mr-2" />
            Upload Images
          </Button>
        }
      />

      <Card className="rounded-xl">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input
              placeholder="Search images..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id} className="rounded-xl overflow-hidden group">
            <div className="relative aspect-video overflow-hidden">
              <ImageWithFallback
                src={image.url}
                alt={image.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <Button size="sm" variant="secondary">
                  <Eye className="size-4" />
                </Button>
                <Button size="sm" variant="secondary">
                  <Download className="size-4" />
                </Button>
                <Button size="sm" variant="secondary">
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="font-medium text-sm truncate">{image.name}</p>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{image.size}</span>
                <span>{image.date}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
