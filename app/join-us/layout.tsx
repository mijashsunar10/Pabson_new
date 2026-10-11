import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us | PABSON Kaski School Membership & Affiliation",
  description:
    "Register and affiliate your institution with PABSON Kaski. Join the network of private and boarding schools in Kaski district for collective growth and educational excellence.",
  keywords: [
    "Join PABSON Kaski",
    "pabson kaski membership",
    "pabson affiliation kaski",
    "register school pabson pokhara"
  ],
  alternates: {
    canonical: "/join-us/",
  },
  openGraph: {
    title: "Join Us | PABSON Kaski School Membership",
    description:
      "Become a part of the PABSON Kaski community. Register your institution.",
    url: "/join-us/",
  },
};

export default function JoinUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
