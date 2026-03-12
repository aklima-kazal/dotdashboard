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
import { Calendar, Edit, Trash2 } from 'lucide-react'

const scheduled = [
  {
    id: 1,
    title: 'Future of Web Development',
    author: 'Emily Brown',
    scheduledFor: 'Feb 15, 2026 09:00 AM',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Weekly Newsletter #48',
    author: 'System',
    scheduledFor: 'Feb 16, 2026 08:00 AM',
    category: 'Newsletter',
  },
  {
    id: 3,
    title: 'Product Launch Announcement',
    author: 'Lisa Wang',
    scheduledFor: 'Feb 17, 2026 10:00 AM',
    category: 'Business',
  },
]

export default function Scheduled() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Scheduled Articles"
        description="Articles scheduled for future publication"
      />
      <Card className="rounded-xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Scheduled For</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduled.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{article.author}</TableCell>
                  <TableCell>{article.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4 text-blue-600" />
                      {article.scheduledFor}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-700"
                    >
                      Scheduled
                    </Badge>
                  </TableCell>
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
