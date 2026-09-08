'use client';

import React, { useState } from "react";
import { usestyles } from "./comparisonstyle";
import SvgWeblingslogo from "../svg/Weblingslogo";
import { DoneIcon } from "../../assets/icons_component/index";
import Typography from "../typography/component";
import comparisonJson from "../../data/comparison.json";
import { useRouter } from "next/navigation";

const ComparisonTemp: React.FC<any> = (props): React.ReactElement => {
  const classes = usestyles();
  const router = useRouter();

  // Use props data if available or fallback to comparison.json
  const data =
    props.comparisonData && props.comparisonData.plans
      ? props.comparisonData
      : comparisonJson;

  const titleSubtext = data.titleSubtext || "Price to features comparision";
  const title = data.title || "How much you can save";
  const titleDescription =
    data.titleDescription ||
    "Reduce software costs by replacing multiple business tools with one unified workspace. Pay only for what your team needs and scale as your business grows.";
  const badgeText = data.badgeText || "Save up to 50% with 2 additional features";

  const plans = data.plans || comparisonJson.plans;
  const features = data.features || comparisonJson.features;

  const weblingsPlan = plans.find((p: any) => p.id === "weblings") || plans[0];
  const othersPlan = plans.find((p: any) => p.id === "others") || plans[1];

  // Accordion state to manage expanded category rows (open by default for first item)
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    project_management: true,
    0: true,
  });

  const toggleCategory = (id: string | number) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderCheckmark = (val: any) => {
    if (val === true) {
      return <DoneIcon />;
    }
    if (val === false || val === null || val === undefined) {
      return "-";
    }
    if (typeof val === "string") {
      return <Typography variant="BS" component="span">{val}</Typography>;
    }
    return val;
  };

  return (
    <div className={classes.MainComparisontemp}>
      {/* Header Section using Typography component */}
      <div className={classes.headerSection}>
        <Typography variant="TS" component="span" className={classes.subtitle}>
          {titleSubtext}
        </Typography>
        <Typography variant="HM" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="BL" component="p" className={classes.titleDescription}>
          {titleDescription}
        </Typography>
      </div>

      {/* Pricing & Comparison Matrix Table */}
      <div className={classes.tableWrapper}>
        <table className={classes.table}>
          <thead>
            <tr>
              {/* Column 1 Header: Price */}
              <th className={classes.thPriceLabel}>
                <Typography variant="TS" component="span">
                  {data.priceLabel || "Price"}
                </Typography>
              </th>

              {/* Column 2 Header: Weblings Worksuite (Highlighted Column) */}
              <th className={classes.thHighlight}>
                {/* Savings Pill Tooltip */}
                <div className={classes.badgeTooltip}>
                  <span>✦</span>
                  <Typography variant="LXS" component="span">
                    {badgeText}
                  </Typography>
                </div>

                {/* Logo & Title */}
                <div className={classes.weblingsHeaderTitle}>
                  <SvgWeblingslogo />
                  <Typography variant="TS" component="span">
                    {weblingsPlan.name}
                  </Typography>
                </div>

                {/* Price Tag */}
                <div className={classes.priceRow}>
                  <Typography variant="HM" component="span" className={classes.priceLarge}>
                    {weblingsPlan.price}
                  </Typography>
                  <Typography variant="TS" component="span" className={classes.pricePeriod}>
                    {weblingsPlan.period}
                  </Typography>
                </div>

                {/* Includes Note */}
                <div className={classes.includesNote}>
                  <Typography variant="LS" component="span" className={classes.includesKey}>
                    {weblingsPlan.includesKey || "Includes:"}
                  </Typography>
                  <Typography variant="LS" component="span">
                    {weblingsPlan.includesValue}
                  </Typography>
                </div>

                {/* Free Trial Button */}
                <button
                  className={classes.btnGetTrial}
                  onClick={() => router.push("/contact")}
                >
                  {weblingsPlan.actionLabel || "Get Free Trial"}
                </button>

                {/* Subtext */}
                <Typography variant="LXS" component="p" className={classes.actionSubtext}>
                  {weblingsPlan.actionSubtext || "*No credit card required"}
                </Typography>
              </th>

              {/* Column 3 Header: Other Workspaces */}
              <th className={classes.thNormal}>
                {/* Badge Spacer to align title with Column 2 */}
                <div className={classes.badgeSpacer} />

                <div className={classes.otherHeaderTitle}>
                  <Typography variant="TS" component="span">
                    {othersPlan.name}
                  </Typography>
                </div>

                <div className={classes.priceRow}>
                  <Typography variant="HM" component="span" className={classes.priceLarge}>
                    {othersPlan.price}
                  </Typography>
                  <Typography variant="TS" component="span" className={classes.pricePeriod}>
                    {othersPlan.period}
                  </Typography>
                </div>

                <div className={classes.includesNote}>
                  <Typography variant="LS" component="span" className={classes.includesKey}>
                    {othersPlan.includesKey || "Includes:"}
                  </Typography>
                  <Typography variant="LS" component="span">
                    {othersPlan.includesValue}
                  </Typography>
                </div>

                {/* Action Spacer & Subtext Spacer for exact baseline alignment */}
                <div className={classes.actionPlaceholder} />
                <Typography variant="LXS" component="p" className={classes.actionSubtext} style={{ opacity: 0 }}>
                  &nbsp;
                </Typography>
              </th>
            </tr>
          </thead>

          <tbody>
            {features.map((feature: any, idx: number) => {
              const catId = feature.id || idx;
              const hasSubFeatures = feature.subFeatures && feature.subFeatures.length > 0;
              const isExpanded = !!expandedCategories[catId];
              const isLastMainRow = idx === features.length - 1 && (!hasSubFeatures || !isExpanded);

              return (
                <React.Fragment key={catId}>
                  {/* Category / Parent Feature Row */}
                  <tr
                    className={hasSubFeatures ? classes.categoryRow : ""}
                    onClick={() => hasSubFeatures && toggleCategory(catId)}
                  >
                    {/* Column 1: Feature Title with Chevron */}
                    <td className={classes.tdFeatureName}>
                      <span
                        className={`${classes.chevron} ${isExpanded ? classes.chevronRotated : ""
                          }`}
                      >
                        ❯
                      </span>
                      <Typography variant="BS" component="span">
                        {feature.name}
                      </Typography>
                    </td>

                    {/* Column 2: Weblings Worksuite Checkmark */}
                    <td
                      className={`${classes.tdHighlight} ${isLastMainRow ? classes.tdHighlightLast : ""
                        }`}
                    >
                      {renderCheckmark(feature.weblings)}
                    </td>

                    {/* Column 3: Other Workspaces Status */}
                    <td className={classes.tdNormal}>
                      {renderCheckmark(feature.others)}
                    </td>
                  </tr>

                  {/* Expanded Sub-Features (Stairs-like Indented Alignment) */}
                  {hasSubFeatures &&
                    isExpanded &&
                    feature.subFeatures.map((sub: any, subIdx: number) => {
                      const isLastSubRow =
                        idx === features.length - 1 &&
                        subIdx === feature.subFeatures.length - 1;

                      return (
                        <tr key={`${catId}_sub_${subIdx}`}>
                          {/* Indented Sub-Feature Title */}
                          <td className={classes.tdSubFeatureName}>
                            <Typography variant="BS" component="span">
                              {sub.name}
                            </Typography>
                          </td>

                          {/* Column 2: Weblings Checkmark */}
                          <td
                            className={`${classes.tdHighlight} ${isLastSubRow ? classes.tdHighlightLast : ""
                              }`}
                          >
                            {renderCheckmark(sub.weblings)}
                          </td>

                          {/* Column 3: Other Workspaces Status */}
                          <td className={classes.tdNormal}>
                            {renderCheckmark(sub.others)}
                          </td>
                        </tr>
                      );
                    })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTemp;
