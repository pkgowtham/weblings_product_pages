import React, { useState, useEffect, useRef, useCallback } from "react";
import { createUseStyles } from "react-jss";
import first from "../../assets/images/mailSticky.svg";
import eoffice from "../../assets/images/eoffice.svg";
import calender from "../../assets/images/calender.svg";
import largeStar from "../../assets/icons/largeStickyStar.svg";
import smallStar from "../../assets/icons/smallStickyStar.svg";
import Typography from "../typography/component.tsx";
import SvgMail from "../svg/Mail.tsx";
import SvgCalendarSticky from "../svg/CalendarSticky.tsx";
import SvgEofficeSticky from "../svg/EofficeSticky.tsx";
// Types
interface ContentItem {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  interfaceType: string;
  image: any;
  icon?:any;
}

interface StickyScrollProps {
  contentItems?: ContentItem[];
}

// JSS Styles
const useStyles = createUseStyles({
 
  section1: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  section2: {
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  section3: {
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },

  // Sticky scroll section
  stickyScrollContainer: {
    position: "relative",
    height: "300vh", // 5 content sets * 100vh each
  },

  stickyContent: {
    position: "sticky",
    top: 0,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },

  contentWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    display: "grid",
    gridTemplateColumns: "1.3fr 2fr",
    gap: "4rem",
    alignItems: "center",
    width: "100%",
  },

  contentLeft: {
    position: "relative",
  },

  contentItem: {
    position: "absolute",
    top: -80,
    left: 0,
    width: "100%",
    opacity: 0,
    transform: "translateY(50px)",
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    "&.active": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  contentTitle: {
    fontSize: "2.2rem",
    color: "#0072c4",
    fontWeight: 700,
  },

  contentDescription: {
    fontSize: "1.1rem",
    color: "black",
    marginBottom: "2rem",
    marginTop: "1rem",
    lineHeight: 1.8,
  },

  learnMore: {
    display: "inline-flex",
    alignItems: "center",
    color: "#4facfe",
    textDecoration: "none",
    fontWeight: 600,
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "translateX(5px)",
    },
    "&::after": {
      content: '"→"',
      marginLeft: "0.5rem",
      transition: "transform 0.3s ease",
    },
    "&:hover::after": {
      transform: "translateX(5px)",
    },
  },

  contentRight: {
    position: "relative",
    height: "415px",
    perspective: "1000px",
  },

  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    transform: "translateY(100px) rotateX(10deg)",
    transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    "&.active": {
      opacity: 1,
      transform: "translateY(0) rotateX(0deg)",
    },
    "&.exit": {
      opacity: 0,
      transform: "translateY(-100px) rotateX(-10deg)",
    },
  },

  mockInterface: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    fontSize: "1.5rem",
    fontWeight: 600,
  },

  interface1: {
    background: "transparent",
  },

  interface2: {
    background: "transparent",
  },

  interface3: {
    background: "transparent",
  },

  interface4: {
    background: "transparent",
  },

  interface5: {
    background: "transparent",
  },

  // Sparkle decoration
  sparkles: {
    position: "absolute",
    top: "-50px",
    right: "-50px",
    width: "100px",
    height: "100px",
    pointerEvents: "none",
  },

  sparkle: {
    position: "absolute",
    color: "#ffd700",
    fontSize: "1.2rem",
    animation: "$sparkle 2s infinite",
    "&:nth-child(1)": {
      top: "20px",
      left: "10px",
      animationDelay: "0s",
    },
    "&:nth-child(2)": {
      top: "40px",
      left: "30px",
      animationDelay: "0.5s",
    },
    "&:nth-child(3)": {
      top: "10px",
      left: "50px",
      animationDelay: "1s",
    },
    "&:nth-child(4)": {
      top: "60px",
      left: "20px",
      animationDelay: "1.5s",
    },
  },

  "@keyframes sparkle": {
    "0%, 100%": {
      opacity: 0,
      transform: "scale(0)",
    },
    "50%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },

  // Progress indicator
  progressIndicator: {
    position: "absolute",
    left: -40,
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    zIndex: 100,
  },

  progressDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#E0E0E0",
    margin: "8px 0",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "none",
    "&.active": {
      background: "#0072c4",
      transform: "scale(1.2)",
    },
    "&:hover": {
      background: "#0072c4",
    },
  },

  mailIconColor:{
      '& path':{
        fill:'white'
      }
  },

  header:{
     position: "absolute", 
     top: 80, 
     left: 150
  },

  // Mobile responsiveness
  "@media (max-width: 768px)": {
    contentWrapper: {
      gridTemplateColumns: "1fr",
      height:'100vh',
      textAlign: "center",
    },
    contentRight: {
      height: "300px",
    },
    contentTitle: {
      fontSize: "2rem",
    },
    progressIndicator: {
      display: "none",
    },
    header:{
      fontSize:30,
      top:10, 
      left:10
    }
  },
});

