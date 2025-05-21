import { Inter } from "next/font/google";
import { DirectionProvider } from "@/shared/components/providers/direction-provider";
import { ThemeProvider } from "@/shared/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "A modern admin dashboard built with Next.js and Shadcn UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DirectionProvider>{children}</DirectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
