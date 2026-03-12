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
import { GitBranch, Eye, RotateCcw } from 'lucide-react'

const revisions = [
  {
    id: 1,
    article: '10 Tips for Better SEO',
    version: 'v1.3',
    author: 'John Doe',
    date: 'Feb 10, 2026 14:30',
    changes: 'Updated statistics',
  },
  {
    id: 2,
    article: 'React Best Practices',
    version: 'v2.1',
    author: 'Sarah Smith',
    date: 'Feb 9, 2026 11:20',
    changes: 'Added new section',
  },
  {
    id: 3,
    article: 'JavaScript Closures',
    version: 'v1.0',
    author: 'Mike Johnson',
    date: 'Feb 8, 2026 16:45',
    changes: 'Initial version',
  },
]

export default function Revisions() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Article Revisions"
        description="Track and manage article version history"
      />
      <Card className="rounded-xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Article</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Changes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {revisions.map((revision) => (
                <TableRow key={revision.id}>
                  <TableCell className="font-medium">
                    {revision.article}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="gap-1">
                      <GitBranch className="size-3" />
                      {revision.version}
                    </Badge>
                  </TableCell>
                  <TableCell>{revision.author}</TableCell>
                  <TableCell>{revision.date}</TableCell>
                  <TableCell className="text-gray-600">
                    {revision.changes}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <RotateCcw className="size-4" />
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
