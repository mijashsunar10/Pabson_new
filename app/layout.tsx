import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pabsonkaski.org.np";

export const viewport: Viewport = {
  themeColor: "#0b2863",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PABSON Kaski | Private and Boarding Schools' Organization Nepal, Kaski",
    template: "%s | PABSON Kaski",
  },
  description:
    "Official website of PABSON Kaski (Private and Boarding Schools' Organization Nepal, District Executive Committee Kaski, Pokhara). Discover affiliated private schools, academic programs, competitions, school profiles, and educational leadership in Kaski.",
  keywords: [
    "PABSON Kaski",
    "pabson kaski",
    "pabson pokhara",
    "PABSON Pokhara",
    "pabson nepal",
    "PABSON Nepal",
    "kaski pabson",
    "Private and Boarding Schools Organization Nepal Kaski",
    "PABSON Kaski district executive committee",
    "schools in pokhara",
    "private schools in pokhara",
    "boarding schools in kaski",
    "pabson kaski school profile",
    "pabson kaski events",
    "Shadananda Gautam PABSON",
    "निजी तथा आवासीय विद्यालय अर्गनाइजेसन नेपाल कास्की",
    "कास्की प्याब्सन",
    "प्याब्सन कास्की"
  ],
  authors: [{ name: "PABSON Kaski", url: siteUrl }],
  creator: "PABSON Kaski",
  publisher: "PABSON Kaski",
  applicationName: "PABSON Kaski Official Portal",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ne_NP"],
    url: siteUrl,
    siteName: "PABSON Kaski",
    title: "PABSON Kaski | Private and Boarding Schools' Organization Nepal, Kaski",
    description:
      "Official website of PABSON Kaski. Uniting and empowering private and boarding schools in Pokhara and Kaski district for quality education and holistic development.",
    images: [
      {
        url: "/headerimage/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PABSON Kaski Official Portal",
      },
      {
        url: "/logo/logo.jpeg",
        width: 600,
        height: 600,
        alt: "PABSON Kaski Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PABSON Kaski | Private and Boarding Schools' Organization Nepal",
    description:
      "Official website of PABSON Kaski (Private and Boarding Schools' Organization Nepal, District Executive Committee Kaski, Pokhara).",
    images: ["/headerimage/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/logo/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  category: "education",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "NGO"],
      "@id": `${siteUrl}/#organization`,
      "name": "PABSON Kaski",
      "alternateName": [
        "Private and Boarding Schools' Organization Nepal, Kaski",
        "PABSON Kaski District Executive Committee",
        "PABSON Pokhara",
        "कास्की प्याब्सन",
        "प्याब्सन कास्की",
        "निजी तथा आवासीय विद्यालय अर्गनाइजेसन नेपाल, कास्की"
      ],
      "url": siteUrl,
      "logo": `${siteUrl}/logo/logo.jpeg`,
      "image": `${siteUrl}/logo/logo.jpeg`,
      "description":
        "The umbrella organization of Private and Boarding Schools in Kaski district, Nepal, working towards unity, professional development, and quality educational excellence in Pokhara and surrounding regions.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Khasi Bazaar",
        "addressLocality": "Pokhara",
        "addressRegion": "Gandaki Province",
        "postalCode": "33700",
        "addressCountry": "NP"
      },
      "telephone": "+977-61-551633",
      "email": "kaskipabson@gmail.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+977-61-551633",
          "contactType": "customer service",
          "areaServed": "Kaski, Nepal",
          "availableLanguage": ["Nepali", "English"]
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "PABSON Kaski",
      "alternateName": "Private and Boarding Schools' Organization Nepal Kaski",
      "description": "Official Web Portal of PABSON Kaski District Executive Committee, Pokhara",
      "publisher": {
        "@id": `${siteUrl}/#organization`
      },
      "inLanguage": ["en", "ne"]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
