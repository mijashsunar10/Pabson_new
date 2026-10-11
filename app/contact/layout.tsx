import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PABSON Kaski District Office, Pokhara",
  description:
    "Get in touch with PABSON Kaski (District Executive Committee Kaski). Located at Khasi Bazaar, Pokhara, Nepal. Phone: 061-551633, Email: kaskipabson@gmail.com.",
  keywords: [
    "Contact PABSON Kaski",
    "pabson kaski phone number",
    "pabson kaski address",
    "pabson kaski email",
    "pabson office pokhara"
  ],
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact Us | PABSON Kaski",
    description:
      "Contact PABSON Kaski District Executive Committee located at Khasi Bazaar, Pokhara, Nepal.",
    url: "/contact/",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
