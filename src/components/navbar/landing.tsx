import React, { useEffect, useRef, useState } from "react";
import Typography from "../typography/component.tsx";
import Button from "../button/button.tsx";
import { usestyles } from "./landingstyle.tsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import weblingslogo from "../../assets/images/weblings_logo.svg";
import sideimg from "../../assets/images/sideimg.svg";
import SvgArrowDropDown from "../svg/ArrowDropDown.tsx";
import SvgChevronRight from "../svg/ChevronRight.tsx";
import SvgMenu from "../svg/Menu.tsx";

// Import React SVG Icon components from src/assets/icons_component/
import {
  MailIcon,
  CalendarIcon,
  ConnectIcon,
  StreamlineIcon,
  EOfficeIcon,
  WorksuiteIcon,
} from "../../assets/icons_component/index.tsx";

interface ProductItem {
  key: string;
  label: string;
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}

const productsList: ProductItem[] = [
  {
    key: "Mail",
    label: "Mail",
    title: "Fast & Secure Business Email",
    description:
      "Connect with your team through business email with built-in spam protection, smart folders, and seamless workspace integration.",
    path: "/mail/feature",
    icon: <MailIcon />,
  },
  {
    key: "Calender",
    label: "Calender",
    title: "Smart Calendar & Scheduling",
    description:
      "Manage meetings, tasks, and team schedules in one centralized view with soft deadlines and timeline tracking.",
    path: "/calender/feature",
    icon: <CalendarIcon />,
  },
  {
    key: "Connect",
    label: "Connect",
    title: "Team Messaging & Audio/Video",
    description:
      "Instant one-on-one and group messaging, voice calls, and video meetings to keep teams aligned everywhere.",
    path: "/connect/feature",
    icon: <ConnectIcon />,
  },
  {
    key: "Streamline",
    label: "Streamline",
    title: "Agile Project & Sprint Boards",
    description:
      "Design project workflows, sprint backlogs, task timelines, and track progress from start to finish.",
    path: "/streamline/feature",
    icon: <StreamlineIcon />,
  },
  {
    key: "Eoffice",
    label: "E-Office",
    title: "Digital Attendance & HR Portal",
    description:
      "Track employee attendance, leave requests, organization hierarchy, and team structures in one portal.",
    path: "/eoffice/feature",
    icon: <EOfficeIcon />,
  },
  {
    key: "Worksuite",
    label: "Worksuite",
    title: "All-in-One Smart Workspace",
    description:
      "Manage projects, tasks, team communications, digital office, and daily operations from a single unified platform.",
    path: "/workSuite/feature",
    icon: <WorksuiteIcon />,
  },
];

