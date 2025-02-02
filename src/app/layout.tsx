import { AppSidebar } from "@/components/shared/sidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { APP_DESCRIPTION, APP_NAME } from "@/constants/app.constant";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "../providers/StoreProvider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/shared/header/Header";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="#18181B" showSpinner={false} />
          <StoreProvider>
            <SidebarProvider>
              <AppSidebar />

              <main className="relative w-full lg:w-[calc(100%-16rem)]">
                <Header />
                <div className="">{children}</div>
              </main>
              <Toaster position="top-center" />
            </SidebarProvider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
