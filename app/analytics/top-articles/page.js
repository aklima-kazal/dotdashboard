'use client'

import PageHeader from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { TrendingUp, Eye } from 'lucide-react'

const topArticles = [
  {
    rank: 1,
    title: '10 Tips for Better SEO in 2026',
    views: '45.2K',
    trend: '+12%',
  },
  {
    rank: 2,
    title: 'React Best Practices for Modern Apps',
    views: '38.7K',
    trend: '+8%',
  },
  {
    rank: 3,
    title: '5 Marketing Strategies for 2026',
    views: '32.4K',
    trend: '+15%',
  },
  {
    rank: 4,
    title: 'Understanding JavaScript Closures',
    views: '28.9K',
    trend: '+5%',
  },
  {
    rank: 5,
    title: 'Future of Web Development',
    views: '25.1K',
    trend: '+10%',
  },
]

const chartData = topArticles.map((article) => ({
  name: `#${article.rank}`,
  views: parseInt(article.views.replace('K', '')) * 1000,
}))

export default function TopArticles() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Top Articles"
        description="Most viewed and trending articles"
      />
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Top 5 Articles by Views</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="rounded-xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Article Title</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topArticles.map((article) => (
                <TableRow key={article.rank}>
                  <TableCell className="font-medium">{article.rank}</TableCell>
                  <TableCell>{article.title}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Eye className="size-4" />
                    {article.views}
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-700">
                      <TrendingUp className="size-3 mr-1" />
                      {article.trend}
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
