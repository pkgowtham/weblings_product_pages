'use client';

import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../theme/themeType';

const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    flex: 1,
    padding: '16px 22px',
    backgroundColor: '#F8FAFC',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    minWidth: 0,
    overflowY: 'auto',
    textAlign: 'left',
  },

  /* Top Tabs: Attendance only (first tab is enough) */
  topTabsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    borderBottom: '1px solid #E2E8F0',
    paddingBottom: '2px',
  },
  tabBtnActive: {
    background: 'none',
    border: 'none',
    color: '#0072C4',
    fontWeight: 700,
    fontSize: '13px',
    padding: '6px 2px 10px',
    borderBottom: '2.5px solid #0072C4',
    cursor: 'pointer',
  },

  /* Top 3 KPI Cards Row */
  topMetricsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
  metricCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    border: '1px solid #E2E8F0',
    padding: '14px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    boxShadow: '0 1px 3px rgba(15, 23, 42, 0.02)',
  },
  metricHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11px',
    color: '#64748B',
    fontWeight: 600,
  },
  metricValueRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '32px',
  },
  metricValue: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#0F172A',
  },
  clockInBtn: {
    backgroundColor: '#0072C4',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 16px',
    fontSize: '11px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    '&:hover': {
      backgroundColor: '#0284C7',
      transform: 'translateY(-1px)',
    },
  },
  clockInBtnActive: {
    backgroundColor: '#10B981 !important',
  },
  progressBarBg: {
    width: '100%',
    height: '4px',
    backgroundColor: '#E2E8F0',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#0072C4',
    borderRadius: '2px',
    transition: 'width 0.3s ease',
  },

  /* Middle Row: Shift Details, Recent Activity, Teams / Clock */
  middleGrid: {
    display: 'grid',
    gridTemplateColumns: '1.25fr 1.25fr 1fr',
    gap: '12px',
    '@media (max-width: 1000px)': {
      gridTemplateColumns: '1fr',
    },
  },
  whiteCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    border: '1px solid #E2E8F0',
    padding: '14px 16px',
    boxShadow: '0 1px 3px rgba(15, 23, 42, 0.02)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  cardTitle: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#0F172A',
    margin: 0,
  },

  /* Shift Details Grid */
  shiftGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
    paddingBottom: '8px',
    borderBottom: '1px solid #F1F5F9',
  },
  shiftStatLabel: {
    fontSize: '9.5px',
    color: '#64748B',
    marginBottom: '3px',
  },
  shiftStatValue: {
    fontSize: '11px',
    fontWeight: 700,
    color: '#0F172A',
  },
  shiftNameLabel: {
    fontSize: '10.5px',
    color: '#475569',
    fontWeight: 600,
  },
  weekDaysRow: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
    marginTop: '2px',
  },
  dayPill: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '9.5px',
    fontWeight: 700,
    border: '1px solid #CBD5E1',
    color: '#64748B',
    backgroundColor: '#FFFFFF',
  },
  dayPillActive: {
    borderColor: '#0072C4',
    color: '#0072C4',
    backgroundColor: '#EFF6FF',
    fontWeight: 800,
  },
  legendRow: {
    display: 'flex',
    gap: '14px',
    fontSize: '9.5px',
    color: '#64748B',
    alignItems: 'center',
    marginTop: '2px',
  },
  legendDotBlue: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#0072C4',
    display: 'inline-block',
    marginRight: '4px',
  },
  legendDotGray: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#94A3B8',
    display: 'inline-block',
    marginRight: '4px',
  },
  shiftSummaryText: {
    fontSize: '10px',
    color: '#0F172A',
    fontWeight: 600,
    lineHeight: 1.4,
    margin: 0,
  },
  shiftBreakText: {
    fontSize: '9.5px',
    color: '#64748B',
    fontWeight: 500,
  },

  /* Recent Activity Chart */
  activityHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pillToggleGroup: {
    display: 'inline-flex',
    backgroundColor: '#F1F5F9',
    borderRadius: '6px',
    padding: '2px',
    gap: '2px',
  },
  pillToggleBtn: {
    border: 'none',
    background: 'none',
    fontSize: '9.5px',
    fontWeight: 600,
    color: '#64748B',
    padding: '2px 8px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  pillToggleBtnActive: {
    backgroundColor: '#FFFFFF',
    color: '#0072C4',
    fontWeight: 700,
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  },
  chartWrapper: {
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-end',
    height: '110px',
    paddingTop: '10px',
  },
  chartYAxis: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '8px',
    color: '#94A3B8',
    height: '100%',
    paddingBottom: '16px',
    textAlign: 'right',
    minWidth: '28px',
  },
  chartBody: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  chartGridLines: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderLeft: '1px solid #E2E8F0',
    borderBottom: '1px solid #E2E8F0',
    position: 'relative',
  },
  chartLineRow: {
    width: '100%',
    height: '1px',
    backgroundColor: '#F1F5F9',
  },
  chartDataBarsRow: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingBottom: '2px',
  },
  chartBarCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3px',
    height: '100%',
    justifyContent: 'flex-end',
  },
  chartPointDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '#0072C4',
    border: '1.5px solid #FFFFFF',
    boxShadow: '0 1px 3px rgba(0, 114, 196, 0.4)',
  },
  chartPointEmpty: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: '#94A3B8',
  },
  chartXLabels: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '8.5px',
    color: '#64748B',
    paddingTop: '4px',
  },

  /* Right Column: Teams Logs & Time Clock */
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  teamsLogsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    border: '1px solid #E2E8F0',
    padding: '12px 14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'border-color 0.15s ease',
    '&:hover': {
      borderColor: '#0072C4',
    },
  },
  teamsLogsLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  teamsIconBox: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    backgroundColor: '#EFF6FF',
    color: '#0072C4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamsLogsTitle: {
    fontSize: '11px',
    fontWeight: 700,
    color: '#0F172A',
    margin: 0,
  },
  teamsLogsSub: {
    fontSize: '8.5px',
    color: '#64748B',
    margin: 0,
    maxWidth: '160px',
  },
  timeClockCard: {
    backgroundColor: '#F0F9FF',
    borderRadius: '10px',
    border: '1.5px solid #BAE6FD',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '4px',
  },
  clockIconRound: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#BAE6FD',
    color: '#0072C4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2px',
  },
  istTimeLabel: {
    fontSize: '9.5px',
    fontWeight: 700,
    color: '#0284C7',
    letterSpacing: '0.04em',
  },
  istBigTime: {
    fontSize: '22px',
    fontWeight: 800,
    color: '#0072C4',
    letterSpacing: '-0.02em',
    margin: '2px 0',
  },
  datePillBlue: {
    backgroundColor: '#0072C4',
    color: '#FFFFFF',
    fontSize: '9.5px',
    fontWeight: 700,
    padding: '3px 12px',
    borderRadius: '6px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
  },

  /* Log Table Section */
  logSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    border: '1px solid #E2E8F0',
    padding: '14px 16px',
    boxShadow: '0 1px 3px rgba(15, 23, 42, 0.02)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '10.5px',
  },
  th: {
    textAlign: 'left',
    padding: '8px 10px',
    color: '#64748B',
    fontWeight: 600,
    borderBottom: '1px solid #E2E8F0',
    backgroundColor: '#F8FAFC',
    whiteSpace: 'nowrap',
  },
  td: {
    padding: '9px 10px',
    color: '#0F172A',
    borderBottom: '1px solid #F1F5F9',
    whiteSpace: 'nowrap',
  },
  tdLateRow: {
    backgroundColor: '#FFF7ED',
  },
  badgeWeekend: {
    color: '#64748B',
    fontWeight: 600,
  },
  badgeLateArrival: {
    backgroundColor: '#D97706',
    color: '#FFFFFF',
    fontSize: '8px',
    fontWeight: 800,
    padding: '2px 6px',
    borderRadius: '4px',
    letterSpacing: '0.04em',
  },
  paginationRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '9.5px',
    color: '#64748B',
    paddingTop: '6px',
  },
  pageControls: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
  },
  pageNumberActive: {
    width: '18px',
    height: '18px',
    borderRadius: '4px',
    backgroundColor: '#EFF6FF',
    color: '#0072C4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
  },
}));

