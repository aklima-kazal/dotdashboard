import PageHeader from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'

const roles = [
  {
    name: 'Administrator',
    permissions: {
      articles: true,
      users: true,
      settings: true,
      comments: true,
      analytics: true,
    },
  },
  {
    name: 'Editor',
    permissions: {
      articles: true,
      users: false,
      settings: false,
      comments: true,
      analytics: true,
    },
  },
  {
    name: 'Author',
    permissions: {
      articles: true,
      users: false,
      settings: false,
      comments: false,
      analytics: false,
    },
  },
  {
    name: 'Contributor',
    permissions: {
      articles: false,
      users: false,
      settings: false,
      comments: false,
      analytics: false,
    },
  },
]

const permissionLabels = {
  articles: 'Manage Articles',
  users: 'Manage Users',
  settings: 'Manage Settings',
  comments: 'Moderate Comments',
  analytics: 'View Analytics',
}

export default function RolesPermissions() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Roles & Permissions"
        description="Configure user roles and their access levels"
      />
      {roles.map((role) => (
        <Card key={role.name} className="rounded-xl">
          <CardHeader>
            <CardTitle>{role.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(role.permissions).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg"
                >
                  <span className="font-medium">{permissionLabels[key]}</span>
                  <Switch checked={value} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