const Navbar = () => {
  const classes = usestyles();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [activeItem, setActiveItem] = useState<ProductItem>(productsList[0]);
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState<boolean>(false);

  const navRef = useRef<HTMLInputElement>(null);

  // Handle responsive screen width check
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 860);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Click Outside Listener to close dropdown on touch / click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsDropDownOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropDownOpen((prev) => !prev);
  };

  const handleProductNavigate = (path: string) => {
    setIsDropDownOpen(false);
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <nav
      className={`${classes.NavBar} ${
        isMenuOpen ? classes.NavBarOpen : ""
      }`}
      ref={navRef}
    >
      <div className={classes.NavText}>
        <Link to="/" onClick={() => setIsDropDownOpen(false)}>
          <img className={classes.NavBarLogo} src={weblingslogo} alt="Weblings Logo" />
        </Link>

        {/* Desktop Links */}
        {!isSmallScreen && (
          <ul className={classes.NavBarLinks}>
            {/* Product with Dropdown */}
            <li className={classes.NavBarItem}>
              <div
                className={`${classes.NavBarLink} ${
                  isDropDownOpen || currentPath.includes("feature") ? classes.ActiveLink : ""
                }`}
                onClick={toggleDropdown}
                onMouseEnter={() => setIsDropDownOpen(true)}
              >
                <span>Product</span>
                <div
                  className={`${classes.DropdownArrowIcon} ${
                    isDropDownOpen ? classes.ArrowRotated : ""
                  }`}
                >
                  <SvgArrowDropDown />
                </div>
              </div>

              {/* Desktop Dropdown Menu */}
              {isDropDownOpen && (
                <div
                  className={classes.DropdownMenu}
                  onMouseLeave={() => setIsDropDownOpen(false)}
                >
                  {/* Left Column: Product Options */}
                  <div className={classes.SectionOne}>
                    {productsList.map((product) => {
                      const isActive = activeItem.key === product.key;
                      return (
                        <div
                          key={product.key}
                          className={`${classes.ProductLinkCard} ${
                            isActive ? classes.ActiveProductCard : ""
                          }`}
                          onMouseEnter={() => setActiveItem(product)}
                          onClick={() => handleProductNavigate(product.path)}
                        >
                          <div className={classes.ProductItemContent}>
                            <span
                              className={`${classes.ProductIcon} ${
                                isActive ? classes.ActiveProductIcon : ""
                              }`}
                            >
                              {product.icon}
                            </span>
                            <span
                              className={`${classes.ProductLabel} ${
                                isActive ? classes.ActiveProductLabel : ""
                              }`}
                            >
                              {product.label}
                            </span>
                          </div>
                          <SvgChevronRight />
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Column: Active Preview Card */}
                  <div className={classes.SectionTwo}>
                    <div className={classes.PreviewHeader}>
                      <Typography variant="HM" className={classes.PreviewTitle}>
                        {activeItem.title}
                      </Typography>
                      <Typography variant="BM" className={classes.PreviewDescription}>
                        {activeItem.description}
                      </Typography>
                    </div>

                    <img
                      src={sideimg}
                      alt="Product Preview"
                      className={classes.PreviewImage}
                    />

                    <div className={classes.PreviewFooter}>
                      <Button
                        element="button"
                        brand
                        onClick={() => handleProductNavigate(activeItem.path)}
                      >
                        Explore {activeItem.label}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* About */}
            <li className={classes.NavBarItem}>
              <Link
                to="/about"
                className={`${classes.NavBarLink} ${
                  currentPath === "/about" ? classes.ActiveLink : ""
                }`}
                onClick={() => setIsDropDownOpen(false)}
              >
                About
              </Link>
            </li>

            {/* Contact */}
            <li className={classes.NavBarItem}>
              <Link
                to="/contact"
                className={`${classes.NavBarLink} ${
                  currentPath === "/contact" ? classes.ActiveLink : ""
                }`}
                onClick={() => setIsDropDownOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Desktop Action Button */}
      {!isSmallScreen && (
        <div>
          <Button element="button" brand onClick={() => navigate("/contact")}>
            Try Now
          </Button>
        </div>
      )}

      {/* Mobile Screen Hamburger Toggle */}
      {isSmallScreen && (
        <button
          className={classes.MobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <SvgMenu />
        </button>
      )}

      {/* Mobile Responsive Navigation Drawer */}
      {isSmallScreen && isMenuOpen && (
        <div className={classes.MobileDrawer}>
          <div className={classes.MobileNavItem}>
            <div
              className={classes.MobileNavLink}
              onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
            >
              <span>Product</span>
              <div
                className={`${classes.DropdownArrowIcon} ${
                  isMobileProductOpen ? classes.ArrowRotated : ""
                }`}
              >
                <SvgArrowDropDown />
              </div>
            </div>

            {/* Expanded Product Accordion in Mobile Drawer */}
            {isMobileProductOpen && (
              <div className={classes.MobileAccordion}>
                {productsList.map((product) => (
                  <div
                    key={product.key}
                    className={classes.MobileAccordionItem}
                    onClick={() => handleProductNavigate(product.path)}
                  >
                    <span>{product.icon}</span>
                    <span>{product.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={classes.MobileNavItem}>
            <Link
              to="/about"
              className={classes.MobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>

          <div className={classes.MobileNavItem}>
            <Link
              to="/contact"
              className={classes.MobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          <div className={classes.MobileActionWrapper}>
            <Button
              element="button"
              brand
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/contact");
              }}
            >
              Try Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
