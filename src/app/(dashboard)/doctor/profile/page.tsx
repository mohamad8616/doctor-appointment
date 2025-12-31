import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DoctorProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">پروفایل پزشک</h1>
        <p className="text-muted-foreground">
          مدیریت اطلاعات پروفایل
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>اطلاعات پروفایل</CardTitle>
          <CardDescription>
            ویرایش اطلاعات پروفایل پزشک
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            فرم ویرایش پروفایل
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

