import { RegisterForm } from "@/components/auth/RegisterForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ثبت نام",
  description: "ثبت نام در سیستم نوبت دهی آنلاین",
};

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            ایجاد حساب کاربری
          </h1>
          <p className="text-sm text-muted-foreground">
            قبلا ثبت نام کرده‌اید؟{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              وارد شوید
            </Link>
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
