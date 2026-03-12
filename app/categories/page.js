'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Plus, Edit, Trash2, FolderTree } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Technology',
    slug: 'technology',
    articles: 142,
    parent: null,
  },
  {
    id: 2,
    name: 'Development',
    slug: 'development',
    articles: 98,
    parent: 'Technology',
  },
  { id: 3, name: 'Marketing', slug: 'marketing', articles: 67, parent: null },
  { id: 4, name: 'Business', slug: 'business', articles: 89, parent: null },
  { id: 5, name: 'Lifestyle', slug: 'lifestyle', articles: 54, parent: null },
]

export default function Categories() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Categories"
        description="Organize your articles with categories"
        action={
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus className="size-4 mr-2" />
            Add Category
          </Button>
        }
      />

      {showForm && (
        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category-name">Category Name</Label>
                <Input id="category-name" placeholder="Enter category name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category-slug">Slug</Label>
                <Input id="category-slug" placeholder="category-slug" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="category-description">Description</Label>
                <Textarea
                  id="category-description"
                  placeholder="Category description (optional)"
                />
              </div>
              <div className="md:col-span-2 flex gap-2">
                <Button>Create Category</Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="rounded-xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Parent</TableHead>
                <TableHead>Articles</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium flex items-center gap-2">
                    <FolderTree className="size-4 text-blue-600" />
                    {category.name}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {category.slug}
                  </TableCell>
                  <TableCell>{category.parent || '-'}</TableCell>
                  <TableCell>{category.articles} articles</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="size-4" />
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
