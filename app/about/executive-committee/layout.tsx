import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Committee | PABSON Kaski Leadership & Members",
  description:
    "Meet the Executive Committee members, advisors, and leadership team of PABSON Kaski (Private and Boarding Schools' Organization Nepal, District Executive Committee Kaski, Pokhara).",
  keywords: [
    "PABSON Kaski executive committee",
    "pabson kaski members",
    "Shadananda Gautam President",
    "pabson pokhara committee",
    "pabson kaski leaders"
  ],
  alternates: {
    canonical: "/about/executive-committee/",
  },
  openGraph: {
    title: "Executive Committee | PABSON Kaski Leadership",
    description:
      "Meet the dedicated team of leaders, advisors, and visionaries driving PABSON Kaski forward.",
    url: "/about/executive-committee/",
  },
};

export default function ExecutiveCommitteeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
