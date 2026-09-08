'use client';

import React from "react";
import Link from "next/link";
import { usestyles } from "../footer/footerstyle";
import Typography from "../typography/component";
import SvgTwitter from "../svg/Twitter";
import SvgLinkedin from "../svg/Linkedin";
import SvgYoutube from "../svg/Youtube";
import SvgFacebook from "../svg/Facebook";
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

const Footer: React.FC<FooterProps> = ({ iconColor, brandColor, className }): JSX.Element => {
  const classes = usestyles();
  const effectiveIconColor = iconColor || brandColor;

  const footer: { sections: FooterSection[] } = {
    sections: [
      {
        title: "Company",
        features: [
          { label: "Contact", path: "/contact" },
          { label: "Price", path: "/workSuite/comparison" },
        ],
      },
      {
        title: "Product",
        features: [
          { label: "Mail", path: "/mail/feature" },
          { label: "Chat", path: "/connect/feature" },
          { label: "Calendar", path: "/calender/feature" },
          { label: "Streamline", path: "/streamline/feature" },
          { label: "eOffice", path: "/eoffice/feature" },
          { label: "Drive", path: "/drive" },
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
            <SvgTwitter />
            <SvgLinkedin />
            <SvgYoutube />
            <SvgFacebook />
            <SvgInsta />
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
