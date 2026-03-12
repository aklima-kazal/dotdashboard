'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  LayoutDashboard,
  FileText,
  FolderTree,
  Image,
  MessageSquare,
  Share2,
  BarChart3,
  DollarSign,
  Users,
  Workflow,
  Settings,
  Search,
  Bell,
  Moon,
  Sun,
  Menu,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  Clock,
  CheckCircle,
  Plus,
  Calendar,
  Tag,
  Star,
  Video,
  Upload,
  Database,
  AlertCircle,
  Flag,
  Twitter,
  Target,
  Newspaper,
  PieChart,
  MapPin,
  Link2,
  LayoutGrid,
  ListChecks,
  UserPlus,
  Shield,
  CalendarDays,
  GitBranch,
  Home,
  LayoutTemplate,
  Mail,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider, useAuth } from '@/components/auth/AuthProvider'

const navItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    children: [
      { label: 'Overview', icon: LayoutDashboard, path: '/' },
      { label: 'Quick Stats', icon: TrendingUp, path: '/quick-stats' },
      { label: 'Recent Activity', icon: Clock, path: '/recent-activity' },
      {
        label: 'Pending Approvals',
        icon: CheckCircle,
        path: '/pending-approvals',
      },
    ],
  },
  {
    label: 'Articles',
    icon: FileText,
    children: [
      { label: 'All Articles', icon: FileText, path: '/articles' },
      { label: 'Add New', icon: Plus, path: '/articles/add-new' },
      { label: 'Drafts', icon: FileText, path: '/articles/drafts' },
      { label: 'Scheduled', icon: Calendar, path: '/articles/scheduled' },
      { label: 'Revisions', icon: GitBranch, path: '/articles/revisions' },
    ],
  },
  {
    label: 'Categories & Tags',
    icon: FolderTree,
    children: [
      { label: 'Categories', icon: FolderTree, path: '/categories' },
      { label: 'Tags', icon: Tag, path: '/categories/tags' },
      {
        label: 'Featured Sections',
        icon: Star,
        path: '/categories/featured-sections',
      },
    ],
  },
  {
    label: 'Media Library',
    icon: Image,
    children: [
      { label: 'Images', icon: Image, path: '/media/images' },
      { label: 'Videos', icon: Video, path: '/media/videos' },
      { label: 'Upload New', icon: Upload, path: '/media/upload' },
      { label: 'Media Usage', icon: Database, path: '/media/usage' },
    ],
  },
  {
    label: 'Comments & Moderation',
    icon: MessageSquare,
    children: [
      { label: 'All Comments', icon: MessageSquare, path: '/comments' },
      { label: 'Pending', icon: Clock, path: '/comments/pending' },
      { label: 'Spam', icon: AlertCircle, path: '/comments/spam' },
      { label: 'User Reports', icon: Flag, path: '/comments/reports' },
    ],
  },
  {
    label: 'Social Publishing',
    icon: Share2,
    children: [
      { label: 'Scheduled Posts', icon: Calendar, path: '/social/scheduled' },
      {
        label: 'Auto Share Settings',
        icon: Twitter,
        path: '/social/auto-share',
      },
      {
        label: 'Engagement Overview',
        icon: Target,
        path: '/social/engagement',
      },
    ],
  },
  {
    label: 'Analytics',
    icon: BarChart3,
    children: [
      {
        label: 'Traffic Overview',
        icon: BarChart3,
        path: '/analytics/traffic',
      },
      {
        label: 'Top Articles',
        icon: Newspaper,
        path: '/analytics/top-articles',
      },
      {
        label: 'Audience Insights',
        icon: PieChart,
        path: '/analytics/audience',
      },
      { label: 'Referral Sources', icon: Link2, path: '/analytics/referrals' },
    ],
  },
  {
    label: 'Monetization',
    icon: DollarSign,
    children: [
      {
        label: 'Ad Placements',
        icon: LayoutGrid,
        path: '/monetization/ad-placements',
      },
      {
        label: 'Sponsored Posts',
        icon: Star,
        path: '/monetization/sponsored-posts',
      },
      {
        label: 'Revenue Overview',
        icon: DollarSign,
        path: '/monetization/revenue',
      },
    ],
  },
  {
    label: 'Users & Roles',
    icon: Users,
    children: [
      { label: 'All Users', icon: Users, path: '/users' },
      { label: 'Add User', icon: UserPlus, path: '/users/add' },
      { label: 'Roles & Permissions', icon: Shield, path: '/users/roles' },
    ],
  },
  {
    label: 'Workflow',
    icon: Workflow,
    children: [
      { label: 'Assignments', icon: ListChecks, path: '/workflow/assignments' },
      {
        label: 'Editorial Calendar',
        icon: CalendarDays,
        path: '/workflow/calendar',
      },
      {
        label: 'Approval Queue',
        icon: CheckCircle,
        path: '/workflow/approval-queue',
      },
    ],
  },
  {
    label: 'Settings',
    icon: Settings,
    children: [
      { label: 'General Settings', icon: Settings, path: '/settings' },
      {
        label: 'Homepage Layout',
        icon: LayoutTemplate,
        path: '/settings/homepage-layout',
      },
      { label: 'SEO Settings', icon: Target, path: '/settings/seo' },
      {
        label: 'Email Notifications',
        icon: Mail,
        path: '/settings/email-notifications',
      },
    ],
  },
]

function Sidebar({
  collapsed,
  setCollapsed,
  expandedItems,
  toggleExpand,
  pathname,
}) {
  return (
    <aside
      className={cn(
        'bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col',
        collapsed ? 'w-20' : 'w-64'
      )}
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Newspaper className="size-8 text-blue-600" />
            <span className="font-bold text-xl">NewsHub</span>
          </div>
        )}
        {collapsed && <Newspaper className="size-8 text-blue-600" />}
      </div>

      {!collapsed && (
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input placeholder="Search..." className="pl-9" />
          </div>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto p-2">
        {navItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() => toggleExpand(item.label)}
              className={cn(
                'w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300',
                collapsed && 'justify-center'
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="size-5 shrink-0" />
                {!collapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </div>
              {!collapsed &&
                item.children &&
                (expandedItems.includes(item.label) ? (
                  <ChevronDown className="size-4" />
                ) : (
                  <ChevronRight className="size-4" />
                ))}
            </button>

            {!collapsed &&
              item.children &&
              expandedItems.includes(item.label) && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      href={child.path}
                      className={cn(
                        'flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors',
                        pathname === child.path
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400'
                          : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                      )}
                    >
                      <child.icon className="size-4" />
                      <span>{child.label}</span>
                    </Link>
                  ))}
                </div>
              )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full"
        >
          <Menu className="size-4" />
          {!collapsed && <span className="ml-2">Collapse</span>}
        </Button>
      </div>
    </aside>
  )
}

function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState(['Dashboard'])
  const [showUserMenu, setShowUserMenu] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { user, logout, isAuthenticated, loading } = useAuth()

  // Don't show dashboard layout for auth pages
  if (pathname?.startsWith('/auth')) {
    return children
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return null
  }

  const toggleExpand = (label) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    )
  }

  const handleLogout = async () => {
    await logout()
    window.location.href = '/auth/login'
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        expandedItems={expandedItems}
        toggleExpand={toggleExpand}
        pathname={pathname}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="size-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
                </Avatar>
                {!collapsed && <ChevronDown className="size-4" />}
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-950 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50">
                  {user && (
                    <>
                      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{user.email}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Role: {user.role}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <DashboardLayout>{children}</DashboardLayout>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
