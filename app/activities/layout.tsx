import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities & Events | PABSON Kaski Academic Contests & Competitions",
  description:
    "Explore upcoming and past activities organized by PABSON Kaski including English Language Contest, Chess Competition, Nepali Language Skills, Teacher Orientations, and sports events.",
  keywords: [
    "PABSON Kaski activities",
    "pabson kaski events",
    "chess competition pabson kaski",
    "english language contest pokhara",
    "teacher orientation pabson kaski"
  ],
  alternates: {
    canonical: "/activities/",
  },
  openGraph: {
    title: "Activities & Events | PABSON Kaski",
    description:
      "Explore all the upcoming and past events organized by PABSON Kaski to foster educational excellence.",
    url: "/activities/",
  },
};

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
