'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Plus, X } from 'lucide-react'

const tags = [
  {
    id: 1,
    name: 'JavaScript',
    count: 45,
    color: 'bg-yellow-100 text-yellow-700',
  },
  { id: 2, name: 'React', count: 38, color: 'bg-blue-100 text-blue-700' },
  { id: 3, name: 'SEO', count: 29, color: 'bg-green-100 text-green-700' },
  {
    id: 4,
    name: 'Marketing',
    count: 27,
    color: 'bg-purple-100 text-purple-700',
  },
  {
    id: 5,
    name: 'TypeScript',
    count: 22,
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    id: 6,
    name: 'Web Development',
    count: 34,
    color: 'bg-pink-100 text-pink-700',
  },
  { id: 7, name: 'CSS', count: 19, color: 'bg-cyan-100 text-cyan-700' },
  { id: 8, name: 'Design', count: 16, color: 'bg-orange-100 text-orange-700' },
]

export default function Tags() {
  const [newTag, setNewTag] = useState('')

  return (
    <div className="space-y-6">
      <PageHeader
        title="Tags"
        description="Manage tags for better content organization"
      />

      <Card className="rounded-xl">
        <CardContent className="p-6 space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Add new tag..."
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            />
            <Button>
              <Plus className="size-4 mr-2" />
              Add Tag
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-xl">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Badge
                key={tag.id}
                variant="secondary"
                className={`${tag.color} text-sm py-2 px-4`}
              >
                {tag.name}
                <span className="ml-2 opacity-70">({tag.count})</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 h-auto p-0 hover:bg-transparent"
                >
                  <X className="size-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-xl">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Tag Cloud Visualization</h3>
          <div className="flex flex-wrap gap-2 items-center justify-center p-8">
            <span className="text-4xl font-bold text-blue-600">JavaScript</span>
            <span className="text-3xl font-semibold text-blue-500">React</span>
            <span className="text-2xl font-medium text-green-600">SEO</span>
            <span className="text-2xl font-medium text-purple-600">
              Marketing
            </span>
            <span className="text-xl text-indigo-600">TypeScript</span>
            <span className="text-3xl font-semibold text-pink-600">
              Web Development
            </span>
            <span className="text-lg text-cyan-600">CSS</span>
            <span className="text-lg text-orange-600">Design</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
