'use client';

import React, { useEffect, useRef, useState } from "react";
import Typography from "../typography/component";
import Button from "../button/button";
import { usestyles } from "./landingstyle";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { getSrc } from "../../utils/getSrc";
import weblingslogo from "../../assets/images/weblings_logo.svg";
import sideimg from "../../assets/images/sideimg.svg";
import SvgArrowDropDown from "../svg/ArrowDropDown";
import SvgChevronRight from "../svg/ChevronRight";
import SvgMenu from "../svg/Menu";

// Import React SVG Icon components from src/assets/icons_component/
import {
  MailIcon,
  CalendarIcon,
  ConnectIcon,
  StreamlineIcon,
  EOfficeIcon,
  WorksuiteIcon,
} from "../../assets/icons_component/index";
import { SvgCloud } from "../svg/CustomIcons";

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
    key: "Worksuite",
    label: "Worksuite",
    title: "All-in-One Smart Workspace",
    description:
      "Manage projects, tasks, team communications, digital office, and daily operations from a single unified platform.",
    path: "/",
    icon: <WorksuiteIcon />,
  },
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
    key: "Drive",
    label: "Drive",
    title: "AI-Powered Enterprise Cloud Storage",
    description:
      "Store, share, and understand your files with granular permissions, expiring links, and built-in document intelligence.",
    path: "/drive",
    icon: <SvgCloud />,
  },
];

const Navbar = () => {
  const classes = usestyles();
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname || "/";

  // Determine current active product based on the current page route
  const getActiveProduct = () => {
    if (currentPath === "/") {
      return productsList.find((p) => p.path === "/") || productsList[0];
    }
    return (
      productsList.find(
        (p) =>
          p.path !== "/" &&
          (currentPath === p.path ||
            currentPath.startsWith(p.path) ||
            currentPath.includes(p.key.toLowerCase()))
      ) || null
    );
  };

  const currentProduct = getActiveProduct();
  const [previewItem, setPreviewItem] = useState<ProductItem>(
    currentProduct || productsList[0]
  );
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState<boolean>(false);

  const navRef = useRef<HTMLInputElement>(null);

  // Sync preview item when navigating or opening dropdown
  useEffect(() => {
    const active = getActiveProduct();
    if (active) {
      setPreviewItem(active);
    }
  }, [currentPath, isDropDownOpen]);

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
    router.push(path);
  };

  return (
    <nav
      className={`${classes.NavBar} ${isMenuOpen ? classes.NavBarOpen : ""
        }`}
      ref={navRef}
    >
      <div className={classes.NavText}>
        <Link href="/" onClick={() => setIsDropDownOpen(false)}>
          <img className={classes.NavBarLogo} src={getSrc(weblingslogo)} alt="Weblings Logo" />
        </Link>

        {/* Desktop Links */}
        <div className={classes.DesktopOnly}>
          <ul className={classes.NavBarLinks}>
            {/* Product with Dropdown */}
            <li className={classes.NavBarItem}>
              <div
                className={`${classes.NavBarLink} ${isDropDownOpen || (currentPath !== "/" && productsList.some((p) => p.path !== "/" && currentPath.startsWith(p.path))) ? classes.ActiveLink : ""
                  }`}
                onClick={toggleDropdown}
                onMouseEnter={() => setIsDropDownOpen(true)}
              >
                <span>Product</span>
                <div
                  className={`${classes.DropdownArrowIcon} ${isDropDownOpen ? classes.ArrowRotated : ""
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
                  <div
                    className={classes.SectionOne}
                    onMouseLeave={() => {
                      const active = getActiveProduct();
                      if (active) {
                        setPreviewItem(active);
                      }
                    }}
                  >
                    {productsList.map((product) => {
                      // Only mark as selected if the user has navigated to this page
                      const isCurrentPage = currentProduct?.key === product.key;
                      return (
                        <div
                          key={product.key}
                          className={`${classes.ProductLinkCard} ${isCurrentPage ? classes.ActiveProductCard : ""
                            }`}
                          onMouseEnter={() => setPreviewItem(product)}
                          onClick={() => handleProductNavigate(product.path)}
                        >
                          <div className={classes.ProductItemContent}>
                            <span
                              className={`${classes.ProductIcon} ${isCurrentPage ? classes.ActiveProductIcon : ""
                                }`}
                            >
                              {product.icon}
                            </span>
                            <span
                              className={`${classes.ProductLabel} ${isCurrentPage ? classes.ActiveProductLabel : ""
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
                      <Typography variant="TS" className={classes.PreviewTitle}>
                        {previewItem.title}
                      </Typography>
                      <Typography variant="BM" className={classes.PreviewDescription}>
                        {previewItem.description}
                      </Typography>
                    </div>

                    <img
                      src={getSrc(sideimg)}
                      alt="Product Preview"
                      className={classes.PreviewImage}
                    />

                    <div className={classes.PreviewFooter}>
                      <Button
                        element="button"
                        brand
                        onClick={() => handleProductNavigate(previewItem.path)}
                      >
                        Explore {previewItem.label}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Docs */}
            <li className={classes.NavBarItem}>
              <Link
                href="#"
                className={`${classes.NavBarLink} ${currentPath === "/docs" ? classes.ActiveLink : ""
                  }`}
                onClick={() => setIsDropDownOpen(false)}
              >
                Docs
              </Link>
            </li>

            {/* Pricing */}
            <li className={classes.NavBarItem}>
              <Link
                href="/price"
                className={`${classes.NavBarLink} ${currentPath === "/price" || currentPath === "/workSuite/comparison" ? classes.ActiveLink : ""
                  }`}
                onClick={() => setIsDropDownOpen(false)}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Action Button */}
      <div className={classes.DesktopOnly}>
        <Button element="button" brand onClick={() => router.push("/contact")}>
          Try Now
        </Button>
      </div>

      {/* Mobile Screen Hamburger Toggle */}
      <div className={classes.MobileOnly}>
        <button
          className={classes.MobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <SvgMenu />
        </button>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      {isMenuOpen && (
        <div className={`${classes.MobileDrawer} ${classes.MobileOnly}`}>
          <div className={classes.MobileNavItem}>
            <div
              className={classes.MobileNavLink}
              onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
            >
              <span>Product</span>
              <div
                className={`${classes.DropdownArrowIcon} ${isMobileProductOpen ? classes.ArrowRotated : ""
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
              href="#"
              className={classes.MobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
          </div>

          <div className={classes.MobileNavItem}>
            <Link
              href="/price"
              className={classes.MobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </div>

          <div className={classes.MobileActionWrapper}>
            <Button
              element="button"
              brand
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/contact");
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
