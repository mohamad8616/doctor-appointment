import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Hospital, Stethoscope, Pill, Microscope, Building2, TestTube, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "جستجو",
  description: "جستجوی پزشکان، بیمارستان‌ها، کلینیک‌ها و مراکز درمانی",
};

const categories = [
  {
    icon: Hospital,
    title: "بیمارستان‌ها",
    href: "/find/hospitals",
    description: "بیمارستان‌های معتبر",
  },
  {
    icon: Building2,
    title: "کلینیک‌ها",
    href: "/find/clinics",
    description: "کلینیک‌های تخصصی",
  },
  {
    icon: Stethoscope,
    title: "متخصصین",
    href: "/find/specialists",
    description: "پزشکان متخصص",
  },
  {
    icon: Pill,
    title: "داروخانه‌ها",
    href: "/find/pharmacies",
    description: "داروخانه‌های معتبر",
  },
  {
    icon: Microscope,
    title: "آزمایشگاه‌ها",
    href: "/find/labs",
    description: "آزمایشگاه‌های تشخیصی",
  },
  {
    icon: TestTube,
    title: "مراکز پاراکلینیک",
    href: "/find/paraclinics",
    description: "مراکز پاراکلینیک",
  },
];

export default function FindPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">جستجو و پیدا کردن</h1>
          <p className="text-lg text-muted-foreground">
            جستجوی پزشکان، بیمارستان‌ها، کلینیک‌ها و مراکز درمانی
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>جستجو</CardTitle>
            <CardDescription>
              جستجوی پزشک، مرکز درمانی یا تخصص
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="search"
                placeholder="جستجو..."
                className="flex-1"
              />
              <Button>
                <Search className="h-4 w-4 mr-2" />
                جستجو
              </Button>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-6">دسته‌بندی‌ها</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={category.href}>مشاهده</a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