// Default content data
const defaultContentItems: ContentItem[] = [
  {
    id: 1,
    title: "Mail",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    buttonText: "Learn More",
    interfaceType: "📧 Webmail Interface",
    image: first,
    icon:<SvgMail color="white"/>
  },
  {
    id: 2,
    title: "E-Office",
    description:
      "Powerful insights and data visualization tools that help you make informed decisions. Track performance metrics, analyze trends, and optimize your workflows with our comprehensive analytics suite.",
    buttonText: "Learn More",
    interfaceType: "📊 Analytics Dashboard",
    image: eoffice,
  },
  {
    id: 3,
    title: "Calendar",
    description:
      "Seamlessly collaborate with your team members in real-time. Share files, communicate instantly, and manage projects together with our integrated collaboration platform.",
    buttonText: "Learn More",
    interfaceType: "👥 Team Workspace",
    image: calender,
  },
  // {
  //   id: 4,
  //   title: "Security & Privacy",
  //   description:
  //     "Enterprise-grade security features to protect your data and ensure compliance. Advanced encryption, multi-factor authentication, and comprehensive audit logs keep your information safe.",
  //   buttonText: "Security Details",
  //   interfaceType: "🔒 Security Center",
  //   image:first
  // },
  // {
  //   id: 5,
  //   title: "Mobile Experience",
  //   description:
  //     "Access your work from anywhere with our responsive mobile platform. Native apps for iOS and Android provide a seamless experience across all your devices.",
  //   buttonText: "Download App",
  //   interfaceType: "📱 Mobile App",
  //   image:first
  // },
];

