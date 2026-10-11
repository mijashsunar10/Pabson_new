import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | PABSON Kaski Events & Programs Photo Gallery",
  description:
    "Photo gallery and visual journey of PABSON Kaski events, sports meets, educational seminars, prize distributions, and school programs across Pokhara and Kaski.",
  keywords: [
    "PABSON Kaski gallery",
    "pabson photos",
    "pabson kaski events photos",
    "pokhara schools sports gallery"
  ],
  alternates: {
    canonical: "/gallery/",
  },
  openGraph: {
    title: "Gallery | Visual Journey of PABSON Kaski",
    description:
      "Explore memorable moments, events, and achievements of PABSON Kaski.",
    url: "/gallery/",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
