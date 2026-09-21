'use client';

import React from "react";
import Link from "next/link";
import { usestyles } from "../footer/footerstyle";
import Typography from "../typography/component";
import SvgTwitter from "../svg/Twitter";
import SvgLinkedin from "../svg/Linkedin";
import SvgYoutube from "../svg/Youtube";
import SvgThreads from "../svg/Threads";
import SvgInsta from "../svg/Insta";
import SvgPhone from "../svg/Phone";
import SvgMail from "../svg/Mail";
import SvgLocation from "../svg/Location";
import weblingslogo from "../../assets/images/weblings_logo.svg";
import { getSrc } from "../../utils/getSrc";

interface FooterLink {
  label: string;
  path: string;
}

interface FooterSection {
  title: string;
  features: FooterLink[];
}

export interface FooterProps {
  iconColor?: string;
  brandColor?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ iconColor, brandColor, className }): React.ReactElement => {
  const classes = usestyles();
  const effectiveIconColor = iconColor || brandColor;

  const footer: { sections: FooterSection[] } = {
    sections: [
      {
        title: "Product",
        features: [
          { label: "Worksuite", path: "/" },
          { label: "Mail", path: "/mail/feature" },
          { label: "Connect", path: "/connect/feature" },
          { label: "Calendar", path: "/calender/feature" },
          { label: "Streamline", path: "/streamline/feature" },
          { label: "eOffice", path: "/eoffice/feature" },
          { label: "Drive", path: "/drive" },
        ],
      },
      {
        title: "Company",
        features: [
          { label: "Docs", path: "#" },
          { label: "Pricing", path: "/price" },
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
        ],
      },
      {
        title: "Legal",
        features: [
          { label: "Privacy Policy", path: "/privacy-policy" },
          { label: "Terms & Conditions", path: "/terms-and-conditions" },
        ],
      },
    ],
  };

  return (
    <footer className={`${classes.Footer} ${className || ""}`.trim()}>
      <div className={classes.FooterContent}>
        <div className={classes.FirstSection}>
          <div className={classes.SubDiv}>
            <Link href="/">
              <img src={getSrc(weblingslogo)} alt="Weblings Logo" className={classes.weblingslogo} />
            </Link>
          </div>
          <div className={classes.Icons}>
            <a
              href="https://x.com/weblingsdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Weblings on X"
              className={classes.socialLink}
            >
              <SvgTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/145175910/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Weblings on LinkedIn"
              className={classes.socialLink}
            >
              <SvgLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@weblingsdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to Weblings on YouTube"
              className={classes.socialLink}
            >
              <SvgYoutube />
            </a>
            <a
              href="https://www.threads.com/@weblingsdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Weblings on Threads"
              className={classes.socialLink}
            >
              <SvgThreads />
            </a>
            <a
              href="https://www.instagram.com/weblingsdev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Weblings on Instagram"
              className={classes.socialLink}
            >
              <SvgInsta />
            </a>
          </div>
        </div>

        {footer.sections.map((section, index) => (
          <div className={classes.SecondSection} key={index}>
            <div>
              <Typography variant="LS" className={classes.SectionTitleColor}>
                {section.title}
              </Typography>
            </div>
            <ul className={classes.ulist}>
              {section.features.map((feature, featureIndex) => (
                <li className={classes.list} key={featureIndex}>
                  <Link href={feature.path} className={classes.footerLink}>
                    <Typography variant="LXS">{feature.label}</Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={classes.ThirdSection}>
          <div>
            <Typography className={classes.SectionTitleColor} variant="LS">
              Contact
            </Typography>
          </div>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <SvgPhone className={classes.contactIcon} stroke={effectiveIconColor} />
              <Typography variant="LXS">97895 13198</Typography>
            </li>
            <li className={classes.li}>
              <SvgMail className={classes.contactIcon} stroke={effectiveIconColor} />
              <Typography variant="LXS">pkgowthamit@gmail.com</Typography>
            </li>
            <li className={classes.li}>
              <SvgLocation className={classes.contactIcon} stroke={effectiveIconColor} />
              <Typography variant="LXS">
                Weblings No:8, K.M Nagar,3rd Street, Velliyankadu, Tirupur,
                Tamilnadu, 641604. India
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
