import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keldya — Speed. Quality. Family-built.",
  description:
    "Keldya is a high-velocity technology studio founded by Mathias and Dominic Fobi. We engineer digital products, SaaS platforms, and automation ecosystems for everyday enterprises.",
  openGraph: {
    title: "Keldya — Speed. Quality. Family-built.",
    description:
      "A high-velocity technology studio. Global culture, integrated futures.",
    type: "website",
    siteName: "Keldya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keldya — Speed. Quality. Family-built.",
    description: "A high-velocity technology studio. Global culture, integrated futures.",
  },
  metadataBase: new URL("https://keldya.com"),
  icons: {
    icon: [{ url: "/keldya-logo.jpg", type: "image/jpeg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
