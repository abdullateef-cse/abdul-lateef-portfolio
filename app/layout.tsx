import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Lateef | AI & Software Engineering Portfolio",
  description:
    "Computer Science and Artificial Intelligence undergraduate at Shoolini University, exploring applied machine learning, computer vision and software engineering.",
  keywords: [
    "Abdul Lateef",
    "AI Developer",
    "Software Developer",
    "Python Developer",
    "Full-Stack Developer",
  ],
  openGraph: {
    title: "Abdul Lateef | AI & Software Engineering Portfolio",
    description:
      "Full-stack software, backend systems and AI/ML project portfolio.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
