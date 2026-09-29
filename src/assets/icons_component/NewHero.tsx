import * as React from "react";
import type { SVGProps } from "react";

interface AvatarData {
  id: string;
  cx: number;
  cy: number;
  innerCx: number;
  innerCy: number;
  filterIndex: number;
  isHovered: boolean;
}

const SvgNewHero = (props: SVGProps<SVGSVGElement>) => {
  const [hoveredAvatar, setHoveredAvatar] = React.useState<string | null>(null);

  const avatars: AvatarData[] = [
    {
      id: "avatar1",
      cx: 72,
      cy: 140,
      innerCx: 71.5,
      innerCy: 139.5,
      filterIndex: 7,
      isHovered: false,
    },
    {
      id: "avatar2",
      cx: 186,
      cy: 306,
      innerCx: 185.5,
      innerCy: 305.5,
      filterIndex: 9,
      isHovered: false,
    },
    {
      id: "avatar3",
      cx: 1010,
      cy: 157,
      innerCx: 1009.5,
      innerCy: 156.5,
      filterIndex: 11,
      isHovered: false,
    },
    {
      id: "avatar4",
      cx: 1196,
      cy: 360,
      innerCx: 1195.5,
      innerCy: 359.5,
      filterIndex: 13,
      isHovered: false,
    },
    {
      id: "avatar5",
      cx: 1133,
      cy: 581,
      innerCx: 1132.5,
      innerCy: 580.5,
      filterIndex: 15,
      isHovered: false,
    },
    {
      id: "avatar6",
      cx: 61,
      cy: 535,
      innerCx: 60.5,
      innerCy: 534.5,
      filterIndex: 17,
      isHovered: false,
    },
  ];

  const handleMouseEnter = (id: string) => {
    console.log("avatar Id: ", id);
    setHoveredAvatar(id);
  };

  const handleMouseLeave = () => {
    setHoveredAvatar(null);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1279 626"
      preserveAspectRatio={props.preserveAspectRatio || "xMidYMid meet"}
      style={{ width: "100%", height: "100%" }}
      fill="none"
      {...props}
    >
      <defs>
        <filter
          id="newHero_svg__filter0_d_7189_6303"
          width={56}
          height={56}
          x={607}
          y={569}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7189_6303"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_7189_6303"
            result="shape"
          />
        </filter>
        <filter
          id="newHero_svg__filter1_d_7189_6303"
          width={56}
          height={56}
          x={356}
          y={485}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7189_6303"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_7189_6303"
            result="shape"
          />
        </filter>
        <filter
          id="newHero_svg__filter2_d_7189_6303"
          width={56}
          height={56}
          x={158}
          y={382}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7189_6303"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_7189_6303"
            result="shape"
          />
        </filter>
        <filter
          id="newHero_svg__filter3_d_7189_6303"
          width={56}
          height={56}
          x={72}
          y={210}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7189_6303"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_7189_6303"
            result="shape"
          />
        </filter>
        <filter
          id="newHero_svg__filter4_d_7189_6303"
          width={56}
          height={56}
          x={845}
          y={508}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7189_6303"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_7189_6303"
            result="shape"
          />
        </filter>
        <filter
          id="newHero_svg__filter5_d_7189_6303"
          width={56}
          height={56}
          x={1072}
          y={469}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7189_6303"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_7189_6303"
            result="shape"
          />
        </filter>
        <filter
          id="newHero_svg__filter6_d_7189_6303"
          width={56}
          height={56}
          x={1072}
          y={263}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7189_6303"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_7189_6303"
            result="shape"
          />
        </filter>
        <filter
          id="newHero_svg__filter7_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={6} />
        </filter>
        <filter
          id="newHero_svg__filter8_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={4} />
        </filter>
        <filter
          id="newHero_svg__filter9_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={6} />
        </filter>
        <filter
          id="newHero_svg__filter10_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={4} />
        </filter>
        <filter
          id="newHero_svg__filter11_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={6} />
        </filter>
        <filter
          id="newHero_svg__filter12_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={4} />
        </filter>
        <filter
          id="newHero_svg__filter13_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={6} />
        </filter>
        <filter
          id="newHero_svg__filter14_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={4} />
        </filter>
        <filter
          id="newHero_svg__filter15_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={6} />
        </filter>
        <filter
          id="newHero_svg__filter16_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={4} />
        </filter>
        <filter
          id="newHero_svg__filter17_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={6} />
        </filter>
        <filter
          id="newHero_svg__filter18_f_7189_6303"
          width="250%"
          height="250%"
          x="-75%"
          y="-75%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={4} />
        </filter>
        <filter
          id="newHero_svg__capsule_blur"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="2.5" result="blur" />
        </filter>
        <filter
          id="newHero_svg__particle_blur"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <pattern
          id="newHero_svg__pattern0_7189_6303"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#newHero_svg__image0_7189_6303"
            transform="scale(.00098)"
          />
        </pattern>
        <pattern
          id="newHero_svg__pattern1_7189_6303"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#newHero_svg__image1_7189_6303"
            transform="scale(.00098)"
          />
        </pattern>
        <pattern
          id="newHero_svg__pattern2_7189_6303"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#newHero_svg__image2_7189_6303"
            transform="scale(.00098)"
          />
        </pattern>
        <pattern
          id="newHero_svg__pattern3_7189_6303"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#newHero_svg__image3_7189_6303"
            transform="scale(.00098)"
          />
        </pattern>
        <pattern
          id="newHero_svg__pattern4_7189_6303"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#newHero_svg__image4_7189_6303"
            transform="scale(.00098)"
          />
        </pattern>
        <pattern
          id="newHero_svg__pattern5_7189_6303"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#newHero_svg__image5_7189_6303"
            transform="scale(.00098)"
          />
        </pattern>
        <image
          xlinkHref="https://pub-5672a1ed48d647e6aa3ba78e02e5445d.r2.dev/pages/home-page/hero-avatar-1.png"
          id="newHero_svg__image0_7189_6303"
          width={1024}
          height={1024}
          preserveAspectRatio="none"
        />
        <image
          xlinkHref="https://pub-5672a1ed48d647e6aa3ba78e02e5445d.r2.dev/pages/home-page/hero-avatar-2.png"
          id="newHero_svg__image1_7189_6303"
          width={1024}
          height={1024}
          preserveAspectRatio="none"
        />
        <image
          xlinkHref="https://pub-5672a1ed48d647e6aa3ba78e02e5445d.r2.dev/pages/home-page/hero-avatar-3.png"
          id="newHero_svg__image2_7189_6303"
          width={1024}
          height={1024}
          preserveAspectRatio="none"
        />
        <image
          xlinkHref="https://pub-5672a1ed48d647e6aa3ba78e02e5445d.r2.dev/pages/home-page/hero-avatar-4.png"
          id="newHero_svg__image3_7189_6303"
          width={1024}
          height={1024}
          preserveAspectRatio="none"
        />
        <image
          xlinkHref="https://pub-5672a1ed48d647e6aa3ba78e02e5445d.r2.dev/pages/home-page/hero-avatar-5.png"
          id="newHero_svg__image4_7189_6303"
          width={1024}
          height={1024}
          preserveAspectRatio="none"
        />
        <image
          xlinkHref="https://pub-5672a1ed48d647e6aa3ba78e02e5445d.r2.dev/pages/home-page/hero-avatar-6.png"
          id="newHero_svg__image5_7189_6303"
          width={1024}
          height={1024}
          preserveAspectRatio="none"
        />
        <linearGradient
          id="newHero_svg__paint0_linear_7189_6303"
          x1={639.5}
          x2={639.5}
          y1={0}
          y2={626}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CFDEF9" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <clipPath id="newHero_svg__clip0_7189_6303">
          <path fill="#fff" d="M0 0h1279v626H0z" />
        </clipPath>
        <style>{".newHero_svg__avatar-group{cursor:pointer}"}</style>
      </defs>
      <g clipPath="url(#newHero_svg__clip0_7189_6303)">
        <path
          fill="url(#newHero_svg__paint0_linear_7189_6303)"
          d="M0 0h1279v626H0z"
        />
        <path
          id="newHero_svg__mainPath"
          stroke="#90C8FF"
          d="M72-.5v210.383s3.998 30.239 55.476 28.161 59.475 41.089 59.475 41.089c0 264.999-13.494 234.99 69.97 234.99 0 0 255.891-4.617 321.363 0s54.976 56.324 54.976 124.651.523 51.79.523-35.548 144.915-67.866 318.84-67.866c173.927 0 144.937 26.315 144.937-182.36S1238 237.352 1238 160.022V0"
        />
        <path
          id="newHero_svg__path2"
          stroke="#90C8FF"
          d="M1278 360c-186 0-172 5.5-179 80"
        />
        <path
          id="newHero_svg__path3"
          stroke="#90C8FF"
          d="M1280 590.347c-216.27 0-306 10.683-306-54.347"
        />
        <path
          id="newHero_svg__path4"
          stroke="#90C8FF"
          d="M.5 427.5c60 0 13.5 88 84 88h135"
        />
        <path
          id="newHero_svg__path5"
          stroke="#90C8FF"
          d="M1010 72v145.705c0 79.339 88.51 37.923 89 101.295"
        />
        <path id="newHero_svg__path6" stroke="#90C8FF" d="m122 238-122 .5" />


        <g className="newHero_svg__moving-diamonds">
          {/* Main Path Diamonds */}
          <g>
            <polygon points="0,-9 9,0 0,9 -9,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-6 6,0 0,6 -6,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
            <animateMotion dur="22s" repeatCount="indefinite" rotate="auto" begin="0s">
              <mpath href="#newHero_svg__mainPath" />
            </animateMotion>
          </g>
          <g>
            <polygon points="0,-9 9,0 0,9 -9,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-6 6,0 0,6 -6,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
            <animateMotion dur="22s" repeatCount="indefinite" rotate="auto" begin="-5.5s">
              <mpath href="#newHero_svg__mainPath" />
            </animateMotion>
          </g>
          <g>
            <polygon points="0,-9 9,0 0,9 -9,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-6 6,0 0,6 -6,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
            <animateMotion dur="22s" repeatCount="indefinite" rotate="auto" begin="-11s">
              <mpath href="#newHero_svg__mainPath" />
            </animateMotion>
          </g>
          <g>
            <polygon points="0,-9 9,0 0,9 -9,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-6 6,0 0,6 -6,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
            <animateMotion dur="22s" repeatCount="indefinite" rotate="auto" begin="-16.5s">
              <mpath href="#newHero_svg__mainPath" />
            </animateMotion>
          </g>

          {/* Path 1 Diamonds */}
          <g>
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-5 5,0 0,5 -5,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto" begin="0s">
              <mpath href="#newHero_svg__path1" />
            </animateMotion>
          </g>
          <g>
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-5 5,0 0,5 -5,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto" begin="-4s">
              <mpath href="#newHero_svg__path1" />
            </animateMotion>
          </g>

          {/* Path 2 Diamonds */}
          <g>
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-5 5,0 0,5 -5,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
            <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" begin="0s">
              <mpath href="#newHero_svg__path2" />
            </animateMotion>
          </g>
          <g>
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-5 5,0 0,5 -5,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
            <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" begin="-3.5s">
              <mpath href="#newHero_svg__path2" />
            </animateMotion>
          </g>

          {/* Path 3 Diamonds */}
          <g>
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-5 5,0 0,5 -5,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" begin="0s">
              <mpath href="#newHero_svg__path3" />
            </animateMotion>
          </g>
          <g>
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-5 5,0 0,5 -5,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" begin="-4.5s">
              <mpath href="#newHero_svg__path3" />
            </animateMotion>
          </g>

          {/* Path 4 Diamonds */}
          <g>
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-5 5,0 0,5 -5,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="0s">
              <mpath href="#newHero_svg__path4" />
            </animateMotion>
          </g>
          <g>
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-5 5,0 0,5 -5,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="-5s">
              <mpath href="#newHero_svg__path4" />
            </animateMotion>
          </g>

          {/* Path 5 Diamonds */}
          <g>
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-5 5,0 0,5 -5,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto" begin="0s">
              <mpath href="#newHero_svg__path5" />
            </animateMotion>
          </g>

          {/* Path 6 Diamonds */}
          <g>
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#3B82F6" opacity="0.7" filter="url(#newHero_svg__capsule_blur)" />
            <polygon points="0,-5 5,0 0,5 -5,0" fill="#90C8FF" />
            <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="0s">
              <mpath href="#newHero_svg__path6" />
            </animateMotion>
          </g>
        </g>

        <g filter="url(#newHero_svg__filter0_d_7189_6303)">
          <circle cx={635} cy={597} r={22} fill="#fff" />
          <circle cx={635} cy={597} r={21.5} stroke="#E5E5E5" />
        </g>
        <g filter="url(#newHero_svg__filter1_d_7189_6303)">
          <circle cx={384} cy={513} r={22} fill="#fff" />
          <circle cx={384} cy={513} r={21.5} stroke="#E5E5E5" />
        </g>
        <path
          fill="#A9A9A9"
          d="M377 518.5c-1.38 0-2.5-1.345-2.5-3a2.34 2.34 0 0 1 2.5-2.5 2.35 2.35 0 0 1 2.358 1.516c.117.314.166.65.142.984 0 1.655-1.12 3-2.5 3m0-4.5a1.37 1.37 0 0 0-1.11.391 1.36 1.36 0 0 0-.39 1.109c0 1.105.675 2 1.5 2s1.5-.895 1.5-2a1.36 1.36 0 0 0-.39-1.109A1.37 1.37 0 0 0 377 514"
        />
        <path
          fill="#A9A9A9"
          d="M373 525h-1v-4.71a2.5 2.5 0 0 1 2.225-2.5l2.72-.29.11 1-2.72.305a1.5 1.5 0 0 0-1.335 1.5z"
        />
        <path
          fill="#A9A9A9"
          d="M375 520.5h-1v4.5h1zM382 525h-1v-4.71a1.5 1.5 0 0 0-1.335-1.5l-2.72-.29.11-1 2.72.3a2.503 2.503 0 0 1 2.225 2.5z"
        />
        <path
          fill="#A9A9A9"
          d="M380 520.5h-1v4.5h1zM377.5 520h-1v1h1zM377.5 522h-1v1h1zM377.5 524h-1v1h1zM391 518.5c-1.38 0-2.5-1.345-2.5-3a2.34 2.34 0 0 1 2.5-2.5 2.35 2.35 0 0 1 2.358 1.516c.117.314.166.65.142.984 0 1.655-1.12 3-2.5 3m0-4.5a1.37 1.37 0 0 0-1.11.391 1.36 1.36 0 0 0-.39 1.109c0 1.105.675 2 1.5 2s1.5-.895 1.5-2a1.36 1.36 0 0 0-.39-1.109A1.37 1.37 0 0 0 391 514"
        />
        <path
          fill="#A9A9A9"
          d="M387 525h-1v-4.71a2.5 2.5 0 0 1 2.225-2.5l2.72-.3.11 1-2.72.305a1.5 1.5 0 0 0-1.335 1.5z"
        />
        <path
          fill="#A9A9A9"
          d="M389 520.5h-1v4.5h1zM396 525h-1v-4.71a1.5 1.5 0 0 0-1.335-1.5l-2.72-.29.11-1 2.72.3a2.503 2.503 0 0 1 2.225 2.5z"
        />
        <path
          fill="#A9A9A9"
          d="M394 520.5h-1v4.5h1zM384 510a2.498 2.498 0 0 1-1.768-4.267 2.5 2.5 0 0 1 2.725-.542 2.49 2.49 0 0 1 1.543 2.309 2.5 2.5 0 0 1-2.5 2.5m0-4a1.495 1.495 0 0 0-1.386.926 1.5 1.5 0 0 0 .325 1.635A1.5 1.5 0 1 0 384 506"
        />
        <path
          fill="#A9A9A9"
          d="M385 514h-2a.496.496 0 0 1-.5-.38l-.395-1.58-1.4.84a.503.503 0 0 1-.61-.075l-1.415-1.415a.505.505 0 0 1-.075-.61l.84-1.4-1.565-.38a.5.5 0 0 1-.38-.5v-2a.5.5 0 0 1 .38-.5l1.58-.395-.84-1.4a.5.5 0 0 1 .075-.61l1.415-1.415a.497.497 0 0 1 .61-.075l1.4.84.38-1.565a.5.5 0 0 1 .5-.38h2a.5.5 0 0 1 .5.38l.395 1.58 1.4-.84a.5.5 0 0 1 .61.075l1.415 1.415a.5.5 0 0 1 .075.61l-.84 1.4 1.58.395a.5.5 0 0 1 .365.485v2a.496.496 0 0 1-.38.5l-1.58.395.84 1.4a.5.5 0 0 1-.075.61l-1.415 1.415a.5.5 0 0 1-.61.075l-1.4-.84-.38 1.565a.5.5 0 0 1-.5.38m-1.61-1h1.22l.465-1.855a.503.503 0 0 1 .522-.38q.117.01.218.07l1.645 1 .86-.86-1-1.645a.496.496 0 0 1 .31-.74l1.87-.48v-1.22l-1.855-.465a.5.5 0 0 1-.345-.295.5.5 0 0 1 .035-.445l1-1.645-.875-.86-1.645 1a.496.496 0 0 1-.74-.31l-.465-1.87h-1.22l-.465 1.855a.496.496 0 0 1-.74.31l-1.645-1-.86.875 1 1.645a.5.5 0 0 1-.102.634.5.5 0 0 1-.208.106l-1.87.465v1.22l1.855.465a.5.5 0 0 1 .345.295.5.5 0 0 1-.035.445l-1 1.645.86.86 1.645-1a.5.5 0 0 1 .634.102q.078.092.106.208z"
        />
        <g filter="url(#newHero_svg__filter2_d_7189_6303)">
          <circle cx={186} cy={410} r={22} fill="#fff" />
          <circle cx={186} cy={410} r={21.5} stroke="#E5E5E5" />
        </g>
        <g filter="url(#newHero_svg__filter3_d_7189_6303)">
          <circle cx={100} cy={238} r={22} fill="#fff" />
          <circle cx={100} cy={238} r={21.5} stroke="#E5E5E5" />
        </g>
        <path
          fill="#A9A9A9"
          d="M110 231.612c0-1.1-.9-2-2-2H92c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H92v-10l8 5 8-5z"
        />
        <g filter="url(#newHero_svg__filter4_d_7189_6303)">
          <circle cx={873} cy={536} r={22} fill="#fff" />
          <circle cx={873} cy={536} r={21.5} stroke="#E5E5E5" />
        </g>
        <g filter="url(#newHero_svg__filter5_d_7189_6303)">
          <circle cx={1100} cy={497} r={22} fill="#fff" />
          <circle cx={1100} cy={497} r={21.5} stroke="#E5E5E5" />
        </g>
        <g filter="url(#newHero_svg__filter6_d_7189_6303)">
          <circle cx={1100} cy={291} r={22} fill="#fff" />
          <circle cx={1100} cy={291} r={21.5} stroke="#E5E5E5" />
        </g>
        <path
          fill="#A9A9A9"
          d="m870.866 538.603-2.333-2.333a.657.657 0 0 0-.934 0 .656.656 0 0 0 0 .933l2.794 2.794c.26.26.68.26.94 0l7.066-7.06a.657.657 0 0 0 0-.934.656.656 0 0 0-.933 0zM1107 283h-1v-1c0-.552-.45-1-1-1s-1 .448-1 1v1h-8v-1c0-.552-.45-1-1-1s-1 .448-1 1v1h-1c-1.11 0-1.99.9-1.99 2l-.01 14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2m0 16h-14v-10h14zm0-12h-14v-2h14zm-10 5c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1m4 0c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1m4 0c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1m-8 4c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1m4 0c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1m4 0c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1M194 402.703v12h-14.83l-1.17 1.17v-13.17zm0-2h-16c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71l2.29-2.3h14c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2"
        />
        <path
          stroke="#A9A9A9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M631 588h-5v5M639 588h5v5"
        />
        <path
          stroke="#A9A9A9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m626 588 7.536 7.536A5 5 0 0 1 635 599.07V606M641 591.01V591M639 593.02v-.01M637 595v.01"
        />
        <path
          stroke="#A9A9A9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.333}
          d="M1100 498v-11l8 4-8 4m8.56.222c.53 1.64.58 3.398.15 5.066a9.005 9.005 0 0 1-12.2 6.004 8.97 8.97 0 0 1-3.93-3.204 8.94 8.94 0 0 1-1.57-4.818 9 9 0 0 1 1.27-4.904 9.06 9.06 0 0 1 3.73-3.434m-.01 5.065c-.5.667-.82 1.448-.95 2.274a5 5 0 0 0 .26 2.451c.28.783.76 1.482 1.39 2.033s1.38.936 2.19 1.121c.82.184 1.66.162 2.47-.064a5.02 5.02 0 0 0 3.42-3.334c.24-.797.29-1.644.12-2.461"
        />

        {/* Avatar 1 with hover effect & mild background glow */}
        <g className="newHero_svg__avatar-group" style={{ cursor: "pointer" }}>
          <g className="avatar1-ambient-glow">
            <circle cx={72} cy={140} r={46} fill="#60A5FA" opacity="0.3" filter="url(#newHero_svg__filter7_f_7189_6303)">
              <animate attributeName="opacity" values="0.25;0.45;0.25" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx={71.5} cy={139.5} r={32} fill="#C3DBFA" opacity="0.4" filter="url(#newHero_svg__filter8_f_7189_6303)">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" />
            </circle>
          </g>
          {hoveredAvatar === "avatar1" && (
            <>
              <g filter="url(#newHero_svg__filter7_f_7189_6303)">
                <circle cx={72} cy={140} r={56} fill="#90C8FF" opacity="0.7" />
              </g>
              <g filter="url(#newHero_svg__filter8_f_7189_6303)">
                <circle cx={71.5} cy={139.5} r={38} fill="#C3DBFA" opacity="0.9" />
              </g>
            </>
          )}
          <path
            onMouseEnter={() => handleMouseEnter("avatar1")}
            onMouseLeave={handleMouseLeave}
            fill="url(#newHero_svg__pattern0_7189_6303)"
            d="M24 94h95v95H24z"
          />
        </g>

        {/* Avatar 2 with hover effect & mild background glow */}
        <g className="newHero_svg__avatar-group" style={{ cursor: "pointer" }}>
          <g className="avatar2-ambient-glow">
            <circle cx={186} cy={306} r={46} fill="#60A5FA" opacity="0.3" filter="url(#newHero_svg__filter9_f_7189_6303)">
              <animate attributeName="opacity" values="0.25;0.45;0.25" dur="3.8s" repeatCount="indefinite" />
            </circle>
            <circle cx={185.5} cy={305.5} r={32} fill="#C3DBFA" opacity="0.4" filter="url(#newHero_svg__filter10_f_7189_6303)">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.8s" repeatCount="indefinite" />
            </circle>
          </g>
          {hoveredAvatar === "avatar2" && (
            <>
              <g filter="url(#newHero_svg__filter9_f_7189_6303)">
                <circle cx={186} cy={306} r={56} fill="#90C8FF" opacity="0.7" />
              </g>
              <g filter="url(#newHero_svg__filter10_f_7189_6303)">
                <circle cx={185.5} cy={305.5} r={38} fill="#C3DBFA" opacity="0.9" />
              </g>
            </>
          )}
          <path
            onMouseEnter={() => handleMouseEnter("avatar2")}
            onMouseLeave={handleMouseLeave}
            fill="url(#newHero_svg__pattern1_7189_6303)"
            d="M138 255h95v95h-95z"
          />
        </g>

        {/* Avatar 3 with hover effect & mild background glow */}
        <g
          onMouseEnter={() => handleMouseEnter("avatar3")}
          className="newHero_svg__avatar-group"
          style={{ cursor: "pointer" }}
        >
          <g className="avatar3-ambient-glow">
            <circle cx={1010} cy={157} r={46} fill="#60A5FA" opacity="0.3" filter="url(#newHero_svg__filter11_f_7189_6303)">
              <animate attributeName="opacity" values="0.25;0.45;0.25" dur="4.2s" repeatCount="indefinite" />
            </circle>
            <circle cx={1009.5} cy={156.5} r={32} fill="#C3DBFA" opacity="0.4" filter="url(#newHero_svg__filter12_f_7189_6303)">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.2s" repeatCount="indefinite" />
            </circle>
          </g>
          {hoveredAvatar === "avatar3" && (
            <>
              <g filter="url(#newHero_svg__filter11_f_7189_6303)">
                <circle cx={1010} cy={157} r={56} fill="#90C8FF" opacity="0.7" />
              </g>
              <g filter="url(#newHero_svg__filter12_f_7189_6303)">
                <circle cx={1009.5} cy={156.5} r={38} fill="#C3DBFA" opacity="0.9" />
              </g>
            </>
          )}
          <path
            onMouseEnter={() => handleMouseEnter("avatar3")}
            onMouseLeave={handleMouseLeave}
            fill="url(#newHero_svg__pattern2_7189_6303)"
            d="M964 109h95v95h-95z"
          />
        </g>

        {/* Avatar 4 with hover effect & mild background glow */}
        <g className="newHero_svg__avatar-group" style={{ cursor: "pointer" }}>
          <g className="avatar4-ambient-glow">
            <circle cx={1196} cy={360} r={46} fill="#60A5FA" opacity="0.3" filter="url(#newHero_svg__filter13_f_7189_6303)">
              <animate attributeName="opacity" values="0.25;0.45;0.25" dur="3.2s" repeatCount="indefinite" />
            </circle>
            <circle cx={1195.5} cy={359.5} r={32} fill="#C3DBFA" opacity="0.4" filter="url(#newHero_svg__filter14_f_7189_6303)">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.2s" repeatCount="indefinite" />
            </circle>
          </g>
          {hoveredAvatar === "avatar4" && (
            <>
              <g filter="url(#newHero_svg__filter13_f_7189_6303)">
                <circle cx={1196} cy={360} r={56} fill="#90C8FF" opacity="0.7" />
              </g>
              <g filter="url(#newHero_svg__filter14_f_7189_6303)">
                <circle cx={1195.5} cy={359.5} r={38} fill="#C3DBFA" opacity="0.9" />
              </g>
            </>
          )}
          <path
            onMouseEnter={() => handleMouseEnter("avatar4")}
            onMouseLeave={handleMouseLeave}
            fill="url(#newHero_svg__pattern3_7189_6303)"
            d="M1148 312h95v95h-95z"
          />
        </g>

        {/* Avatar 5 with hover effect & mild background glow */}
        <g className="newHero_svg__avatar-group" style={{ cursor: "pointer" }}>
          <g className="avatar5-ambient-glow">
            <circle cx={1133} cy={581} r={46} fill="#60A5FA" opacity="0.3" filter="url(#newHero_svg__filter15_f_7189_6303)">
              <animate attributeName="opacity" values="0.25;0.45;0.25" dur="3.6s" repeatCount="indefinite" />
            </circle>
            <circle cx={1132.5} cy={580.5} r={32} fill="#C3DBFA" opacity="0.4" filter="url(#newHero_svg__filter16_f_7189_6303)">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.6s" repeatCount="indefinite" />
            </circle>
          </g>
          {hoveredAvatar === "avatar5" && (
            <>
              <g filter="url(#newHero_svg__filter15_f_7189_6303)">
                <circle cx={1133} cy={581} r={56} fill="#90C8FF" opacity="0.7" />
              </g>
              <g filter="url(#newHero_svg__filter16_f_7189_6303)">
                <circle cx={1132.5} cy={580.5} r={38} fill="#C3DBFA" opacity="0.9" />
              </g>
            </>
          )}
          <path
            onMouseEnter={() => handleMouseEnter("avatar5")}
            onMouseLeave={handleMouseLeave}
            fill="url(#newHero_svg__pattern4_7189_6303)"
            d="M1085 534h95v95h-95z"
          />
        </g>

        {/* Avatar 6 with hover effect & mild background glow */}
        <g className="newHero_svg__avatar-group" style={{ cursor: "pointer" }}>
          <g className="avatar6-ambient-glow">
            <circle cx={61} cy={535} r={46} fill="#60A5FA" opacity="0.3" filter="url(#newHero_svg__filter17_f_7189_6303)">
              <animate attributeName="opacity" values="0.25;0.45;0.25" dur="4.0s" repeatCount="indefinite" />
            </circle>
            <circle cx={60.5} cy={534.5} r={32} fill="#C3DBFA" opacity="0.4" filter="url(#newHero_svg__filter18_f_7189_6303)">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.0s" repeatCount="indefinite" />
            </circle>
          </g>
          {hoveredAvatar === "avatar6" && (
            <>
              <g filter="url(#newHero_svg__filter17_f_7189_6303)">
                <circle cx={61} cy={535} r={56} fill="#90C8FF" opacity="0.7" />
              </g>
              <g filter="url(#newHero_svg__filter18_f_7189_6303)">
                <circle cx={60.5} cy={534.5} r={38} fill="#C3DBFA" opacity="0.9" />
              </g>
            </>
          )}
          <path
            onMouseEnter={() => handleMouseEnter("avatar6")}
            onMouseLeave={handleMouseLeave}
            fill="url(#newHero_svg__pattern5_7189_6303)"
            d="M13.5 487.5h95v95h-95z"
          />
        </g>
      </g>
    </svg>
  );
};
export default SvgNewHero;
