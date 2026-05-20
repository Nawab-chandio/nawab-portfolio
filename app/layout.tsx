import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";

export const metadata: Metadata = {
  title: "Nawab Ali — Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years of experience specializing in React.js, Next.js, and Node.js. Based in Karachi, Pakistan.",
  keywords: [
    "Full Stack Developer",
    "React JS",
    "Next JS",
    "Karachi",
    "Pakistan",
    "Frontend Developer",
  ],
  authors: [{ name: "Nawab Ali" }],
  openGraph: {
    title: "Nawab Ali — Full Stack Developer",
    description:
      "Building scalable, user-friendly applications with React.js & modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
