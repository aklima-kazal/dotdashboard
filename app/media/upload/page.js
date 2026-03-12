'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Upload, File, X } from 'lucide-react'

export default function UploadNew() {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <PageHeader
        title="Upload Media"
        description="Upload images and videos to your library"
      />

      <Card className="rounded-xl">
        <CardContent className="p-12">
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="size-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Drop files to upload</h3>
            <p className="text-gray-500 mb-4">or click to browse</p>
            <Button>Select Files</Button>
            <p className="text-xs text-gray-500 mt-4">
              Supported formats: PNG, JPG, WebP, MP4, MOV (max 50MB)
            </p>
          </div>
        </CardContent>
      </Card>

      {uploading && (
        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <File className="size-8 text-blue-600" />
                  <div>
                    <p className="font-medium">example-image.jpg</p>
                    <p className="text-sm text-gray-500">2.4 MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <X className="size-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading...</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