const StickyScrollSection: React.FC<StickyScrollProps> = ({
  contentItems = defaultContentItems,
}) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const stickyContainerRef = useRef<HTMLDivElement>(null);

  const updateContent = useCallback(
    (newIndex: number) => {
      if (
        isTransitioning ||
        newIndex === currentIndex ||
        newIndex < 0 ||
        newIndex >= contentItems.length
      ) {
        return;
      }

      setIsTransitioning(true);

      // Add exit class to current image
      const currentImages = document.querySelectorAll(
        `[data-index="${currentIndex}"].image-container`
      );
      const currentContents = document.querySelectorAll(
        `[data-index="${currentIndex}"].content-item`
      );

      currentImages.forEach((img) => img.classList.add("exit"));
      currentContents.forEach((content) => content.classList.remove("active"));

      setTimeout(() => {
        // Remove exit class and active class from current elements
        currentImages.forEach((img) => {
          img.classList.remove("active", "exit");
        });

        // Update index
        setCurrentIndex(newIndex);

        // Show new elements with slight delay
        setTimeout(() => {
          const newImages = document.querySelectorAll(
            `[data-index="${newIndex}"].image-container`
          );
          const newContents = document.querySelectorAll(
            `[data-index="${newIndex}"].content-item`
          );

          newImages.forEach((img) => img.classList.add("active"));
          newContents.forEach((content) => content.classList.add("active"));

          setIsTransitioning(false);
        }, 100);
      }, 400);
    },
    [currentIndex, isTransitioning, contentItems.length]
  );

  const handleScroll = useCallback(() => {
    if (!stickyContainerRef.current) return;

    const containerRect = stickyContainerRef.current.getBoundingClientRect();
    const containerTop = containerRect.top;
    const windowHeight = window.innerHeight;

    // Check if sticky section is active
    if (containerTop <= 0 && containerRect.bottom > windowHeight) {
      const scrollProgress =
        Math.abs(containerTop) / (containerRect.height - windowHeight);
      const newIndex = Math.min(
        Math.floor(scrollProgress * contentItems.length),
        contentItems.length - 1
      );

      if (newIndex !== currentIndex) {
        updateContent(newIndex);
      }
    }
  }, [currentIndex, updateContent, contentItems.length]);

  useEffect(() => {
    let ticking = false;

    const handleScrollThrottled = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScrollThrottled);

    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!stickyContainerRef.current) return;

      const containerRect = stickyContainerRef.current.getBoundingClientRect();

      // Only handle keys when sticky section is visible
      if (containerRect.top <= 0 && containerRect.bottom > window.innerHeight) {
        if (e.key === "ArrowDown" && currentIndex < contentItems.length - 1) {
          e.preventDefault();
          updateContent(currentIndex + 1);
        } else if (e.key === "ArrowUp" && currentIndex > 0) {
          e.preventDefault();
          updateContent(currentIndex - 1);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, updateContent, contentItems.length]);

  const handleProgressDotClick = (index: number) => {
    updateContent(index);
  };

  const getInterfaceClass = (index: number): string => {
    const interfaceClasses = [
      classes.interface1,
      classes.interface2,
      classes.interface3,
      classes.interface4,
      classes.interface5,
    ];
    return interfaceClasses[index % interfaceClasses.length];
  };

  return (
    <>

      {/* Sticky scroll section */}
      <div className={classes.stickyScrollContainer} ref={stickyContainerRef}>
        <div className={classes.stickyContent}>
          <Typography
          variant="HS"
            className={classes.header}
          >
            Solutions for Your work
          </Typography>
          {/* <div className={classes.sparkles}>
            <div className={classes.sparkle}>✨</div>
            <div className={classes.sparkle}>⭐</div>
            <div className={classes.sparkle}>✨</div>
            <div className={classes.sparkle}>⭐</div>
          </div> */}

          <div className={classes.contentWrapper}>
            <div className={classes.contentLeft}>
              {contentItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`${classes.contentItem} ${
                    index === currentIndex ? "active" : ""
                  } content-item`}
                  data-index={index}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "55px",
                        height: "55px",
                        borderRadius: "6px",
                        backgroundColor: "#0072c4",
                      }}
                    >{index === 0 ? <SvgMail viewBox="0 0 16 16" width={40} height={40} className={classes.mailIconColor}/> : index === 1 ? <SvgEofficeSticky viewBox="0 0 16 16" width={40} height={40} className={classes.mailIconColor}/> : <SvgCalendarSticky viewBox="0 0 16 16" width={40} height={40} className={classes.mailIconColor}/>}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      <Typography variant="BS">Weblings</Typography>
                      <Typography variant="BM" className={classes.contentTitle}>
                        {item.title}
                      </Typography>
                    </div>
                  </div>
                  <p className={classes.contentDescription}>
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className={classes.learnMore}
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.buttonText}
                  </a>
                </div>
              ))}
              {/* Progress indicator */}
              <div className={classes.progressIndicator}>
                {contentItems.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    className={`${classes.progressDot} ${
                      index === currentIndex ? "active" : ""
                    }`}
                    data-index={index}
                    onClick={() => handleProgressDotClick(index)}
                    aria-label={`Go to content ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className={classes.contentRight}>
              {contentItems.map((item, index) => (
                <div
                  key={`image-${item.id}`}
                  className={`${classes.imageContainer} ${
                    index === currentIndex ? "active" : ""
                  } image-container`}
                  data-index={index}
                >
                  <div
                    className={`${classes.mockInterface} ${getInterfaceClass(
                      index
                    )}`}
                  >
                    <img
                      src={item.image}
                      alt="first avatar"
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </div>
              ))}

              <img
                src={largeStar}
                alt="first avatar"
                style={{
                  width: "70px",
                  objectFit: "cover",
                  position: "absolute",
                  top: -50,
                  left: -60,
                }}
              />
              <img
                src={smallStar}
                alt="first avatar"
                style={{
                  width: "40px",
                  objectFit: "cover",
                  position: "absolute",
                  top: 30,
                  left: -80,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyScrollSection;
