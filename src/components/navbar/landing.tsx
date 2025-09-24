import React, { useEffect, useState } from "react";
import Typography from "../typography/component.tsx";
import Button from "../button/button.tsx";
import { usestyles } from "./landingstyle.tsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SvgLogo from "../svg/Logo.tsx";
import weblingslogo from "../../assets/images/weblings_logo.svg";
import sideimg from "../../assets/images/sideimg.svg";
import SvgArrowDropDown from "../svg/ArrowDropDown.tsx";
import SvgChevronRight from "../svg/ChevronRight.tsx";
import clsx from "clsx";
import SvgMenu from "../svg/Menu.tsx";

const nav: any = {
  navBar: {
    logo: weblingslogo,
    links: [
      {
        label: "Product",
        path: "/layout/product",
        dropdown: [
          {
            logo: <SvgLogo />,
            dropdownlogo: "",
            label: "Mail",
            title: "You can message to the teams",
            path: "/layout/mail/feature",
            subtitle:
              "Worem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            logo: <SvgLogo />,
            label: "Calender",
            title: "You can message to the teams",
            path: "/layout/calender/feature",
            subtitle:
              "Worem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            logo: <SvgLogo />,
            label: "Connect",
            title: "You can message to the teams",
            path: "/layout/connect/feature",
            subtitle:
              "Worem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            logo: <SvgLogo />,
            label: "Streamline",
            title: "You can message to the teams",
            path: "/layout/streamline/feature",
            subtitle:
              "Worem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            logo: <SvgLogo />,
            label: "Eoffice",
            title: "You can message to the teams",
            path: "/layout/eoffice/feature",
            subtitle:
              "Worem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
      {
        label: "About",
        path: "/layout/about",
      },
      {
        label: "Contact",
        path: "/layout/contact",
      },
    ],
    action: {
      label: "Try Now",
      link: "/",
    },
  },
};

const Navbar = () => {
  const classes = usestyles();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeItem, setActiveItem] = useState<any | null>(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    // Check immediately
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleDropdownToggle = (index: boolean) => {
    setIsDropDownOpen(index);
  };

  const handleOnHover = (item: string) => {
    switch (item) {
      case "Mail":
        setActiveItem({
          title: "Get your work",
          description:
            "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          action: {
            label: "Learn More",
            path: "/",
          },
        });
        break;

      case "Calender":
        setActiveItem({
          title: "All-in-One Pricing",
          description:
            "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          action: {
            label: "Learn More",
            path: "/",
          },
        });
        break;
      case "Connect":
        setActiveItem({
          title: "Why our Product",
          description:
            "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          action: {
            label: "Learn More",
            path: "/",
          },
        });
        break;
      case "Streamline":
        setActiveItem({
          title: "All-in-One Pricing",
          description:
            "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          action: {
            label: "Learn More",
            path: "/",
          },
        });
        break;
      case "Eoffice":
        setActiveItem({
          title: "All-in-One Pricing",
          description:
            "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          action: {
            label: "Learn More",
            path: "/",
          },
        });
        break;

      default:
        break;
    }
  };

  return (
    <nav className={classes.NavBar}>
      <div className={classes.NavText}>
        <Link to="/layout/product">
          <img className={classes.NavBarLogo} src={weblingslogo} alt="" />
        </Link>
       {!isSmallScreen && <ul className={classes.NavBarLinks}>
          {nav.navBar.links.map((nav: any, index: number) => (
            <li
              key={index}
              className={nav.dropdown ? classes.HasDropdown : ""}
              onMouseEnter={() => {
                if (nav.dropdown) {
                  handleDropdownToggle(true);
                }
                handleOnHover("Mail");
              }}
              onMouseLeave={() => nav.dropdown && handleDropdownToggle(false)}
            >
              {index === 0 ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Link to={nav.path} className={classes.NavBarLink}>
                    {nav.label}
                  </Link>
                  {/* <img src={dropdownlogo} /> */}
                  <SvgArrowDropDown />
                </div>
              ) : (
                <Link to={nav.path} className={classes.NavBarLink}>
                  {nav.label}
                </Link>
              )}
              {/* dropdownmenu */}
              {nav.dropdown && isDropDownOpen && (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className={classes.DropdownMenu}
                  onMouseLeave={() => setIsDropDownOpen(false)}
                >
                  <div className={classes.SectionOne}>
                    {nav.dropdown.map((link: any) => (
                      <div
                        onMouseEnter={() => handleOnHover(link.label)}
                        onClick={() => navigate(link.path)}
                      >
                        <div className={classes.LinksDiv}>
                          <Typography variant="LS" className={classes.Hover}>
                            {link.label}
                          </Typography>
                          <div
                            className={clsx(classes.chevronright, {
                              [classes.visible]: link.path === currentPath,
                            })}
                          >
                            {/* <img src={chevronright} alt="chevronright" /> */}
                            <SvgChevronRight />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={classes.SectionTwo}>
                    <Typography variant="HS" className={classes.SectionTitle}>
                      {activeItem?.title}
                    </Typography>
                    <Typography variant="BS" className={classes.SectionTitle}>
                      {activeItem?.description}
                    </Typography>
                    <Button element="button" brand>
                      {activeItem?.action?.label}
                    </Button>
                  </div>
                  <div className={classes.SectionThree}>
                    <img
                      src={sideimg}
                      alt="sideimg"
                      style={{ height: "auto", width: "300px" }}
                    />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>}
      </div>

     {!isSmallScreen && <div>
        <Button element="button" brand>
          {nav.navBar.action.label}
        </Button>
      </div>}

       {isSmallScreen && (
          <div style={{cursor:'pointer'}} onClick={()=>setIsMenuOpen(!isMenuOpen)}>
            <SvgMenu />
          </div>
        )}
    </nav>
  );
};

export default Navbar;
