import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const usestyles = createUseStyles((theme: Theme) => ({
  NavBar: {
    position: "fixed",     // fixed = removes it from document flow
    top: 0,
    left: "50%",
    transform: "translateX(-50%)", // center horizontally
    width: "80%",
    height: "80px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    zIndex: 1000, 
    padding:'0 16px',
    borderBottomLeftRadius:'16px',
    borderBottomRightRadius:'16px',
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

  HasDropdown: {
    position: "relative",
    "&:hover $DropdownMenu": {
      display: "block",
    },
  },

  DropdownMenu: {
    display: "none",
    position: "absolute",
    top:25,
    left: 0,
    zIndex:100,
    backgroundColor:theme.light.neutral.surface.light,
    border: `1px solid ${theme.light.neutral.border.light}`,
    height: "300px",
    width: "1000px",
    listStyleType: "none",
    borderRadius: theme.borderRadius.b150,
    // zIndex: "1000",
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

  LinksDiv: {
    display: "flex",
    gap:theme.spacing.s200,
    justifyContent: "space-between",
    position: "relative",
    "&:hover $chevronright": {
      opacity: 1, // Show the image on hover
    },
    "&:hover $Hover": {
      color: theme.light.brand.onSurface.default,
      transform: "scale(1.02)",
      transition: "color 0.3s",
    },
  },

  Hover: {
    color:theme.light.neutral.onSurface.medium,
  },

  chevronright: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    opacity: 0, // Hide the image by default
    transition: "opacity 0.3s ease",
  },

  visible:{
    opacity:1
  }

}));
