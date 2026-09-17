'use client';

import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  // Container for the checkmark badge in document flow
  badgeWrapper: {
    position: "relative",
    width: "78px",
    height: "78px",
    margin: "0 auto 16px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
  // Soft pulsing ripple around checkmark (runs once on open)
  rippleRing: {
    position: "absolute",
    inset: "-6px",
    borderRadius: "50%",
    border: "2px solid #34D399",
    animation: "$ripplePulse 1.2s ease-out forwards",
    pointerEvents: "none",
  },
  // Checkmark circle
  checkmarkCircle: {
    width: "74px",
    height: "74px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    border: "3px solid #A7F3D0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 25px -4px rgba(16, 185, 129, 0.4)",
    animation: "$badgePopIn 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
  },
  checkmarkSvg: {
    width: "38px",
    height: "38px",
    stroke: "#FFFFFF",
    strokeWidth: 3.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  },
  checkmarkPath: {
    strokeDasharray: 48,
    strokeDashoffset: 48,
    animation: "$drawCheck 0.5s 0.2s cubic-bezier(0.65, 0, 0.45, 1) forwards",
  },

  // Full-Modal Confetti Shower Layer
  confettiLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 2,
  },

  // Base confetti particle: positioned at checkmark origin (top: 75px, left: 50%)
  confettiParticle: {
    position: "absolute",
    top: "75px",
    left: "50%",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
    willChange: "transform, opacity",
    backfaceVisibility: "visible",
    animationFillMode: "both",
  },

  // ─── SMOOTH SINGLE-FLOW TRAJECTORIES (NO STOPS, NO STUTTER) ───
  // Trajectory 1: Far Left blast -> smooth continuous fall to ground -> disappears
  "@keyframes blastFallFarLeft": {
    "0%": {
      transform: "translate3d(0, 0, 0) scale(0) rotate(0deg)",
      opacity: 0,
      animationTimingFunction: "ease-out",
    },
    "18%": {
      transform: "translate3d(-135px, -50px, 0) scale(1) rotate(170deg)",
      opacity: 1,
      animationTimingFunction: "cubic-bezier(0.38, 0, 0.75, 1)",
    },
    "85%": {
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(-165px, 430px, 0) scale(0.8) rotate(720deg)",
      opacity: 0,
    },
  },

  // Trajectory 2: Mid Left blast -> smooth continuous fall to ground -> disappears
  "@keyframes blastFallMidLeft": {
    "0%": {
      transform: "translate3d(0, 0, 0) scale(0) rotate(0deg)",
      opacity: 0,
      animationTimingFunction: "ease-out",
    },
    "18%": {
      transform: "translate3d(-85px, -80px, 0) scale(1) rotate(150deg)",
      opacity: 1,
      animationTimingFunction: "cubic-bezier(0.38, 0, 0.75, 1)",
    },
    "85%": {
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(-110px, 430px, 0) scale(0.8) rotate(660deg)",
      opacity: 0,
    },
  },

  // Trajectory 3: Center Left blast -> smooth continuous fall to ground -> disappears
  "@keyframes blastFallCenterLeft": {
    "0%": {
      transform: "translate3d(0, 0, 0) scale(0) rotate(0deg)",
      opacity: 0,
      animationTimingFunction: "ease-out",
    },
    "18%": {
      transform: "translate3d(-40px, -100px, 0) scale(1.05) rotate(120deg)",
      opacity: 1,
      animationTimingFunction: "cubic-bezier(0.38, 0, 0.75, 1)",
    },
    "85%": {
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(-50px, 430px, 0) scale(0.8) rotate(600deg)",
      opacity: 0,
    },
  },

  // Trajectory 4: Straight High Center blast -> smooth continuous fall down center -> disappears
  "@keyframes blastFallCenter": {
    "0%": {
      transform: "translate3d(0, 0, 0) scale(0) rotate(0deg)",
      opacity: 0,
      animationTimingFunction: "ease-out",
    },
    "18%": {
      transform: "translate3d(5px, -115px, 0) scale(1.1) rotate(90deg)",
      opacity: 1,
      animationTimingFunction: "cubic-bezier(0.38, 0, 0.75, 1)",
    },
    "85%": {
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(8px, 430px, 0) scale(0.8) rotate(580deg)",
      opacity: 0,
    },
  },

  // Trajectory 5: Center Right blast -> smooth continuous fall to ground -> disappears
  "@keyframes blastFallCenterRight": {
    "0%": {
      transform: "translate3d(0, 0, 0) scale(0) rotate(0deg)",
      opacity: 0,
      animationTimingFunction: "ease-out",
    },
    "18%": {
      transform: "translate3d(40px, -100px, 0) scale(1.05) rotate(-120deg)",
      opacity: 1,
      animationTimingFunction: "cubic-bezier(0.38, 0, 0.75, 1)",
    },
    "85%": {
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(50px, 430px, 0) scale(0.8) rotate(-600deg)",
      opacity: 0,
    },
  },

  // Trajectory 6: Mid Right blast -> smooth continuous fall to ground -> disappears
  "@keyframes blastFallMidRight": {
    "0%": {
      transform: "translate3d(0, 0, 0) scale(0) rotate(0deg)",
      opacity: 0,
      animationTimingFunction: "ease-out",
    },
    "18%": {
      transform: "translate3d(85px, -80px, 0) scale(1) rotate(-150deg)",
      opacity: 1,
      animationTimingFunction: "cubic-bezier(0.38, 0, 0.75, 1)",
    },
    "85%": {
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(110px, 430px, 0) scale(0.8) rotate(-660deg)",
      opacity: 0,
    },
  },

  // Trajectory 7: Far Right blast -> smooth continuous fall to ground -> disappears
  "@keyframes blastFallFarRight": {
    "0%": {
      transform: "translate3d(0, 0, 0) scale(0) rotate(0deg)",
      opacity: 0,
      animationTimingFunction: "ease-out",
    },
    "18%": {
      transform: "translate3d(135px, -50px, 0) scale(1) rotate(-170deg)",
      opacity: 1,
      animationTimingFunction: "cubic-bezier(0.38, 0, 0.75, 1)",
    },
    "85%": {
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(165px, 430px, 0) scale(0.8) rotate(-720deg)",
      opacity: 0,
    },
  },

  // Trajectory 8: Gentle Float blast -> smooth continuous fall to ground -> disappears
  "@keyframes blastFallGentle": {
    "0%": {
      transform: "translate3d(0, 0, 0) scale(0) rotate(0deg)",
      opacity: 0,
      animationTimingFunction: "ease-out",
    },
    "18%": {
      transform: "translate3d(-20px, -65px, 0) scale(1) rotate(-90deg)",
      opacity: 1,
      animationTimingFunction: "cubic-bezier(0.38, 0, 0.75, 1)",
    },
    "85%": {
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(-15px, 430px, 0) scale(0.8) rotate(-540deg)",
      opacity: 0,
    },
  },

  // Checkmark Badge Pop Animation
  "@keyframes badgePopIn": {
    "0%": {
      transform: "scale(0)",
      opacity: 0,
    },
    "60%": {
      transform: "scale(1.15)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1,
    },
  },
  "@keyframes drawCheck": {
    "0%": {
      strokeDashoffset: 48,
    },
    "100%": {
      strokeDashoffset: 0,
    },
  },
  "@keyframes ripplePulse": {
    "0%": {
      transform: "scale(0.9)",
      opacity: 0.6,
    },
    "100%": {
      transform: "scale(1.4)",
      opacity: 0,
    },
  },

  // Single-flow Trajectory Classes: runs once (forwards), NO infinite loop!
  traj1: { animation: "$blastFallFarLeft 2.3s forwards" },
  traj2: { animation: "$blastFallMidLeft 2.35s forwards" },
  traj3: { animation: "$blastFallCenterLeft 2.4s forwards" },
  traj4: { animation: "$blastFallCenter 2.45s forwards" },
  traj5: { animation: "$blastFallCenterRight 2.4s forwards" },
  traj6: { animation: "$blastFallMidRight 2.35s forwards" },
  traj7: { animation: "$blastFallFarRight 2.3s forwards" },
  traj8: { animation: "$blastFallGentle 2.4s forwards" },
});

