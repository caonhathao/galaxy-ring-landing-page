import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "../components/custom/theme-provider";
import { LazyMotion, domAnimation } from "framer-motion";
import { Toaster } from "sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://orion-ring-default.vercel.app";

export const metadata: Metadata = {
  title: "ORION RING",
  description:
    "Trải nghiệm chiếc nhẫn thông minh mỏng nhẹ nhất thế giới tích hợp AI sinh trắc học.",
  openGraph: {
    title: "Orion Ring - Tuyệt Tác Nhẫn Thông Minh Thế Hệ Mới",
    description:
      "Trải nghiệm chiếc nhẫn thông minh mỏng nhẹ nhất thế giới tích hợp AI sinh trắc học.",
    url: siteUrl,
    siteName: "Orion Ring Việt Nam",
    images: [
      {
        url: `${siteUrl}/img/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Nhẫn thông minh Orion Ring phiên bản công nghệ cao cấp",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        plusJakartaSans.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <LazyMotion features={domAnimation}>
          <ThemeProvider
            attribute={"class"}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </LazyMotion>
      </body>
    </html>
  );
}
