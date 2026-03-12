'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { cn } from './ui/utils'

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

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState(['Dashboard'])
  const pathname = usePathname()

  const toggleExpand = (label) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    )
  }

  const isActive = (path) => {
    if (!path) return false
    return pathname === path
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={cn(
          'bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col',
          collapsed ? 'w-20' : 'w-64'
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <Newspaper className="size-8 text-blue-600" />
              <span className="font-bold text-xl">NewsHub</span>
            </div>
          )}
          {collapsed && <Newspaper className="size-8 text-blue-600" />}
        </div>

        {/* Search */}
        {!collapsed && (
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <Input placeholder="Search..." className="pl-9" />
            </div>
          </div>
        )}

        {/* Navigation */}
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

              {/* Children */}
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
                          isActive(child.path)
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

        {/* Collapse Toggle */}
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="size-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Moon className="size-5" />
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