interface ParticleDef {
  id: number;
  traj: number;
  delay: number;
  width: number;
  height: number;
  borderRadius: string;
  color: string;
  isStar?: boolean;
}

// 34 Clearly visible confetti papers with staggered release for a natural single-wave waterfall
const CONFETTI_DATA: ParticleDef[] = [
  // Burst 1: Initial explosive eruption
  { id: 1, traj: 1, delay: 0.02, width: 12, height: 20, borderRadius: "2px", color: "#F59E0B" },
  { id: 2, traj: 2, delay: 0.04, width: 10, height: 18, borderRadius: "2px", color: "#F43F5E" },
  { id: 3, traj: 3, delay: 0.05, width: 13, height: 22, borderRadius: "3px", color: "#10B981" },
  { id: 4, traj: 4, delay: 0.03, width: 11, height: 19, borderRadius: "2px", color: "#06B6D4" },
  { id: 5, traj: 5, delay: 0.04, width: 8, height: 26, borderRadius: "3px", color: "#8B5CF6" },
  { id: 6, traj: 6, delay: 0.05, width: 12, height: 12, borderRadius: "50%", color: "#EC4899" },
  { id: 7, traj: 7, delay: 0.02, width: 10, height: 20, borderRadius: "2px", color: "#3B82F6" },
  { id: 8, traj: 8, delay: 0.06, width: 16, height: 16, borderRadius: "0", color: "#F59E0B", isStar: true },

  // Burst 2: Rapid secondary wave (0.08s - 0.16s)
  { id: 9, traj: 1, delay: 0.09, width: 11, height: 19, borderRadius: "2px", color: "#06B6D4" },
  { id: 10, traj: 2, delay: 0.11, width: 14, height: 22, borderRadius: "3px", color: "#F97316" },
  { id: 11, traj: 3, delay: 0.13, width: 7, height: 25, borderRadius: "3px", color: "#EC4899" },
  { id: 12, traj: 4, delay: 0.1, width: 11, height: 11, borderRadius: "50%", color: "#F59E0B" },
  { id: 13, traj: 5, delay: 0.12, width: 16, height: 16, borderRadius: "0", color: "#10B981", isStar: true },
  { id: 14, traj: 6, delay: 0.14, width: 12, height: 20, borderRadius: "2px", color: "#8B5CF6" },
  { id: 15, traj: 7, delay: 0.09, width: 13, height: 18, borderRadius: "2px", color: "#F43F5E" },
  { id: 16, traj: 8, delay: 0.15, width: 10, height: 22, borderRadius: "3px", color: "#3B82F6" },

  // Burst 3: Cascading wave (0.18s - 0.28s)
  { id: 17, traj: 1, delay: 0.19, width: 10, height: 18, borderRadius: "2px", color: "#EC4899" },
  { id: 18, traj: 2, delay: 0.22, width: 13, height: 21, borderRadius: "2px", color: "#10B981" },
  { id: 19, traj: 3, delay: 0.24, width: 10, height: 10, borderRadius: "50%", color: "#06B6D4" },
  { id: 20, traj: 4, delay: 0.2, width: 15, height: 15, borderRadius: "0", color: "#F43F5E", isStar: true },
  { id: 21, traj: 5, delay: 0.23, width: 8, height: 26, borderRadius: "3px", color: "#F59E0B" },
  { id: 22, traj: 6, delay: 0.26, width: 12, height: 18, borderRadius: "2px", color: "#F97316" },
  { id: 23, traj: 7, delay: 0.21, width: 10, height: 20, borderRadius: "2px", color: "#8B5CF6" },
  { id: 24, traj: 8, delay: 0.27, width: 12, height: 12, borderRadius: "50%", color: "#3B82F6" },

  // Burst 4: Trailing festive flutter (0.3s - 0.42s)
  { id: 25, traj: 1, delay: 0.31, width: 10, height: 16, borderRadius: "2px", color: "#F59E0B" },
  { id: 26, traj: 2, delay: 0.35, width: 11, height: 18, borderRadius: "2px", color: "#8B5CF6" },
  { id: 27, traj: 3, delay: 0.38, width: 14, height: 14, borderRadius: "0", color: "#3B82F6", isStar: true },
  { id: 28, traj: 4, delay: 0.32, width: 9, height: 22, borderRadius: "3px", color: "#EC4899" },
  { id: 29, traj: 5, delay: 0.36, width: 12, height: 18, borderRadius: "2px", color: "#10B981" },
  { id: 30, traj: 6, delay: 0.4, width: 10, height: 10, borderRadius: "50%", color: "#F43F5E" },
  { id: 31, traj: 7, delay: 0.34, width: 12, height: 20, borderRadius: "2px", color: "#06B6D4" },
  { id: 32, traj: 8, delay: 0.42, width: 8, height: 24, borderRadius: "3px", color: "#F97316" },
  { id: 33, traj: 3, delay: 0.45, width: 11, height: 17, borderRadius: "2px", color: "#F59E0B" },
  { id: 34, traj: 4, delay: 0.48, width: 12, height: 18, borderRadius: "2px", color: "#10B981" },
];

