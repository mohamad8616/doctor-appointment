import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import Navbar from "./components/ui/Navbar";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "سیستم نوبت دهی آنلاین",
    template: "%s | سیستم نوبت دهی آنلاین",
  },
  description:
    "سیستم نوبت دهی آنلاین برای مطب پزشکان، بیمارستان‌ها، کلینیک‌ها و مراکز درمانی",
  keywords: [
    "نوبت دهی آنلاین",
    "رزرو نوبت پزشک",
    "سیستم نوبت دهی",
    "نوبت دهی اینترنتی",
    "پزشک آنلاین",
    "رزرو نوبت",
    "بیمارستان",
    "کلینیک",
    "داروخانه",
    "آزمایشگاه",
  ],
  authors: [{ name: "Doctor Appointment System" }],
  creator: "Doctor Appointment System",
  publisher: "Doctor Appointment System",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
    title: "سیستم نوبت دهی آنلاین",
    description:
      "سیستم نوبت دهی آنلاین برای مطب پزشکان، بیمارستان‌ها، کلینیک‌ها و مراکز درمانی",
    siteName: "سیستم نوبت دهی آنلاین",
  },
  twitter: {
    card: "summary_large_image",
    title: "سیستم نوبت دهی آنلاین",
    description:
      "سیستم نوبت دهی آنلاین برای مطب پزشکان، بیمارستان‌ها، کلینیک‌ها و مراکز درمانی",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <main>
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
