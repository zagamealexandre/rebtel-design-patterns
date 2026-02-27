import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Using Inter as fallback for KH Teka (similar sans-serif characteristics)
// In production, you would load the actual KH Teka and Pano fonts
const inter = Inter({
  variable: "--font-kh-teka",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rebtel Design System 3.0",
  description: "Mobile-first design system for the Rebtel APP",
  keywords: ["rebtel", "design system", "mobile", "calling app"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // Mobile-first viewport optimized for 390px (iPhone standard)
  themeColor: "#E31B3B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
