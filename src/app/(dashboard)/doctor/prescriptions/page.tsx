import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DoctorPrescriptionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">نسخه‌های پزشکی</h1>
          <p className="text-muted-foreground">
            مدیریت و ایجاد نسخه‌های پزشکی
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          ایجاد نسخه جدید
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>لیست نسخه‌ها</CardTitle>
          <CardDescription>
            تمام نسخه‌های ایجاد شده
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            در حال بارگذاری...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

