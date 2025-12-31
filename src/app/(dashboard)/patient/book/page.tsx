import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PatientBookPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">رزرو نوبت</h1>
        <p className="text-muted-foreground">
          انتخاب پزشک و زمان نوبت
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>فرم رزرو نوبت</CardTitle>
          <CardDescription>
            انتخاب پزشک، تاریخ و زمان نوبت
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            فرم رزرو نوبت
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

