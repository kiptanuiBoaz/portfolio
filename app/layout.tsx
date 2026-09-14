import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "@/styles.css";

export const metadata: Metadata = {
  title: "Boaz Serem — Software Engineer",
  description:
    "Software engineer in Nairobi building scalable web applications with Python, Django, React, Next.js, Node.js and TypeScript.",
  authors: [{ name: "Boaz Serem" }],
  openGraph: {
    title: "Boaz Serem — Software Engineer",
    description:
      "Software engineer in Nairobi building scalable web applications with Python, Django, React, Next.js, Node.js and TypeScript.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
