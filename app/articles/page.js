'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, Plus, Edit, Trash2, Eye, MoreHorizontal } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: '10 Tips for Better SEO in 2026',
    author: 'John Doe',
    category: 'Technology',
    status: 'published',
    views: '12.5K',
    date: 'Feb 10, 2026',
  },
  {
    id: 2,
    title: 'React Best Practices for Modern Apps',
    author: 'Sarah Smith',
    category: 'Development',
    status: 'published',
    views: '8.3K',
    date: 'Feb 9, 2026',
  },
  {
    id: 3,
    title: 'Understanding JavaScript Closures',
    author: 'Mike Johnson',
    category: 'Development',
    status: 'draft',
    views: '0',
    date: 'Feb 8, 2026',
  },
  {
    id: 4,
    title: 'Future of Web Development',
    author: 'Emily Brown',
    category: 'Technology',
    status: 'scheduled',
    views: '0',
    date: 'Feb 15, 2026',
  },
  {
    id: 5,
    title: 'The Rise of AI in Content Creation',
    author: 'Alex Turner',
    category: 'Technology',
    status: 'pending',
    views: '0',
    date: 'Feb 14, 2026',
  },
  {
    id: 6,
    title: '5 Marketing Strategies for 2026',
    author: 'Lisa Wang',
    category: 'Marketing',
    status: 'published',
    views: '15.2K',
    date: 'Feb 7, 2026',
  },
]

const statusColors = {
  published: 'bg-green-100 text-green-700',
  draft: 'bg-gray-100 text-gray-700',
  scheduled: 'bg-blue-100 text-blue-700',
  pending: 'bg-yellow-100 text-yellow-700',
}

export default function AllArticles() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  return (
    <div className="space-y-6">
      <PageHeader
        title="All Articles"
        description="Manage and view all your published and draft articles"
        action={
          <Button>
            <Plus className="size-4 mr-2" />
            Add New Article
          </Button>
        }
      />

      {/* Filters */}
      <Card className="rounded-xl">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by author" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Authors</SelectItem>
                <SelectItem value="john">John Doe</SelectItem>
                <SelectItem value="sarah">Sarah Smith</SelectItem>
                <SelectItem value="mike">Mike Johnson</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Articles Table */}
      <Card className="rounded-xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{article.author}</TableCell>
                  <TableCell>{article.category}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={statusColors[article.status]}
                    >
                      {article.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{article.views}</TableCell>
                  <TableCell>{article.date}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
