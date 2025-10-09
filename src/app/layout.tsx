import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import { ThemeProvider } from "./components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "سیستم نوبت دهی آنلاین",
  description: "سیستم نوبت دهی آنلاین برای مطب پزشکان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={` antialiased`}>
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
