import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JustSell",
  description: "Software that helps you sell",
  keywords: ["software licenses", "license marketplace", "software resale", "SoftSell", "license valuation"],
  authors: [{ name: "SoftSell Team" }],
  creator: "SoftSell Inc.",
  publisher: "SoftSell Inc.",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://softsell-example.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
