'use client';

import React, { useState } from "react";
import { useBusinessHubStyles } from "./businessHubStyle";

type TabType = "businessHub" | "accounts" | "billing" | "support";

/* Precision SVG Icons matching user's mobile app screenshots */
const HubTabIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="4" r="2" />
    <circle cx="20" cy="9" r="2" />
    <circle cx="19" cy="19" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="4" cy="9" r="2" />
    <line x1="12" y1="6" x2="12" y2="9" />
    <line x1="18.2" y1="10" x2="14.5" y2="11" />
    <line x1="17.5" y1="17.5" x2="14" y2="14" />
    <line x1="6.5" y1="17.5" x2="10" y2="14" />
    <line x1="5.8" y1="10" x2="9.5" y2="11" />
  </svg>
);

const AccountsTabIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BillingTabIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21v-8" />
    <path d="M12 13l-6-6" />
    <path d="M6 12V7h5" />
    <path d="M12 13l6-6" />
    <path d="M13 7h5v5" />
  </svg>
);

const SupportTabIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v9l5 3" />
  </svg>
);

const FolderIcon: React.FC<{ size?: number }> = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const UserPlusIcon: React.FC<{ size?: number }> = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);

const BusinessHubApp: React.FC = () => {
  const classes = useBusinessHubStyles();
  const [activeTab, setActiveTab] = useState<TabType>("businessHub");
  const [hubSubTab, setHubSubTab] = useState<string>("dashboard");
  const [billingSubTab, setBillingSubTab] = useState<string>("billing");
  const [supportPriority, setSupportPriority] = useState<string>("medium");
  const [autoRenewDomain, setAutoRenewDomain] = useState<boolean>(true);
  const [autoRenewPlan, setAutoRenewPlan] = useState<boolean>(true);

  return (
    <div className={classes.container}>
      {/* ─── SCROLLABLE PAGE CONTENT ─── */}
      <div className={classes.scrollableContent}>
        {/* ═══════════════════════════════════════════════════════
            TAB 1: BUSINESS HUB
            ═══════════════════════════════════════════════════════ */}
        {activeTab === "businessHub" && (
          <>
            {/* Header */}
            <div className={classes.header}>
              <div className={classes.headerLeft}>
                <button className={classes.iconBtn} aria-label="Back">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <h3 className={classes.headerTitle}>Business Hub</h3>
              </div>
            </div>

            {/* Location Selector Bar */}
            <div className={classes.locationBar}>
              <span className={classes.unitTitle}>Weblings Unit 1</span>
              <button className={classes.locationPickerBtn} title="Select Location">
                <span>No locations available</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>

            {/* Horizontal Sub-tabs */}
            <div className={classes.subTabsRow}>
              {["Dashboard", "Clients", "Projects", "Teams", "Timesheet"].map((tab) => {
                const key = tab.toLowerCase();
                const isActive = hubSubTab === key;
                return (
                  <span
                    key={key}
                    className={isActive ? classes.subTabItemActive : classes.subTabItem}
                    onClick={() => setHubSubTab(key)}
                  >
                    {tab}
                  </span>
                );
              })}
            </div>

            {/* Top 2 Summary Stat Cards */}
            <div className={classes.statsRow}>
              {/* Total Projects Card */}
              <div className={classes.statCard}>
                <div className={classes.statTopRow}>
                  <span className={classes.statLabel}>Total Projects</span>
                  <div className={classes.statIconBlue}>
                    <FolderIcon size={13} />
                  </div>
                </div>
                <div className={classes.statNumber}>24</div>
                <div className={classes.statSubBadge}>
                  <span>↑ +4 this month</span>
                </div>
              </div>

              {/* Clients Card */}
              <div className={classes.statCard}>
                <div className={classes.statTopRow}>
                  <span className={classes.statLabel}>Clients</span>
                  <div className={classes.statIconPurple}>
                    <UserPlusIcon size={13} />
                  </div>
                </div>
                <div className={classes.statNumber}>18</div>
                <div className={classes.statSubBadge}>
                  <span>● 100% active</span>
                </div>
              </div>
            </div>

            {/* Detailed Projects Overview Card */}
            <div className={classes.card}>
              <div className={classes.cardTitle}>
                <span>Projects Overview</span>
                <span className={classes.cardActionLink}>View All</span>
              </div>

              {/* Project 1 */}
              <div className={classes.projectItem}>
                <div className={classes.projectHeader}>
                  <span className={classes.projectName}>Mobile Banking Suite</span>
                  <span className={`${classes.projectBadge} ${classes.badgeEmerald}`}>85% Done</span>
                </div>
                <div className={classes.progressBarTrack}>
                  <div
                    className={classes.progressBarFill}
                    style={{ width: "85%", backgroundColor: "#10B981" }}
                  />
                </div>
                <div className={classes.projectMeta}>
                  <span>Sprint 4 • 6 Contributors</span>
                  <span>Due in 8 days</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className={classes.projectItem}>
                <div className={classes.projectHeader}>
                  <span className={classes.projectName}>Enterprise Cloud Migration</span>
                  <span className={`${classes.projectBadge} ${classes.badgeBlue}`}>94% Done</span>
                </div>
                <div className={classes.progressBarTrack}>
                  <div
                    className={classes.progressBarFill}
                    style={{ width: "94%", backgroundColor: "#2563EB" }}
                  />
                </div>
                <div className={classes.projectMeta}>
                  <span>AWS to Cloudflare Edge</span>
                  <span>Final QA</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className={classes.projectItem}>
                <div className={classes.projectHeader}>
                  <span className={classes.projectName}>Single Sign-On &amp; Auth Gateway</span>
                  <span className={`${classes.projectBadge} ${classes.badgeAmber}`}>64% Done</span>
                </div>
                <div className={classes.progressBarTrack}>
                  <div
                    className={classes.progressBarFill}
                    style={{ width: "64%", backgroundColor: "#F59E0B" }}
                  />
                </div>
                <div className={classes.projectMeta}>
                  <span>Zero-Trust Security</span>
                  <span>In Review</span>
                </div>
              </div>
            </div>

            {/* Detailed Employee Overview Card */}
            <div className={classes.card}>
              <div className={classes.cardTitle}>
                <span>Employee Overview</span>
                <span style={{ fontSize: "9px", color: "#059669", fontWeight: 600 }}>● Live Fleet</span>
              </div>

              {/* Metrics Grid */}
              <div className={classes.employeePillsRow}>
                <div className={classes.employeePill}>
                  <div className={classes.employeePillNum}>156</div>
                  <div className={classes.employeePillLabel}>Total</div>
                </div>
                <div className={classes.employeePill} style={{ borderColor: "#BBF7D0", backgroundColor: "#F0FDF4" }}>
                  <div className={classes.employeePillNum} style={{ color: "#15803D" }}>142</div>
                  <div className={classes.employeePillLabel}>On Shift</div>
                </div>
                <div className={classes.employeePill} style={{ borderColor: "#BFDBFE", backgroundColor: "#EFF6FF" }}>
                  <div className={classes.employeePillNum} style={{ color: "#1D4ED8" }}>10</div>
                  <div className={classes.employeePillLabel}>Remote</div>
                </div>
                <div className={classes.employeePill}>
                  <div className={classes.employeePillNum} style={{ color: "#B45309" }}>4</div>
                  <div className={classes.employeePillLabel}>Leave</div>
                </div>
              </div>

              {/* Department breakdown */}
              <div className={classes.deptRow}>
                <span className={classes.deptName}>Core Engineering</span>
                <span className={classes.deptCount}>64 staff (45%)</span>
              </div>
              <div className={classes.deptRow}>
                <span className={classes.deptName}>Operations &amp; Support</span>
                <span className={classes.deptCount}>42 staff (29%)</span>
              </div>
              <div className={classes.deptRow}>
                <span className={classes.deptName}>Product &amp; UI Design</span>
                <span className={classes.deptCount}>22 staff (15%)</span>
              </div>
              <div className={classes.deptRow}>
                <span className={classes.deptName}>HR, Compliance &amp; Finance</span>
                <span className={classes.deptCount}>14 staff (11%)</span>
              </div>
            </div>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════
            TAB 2: ACCOUNTS (Org Details)
            ═══════════════════════════════════════════════════════ */}
        {activeTab === "accounts" && (
          <>
            {/* Header */}
            <div className={classes.header}>
              <div className={classes.headerLeft}>
                <button className={classes.iconBtn} aria-label="Menu">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
                <h3 className={classes.headerTitle}>Org Details</h3>
              </div>
            </div>

            {/* Section Bar */}
            <div className={classes.orgHeaderRow}>
              <h4 className={classes.orgSectionTitle}>Organisation Details</h4>
              <button className={classes.editBtn}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                Edit
              </button>
            </div>

            {/* Card 1: Company */}
            <div className={classes.detailCard}>
              <h5 className={classes.detailCardTitle}>Company</h5>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Legal Name</span>
                <span className={classes.detailValue}>Weblings</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Legal Entity Name</span>
                <span className={classes.detailValue}>Weblings Ltd</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Identification Number</span>
                <span className={classes.detailValue}>U12345KA2026PTC123456</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Date Of Incorporation</span>
                <span className={classes.detailValue}>2024-09-08</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Sector</span>
                <span className={classes.detailValue}>INFORMATION_TECHNOLOGY</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Nature Of Business</span>
                <span className={classes.detailValue}>INFORMATION_TECHNOLOGY</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Type Of Business</span>
                <span className={classes.detailValue}>LIMITED_LIABILITY_COMPANY_LLC</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Employee Prefix</span>
                <span className={classes.detailValue}>EMP</span>
              </div>
            </div>

            {/* Card 2: Location */}
            <div className={classes.detailCard}>
              <h5 className={classes.detailCardTitle}>Location</h5>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Country</span>
                <span className={classes.detailValue}>India</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>State</span>
                <span className={classes.detailValue}>Tamil Nadu</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>City</span>
                <span className={classes.detailValue}>Tiruppur</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Zip Code</span>
                <span className={classes.detailValue}>641604</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Address Line1</span>
                <span className={classes.detailValue}>valliyankadu 1</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Address Line2</span>
                <span className={classes.detailValue}>tiruppur</span>
              </div>
            </div>

            {/* Card 3: Finance */}
            <div className={classes.detailCard}>
              <h5 className={classes.detailCardTitle}>Finance</h5>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Currency</span>
                <span className={classes.detailValue}>Indian Rupee</span>
              </div>
              <div className={classes.detailRow}>
                <span className={classes.detailLabel}>Financial Year</span>
                <span className={classes.detailValue}>2025-2026</span>
              </div>
            </div>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════
            TAB 3: BILLING
            ═══════════════════════════════════════════════════════ */}
        {activeTab === "billing" && (
          <>
            {/* Header */}
            <div className={classes.header}>
              <div className={classes.headerLeft}>
                <button className={classes.iconBtn} aria-label="Menu">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
                <h3 className={classes.headerTitle}>Billing</h3>
              </div>
            </div>

            {/* Horizontal Sub-tabs */}
            <div className={classes.subTabsRow}>
              {["Billing", "Payment History", "Transactions"].map((tab) => {
                const key = tab.toLowerCase();
                const isActive = billingSubTab === key;
                return (
                  <span
                    key={key}
                    className={isActive ? classes.subTabItemActive : classes.subTabItem}
                    onClick={() => setBillingSubTab(key)}
                  >
                    {tab}
                  </span>
                );
              })}
            </div>

            {/* Card 1: Domain */}
            <div className={classes.card}>
              <div className={classes.billingCardTopRow}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>Domain</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "10px", color: "#64748B", fontWeight: 500 }}>Auto Renew</span>
                <div
                  className={autoRenewDomain ? classes.toggleSwitchActive : ""}
                  onClick={() => setAutoRenewDomain(!autoRenewDomain)}
                />
                <button className={classes.manageDomainBtn}>Manage Domain</button>
              </div>

              {/* Active Domain Box */}
              <div className={classes.activeDomainBox}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className={classes.activeDomainDomain}>Domainname.net</span>
                  <span className={classes.activePill}>Active</span>
                </div>
                <div className={classes.domainRenewalText}>
                  Renewel $15 / year • On 11 Sep, 2025
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#64748B", marginTop: "4px" }}>
                <span>Last Purchased: <strong>$17 / year</strong></span>
                <span>Exp: 11.11.2024</span>
              </div>
            </div>

            {/* Card 2: Plan */}
            <div className={classes.card}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>Plan</span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "9.5px", color: "#64748B" }}>Auto Renew</span>
                  <div
                    className={autoRenewPlan ? classes.toggleSwitchActive : ""}
                    onClick={() => setAutoRenewPlan(!autoRenewPlan)}
                  />
                </div>
              </div>

              <div className={classes.planActionRow}>
                <button className={classes.viewPlansBtn}>View Plans</button>
                <button className={classes.changePlanBtn}>Change Plan</button>
              </div>

              {/* Upcoming Bill Box */}
              <div className={classes.upcomingBillBox}>
                <div className={classes.upcomingBillLabel}>
                  <span>Upcoming Bill</span>
                  <span style={{ fontSize: "8.5px", color: "#64748B" }}>( Due on : 11 Sep 2024 )</span>
                </div>
                <div className={classes.upcomingBillAmount}>$1000</div>
                <div className={classes.upcomingBillMeta}>
                  Standard Plan • Plan cost $1000/month • Current Users 100
                </div>
              </div>
            </div>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════
            TAB 4: SUPPORT
            ═══════════════════════════════════════════════════════ */}
        {activeTab === "support" && (
          <>
            {/* Header */}
            <div className={classes.header}>
              <div className={classes.headerLeft}>
                <button className={classes.iconBtn} aria-label="Menu">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
                <h3 className={classes.headerTitle}>Support</h3>
              </div>
            </div>

            {/* Section Card */}
            <div className={classes.supportCard}>
              <h4 style={{ fontSize: "13.5px", fontWeight: 800, color: "#0F172A", margin: "0 0 10px 0" }}>
                Support Details
              </h4>

              {/* Support Type */}
              <div className={classes.fieldGroup}>
                <label className={classes.fieldLabel}>Support Type *</label>
                <select className={classes.fieldSelect} defaultValue="technical">
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing Inquiry</option>
                  <option value="account">Account Access</option>
                  <option value="feature">Feature Request</option>
                </select>
              </div>

              {/* Related Module */}
              <div className={classes.fieldGroup}>
                <label className={classes.fieldLabel}>Related Module *</label>
                <select className={classes.fieldSelect} defaultValue="business-hub">
                  <option value="business-hub">Business Hub</option>
                  <option value="org-details">Organisation Details</option>
                  <option value="billing-module">Billing &amp; Domains</option>
                  <option value="workspace">Cloud Workspace Suite</option>
                </select>
              </div>

              {/* Subject */}
              <div className={classes.fieldGroup}>
                <label className={classes.fieldLabel}>Subject *</label>
                <input
                  type="text"
                  className={classes.fieldInput}
                  defaultValue="API Gateway Sync Latency"
                  placeholder="Brief summary of your issue"
                />
              </div>

              {/* Description */}
              <div className={classes.fieldGroup}>
                <label className={classes.fieldLabel}>Description *</label>
                <textarea
                  className={classes.fieldTextarea}
                  rows={3}
                  defaultValue="Requesting dedicated regional endpoint configuration for Asia-Pacific cluster."
                  placeholder="Provide detailed information about the issue or question..."
                />
              </div>

              {/* Priority */}
              <div className={classes.fieldGroup}>
                <label className={classes.fieldLabel}>Priority</label>
                <div className={classes.priorityRow}>
                  <button
                    type="button"
                    className={supportPriority === "low" ? classes.priorityBtnActive : classes.priorityBtn}
                    onClick={() => setSupportPriority("low")}
                  >
                    <span className={classes.priorityDotBlue} />
                    <span>Low</span>
                  </button>
                  <button
                    type="button"
                    className={supportPriority === "medium" ? classes.priorityBtnActive : classes.priorityBtn}
                    onClick={() => setSupportPriority("medium")}
                  >
                    <span className={classes.priorityDotPurple} />
                    <span>Medium</span>
                  </button>
                  <button
                    type="button"
                    className={supportPriority === "high" ? classes.priorityBtnActive : classes.priorityBtn}
                    onClick={() => setSupportPriority("high")}
                  >
                    <span className={classes.priorityDotAmber} />
                    <span>High</span>
                  </button>
                </div>
              </div>

              {/* Submit Ticket */}
              <button type="button" className={classes.submitTicketBtn}>
                Submit Support Ticket
              </button>
            </div>
          </>
        )}
      </div>

      {/* ─── STICKY BOTTOM NAVIGATION (4 TABS) ─── */}
      <div className={classes.tabBar}>
        {/* Tab 1: Business Hub */}
        <button
          type="button"
          className={classes.tabBtn}
          onClick={() => setActiveTab("businessHub")}
        >
          <div className={activeTab === "businessHub" ? classes.tabIconWrapperActive : classes.tabIconWrapperInactive}>
            <HubTabIcon size={17} />
          </div>
          <span className={activeTab === "businessHub" ? classes.tabLabelActive : classes.tabLabelInactive}>
            Business Hub
          </span>
        </button>

        {/* Tab 2: Accounts */}
        <button
          type="button"
          className={classes.tabBtn}
          onClick={() => setActiveTab("accounts")}
        >
          <div className={activeTab === "accounts" ? classes.tabIconWrapperActive : classes.tabIconWrapperInactive}>
            <AccountsTabIcon size={17} />
          </div>
          <span className={activeTab === "accounts" ? classes.tabLabelActive : classes.tabLabelInactive}>
            Accounts
          </span>
        </button>

        {/* Tab 3: Billing */}
        <button
          type="button"
          className={classes.tabBtn}
          onClick={() => setActiveTab("billing")}
        >
          <div className={activeTab === "billing" ? classes.tabIconWrapperActive : classes.tabIconWrapperInactive}>
            <BillingTabIcon size={17} />
          </div>
          <span className={activeTab === "billing" ? classes.tabLabelActive : classes.tabLabelInactive}>
            Billing
          </span>
        </button>

        {/* Tab 4: Support */}
        <button
          type="button"
          className={classes.tabBtn}
          onClick={() => setActiveTab("support")}
        >
          <div className={activeTab === "support" ? classes.tabIconWrapperActive : classes.tabIconWrapperInactive}>
            <SupportTabIcon size={17} />
          </div>
          <span className={activeTab === "support" ? classes.tabLabelActive : classes.tabLabelInactive}>
            Support
          </span>
        </button>

        {/* iOS Home Indicator Bar */}
        <div className={classes.homeIndicator} />
      </div>
    </div>
  );
};

export default BusinessHubApp;
