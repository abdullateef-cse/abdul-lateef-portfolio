
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

const siteUrl = "https://abdul-lateef-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

    verification: {
    google: "NcnzoQQRL81n7f7T4DoDnC4EDE6vqisx7InP7iTriEE",
  },

  title: {
    default: "Abdul Lateef | AI & Software Engineering Portfolio",
    template: "%s | Abdul Lateef",
  },

  description:
    "Explore Abdul Lateef's portfolio featuring AI and machine learning projects, software engineering, full-stack development, and technical experience.",

  applicationName: "Abdul Lateef Portfolio",

  keywords: [
    "Abdul Lateef",
    "Abdul Lateef Portfolio",
    "AI Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Developer",
    "Python Developer",
    "Full-Stack Developer",
    "Computer Science",
    "Shoolini University",
  ],

  authors: [{ name: "Abdul Lateef" }],
  creator: "Abdul Lateef",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Abdul Lateef | AI & Software Engineering Portfolio",
    description:
      "Explore AI/ML projects, software engineering work, full-stack development and technical experience by Abdul Lateef.",
    url: siteUrl,
    siteName: "Abdul Lateef Portfolio",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdul Lateef | AI & Software Engineering Portfolio",
    description:
      "AI, machine learning, full-stack development and software engineering portfolio.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
