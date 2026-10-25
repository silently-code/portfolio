import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { MotionProvider } from "@/components/providers/motion";
import { BackToTop, ScrollProgress } from "@/components/ui/scroll-chrome";
import { profile } from "@/data/resume";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});


const description =
  "Project Manager and civil engineer with 25 years on Mumbai construction sites: project management, PMC, Mivan formwork, quantity surveying, BOQ and R.A. billing, and quality control on high-rise residential, commercial and industrial projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Project Manager & Civil Engineer, Mumbai`,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "civil engineer Mumbai",
    "assistant project manager",
    "PMC in-charge",
    "construction project manager",
    "R.A. bill certification",
    "quantity surveying",
    "site engineer",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "profile",
    title: `${profile.name} | Civil Engineer`,
    description,
    siteName: profile.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Civil Engineer`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // lets content reach rounded corners / notches; padding uses safe-area insets
  themeColor: "#f7f5f1",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={manrope.variable} suppressHydrationWarning>
      <head>
        {/* Marks JS as available so draw-on-scroll styles only hide drawings when they can be revealed */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="bg-canvas text-body">
        <MotionProvider>
          <ScrollProgress />
          {children}
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
