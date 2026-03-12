'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Upload, Save, Send, Eye } from 'lucide-react'

export default function AddNew() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [featuredImage, setFeaturedImage] = useState(null)
  const featuredIsData =
    typeof featuredImage === 'string' && featuredImage.startsWith('data:')

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <PageHeader
        title="Add New Article"
        description="Create a new article for your news platform"
        action={
          <div className="flex gap-2">
            <Button variant="outline">
              <Eye className="size-4 mr-2" />
              Preview
            </Button>
            <Button variant="outline">
              <Save className="size-4 mr-2" />
              Save Draft
            </Button>
            <Button>
              <Send className="size-4 mr-2" />
              Publish
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-xl">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Article Title</Label>
                <Input
                  id="title"
                  placeholder="Enter article title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Write your article content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[500px] font-mono"
                />
                <p className="text-xs text-gray-500">
                  {content.split(' ').filter((word) => word.length > 0).length}{' '}
                  words
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card className="rounded-xl">
            <CardContent className="p-6">
              <Label>Featured Image</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                {featuredImage ? (
                  <div className="space-y-4">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image
                        src={featuredImage}
                        alt="Featured"
                        fill
                        className="object-cover"
                        unoptimized={featuredIsData}
                      />
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setFeaturedImage(null)}
                    >
                      Remove Image
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="size-12 mx-auto text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PNG, JPG or WebP (max. 5MB)
                      </p>
                    </div>
                    <Button variant="outline">Choose File</Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish Settings */}
          <Card className="rounded-xl">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Publish Settings</h3>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue="draft">
                  <SelectTrigger id="status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="pending">Pending Review</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="visibility">Visibility</Label>
                <Select defaultValue="public">
                  <SelectTrigger id="visibility">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="protected">
                      Password Protected
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="publish-date">Publish Date</Label>
                <Input type="datetime-local" id="publish-date" />
              </div>
            </CardContent>
          </Card>

          {/* Categories & Tags */}
          <Card className="rounded-xl">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Categories & Tags</h3>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" placeholder="Add tags separated by commas" />
                <p className="text-xs text-gray-500">
                  e.g., react, javascript, web development
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Article Settings */}
          <Card className="rounded-xl">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Article Settings</h3>

              <div className="flex items-center justify-between">
                <Label htmlFor="featured">Featured Article</Label>
                <Switch id="featured" />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="comments">Allow Comments</Label>
                <Switch id="comments" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="social">Auto-share to Social</Label>
                <Switch id="social" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Select defaultValue="current">
                  <SelectTrigger id="author">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current">Current User</SelectItem>
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="sarah">Sarah Smith</SelectItem>
                    <SelectItem value="mike">Mike Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* SEO Settings */}
          <Card className="rounded-xl">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">SEO Settings</h3>

              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input id="meta-title" placeholder="SEO title" maxLength={60} />
                <p className="text-xs text-gray-500">0/60 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meta-description">Meta Description</Label>
                <Textarea
                  id="meta-description"
                  placeholder="SEO description"
                  maxLength={160}
                  rows={3}
                />
                <p className="text-xs text-gray-500">0/160 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="focus-keyword">Focus Keyword</Label>
                <Input id="focus-keyword" placeholder="Primary SEO keyword" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
