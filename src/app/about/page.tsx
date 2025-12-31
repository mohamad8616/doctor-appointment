import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, Stethoscope, Pill, Microscope, Building2, TestTube } from "lucide-react";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "درباره سیستم نوبت دهی آنلاین",
};

const features = [
  {
    icon: Hospital,
    title: "بیمارستان‌ها",
    description: "رزرو نوبت در بهترین بیمارستان‌های کشور",
  },
  {
    icon: Building2,
    title: "کلینیک‌ها",
    description: "دسترسی به کلینیک‌های معتبر",
  },
  {
    icon: Stethoscope,
    title: "متخصصین",
    description: "رزرو نوبت با بهترین متخصصین",
  },
  {
    icon: Pill,
    title: "داروخانه‌ها",
    description: "دسترسی به داروخانه‌های معتبر",
  },
  {
    icon: Microscope,
    title: "آزمایشگاه‌ها",
    description: "رزرو نوبت در آزمایشگاه‌های معتبر",
  },
  {
    icon: TestTube,
    title: "مراکز پاراکلینیک",
    description: "دسترسی به مراکز پاراکلینیک",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">درباره ما</h1>
          <p className="text-lg text-muted-foreground">
            سیستم نوبت دهی آنلاین برای دسترسی آسان به خدمات درمانی
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>درباره سیستم</CardTitle>
            <CardDescription>
              سیستم نوبت دهی آنلاین
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              سیستم نوبت دهی آنلاین یک پلتفرم جامع برای رزرو نوبت در مراکز درمانی مختلف است.
              با استفاده از این سیستم می‌توانید به راحتی نوبت خود را در بیمارستان‌ها،
              کلینیک‌ها، مطب پزشکان، داروخانه‌ها، آزمایشگاه‌ها و مراکز پاراکلینیک رزرو کنید.
            </p>
            <p>
              این سیستم با هدف تسهیل دسترسی به خدمات درمانی و کاهش زمان انتظار برای
              دریافت نوبت طراحی شده است.
            </p>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-6">خدمات ما</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
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

