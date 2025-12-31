"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Search, Info, User, Menu } from "lucide-react";
import ThemeToggle from "../theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";

const navItems = [
  {
    title: "خانه",
    href: "/",
    icon: Home,
  },
  {
    title: "جستجو",
    href: "/find",
    icon: Search,
  },
  {
    title: "درباره",
    href: "/about",
    icon: Info,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isDashboard = pathname?.startsWith("/dashboard") || 
                      pathname?.startsWith("/admin") || 
                      pathname?.startsWith("/doctor") || 
                      pathname?.startsWith("/patient");

  // Don't show navbar in dashboard pages
  if (isDashboard) {
    return null;
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 border-b bg-background">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            سیستم نوبت دهی آنلاین
          </Link>
          <div className="flex items-center gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {session ? (
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                پنل کاربری
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  ورود
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">
                  ثبت نام
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t bg-background">
        <div className="grid grid-cols-4 h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}
          {session ? (
            <Link
              href="/dashboard"
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors",
                pathname?.startsWith("/dashboard") || 
                pathname?.startsWith("/admin") || 
                pathname?.startsWith("/doctor") || 
                pathname?.startsWith("/patient")
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <User className="h-5 w-5" />
              <span>پنل</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-muted-foreground"
            >
              <User className="h-5 w-5" />
              <span>ورود</span>
            </Link>
          )}
        </div>
      </nav>

      {/* Spacer for mobile bottom navbar */}
      <div className="h-16 md:hidden" />
    </>
  );
};

export default Navbar;
