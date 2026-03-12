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
import { Check, X, Eye } from 'lucide-react'

const pendingArticles = [
  {
    id: 1,
    title: 'The Rise of AI in Content Creation',
    author: 'Alex Turner',
    category: 'Technology',
    date: 'Feb 14, 2026',
    wordCount: 1200,
    status: 'pending',
  },
  {
    id: 2,
    title: '5 Marketing Strategies for 2026',
    author: 'Lisa Wang',
    category: 'Marketing',
    date: 'Feb 13, 2026',
    wordCount: 850,
    status: 'pending',
  },
  {
    id: 3,
    title: 'Sustainable Living Tips for Urban Dwellers',
    author: 'David Chen',
    category: 'Lifestyle',
    date: 'Feb 13, 2026',
    wordCount: 980,
    status: 'pending',
  },
  {
    id: 4,
    title: 'Cryptocurrency Trends to Watch',
    author: 'Mike Johnson',
    category: 'Finance',
    date: 'Feb 12, 2026',
    wordCount: 1500,
    status: 'pending',
  },
  {
    id: 5,
    title: 'Remote Work Best Practices',
    author: 'Sarah Smith',
    category: 'Business',
    date: 'Feb 12, 2026',
    wordCount: 1100,
    status: 'pending',
  },
]

export default function PendingApprovals() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Pending Approvals"
        description="Review and approve articles waiting for publication"
        action={
          <div className="flex gap-2">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Sort</Button>
          </div>
        }
      />

      <Card className="rounded-xl">
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Word Count</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{article.author}</TableCell>
                  <TableCell>{article.category}</TableCell>
                  <TableCell>{article.wordCount} words</TableCell>
                  <TableCell>{article.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-700"
                    >
                      {article.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="size-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Check className="size-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <X className="size-4" />
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
