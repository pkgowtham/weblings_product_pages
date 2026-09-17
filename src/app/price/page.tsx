import type { Metadata } from "next";
import PricingView from "../../views/pricing";

export const metadata: Metadata = {
  title: "Pricing & Beta Rollout | Weblings Worksuite",
  description:
    "Explore Weblings Worksuite beta pricing, included apps, launch milestones, and beta phase details.",
  alternates: {
    canonical: "/price",
  },
};

export default function PricePage() {
  return <PricingView />;
}
