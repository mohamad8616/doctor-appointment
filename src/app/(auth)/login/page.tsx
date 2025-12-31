import { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ورود",
  description: "ورود به سیستم نوبت دهی آنلاین",
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            ورود به حساب کاربری
          </h1>
          <p className="text-sm text-muted-foreground">
            حساب کاربری ندارید؟{" "}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
              ثبت نام کنید
            </Link>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

