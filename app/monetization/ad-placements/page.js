import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { LayoutGrid, DollarSign } from 'lucide-react'

const adSlots = [
  {
    id: 1,
    name: 'Header Banner',
    size: '728x90',
    revenue: '$450',
    status: 'active',
  },
  {
    id: 2,
    name: 'Sidebar Top',
    size: '300x250',
    revenue: '$320',
    status: 'active',
  },
  {
    id: 3,
    name: 'In-Article',
    size: '300x600',
    revenue: '$280',
    status: 'active',
  },
  {
    id: 4,
    name: 'Footer',
    size: '728x90',
    revenue: '$180',
    status: 'inactive',
  },
]

export default function AdPlacements() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Ad Placements"
        description="Manage your advertising slots"
        action={<Button>Add New Slot</Button>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adSlots.map((slot) => (
          <Card key={slot.id} className="rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-xl">
                    <LayoutGrid className="size-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{slot.name}</h3>
                    <p className="text-sm text-gray-500">{slot.size}</p>
                  </div>
                </div>
                <Badge
                  className={
                    slot.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }
                >
                  {slot.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between py-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <DollarSign className="size-5 text-green-600" />
                  <span className="font-semibold text-lg">{slot.revenue}</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                <Switch checked={slot.status === 'active'} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
