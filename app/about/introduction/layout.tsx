import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PABSON Kaski | Introduction, Mission & Vision",
  description:
    "Learn about PABSON Kaski, the umbrella organization of private and boarding schools in Kaski district, Nepal. Read our mission, vision, history, and goals.",
  keywords: [
    "About PABSON Kaski",
    "pabson kaski introduction",
    "pabson mission vision",
    "private schools organization pokhara",
    "what is pabson kaski"
  ],
  alternates: {
    canonical: "/about/introduction/",
  },
  openGraph: {
    title: "About PABSON Kaski | Introduction, Mission & Vision",
    description:
      "Learn about PABSON Kaski, the umbrella organization for private and boarding schools in Kaski district.",
    url: "/about/introduction/",
  },
};

export default function IntroductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
