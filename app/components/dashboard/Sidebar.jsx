"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 font-bold text-xl border-b border-slate-800">
        NewsDash 2.0
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <div key={item.label}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive ? "bg-blue-600" : "hover:bg-slate-800"
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>

              {/* Render Sub-items if they exist */}
              {item.subItems && (
                <div className="ml-9 mt-1 space-y-1 border-l border-slate-700">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub}
                      href={`${item.href}/${sub.toLowerCase()}`}
                      className="block p-2 text-sm text-slate-400 hover:text-white"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
