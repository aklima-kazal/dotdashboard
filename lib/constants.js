import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Users,
  DollarSign,
  Share2,
} from "lucide-react";

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  {
    label: "Articles",
    href: "/articles",
    icon: FileText,
    subItems: ["Drafts", "Scheduled", "Revisions", "New"],
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    subItems: ["Audience", "Referrals", "Traffic"],
  },
  { label: "Monetization", href: "/monetization", icon: DollarSign },
  { label: "Social", href: "/social", icon: Share2 },
  { label: "Users", href: "/users", icon: Users },
];