const PartyBlastAnimation: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      {/* ─── CENTRAL DONE CHECKMARK BADGE ─── */}
      <div className={classes.badgeWrapper}>
        <div className={classes.rippleRing} />
        <div className={classes.checkmarkCircle}>
          <svg
            className={classes.checkmarkSvg}
            viewBox="0 0 24 24"
          >
            <path
              d="M20 6L9 17L4 12"
              className={classes.checkmarkPath}
            />
          </svg>
        </div>
      </div>

      {/* ─── FULL-MODAL CONFETTI SHOWER ─── */}
      <div className={classes.confettiLayer} aria-hidden="true">
        {CONFETTI_DATA.map((p) => {
          const trajClass = (classes as any)[`traj${p.traj}`];
          const style: React.CSSProperties = {
            width: `${p.width}px`,
            height: `${p.height}px`,
            marginLeft: `-${p.width / 2}px`,
            marginTop: `-${p.height / 2}px`,
            borderRadius: p.borderRadius,
            backgroundColor: p.isStar ? "transparent" : p.color,
            animationDelay: `${p.delay}s`,
          };

          return (
            <div
              key={p.id}
              className={`${classes.confettiParticle} ${trajClass}`}
              style={style}
            >
              {p.isStar && (
                <svg
                  width={p.width}
                  height={p.height}
                  viewBox="0 0 24 24"
                  fill={p.color}
                  style={{ display: "block" }}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PartyBlastAnimation;
