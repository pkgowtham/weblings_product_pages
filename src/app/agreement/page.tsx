import React from "react";
import type { Metadata } from "next";
import AgreementView from "../../views/legal/agreement/index";

export const metadata: Metadata = {
  title: "Agreement & Privacy Policy | Weblings Worksuite",
  description:
    "Please review and agree to Weblings' Terms and Privacy Policy to proceed.",
  alternates: {
    canonical: "/agreement",
  },
};

export default function AgreementPage() {
  return <AgreementView />;
}
