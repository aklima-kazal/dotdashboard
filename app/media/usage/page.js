import PageHeader from '@/components/PageHeader'
import StatsCard from '@/components/StatsCard'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Image, Video, HardDrive, File } from 'lucide-react'

const mediaStats = [
  { file: 'tech-setup.jpg', type: 'Image', usedIn: 5, size: '2.4 MB' },
  { file: 'workspace.jpg', type: 'Image', usedIn: 3, size: '1.8 MB' },
  { file: 'product-demo.mp4', type: 'Video', usedIn: 2, size: '24.5 MB' },
  { file: 'code-screen.jpg', type: 'Image', usedIn: 8, size: '3.1 MB' },
]

export default function MediaUsage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Media Usage"
        description="Track how your media files are being used"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Files" value="247" icon={File} />
        <StatsCard title="Images" value="189" icon={Image} />
        <StatsCard title="Videos" value="58" icon={Video} />
        <StatsCard title="Storage Used" value="1.2 GB" icon={HardDrive} />
      </div>

      <Card className="rounded-xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Used In Articles</TableHead>
                <TableHead>Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mediaStats.map((media, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{media.file}</TableCell>
                  <TableCell>{media.type}</TableCell>
                  <TableCell>{media.usedIn} articles</TableCell>
                  <TableCell>{media.size}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
