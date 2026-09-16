import React from "react";
import type { Metadata } from "next";
import PrivacyPolicyView from "../../views/legal/privacy/index";

export const metadata: Metadata = {
  title: "Privacy Policy | Weblings Worksuite",
  description:
    "At Weblings, we believe in radical transparency. Read our Privacy Policy to understand data collection, AI access, security measures, and your data rights.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
