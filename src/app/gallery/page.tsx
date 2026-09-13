import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Media Gallery & Highlights | Apex Circuit",
  description: "Browse high-definition photography and race video highlights from the 2026 Apex Circuit championship tour.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
