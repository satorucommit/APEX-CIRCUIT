import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Press Relations | Apex Circuit",
  description: "Contact the Apex Circuit league office, press accreditation desk, and commercial partnerships department.",
};

export default function ContactPage() {
  return <ContactClient />;
}
