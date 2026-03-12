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
import { Eye, Check, X } from 'lucide-react'

const reports = [
  {
    id: 1,
    reporter: 'User123',
    comment: 'Inappropriate content',
    reason: 'Offensive language',
    date: 'Feb 10, 2026',
    status: 'open',
  },
  {
    id: 2,
    reporter: 'User456',
    comment: 'This is spam',
    reason: 'Spam',
    date: 'Feb 9, 2026',
    status: 'open',
  },
]

export default function UserReports() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="User Reports"
        description="Review user-reported comments"
      />
      <Card className="rounded-xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reporter</TableHead>
                <TableHead>Comment</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.reporter}</TableCell>
                  <TableCell>{report.comment}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{report.reason}</Badge>
                  </TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>
                    <Badge className="bg-orange-100 text-orange-700">
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Check className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
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
