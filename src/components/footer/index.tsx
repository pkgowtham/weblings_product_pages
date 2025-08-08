import React from "react";
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
import SvgWeblingslogo from "../svg/Weblingslogo.tsx";

const Footer: React.FC = (): JSX.Element => {
  const classes = usestyles();
  const footer = {
    sections: [
      {
        title: 'Product',
        features: [
          "Mail",
          "Chat",
          "Calendar",
          "Streamline",
          "eOffice"
        ]
      },
      {
        title: 'Company',
        features: [
          "About",
          "Chat",
          "Calender",
          "StreamLine",
          "eOffice"
        ]
      },
      {
        title: 'Product',
        features: [
          "Mail",
          "Chat",
          "Calendar",
          "Streamline",
          "eOffice"
        ]
      }
    ]
  };
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterContent}>
        <div className={classes.FirstSection}>
          <div className={classes.SubDiv}>
          {/* <img src={weblingslogo} alt="" className={classes.weblingslogo} /> */}
          <SvgWeblingslogo/>
          <div>
            <span className={classes.Title}>Weblings</span>

          </div>
          </div>
          <div className={classes.Para}>
            <Typography variant="LXS">Simple and Affordable</Typography>
          </div>
          <div className={classes.Icons}>
            {/* <img src={twitter} alt={twitter} /> */}
            <SvgTwitter/>
            {/* <img src={linkedin} alt={linkedin} /> */}
            <SvgLinkedin/>
            {/* <img src={youtube} alt={youtube} /> */}
            <SvgYoutube/>
            {/* <img src={facebook} alt={facebook} /> */}
            <SvgFacebook/>
            {/* <img src={insta} alt={insta} /> */}
            <SvgInsta/>
          </div>
        </div>

        {footer.sections.map((section, index) => (
          <div className={classes.SecondSection} key={index}>
            <div>
              <Typography variant="LS" className={classes.SectionTitleColor}>{section.title}</Typography>
            </div>
            <ul className={classes.ulist}>
              {section.features.map((feature, featureIndex) => (
                <li className={classes.list} key={featureIndex}><Typography variant="LXS">{feature}</Typography></li>
              ))}
            </ul>
          </div>
        ))}
        
        <div className={classes.ThirdSection}>
          <div>
            <Typography className={classes.SectionTitleColor} variant="LS">Contact</Typography>
          </div>
          <ul className={classes.ul}>
            <li className={classes.li}>
              {/* <img src={phone} alt="phone" className={classes.LogoStyle}/> */}
              <SvgPhone/>
              <Typography variant="LXS">97895 13198</Typography>
              </li>
            <li className={classes.li}>
            {/* <img src={mail} alt="mail" className={classes.LogoStyle}/> */}
            <SvgMail/>
             <Typography variant="LXS">pkgowthamit@gmail.com</Typography> 
              </li>
            <li className={classes.li}>
            {/* <img src={location} alt="location" className={classes.LogoStyle}/> */}
            <SvgLocation/>
            <Typography variant="LXS">Weblings No:8, K.M Nagar,3rd Street, Velliyankadu, Tirupur,
            Tamilnadu, 641604. India</Typography>
              
            </li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
