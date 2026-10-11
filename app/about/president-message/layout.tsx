import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "President's Message | Shadananda Gautam - PABSON Kaski",
  description:
    "Official message from Shadananda Gautam, President of PABSON Kaski District Executive Committee, Pokhara. Insights into educational quality, transformation, and unity in Kaski.",
  keywords: [
    "PABSON Kaski President Message",
    "Shadananda Gautam PABSON",
    "President PABSON Kaski",
    "pabson pokhara president message"
  ],
  alternates: {
    canonical: "/about/president-message/",
  },
  openGraph: {
    title: "President's Message | Shadananda Gautam - PABSON Kaski",
    description:
      "A vision for the future of private education in Kaski from our leadership.",
    url: "/about/president-message/",
  },
};

export default function PresidentMessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
