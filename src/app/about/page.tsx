import React from "react";
import type { Metadata } from "next";
import About from "../../views/about/index";

export const metadata: Metadata = {
  title: "About Us | Weblings Worksuite",
  description:
    "We built the software we always wished we had. An honest letter from our founders about why Weblings exists, who we are, and our mission.",
};

export default function AboutPage() {
  return <About />;
}
