import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Stethoscope, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "سیستم نوبت دهی آنلاین",
  description: "سیستم نوبت دهی آنلاین برای مطب پزشکان، بیمارستان‌ها، کلینیک‌ها و مراکز درمانی",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          سیستم نوبت دهی آنلاین
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          رزرو نوبت به راحتی و در سریع‌ترین زمان ممکن
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/find">جستجو و رزرو نوبت</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/about">درباره ما</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">ویژگی‌های ما</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-primary mb-2" />
              <CardTitle>رزرو آسان</CardTitle>
              <CardDescription>
                رزرو نوبت در چند کلیک
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-10 w-10 text-primary mb-2" />
              <CardTitle>۲۴/۷</CardTitle>
              <CardDescription>
                دسترسی همیشگی به سیستم
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Stethoscope className="h-10 w-10 text-primary mb-2" />
              <CardTitle>پزشکان معتبر</CardTitle>
              <CardDescription>
                دسترسی به بهترین پزشکان
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-2" />
              <CardTitle>امن و مطمئن</CardTitle>
              <CardDescription>
                حفظ حریم خصوصی شما
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}
