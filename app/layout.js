import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollProgress from "./components/scroll-progress";
import PageTransition from "./components/page-transition";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://faheemdev.vercel.app/";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Faheem Frontend Engineer",
    template: "%s | Faheem",
  },
  description:
    "Faheem is a Software Engineering student and frontend developer building fast, accessible web and mobile apps with React, Next.js, Flutter and the MERN stack.",
  keywords: [
    "Faheem",
    "Frontend Developer",
    "React",
    "Next.js",
    "MERN Stack",
    "Flutter",
    "Lahore",
  ],
  authors: [{ name: "Faheem" }],
  openGraph: {
    title: "Faheem Frontend Engineer",
    description:
      "Portfolio of Faheem  a frontend developer crafting fast, modern, user-focused web and mobile experiences.",
    url: siteUrl,
    siteName: "Faheem Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faheem Frontend Engineer",
    description:
      "Portfolio of Faheem. A frontend developer crafting fast, modern, user-focused web and mobile experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Faheem",
  jobTitle: "Frontend Developer",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/ChFaheem22",
    "https://linkedin.com/in/faheemch22",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="google-site-verification" content="8PLv-A6bbN2dLsDtDJJRp9wQgRRPO98b5RhH_SSFrI0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ScrollProgress />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
