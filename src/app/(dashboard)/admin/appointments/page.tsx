import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminAppointmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">مدیریت نوبت‌ها</h1>
        <p className="text-muted-foreground">
          مشاهده و مدیریت تمام نوبت‌ها
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>لیست نوبت‌ها</CardTitle>
          <CardDescription>
            تمام نوبت‌های ثبت شده در سیستم
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

