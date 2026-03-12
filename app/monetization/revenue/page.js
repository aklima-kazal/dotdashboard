'use client'

import PageHeader from '@/components/PageHeader'
import StatsCard from '@/components/StatsCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, TrendingUp, CreditCard, Wallet } from 'lucide-react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const revenueData = [
  { month: 'Jan', ads: 4200, sponsored: 2400, total: 6600 },
  { month: 'Feb', ads: 4500, sponsored: 3200, total: 7700 },
  { month: 'Mar', ads: 4800, sponsored: 2800, total: 7600 },
  { month: 'Apr', ads: 5200, sponsored: 3600, total: 8800 },
]

const payoutHistory = [
  {
    id: 1,
    date: 'Feb 1, 2026',
    amount: '$7,245',
    method: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 2,
    date: 'Jan 1, 2026',
    amount: '$6,890',
    method: 'PayPal',
    status: 'Completed',
  },
  {
    id: 3,
    date: 'Dec 1, 2025',
    amount: '$6,234',
    method: 'Bank Transfer',
    status: 'Completed',
  },
]

export default function RevenueOverview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Revenue Overview"
        description="Track your earnings and payouts"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$45,231"
          icon={DollarSign}
          trend={{ value: 23, isPositive: true }}
        />
        <StatsCard
          title="This Month"
          value="$8,842"
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Ad Revenue"
          value="$28,420"
          icon={CreditCard}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Sponsored"
          value="$16,811"
          icon={Wallet}
          trend={{ value: 35, isPositive: true }}
        />
      </div>
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Monthly Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorTotal)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Payout History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payoutHistory.map((payout) => (
                <TableRow key={payout.id}>
                  <TableCell>{payout.date}</TableCell>
                  <TableCell className="font-semibold">
                    {payout.amount}
                  </TableCell>
                  <TableCell>{payout.method}</TableCell>
                  <TableCell>{payout.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