export const EofficeAttendanceView: React.FC = () => {
  const classes = useStyles();
  const [isClockedIn, setIsClockedIn] = useState<boolean>(false);
  const [activeActivityTab, setActiveActivityTab] = useState<'week' | 'month'>('week');

  return (
    <div className={classes.container}>
      {/* ── Top Tabs ── (First tab is enough, Leave tab removed) */}
      <div className={classes.topTabsRow}>
        <button className={classes.tabBtnActive}>Attendance</button>
      </div>

      {/* ── Top 3 Metric Cards ── */}
      <div className={classes.topMetricsRow}>
        {/* Card 1: Clock In time */}
        <div className={classes.metricCard}>
          <div className={classes.metricHeader}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0072C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            <span>Clock In time</span>
          </div>
          <div className={classes.metricValueRow}>
            <span className={classes.metricValue}>{isClockedIn ? "09:00 AM" : "—"}</span>
            <button
              className={`${classes.clockInBtn} ${isClockedIn ? classes.clockInBtnActive : ''}`}
              onClick={() => setIsClockedIn(!isClockedIn)}
            >
              {isClockedIn ? "Clocked In ✓" : "Clock In"}
            </button>
          </div>
        </div>

        {/* Card 2: Clock Out time */}
        <div className={classes.metricCard}>
          <div className={classes.metricHeader}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span>Clock Out time</span>
          </div>
          <div className={classes.metricValueRow}>
            <span className={classes.metricValue}>—</span>
          </div>
        </div>

        {/* Card 3: Total Working hours */}
        <div className={classes.metricCard}>
          <div className={classes.metricHeader}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Total Working hours</span>
          </div>
          <div className={classes.metricValueRow}>
            <span className={classes.metricValue}>{isClockedIn ? "02:45" : "0:00"}</span>
          </div>
          <div className={classes.progressBarBg}>
            <div
              className={classes.progressBarFill}
              style={{ width: isClockedIn ? '34%' : '0%' }}
            />
          </div>
        </div>
      </div>

      {/* ── Middle Row: Shift Details, Recent Activity, Teams / IST Time ── */}
      <div className={classes.middleGrid}>
        {/* 1. Shift Details Card */}
        <div className={classes.whiteCard}>
          <h4 className={classes.cardTitle}>Shift Details</h4>

          <div className={classes.shiftGrid}>
            <div>
              <div className={classes.shiftStatLabel}>Shift Start</div>
              <div className={classes.shiftStatValue}>9:00 AM</div>
            </div>
            <div>
              <div className={classes.shiftStatLabel}>Shift End</div>
              <div className={classes.shiftStatValue}>6:00 AM</div>
            </div>
            <div>
              <div className={classes.shiftStatLabel}>Lunch Time</div>
              <div className={classes.shiftStatValue}>01:00:00</div>
            </div>
            <div>
              <div className={classes.shiftStatLabel}>Eff. hours</div>
              <div className={classes.shiftStatValue}>21 hours</div>
            </div>
          </div>

          <div className={classes.shiftNameLabel}>Shift Name: Development</div>

          <div className={classes.weekDaysRow}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => {
              const isWorkDay = i >= 1 && i <= 5;
              return (
                <div
                  key={i}
                  className={`${classes.dayPill} ${isWorkDay ? classes.dayPillActive : ''}`}
                >
                  {day}
                </div>
              );
            })}
          </div>

          <div className={classes.legendRow}>
            <span><span className={classes.legendDotBlue} /> Working days</span>
            <span><span className={classes.legendDotGray} /> Week Offs</span>
          </div>

          <p className={classes.shiftSummaryText}>
            Today 9:00 AM - 6:00 AM (21 HRS)
            <br />
            <span className={classes.shiftBreakText}>Break/Lunch Hours 01:00:00</span>
          </p>
        </div>

        {/* 2. Recent Activity Card */}
        <div className={classes.whiteCard}>
          <div className={classes.activityHeader}>
            <h4 className={classes.cardTitle}>Recent Activity</h4>
            <div className={classes.pillToggleGroup}>
              <button
                className={`${classes.pillToggleBtn} ${activeActivityTab === 'week' ? classes.pillToggleBtnActive : ''}`}
                onClick={() => setActiveActivityTab('week')}
              >
                Week
              </button>
              <button
                className={`${classes.pillToggleBtn} ${activeActivityTab === 'month' ? classes.pillToggleBtnActive : ''}`}
                onClick={() => setActiveActivityTab('month')}
              >
                Month
              </button>
            </div>
          </div>

          {/* Activity Chart */}
          <div className={classes.chartWrapper}>
            <div className={classes.chartYAxis}>
              <span>24 hrs</span>
              <span>20 hrs</span>
              <span>16 hrs</span>
              <span>12 hrs</span>
              <span>8 hrs</span>
              <span>4 hrs</span>
              <span>0 hrs</span>
            </div>

            <div className={classes.chartBody}>
              <div className={classes.chartGridLines}>
                <div className={classes.chartLineRow} />
                <div className={classes.chartLineRow} />
                <div className={classes.chartLineRow} />
                <div className={classes.chartLineRow} />
                <div className={classes.chartLineRow} />
                <div className={classes.chartLineRow} />
                <div className={classes.chartLineRow} />

                {/* Data Points */}
                <div className={classes.chartDataBarsRow}>
                  {/* Mon */}
                  <div className={classes.chartBarCol}>
                    <div
                      style={{
                        backgroundColor: '#0072C4',
                        color: '#FFF',
                        fontSize: 7,
                        fontWeight: 700,
                        padding: '1px 3px',
                        borderRadius: 3,
                        marginBottom: 2,
                      }}
                    >
                      i
                    </div>
                    <div className={classes.chartPointDot} />
                  </div>
                  {/* Tue */}
                  <div className={classes.chartBarCol}>
                    <div className={classes.chartPointEmpty} />
                  </div>
                  {/* Wed */}
                  <div className={classes.chartBarCol}>
                    <div className={classes.chartPointEmpty} />
                  </div>
                  {/* Thu */}
                  <div className={classes.chartBarCol}>
                    <div className={classes.chartPointEmpty} />
                  </div>
                  {/* Fri */}
                  <div className={classes.chartBarCol}>
                    <div className={classes.chartPointEmpty} />
                  </div>
                </div>
              </div>

              <div className={classes.chartXLabels}>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Right Column: Teams Logs & IST Clock */}
        <div className={classes.rightColumn}>
          {/* Teams Logs Card */}
          <div className={classes.teamsLogsCard}>
            <div className={classes.teamsLogsLeft}>
              <div className={classes.teamsIconBox}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h5 className={classes.teamsLogsTitle}>Teams Logs</h5>
                <p className={classes.teamsLogsSub}>Review your direct report's attendance and clock in history.</p>
              </div>
            </div>
            <span style={{ color: '#94A3B8', fontSize: 13, fontWeight: 700 }}>›</span>
          </div>

          {/* IST Time Card */}
          <div className={classes.timeClockCard}>
            <div className={classes.clockIconRound}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className={classes.istTimeLabel}>IST (GMT+5:30)</span>
            <div className={classes.istBigTime}>01:24:59 PM</div>
            <div className={classes.datePillBlue}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>21 September, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Section: Log Table ── */}
      <div className={classes.logSection}>
        <h4 className={classes.cardTitle}>Log</h4>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Employee Name</th>
                <th className={classes.th}>Date</th>
                <th className={classes.th}>Attendance Status</th>
                <th className={classes.th}>Clock In</th>
                <th className={classes.th}>Clock Out</th>
                <th className={classes.th}>Gross Hours</th>
                <th className={classes.th}>Effective Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>Admin</td>
                <td className={classes.td}>2026-09-20</td>
                <td className={classes.td}><span className={classes.badgeWeekend}>WEEKEND</span></td>
                <td className={classes.td}>—</td>
                <td className={classes.td}>—</td>
                <td className={classes.td}>—</td>
                <td className={classes.td}>—</td>
              </tr>
              <tr>
                <td className={classes.td}>Admin</td>
                <td className={classes.td}>2026-09-19</td>
                <td className={classes.td}><span className={classes.badgeWeekend}>WEEKEND</span></td>
                <td className={classes.td}>—</td>
                <td className={classes.td}>—</td>
                <td className={classes.td}>—</td>
                <td className={classes.td}>—</td>
              </tr>
              <tr className={classes.tdLateRow}>
                <td className={classes.td}>Admin</td>
                <td className={classes.td}>2026-09-18</td>
                <td className={classes.td}><span className={classes.badgeLateArrival}>LATE ARRIVAL</span></td>
                <td className={classes.td}>10:36:09</td>
                <td className={classes.td}>06:00:00</td>
                <td className={classes.td}>00:00:00</td>
                <td className={classes.td}>00:00:00</td>
              </tr>
              <tr className={classes.tdLateRow}>
                <td className={classes.td}>Admin</td>
                <td className={classes.td}>2026-09-17</td>
                <td className={classes.td}><span className={classes.badgeLateArrival}>LATE ARRIVAL</span></td>
                <td className={classes.td}>16:36:27</td>
                <td className={classes.td}>—</td>
                <td className={classes.td}>21:00:00</td>
                <td className={classes.td}>—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={classes.paginationRow}>
          <span>Row Per Page 10 ▾</span>
          <div className={classes.pageControls}>
            <span>|&lt;</span>
            <span>&lt;</span>
            <span className={classes.pageNumberActive}>1</span>
            <span>&gt;</span>
            <span>&gt;|</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EofficeAttendanceView;
