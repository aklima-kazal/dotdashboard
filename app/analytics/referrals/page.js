import PageHeader from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const referralSources = [
  { source: 'Google Search', visits: '45.2K', percentage: 38, change: '+12%' },
  { source: 'Direct', visits: '32.1K', percentage: 27, change: '+5%' },
  { source: 'Social Media', visits: '24.8K', percentage: 21, change: '+18%' },
  { source: 'Email', visits: '10.5K', percentage: 9, change: '+8%' },
  { source: 'Other', visits: '6.2K', percentage: 5, change: '-2%' },
]

export default function ReferralSources() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Referral Sources"
        description="Track where your traffic comes from"
      />
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-6">
            {referralSources.map((source) => (
              <div key={source.source}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{source.source}</span>
                  <span className="text-gray-600">
                    {source.visits} ({source.percentage}%)
                  </span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source</TableHead>
                <TableHead>Visits</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referralSources.map((source) => (
                <TableRow key={source.source}>
                  <TableCell className="font-medium">{source.source}</TableCell>
                  <TableCell>{source.visits}</TableCell>
                  <TableCell>{source.percentage}%</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        source.change.startsWith('+')
                          ? 'secondary'
                          : 'destructive'
                      }
                    >
                      {source.change}
                    </Badge>
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
