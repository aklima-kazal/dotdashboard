import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { GripVertical, Eye, Settings } from 'lucide-react'

const sections = [
  { id: 1, name: 'Hero Banner', enabled: true, articles: 1, position: 1 },
  { id: 2, name: 'Trending Now', enabled: true, articles: 5, position: 2 },
  { id: 3, name: "Editors' Picks", enabled: true, articles: 4, position: 3 },
  { id: 4, name: 'Latest Articles', enabled: true, articles: 10, position: 4 },
  { id: 5, name: 'Most Popular', enabled: false, articles: 8, position: 5 },
  { id: 6, name: 'From Our Network', enabled: true, articles: 6, position: 6 },
]

export default function FeaturedSections() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Featured Sections"
        description="Manage featured sections on your homepage"
        action={<Button>Add Section</Button>}
      />

      <Card className="rounded-xl">
        <CardContent className="p-6">
          <div className="space-y-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <GripVertical className="size-5 text-gray-400 cursor-move" />
                  <div>
                    <p className="font-medium">{section.name}</p>
                    <p className="text-sm text-gray-500">
                      {section.articles} articles • Position {section.position}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Switch checked={section.enabled} />
                  <Button variant="ghost" size="sm">
                    <Eye className="size-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Settings className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
