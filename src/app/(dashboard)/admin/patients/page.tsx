import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPatientsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">مدیریت بیماران</h1>
        <p className="text-muted-foreground">
          مدیریت و مشاهده لیست بیماران
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>لیست بیماران</CardTitle>
          <CardDescription>
            تمام بیماران ثبت نام شده در سیستم
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

