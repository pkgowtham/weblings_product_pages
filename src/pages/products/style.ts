import { createUseStyles } from "react-jss";
import principle_background from "../../assets/icons/background.svg";
import { Theme } from "../../theme/themeType";

export const usestyles = createUseStyles((theme: Theme) => ({
  mainSecCon: {
    width: "100%",
    height: "auto",
    aspectRatio: "1279 / 626",
    maxHeight: "92vh",
    minHeight: "520px",
    position: "relative",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #CFDEF9 0%, #FFFFFF 100%)",
    "@media (max-width: 768px)": {
      width: "100%",
      height: "auto",
      aspectRatio: "unset",
      minHeight: "65vh",
      padding: "80px 20px 40px 20px",
      boxSizing: "border-box",
    },
  },
  heroSvgContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "auto",
    zIndex: 1,
    "& svg": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  NavBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "48px",
    width: "100%",
    padding: theme.spacing.s300,
  },
  NavBarLogo: {
    width: "200px",
    height: "auto",
  },
  NavBarLinks: {
    listStyle: "none",
    display: "flex",
    gap: theme.spacing.s500,
    cursor: "pointer",
  },
  NavBarLink: {
    textDecoration: "none",
    color: "#3A3A3A",
  },
  NavText: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s500,
  },
  HeaderSection: {
    position: "absolute",
    top: "52%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    width: "90%",
    maxWidth: "564px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: theme.spacing.s800,
    padding: "0 20px",
    boxSizing: "border-box",
    margin: 0,
    "@media (max-width: 1200px)": {
      top: "54%",
      gap: theme.spacing.s600,
    },
    "@media (max-width: 768px)": {
      position: "relative",
      top: "auto",
      left: "auto",
      transform: "none",
      width: "100%",
      maxWidth: "560px",
      gap: theme.spacing.s800,
      padding: 0,
      margin: "0 auto",
    },
  },
  headTitle: {
    color: theme.light.neutral.onSurface.light,
    maxWidth: "564px",
    width: "100%",
    textAlign: "center",
  },
  headTitleDescription: {
    color: theme.light.neutral.onSurface.light,
    maxWidth: "564px",
    width: "100%",
    textAlign: "center",
  },
  headbutton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.light.brand.surface.dark,
  },
  ActionLabel: {
    display: "flex",
    alignItems: "center",
  },
  HeadChrovnImg: {
    width: "24px",
    height: "24px",
  },
  BannerSection: {
    minHeight: "55vh",
    width: "100%",
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    marginTop: "10%",
    backgroundColor: "#FFEE34",
    borderRadius: theme.spacing.s300,
    padding: `${theme.spacing.s1000} 100px`,
    alignItems: "flex-end",
    justifyContent: "space-between",
    boxSizing: "border-box",

    "@media (max-width: 1200px)": {
      maxWidth: "95%",
      padding: `${theme.spacing.s1000} 60px`,
    },

    "@media (max-width: 750px)": {
      flexWrap: "wrap",
      gap: "20px",
      maxWidth: "90%",
      padding: `${theme.spacing.s800} 32px`,
      justifyContent: "center",
    },

    "@media (max-width: 480px)": {
      padding: "32px 20px",
      borderRadius: "16px",
    },
  },
  BannerHeadSectionDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "48px",
    // flex: "1",
    // maxWidth: "400px",
    "@media (max-width: 750px)": {
      width: "100%",
      alignItems: "center",
    },
  },
  BannerTitleSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing.s600,
  },
  BannerTitleDescription: {
    maxWidth: "400px",
    "@media (max-width: 750px)": {
      maxWidth: "100%",
    },
  },
  BannerButton: {
    backgroundColor: "transparent",
    color: theme.light.neutral.onSurface.title,
  },
  BannerLabel: {
    display: "flex",
    alignItems: "center",
  },
  BannerHeadSection: {
    display: "flex",
    gap: theme.spacing.s500,
    alignItems: "end",
    width: "100%",
    flexWrap: "wrap",
  },
  ChevronRightImg: {
    height: "24px",
    width: "24px",
  },
  suite: {
    borderRadius: theme.borderRadius.b200,
    border: `1px solid ${theme.light.neutral.onSurface.title}`,
    padding: `${theme.spacing.s0} ${theme.spacing.s200}`,
  },
  BannerTitle: {
    display: "flex",
    flexDirection: "column",
  },
  SideImageContainer: {
    // display: "contents",
    // display:'flex',
    // alignItems:"flex-end",
    // height:"100%"
    "@media (max-width: 750px)": {
      width: "100%",
    },
  },
  SideImage: {
    width: "100%",
    maxWidth: "425px",
  },
  FeatureContainer: {
    minHeight: "80vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing.s2000,
    gap: theme.spacing.s2000,
    boxSizing: "border-box",
    overflow: "hidden",
    // Prevents this section from bleeding into the StickyScrollSection above
    position: "relative",
    zIndex: 10,
    backgroundColor: "#FFFFFF",
    "@media (max-width: 1000px)": {
      marginTop: "80px",
    },
    "@media (max-width: 768px)": {
      minHeight: "auto",
      marginTop: theme.spacing.s1000,
      gap: theme.spacing.s1000,
      padding: "0 24px",
    },
  },
  FeatureHeading: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: theme.spacing.s600,
    maxWidth: "755px",
    width: "100%",
  },
  FeaturesFlex: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing.s500,
    justifyContent: "center",
    marginTop: theme.spacing.s500,
    marginBottom: theme.spacing.s1600,
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: theme.spacing.s600,
      width: "100%",
    },
  },
  LeftImg: {
    width: "54px",
    height: "55px",
    position: "absolute",
    top: "-25px",
    left: "-22px",
    zIndex: -1,
    transform: "translateZ(-1px)",
    "@media (max-width: 768px)": {
      left: "-10px",
      top: "-20px",
    },
  },
  RightImg: {
    width: "54px",
    height: "55px",
    position: "absolute",
    bottom: "-18px",
    right: "-22px",
    zIndex: -1,
    transform: "translateZ(-1px)",
    "@media (max-width: 768px)": {
      right: "-10px",
      bottom: "-15px",
    },
  },
  FeaturesBlue: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s600,
    padding: theme.spacing.s500,
    borderRadius: theme.borderRadius.b400,
    boxSizing: "border-box",
    width: "50%",
    backgroundColor: "#CEE2FF",
    position: "relative",
    overflow: "visible",
    boxShadow: theme.elevation.m,
    "@media (max-width: 768px)": {
      width: "100%",
      maxWidth: "100%",
    },
  },
  FeatureDiv: {
    width: "80%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s2000,
    alignItems: "center",
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      width: "100%",
      maxWidth: "100%",
      gap: theme.spacing.s1000,
      padding: 0,
      margin: "0 auto",
    },
  },
  FeatureIcon: {
    width: "48px",
    height: "48px",
  },

  purple: {
    backgroundColor: "#EDDAF5",
    width: "40%",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },

  red: {
    backgroundColor: "#FFD0C7",
    width: "40%",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },

  green: {
    backgroundColor: "#ACE9AF",
    width: "50%",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  titleSubtext: {
    color: "#3C69D7",
  },
  purpleText: {
    color: "#B96ED5",
  },
  redText: {
    color: "#BF392F",
  },
  greenText: {
    color: "#00812B",
  },
  ValuesContainer: {
    width: "100%",
    // Container height is auto-derived from the SVG's own aspect ratio (1280 × 1323)
    // At 100vw width → height = 100vw × (1323/1280) ≈ 103.4vw — exactly the SVG height
    aspectRatio: "1280 / 1323",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    // 35vw is proportional to the SVG coordinate system:
    // blue wave in background.svg starts at y≈415/1323 ≈ 31% of SVG height.
    // 35vw = 35% of width = ~35% of container height → content lands in blue area at all sizes
    paddingTop: "35vw",
    paddingBottom: "3vw",
    boxSizing: "border-box",
    marginTop: theme.spacing.s2000,
    backgroundImage: `url(${principle_background})`,
    // Width = 100% of container (= 100vw), height = auto from aspect ratio
    // Background fills edge-to-edge; left/right overflow is fine per design intent
    backgroundSize: "100% auto",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    // No overflow:hidden — allows the background to naturally fill to both edges
  },
  ValuesDescription: {
    maxWidth: "930px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    marginTop: "24px",
    color: "#ffffff",
    padding: "0 24px",
  },
  StarLogo: {
    position: "absolute",
    top: "-13px",
    left: "-25px",
    width: "22px",
    height: "26px",
  },
  StarLogo2: {
    position: "absolute",
    width: "22px",
    height: "26px",
    bottom: "-12px",
    right: "-25px",
  },
  HeadSection: {
    position: "relative",
    color: "#ffffff",
    textAlign: "center",
  },
  CardContainer: {
    display: "flex",
    gap: theme.spacing.s1000,
    width: "100%",
    flexWrap: "wrap",
    marginTop: "50px",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  ValuesImgContainer: {
    display: "flex",
    width: "225px",
    height: "116px",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.s200,
    borderRadius: theme.borderRadius.b300,
    border: `1px soild ${theme.light.neutral.border.medium}`,
    backgroundColor: theme.light.negative.surface.medium,
  },
  valueBlue: {
    backgroundColor: theme.light.brand.surface.medium,
  },
  valuePurple: {
    backgroundColor: theme.light.info.surface.medium,
  },
  valueGreen: {
    backgroundColor: theme.light.positive.surface.medium,
  },
  valuesSubTitle: {
    color: theme.light.negative.surface.medium,
  },
  valueBluetitle: {
    color: theme.light.brand.surface.medium,
  },
  valuePurpletitle: {
    color: theme.light.info.surface.medium,
  },
  valueGreentitle: {
    color: theme.light.positive.surface.medium,
  },
  Card: {
    display: "flex",
    flexDirection: "column",
    width: "245px",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.s300,
    padding: theme.spacing.s200,
    backgroundColor: theme.light.neutral.surface.lighter,
    borderRadius: theme.borderRadius.b300,
  },
  ValuesTitle: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.s300,
    alignItems: "flex-start",
    gap: theme.spacing.s300,
  },
  ButtonDiv: {
    display: "flex",
    alignItems: "center",
  },
  ButtonImg: {
    width: "24px",
    height: "24px",
  },
  button: {
    boxShadow: theme.elevation.m,
    backgroundColor: theme.light.neutral.surface.light,
    marginTop: theme.spacing.s2000,
    minHeight: "32px",
    padding: theme.spacing.s300,
  },

  MainSubscribe: {
    minHeight: "50vh",
    padding: "80px 20px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      minHeight: "auto",
      padding: "60px 16px",
    },
  },
  SubscribeDiv: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    maxWidth: "500px",
    boxSizing: "border-box",
  },
  Description: {
    color: theme.light.neutral.onSurface.dark,
    textAlign: "center",
    maxWidth: "100%",
    boxSizing: "border-box",
    padding: "0 8px",
  },
  Subscribe: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing.s600,
    width: "100%",
    maxWidth: "500px",
    boxSizing: "border-box",
  },
  NewsLetterImg: {
    width: "184px",
    height: "120px",
    maxWidth: "100%",
    "& svg": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    "@media (max-width: 480px)": {
      width: "140px",
      height: "90px",
    },
  },
  InputDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.s300,
    marginTop: theme.spacing.s1000,
    width: "100%",
    maxWidth: "450px",
    boxSizing: "border-box",
    "@media (max-width: 480px)": {
      flexDirection: "column",
      gap: "12px",
      width: "100%",
      "& > button, & > div": {
        width: "100%",
      },
    },
  },
  InputText: {
    width: "100%",
    maxWidth: "320px",
    minWidth: "0",
    height: "40px",
    boxSizing: "border-box",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b100,
    padding: `0 ${theme.spacing.s300}`,
    outline: "none",
    fontSize: "14px",
    "@media (max-width: 480px)": {
      maxWidth: "100%",
    },
  },
  HasDropdown: {
    position: "relative",
    "&:hover $DropdownMenu": {
      display: "block",
    },
  },
  DropdownMenu: {
    display: "none",
    position: "absolute",
    top: theme.spacing.s800,
    left: 0,
    backgroundColor: theme.light.neutral.surface.light,
    border: `1px solid ${theme.light.neutral.border.light}`,
    height: "300px",
    width: "1000px",
    listStyleType: "none",
    borderRadius: theme.borderRadius.b150,
    zIndex: "1000",
  },
  DropdownLink: {
    padding: `${theme.spacing.s300} ${theme.spacing.s500}`,
    textDecoration: "none",
    position: "absolute",
    top: -10,
    right: 0,
    color: "#333",
  },

  product: {
    top: 43,
  },

  chat: {
    top: 103,
  },
  DropDownLogo: {
    width: "48px",
    height: "48px",
  },
  ProductItem: {
    display: "flex",
    gap: theme.spacing.s500,
    alignItems: "center",
  },
  ProductHeadings: {
    display: "flex",
    flexDirection: "column",
  },
  LeftSide: {
    padding: theme.spacing.s300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: theme.spacing.s1200,
    width: "300px",
  },
  RightSide: {
    padding: theme.spacing.s300,
    display: "flex",
    flex: "1",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "300px",
  },
  DropDownContainer: {
    display: "flex",
    alignItems: "flex-start",
    position: "relative",
  },
  NavLinks: {
    textDecoration: "none",
    color: theme.light.neutral.onSurface.medium,
  },
  SectionOne: {
    flex: 0.1,
    backgroundColor: theme.light.neutral.surface.light,
    // backgroundColor:'black',
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s300,
    borderRadius: theme.borderRadius.b200,
    padding: theme.spacing.s300,
  },
  SectionTwo: {
    flex: 0.4,
    padding: theme.spacing.s300,
  },
  SectionThree: {
    flex: 0.4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.s300,
  },
  SectionTitle: {
    marginBottom: theme.spacing.s600,
  },
  Hover: {
    "&:hover": {
      color: theme.light.brand.onSurface.default,
      transform: "scale(1.02)",
      transition: "color 0.3s",
    },
  },

  LinksDiv: {
    display: "flex",
    gap: theme.spacing.s200,
    justifyContent: "space-between",
    position: "relative",
    "&:hover $chevronright": {
      opacity: 1, // Show the image on hover
    },
  },

  chevronright: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    opacity: 0, // Hide the image by default
    transition: "opacity 0.3s ease",
  },

  rightIcon: {
    "& path": {
      fill: theme.light.neutral.surface.lighter,
    },
  },

  heroFirstAvatarCon: {
    width: "112px",
    height: "112px",
    borderRadius: "50%",
    backgroundColor: "transparent", // default transparent
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "2%",
    top: "13%",
    transition: "background-color 0.3s ease",

    "&:hover": {
      backgroundColor: "rgba(245, 247, 248, 0.8)",
      boxShadow: theme.elevation.m,
    },

    "&:hover $heroFirstRightInsideCon": {
      backgroundColor: theme.light.brand.surface.lighter,
    },
  },

  heroSecondAvatarCon: {
    width: "112px",
    height: "112px",
    borderRadius: "50%",
    backgroundColor: "transparent", // default transparent
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "11%",
    top: "50%",
    transition: "background-color 0.3s ease",

    "&:hover": {
      backgroundColor: "rgba(245, 247, 248, 0.8)",
      boxShadow: theme.elevation.m,
    },

    "&:hover $heroFirstRightInsideCon": {
      backgroundColor: theme.light.brand.surface.lighter,
    },
  },

  heroThirdAvatarCon: {
    width: "112px",
    height: "112px",
    borderRadius: "50%",
    backgroundColor: "transparent", // default transparent
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "2%",
    top: "85%",
    transition: "background-color 0.3s ease",

    "&:hover": {
      backgroundColor: "rgba(245, 247, 248, 0.8)",
      boxShadow: theme.elevation.m,
    },

    "&:hover $heroThirdInsideCon": {
      backgroundColor: theme.light.brand.surface.lighter,
    },
  },

  heroThirdInsideCon: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    position: "relative",
  },

  heroFirstRightAvatarCon: {
    width: "112px",
    height: "112px",
    borderRadius: "50%",
    backgroundColor: "transparent", // default transparent
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "17%",
    top: "18%",
    transition: "background-color 0.3s ease",

    "&:hover": {
      backgroundColor: "rgba(245, 247, 248, 0.8)",
      boxShadow: theme.elevation.m,
    },

    "&:hover $heroFirstRightInsideCon": {
      backgroundColor: theme.light.brand.surface.lighter,
    },
  },

  heroFirstRightInsideCon: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    position: "relative",
  },

  heroSecondRightAvatarCon: {
    width: "112px",
    height: "112px",
    borderRadius: "50%",
    // backgroundColor: "transparent", // default transparent
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "2%",
    // backgroundColor: "rgba(245, 247, 248, 0.5)",
    top: "60%",
    transition: "background-color 0.3s ease",
    //  backdropFilter: "blur(10px)", // frosted glass effect
    // WebkitBackdropFilter: "blur(10px)", // Safari support

    "&:hover": {
      // backgroundColor: "#f5f7f8", // hover color
      backgroundColor: "rgba(245, 247, 248, 0.8)",
      boxShadow: theme.elevation.m,
    },
    "&:hover $heroThirdRightInsideCon": {
      backgroundColor: theme.light.brand.surface.lighter,
    },
  },

  heroThirdRightAvatarCon: {
    width: "112px",
    height: "112px",
    borderRadius: "50%",
    backgroundColor: "transparent", // default transparent
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "10%",
    top: "103%",
    transition: "background-color 0.3s ease",

    "&:hover": {
      backgroundColor: "rgba(245, 247, 248, 0.8)",
      boxShadow: theme.elevation.m,
    },

    "&:hover $heroThirdRightInsideCon": {
      backgroundColor: theme.light.brand.surface.lighter,
    },
  },

  heroThirdRightInsideCon: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    position: "relative",
  },

  StorageContainer: {
    width: "100%",
    backgroundColor: "#F0F5FC",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    margin: "60px 0",
    "@media (max-width: 900px)": {
      padding: "50px 24px",
      margin: "40px 0",
    },
    "@media (max-width: 480px)": {
      padding: "36px 16px",
      margin: "24px 0",
    },
  },
  StorageWrapper: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "48px",
    boxSizing: "border-box",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "36px",
    },
  },
  StorageContentLeft: {
    flex: "1.1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    maxWidth: "560px",
    width: "100%",
    boxSizing: "border-box",
    "@media (max-width: 900px)": {
      maxWidth: "100%",
    },
  },
  StorageCategory: {
    color: "#0072C4",
    fontWeight: 600,
    fontSize: "1.125rem",
    marginBottom: "4px",
    letterSpacing: "0.2px",
  },
  StorageTitle: {
    color: "#222222",
    fontWeight: 700,
    fontSize: "2.4rem",
    lineHeight: 1.25,
    margin: 0,
    "@media (max-width: 900px)": {
      fontSize: "2rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.6rem",
      lineHeight: 1.3,
    },
  },
  StorageDescription: {
    color: "#4A5568",
    fontSize: "1.05rem",
    lineHeight: 1.6,
    marginTop: "8px",
    maxWidth: "500px",
    "@media (max-width: 900px)": {
      maxWidth: "100%",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.95rem",
    },
  },
  StorageGraphicRight: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "560px",
    boxSizing: "border-box",
    "& svg": {
      width: "100%",
      height: "auto",
      maxHeight: "360px",
      display: "block",
    },
    "@media (max-width: 900px)": {
      maxWidth: "100%",
    },
  },
}));
