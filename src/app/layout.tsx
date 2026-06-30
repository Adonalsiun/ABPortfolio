import type { Metadata } from "next";
import { Fraunces, Jost, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aryan Bhatia - Portfolio",
    template: "%s - Aryan Bhatia",
  },
  description:
    "Georgia Tech CS grad building at the intersection of AI, software engineering, and robotics. Open to full-time roles, research collaborations, and freelance AI/ML projects.",
  metadataBase: new URL("https://www.arynbht.tech"),
  openGraph: {
    title: "Aryan Bhatia - Portfolio",
    description:
      "Georgia Tech CS grad building at the intersection of AI, software engineering, and robotics.",
    url: "https://www.arynbht.tech",
    siteName: "Aryan Bhatia",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@adonalsiun",
  },
};

// Prevents flash of wrong theme before React hydrates.
// Reads localStorage and applies data-theme to <html> synchronously.
const noFlashScript = `
(function(){
  try {
    var t = localStorage.getItem('theme') || 'system';
    if (t === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (t === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    // 'system' → no attribute → CSS @media handles it
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jost.variable} ${jetbrains.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Must run before first paint to avoid theme flash */}
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="min-h-full flex flex-col relative">
        <div
          className="grain-overlay pointer-events-none fixed inset-0 z-[9999]"
          aria-hidden="true"
        />
        <ThemeProvider>
          <Nav />
          <main className="flex-1 relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
