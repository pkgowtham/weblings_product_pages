import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const SearchProofIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 28,
  height = 28,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`search-proof-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .glass-lens {
          transition: transform 0.3s ease;
        }
        .proof-check {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .quote-lines {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .search-proof-icon:hover .glass-lens,
        .search-proof-icon.is-hovered .glass-lens {
          animation: lensInspect 0.6s ease-in-out;
        }
        .search-proof-icon:hover .proof-check,
        .search-proof-icon.is-hovered .proof-check {
          animation: checkPop 0.5s 0.2s ease-in-out;
        }
        .search-proof-icon:hover .quote-lines,
        .search-proof-icon.is-hovered .quote-lines {
          animation: linesScan 0.6s infinite alternate ease-in-out;
        }
        @keyframes lensInspect {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-1px, -1px) scale(1.08); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes checkPop {
          0% { transform: scale(0.8); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes linesScan {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
      {/* Search Lens Frame */}
      <circle className="glass-lens" cx="10.5" cy="10.5" r="7.5" />
      <line x1="21" y1="21" x2="15.8" y2="15.8" />
      {/* Transcript Text Lines being searched inside the lens */}
      <line className="quote-lines" x1="7.5" y1="8" x2="13.5" y2="8" strokeWidth={1.6} />
      <line className="quote-lines" x1="7.5" y1="11" x2="11.5" y2="11" strokeWidth={1.6} />
      {/* Verified Seal / Instant Proof Check Badge */}
      <circle cx="17.5" cy="6.5" r="3.5" fill="#10B981" stroke="#FFFFFF" strokeWidth={1.2} />
      <polyline className="proof-check" points="16 6.5 17.2 7.8 19 5.5" stroke="#FFFFFF" strokeWidth={1.2} />
    </svg>
  );
};

export default SearchProofIcon;
