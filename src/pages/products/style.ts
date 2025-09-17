import { createUseStyles } from "react-jss";
import headingseclogo from "../../assets/icons/Pattern.svg";
import background from "../../assets/icons/section4_background.svg";
import { Theme } from "../../theme/themeType";

export const usestyles = createUseStyles((theme: Theme) => ({

  mainSecCon:{
      // backgroundColor: 'black',
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
    minHeight: "80vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    backgroundImage: `url(${headingseclogo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#0066D8",
    gap: theme.spacing.s1200,
    marginBottom: theme.spacing.s2000,
  },
  headTitle: {
    color: theme.light.neutral.onSurface.inverse,
    maxWidth: "564px",
  },
  headTitleDescription: {
    color: theme.light.neutral.onSurface.inverse,
    maxWidth: "564px",
  },
  headbutton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
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
    minHeight: "60vh",
    width: "100%",
    maxWidth: "95%",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#FFEE34",
    borderRadius: theme.spacing.s300,
    padding: theme.spacing.s1000,
    alignItems: "center",
    justifyContent: "space-between",
  },
  BannerHeadSectionDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing.s1600,
    flex: "1",
    maxWidth: "583px",
  },
  BannerTitleSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing.s600,
  },
  BannerTitleDescription: {
    maxWidth: "400px",
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
    display: "contents",
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
    // position: "relative",
  },
  FeatureHeading: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: theme.spacing.s600,
    maxWidth: "755px",
  },
  FeaturesFlex: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing.s500,
    justifyContent: "center",
    marginTop: theme.spacing.s500,
  },
  LeftImg: {
    width: "54px",
    height: "55px",
    position: "absolute",
    top: "-25px",
    left: "-22px",
    zIndex: -1,
    transform: "translateZ(-1px)",
  },
  RightImg: {
    width: "54px",
    height: "55px",
    position: "absolute",
    bottom: "-18px",
    right: "-22px",
    zIndex: -1,
    transform: "translateZ(-1px)",
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
  },
  FeatureDiv: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s2000,
    alignItems: "center",
  },
  FeatureIcon: {
    width: "48px",
    height: "48px",
  },

  purple: {
    backgroundColor: "#EDDAF5",
    width: "40%",
  },

  red: {
    backgroundColor: "#FFD0C7",
    width: "40%",
  },

  green: {
    backgroundColor: "#ACE9AF",
    width: "50%",
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
    minHeight: "80vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing.s2000,
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  ValuesDescription: {
    maxWidth: "930px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    marginTop: "24px",
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
    backgroundColor:theme.light.neutral.surface.light,
    marginTop: theme.spacing.s2000,
    minHeight: "32px",
    padding: theme.spacing.s300,
  },

  MainSubscribe: {
    minHeight: "80vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  SubscribeDiv: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    textAlign: "center",
  },
  Description: {
    color: theme.light.neutral.onSurface.dark,
    textAlign: "center",
  },
  Subscribe: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing.s600,
    width: "500px",
  },
  NewsLetterImg: {
    width: "184px",
    height: "120px",
  },
  InputDiv: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s300,
    marginTop: theme.spacing.s1000,
  },
  InputText: {
    width: "100%",
    minWidth: "280px",
    height: "30px",
    border: `1px solid ${theme.light.neutral.border.light }`,
    borderRadius: theme.borderRadius.b100,
    padding:`${theme.spacing.s0} ${theme.spacing.s100}`,
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
    backgroundColor:theme.light.neutral.surface.light,
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
    gap:theme.spacing.s500,
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
    gap:theme.spacing.s1200,
    width: "300px",
  },
  RightSide: {
    padding:theme.spacing.s300,
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
    gap:theme.spacing.s300,
    borderRadius:theme.borderRadius.b200,
    padding:theme.spacing.s300,
  },
  SectionTwo: {
    flex: 0.4,
    padding:theme.spacing.s300,
  },
  SectionThree: {
    flex: 0.4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding:theme.spacing.s300,
  },
  SectionTitle: {
    marginBottom:theme.spacing.s600,
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
    gap:theme.spacing.s200,
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

  rightIcon:{
    '& path':{
        fill:theme.light.neutral.surface.lighter
    }
  },

  heroFirstAvatarCon:{
     width: "112px",
    height: "112px",
    borderRadius: "50%",
    // backgroundColor: "transparent", // default transparent
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: '2%',
    // backgroundColor: "rgba(245, 247, 248, 0.5)",
    top: '13%',
    transition: "background-color 0.3s ease",
    //  backdropFilter: "blur(10px)", // frosted glass effect
    // WebkitBackdropFilter: "blur(10px)", // Safari support

    "&:hover": {
      // backgroundColor: "#f5f7f8", // hover color
      backgroundColor: "rgba(245, 247, 248, 0.8)",
      boxShadow:theme.elevation.m
    },
  },

    heroSecondAvatarCon:{
     width: "112px",
    height: "112px",
    borderRadius: "50%",
    backgroundColor: "transparent", // default transparent
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 160,
    top: 250,
    transition: "background-color 0.3s ease",

    "&:hover": {
      backgroundColor: "rgba(245, 247, 248, 0.8)",
      boxShadow:theme.elevation.m
    },
  },


    heroThirdAvatarCon:{
     width: "112px",
    height: "112px",
    borderRadius: "50%",
    backgroundColor: "transparent", // default transparent
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: '2%',
    top: '78%',
    transition: "background-color 0.3s ease",

    "&:hover": {
      backgroundColor: "rgba(245, 247, 248, 0.8)",
      boxShadow:theme.elevation.m
    },

     "&:hover $heroThirdInsideCon": {
      backgroundColor: theme.light.brand.surface.lighter,
    },
  },

  heroThirdInsideCon:{
    width:'75px',
    height:'75px',
     borderRadius: "50%",
    backgroundColor: "transparent",
    position:'relative'
  }
}));
