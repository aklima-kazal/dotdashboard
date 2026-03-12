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
import { DollarSign, Eye, CheckCircle, XCircle } from 'lucide-react'

const sponsoredPosts = [
  {
    id: 1,
    title: 'Best Tech Gadgets 2026',
    sponsor: 'TechCorp Inc.',
    amount: '$1,200',
    status: 'approved',
    date: 'Feb 10, 2026',
  },
  {
    id: 2,
    title: 'Marketing Tools Review',
    sponsor: 'MarketPro',
    amount: '$950',
    status: 'pending',
    date: 'Feb 12, 2026',
  },
  {
    id: 3,
    title: 'Productivity Software Guide',
    sponsor: 'SoftSolutions',
    amount: '$800',
    status: 'approved',
    date: 'Feb 8, 2026',
  },
]

export default function SponsoredPosts() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Sponsored Posts"
        description="Manage sponsored content and partnerships"
        action={<Button>Add Sponsored Post</Button>}
      />
      <Card className="rounded-xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Sponsor</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sponsoredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      SPONSORED
                    </Badge>
                    {post.title}
                  </TableCell>
                  <TableCell>{post.sponsor}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 font-semibold text-green-600">
                      <DollarSign className="size-4" />
                      {post.amount}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        post.status === 'approved'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }
                    >
                      {post.status === 'approved' ? (
                        <CheckCircle className="size-3 mr-1" />
                      ) : (
                        <XCircle className="size-3 mr-1" />
                      )}
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost">
                      <Eye className="size-4" />
                    </Button>
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
