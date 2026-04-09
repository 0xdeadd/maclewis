import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mac Lewis Clearing and Grading, LLC | West Georgia Site Development",
  description:
    "Professional clearing, grading, utilities, and concrete services in Coweta County and West Georgia. Licensed and insured. Request a free quote today.",
  keywords: [
    "clearing",
    "grading",
    "site development",
    "concrete",
    "utilities",
    "Coweta County",
    "West Georgia",
    "land clearing",
    "excavation",
  ],
  openGraph: {
    title: "Mac Lewis Clearing and Grading, LLC",
    description:
      "Professional site development in West Georgia. Clearing, grading, utilities, and concrete.",
    url: "https://maclewisgrading.com",
    siteName: "Mac Lewis Clearing and Grading",
    // TODO: Replace with real OG image
    images: [
      {
        url: "https://placehold.co/1200x630/1a1a1a/ffffff?text=Mac+Lewis+Clearing+%26+Grading",
        width: 1200,
        height: 630,
        alt: "Mac Lewis Clearing and Grading",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              name: "Mac Lewis Clearing and Grading, LLC",
              // TODO: Replace with real URL
              url: "https://maclewisgrading.com",
              // TODO: Replace with real phone
              telephone: "+1-770-555-0100",
              // TODO: Replace with real email
              email: "info@maclewisgrading.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Newnan",
                addressRegion: "GA",
                addressCountry: "US",
              },
              areaServed: [
                "Coweta County",
                "Fayette County",
                "Heard County",
                "Troup County",
                "Carroll County",
                "Meriwether County",
              ],
              description:
                "Professional clearing, grading, utilities, and concrete services in West Georgia.",
              // TODO: Replace with real logo URL
              image:
                "https://placehold.co/400x400/1a1a1a/ffffff?text=ML",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
