import PageHeader from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import {
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  CheckCircle,
  XCircle,
} from 'lucide-react'

const platforms = [
  { name: 'Twitter', icon: Twitter, connected: true, autoShare: true },
  { name: 'Facebook', icon: Facebook, connected: true, autoShare: true },
  { name: 'LinkedIn', icon: Linkedin, connected: true, autoShare: false },
  { name: 'Instagram', icon: Instagram, connected: false, autoShare: false },
]

export default function AutoShareSettings() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Auto-Share Settings"
        description="Configure automatic social media sharing"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platforms.map((platform) => (
          <Card key={platform.name} className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <platform.icon className="size-6" />
                {platform.name}
                {platform.connected ? (
                  <Badge className="bg-green-100 text-green-700">
                    <CheckCircle className="size-3 mr-1" />
                    Connected
                  </Badge>
                ) : (
                  <Badge variant="secondary">
                    <XCircle className="size-3 mr-1" />
                    Not Connected
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Auto-share new articles</span>
                <Switch
                  checked={platform.autoShare}
                  disabled={!platform.connected}
                />
              </div>
              {platform.connected ? (
                <Button variant="outline" className="w-full">
                  Disconnect
                </Button>
              ) : (
                <Button className="w-full">Connect {platform.name}</Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
