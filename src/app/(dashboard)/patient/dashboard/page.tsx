import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Plus } from "lucide-react";
import Link from "next/link";

export default function PatientDashboardPage() {
  // TODO: Fetch real data from API
  const stats = {
    upcomingAppointments: 0,
    pastAppointments: 0,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">داشبورد بیمار</h1>
          <p className="text-muted-foreground">
            خوش آمدید به پنل بیمار
          </p>
        </div>
        <Link href="/patient/book">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            رزرو نوبت جدید
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              نوبت‌های پیش رو
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.upcomingAppointments}</div>
            <p className="text-xs text-muted-foreground">
              نوبت‌های آینده شما
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              نوبت‌های گذشته
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pastAppointments}</div>
            <p className="text-xs text-muted-foreground">
              تاریخچه نوبت‌ها
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>نوبت‌های پیش رو</CardTitle>
          <CardDescription>
            نوبت‌های آینده شما
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

