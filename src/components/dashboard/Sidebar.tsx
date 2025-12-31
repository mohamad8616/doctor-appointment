"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Calendar,
  User,
  FileText,
  Settings,
  LogOut,
  Stethoscope,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface SidebarProps {
  role: "ADMIN" | "DOCTOR" | "PATIENT";
}

const adminMenuItems = [
  {
    title: "داشبورد",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "پزشکان",
    href: "/admin/doctors",
    icon: Stethoscope,
  },
  {
    title: "بیماران",
    href: "/admin/patients",
    icon: Users,
  },
  {
    title: "نوبت‌ها",
    href: "/admin/appointments",
    icon: Calendar,
  },
];

const doctorMenuItems = [
  {
    title: "داشبورد",
    href: "/doctor/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "نوبت‌ها",
    href: "/doctor/appointments",
    icon: Calendar,
  },
  {
    title: "نسخه‌ها",
    href: "/doctor/prescriptions",
    icon: FileText,
  },
  {
    title: "پروفایل",
    href: "/doctor/profile",
    icon: User,
  },
];

const patientMenuItems = [
  {
    title: "داشبورد",
    href: "/patient/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "نوبت‌های من",
    href: "/patient/appointments",
    icon: Calendar,
  },
  {
    title: "رزرو نوبت",
    href: "/patient/book",
    icon: ClipboardList,
  },
];

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems =
    role === "ADMIN"
      ? adminMenuItems
      : role === "DOCTOR"
      ? doctorMenuItems
      : patientMenuItems;

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div className="flex h-full w-64 flex-col border-l bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold">منو</h2>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
      <div className="border-t p-4">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          خروج
        </Button>
      </div>
    </div>
  );
}

