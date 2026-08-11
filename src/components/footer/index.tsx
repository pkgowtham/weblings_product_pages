import React from "react";
import { Link } from "react-router-dom";
import { usestyles } from "../footer/footerstyle.tsx";
import Typography from "../typography/component.tsx";
import SvgTwitter from "../svg/Twitter.tsx";
import SvgLinkedin from "../svg/Linkedin.tsx";
import SvgYoutube from "../svg/Youtube.tsx";
import SvgFacebook from "../svg/Facebook.tsx";
import SvgInsta from "../svg/Insta.tsx";
import SvgPhone from "../svg/Phone.tsx";
import SvgMail from "../svg/Mail.tsx";
import SvgLocation from "../svg/Location.tsx";
import weblingslogo from "../../assets/images/weblings_logo.svg";

interface FooterLink {
  label: string;
  path: string;
}

interface FooterSection {
  title: string;
  features: FooterLink[];
}

const Footer: React.FC = (): JSX.Element => {
  const classes = usestyles();

  const footer: { sections: FooterSection[] } = {
    sections: [
      {
        title: "Company",
        features: [
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Worksuite", path: "/workSuite/feature" },
          { label: "Contact", path: "/contact" },
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
        ],
      },
    ],
  };

  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterContent}>
        <div className={classes.FirstSection}>
          <div className={classes.SubDiv}>
            <Link to="/">
              <img src={weblingslogo} alt="Weblings Logo" className={classes.weblingslogo} />
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
                  <Link to={feature.path} className={classes.footerLink}>
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
              <SvgPhone />
              <Typography variant="LXS">97895 13198</Typography>
            </li>
            <li className={classes.li}>
              <SvgMail />
              <Typography variant="LXS">pkgowthamit@gmail.com</Typography>
            </li>
            <li className={classes.li}>
              <SvgLocation />
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
