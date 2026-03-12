import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Edit, Trash2, Eye } from 'lucide-react'

const drafts = [
  {
    id: 1,
    title: 'Understanding JavaScript Closures',
    author: 'Mike Johnson',
    lastModified: 'Feb 8, 2026',
    wordCount: 850,
  },
  {
    id: 2,
    title: 'Web Performance Optimization Tips',
    author: 'Sarah Smith',
    lastModified: 'Feb 7, 2026',
    wordCount: 1200,
  },
  {
    id: 3,
    title: 'Introduction to TypeScript',
    author: 'Alex Turner',
    lastModified: 'Feb 6, 2026',
    wordCount: 650,
  },
]

export default function Drafts() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Draft Articles"
        description="Continue working on your unpublished articles"
      />
      <Card className="rounded-xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Word Count</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drafts.map((draft) => (
                <TableRow key={draft.id}>
                  <TableCell className="font-medium">{draft.title}</TableCell>
                  <TableCell>{draft.author}</TableCell>
                  <TableCell>{draft.wordCount} words</TableCell>
                  <TableCell>{draft.lastModified}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 text-gray-700"
                    >
                      Draft
                    </Badge>
                  </TableCell>
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
