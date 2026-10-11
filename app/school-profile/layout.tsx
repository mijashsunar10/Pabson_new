import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Profiles & Directory | PABSON Kaski Member Schools",
  description:
    "Official directory and profiles of private and boarding schools affiliated with PABSON Kaski in Pokhara and surrounding regions. View school contacts, principals, and institution details.",
  keywords: [
    "PABSON Kaski School Profile",
    "pabson kaski schools",
    "private schools pokhara directory",
    "boarding schools in kaski",
    "member schools pabson kaski",
    "pokhara school list"
  ],
  alternates: {
    canonical: "/school-profile/",
  },
  openGraph: {
    title: "School Profiles & Directory | PABSON Kaski",
    description:
      "Explore institutional profiles and directories of affiliated private and boarding schools in Kaski under PABSON Kaski.",
    url: "/school-profile/",
  },
};

export default function SchoolProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
