import React from "react";
import type { Metadata } from "next";
import TermsAndConditionsView from "../../views/legal/terms/index";

export const metadata: Metadata = {
  title: "Terms and Conditions | Weblings Worksuite",
  description:
    "Review the Terms and Conditions for using Weblings Worksuite, including beta terms, acceptable use, refund policy, and governing law.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsView />;
}
