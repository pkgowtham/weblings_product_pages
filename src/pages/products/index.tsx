import React from 'react'
import Typography from '../../components/typography/component.tsx'
import { usestyles } from './style.ts'
import Button from '../../components/button/button.tsx';
import SvgUserlogo from '../../components/svg/Userlogo.tsx';
import SvgChevronRight from '../../components/svg/ChevronRight.tsx';
import clsx from 'clsx';
import SvgFrame from '../../components/svg/Frame.tsx';
import SvgStar from '../../components/svg/Star.tsx';
import SvgPuzzle from '../../components/svg/Puzzle.tsx';
import SvgShieldCheck from '../../components/svg/ShieldCheck.tsx';
import SvgBoxes from '../../components/svg/Boxes.tsx';
import SvgPackage from '../../components/svg/Package.tsx';
import SvgVectorLeft from '../../components/svg/VectorLeft.tsx';
import SvgVectorRight from '../../components/svg/VectorRight.tsx';
import SvgFeature1 from '../../components/svg/Feature1.tsx';
import SvgFeature2 from '../../components/svg/Feature2.tsx';
import SvgFeature3 from '../../components/svg/Feature3.tsx';
import SvgFeature4 from '../../components/svg/Feature4.tsx';
import SvgNewsletter from '../../components/svg/Newsletter.tsx';
import { useNavigate } from 'react-router-dom';

const data = {
    headSection: {
      titleSubtext: "",
      title: "Your life's Work,Powered By Our life's Work",
      titleDescription:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
      action: {
        label: "Get Started",
        link: "/",
      },
    },
    banner: [
      {
        titleSmallSubtext: "Weblings",
        titleSubtext: "Workspace",
        suiteText: "Suite",
        title: "“Get your work done, at one place”",
        titleDescription:
          "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        action: {
          label: "Learn More",
          link: "/",
        },
        bg: "./import",
      },
    ],
    bannerFeatures: [],
    features: {
      title: "Why our Product ?",
      description:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per ",
      featureBox: [
        {
          titleSubtext: "Seamless Integration",
          titleSmallSubText:
            "Effortlessly sync your chat messages with your project management platform for smooth collaboration.",
          icon: <SvgPuzzle/>,
        },
        {
          titleSubtext: "Single Sign-On (SSO)",
          titleSmallSubText:
            "No need for third-party integration—we provide a one-stop authentication solution.",
          icon: <SvgShieldCheck/>,
        },
        {
          titleSubtext: "Centralized Data",
          titleSmallSubText:
            "Keep all your data in one place with no unnecessary scattering across platforms.",
          icon: <SvgBoxes/>,
        },
        {
          titleSubtext: "All-in-One Pricing",
          titleSmallSubText:
            "Enjoy every feature and service at a single, affordable price—no more juggling multiple plans.",
          icon: <SvgPackage/>,
        },
      ],
    },
    values: {
      title: "Our Principle",
      description:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per ",
      action: {
        label: "Know More",
        link: "/",
      },
      Card: [
        {
          img: <SvgFeature1/>,
          subTitle: "No Ads",
          titleDescription:
            "We respect your privacy. No ads, ever, your data will never be sold for third Parties",
        },
        {
          img: <SvgFeature2/>,
          subTitle: "No Residual Data",
          titleDescription:
            "If you decide to leave, your data leaves with you. We guarantee 100% data deletion.",
        },
        {
          img: <SvgFeature3/>,
          subTitle: "Trustworthy & Secure",
          titleDescription:
            "We stand by our commitments. Your datas security is always our top priorities.",
        },
        {
          img: <SvgFeature4/>,
          subTitle: "No Hidden Fees",
          titleDescription:
            "What you see is what you get. We promise clear, upfront pricing with no surprises.",
        },
      ],
    },
    subscribe: {
      title: "Stay Updated ",
      description:
        "Get Exclusive Offers & Product Updates Delivered to Your Inbox.No spam. Just offers and updates.",
      action: {
        label: "Subscribe",
        path: "/",
      },
    },
    footer: {},
  };

const Products = () => {

const navigate = useNavigate()
const classes = usestyles()

  return (
    <div>
              {/* HeaderSection */}
      <div className={classes.HeaderSection}>
        <div className={classes.headTitle}>
          <Typography variant="HM">{data.headSection.title}</Typography>
        </div>
        <div className={classes.headTitleDescription}>
          <Typography variant="BM">
            {data.headSection.titleDescription}
          </Typography>
        </div>
        <div>
          <Button element="button" brand className={classes.headbutton} rightIcon={<SvgChevronRight className={classes.rightIcon}/>}>
          {data.headSection.action.label}
          </Button>
        </div>
      </div>
      {/* HeaderSection End */}
      {/* BannerSection */}
      <div className={classes.BannerSection}>
        {data.banner.map((item: any, index: number) => (
          <>
            <div className={classes.BannerHeadSectionDiv}>
              <div key={index} className={classes.BannerHeadSection}>
                <div>
                  <SvgUserlogo/>
                </div>
                <div>
                  <Typography variant="LXS">
                    {item.titleSmallSubtext}
                  </Typography>
                  <Typography variant="TM">{item.titleSubtext}</Typography>
                </div>
                <div className={classes.suite}>
                  <Typography variant="LS">{item.suiteText}</Typography>
                </div>
              </div>
              <div className={classes.BannerTitleSection}>
                <div>
                  <Typography variant="HS">{item.title}</Typography>
                </div>
                <div className={classes.BannerTitleDescription}>
                  <Typography variant="BM">{item.titleDescription}</Typography>
                </div>
                <div>
                  <Button
                    element="button"
                    brand
                    className={classes.BannerButton}
                    rightIcon={<SvgChevronRight/>}
                  >
                    <div className={classes.BannerLabel}>
                        {item.action.label}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className={classes.SideImageContainer}>
              <img src={item.sideImage} alt="" className={classes.SideImage} />
            </div>
          </>
        ))}
      </div>
      {/* BannerSection end */}
      {/* Banner Features */}
      <div></div>
      {/* Banner Features end */}
      {/*  Features */}
      <div className={classes.FeatureContainer}>
        <div className={classes.FeatureDiv}>
          <></>
          <div className={classes.FeatureHeading}>
            <Typography variant="HM">{data.features.title}</Typography>
            <Typography variant="BM">{data.features.description}</Typography>
          </div>
          <div className={classes.FeaturesFlex}>
            {data.features.featureBox.map((feature: any, index: number) => (
              <div
                key={index}
                className={clsx(classes.FeaturesBlue, {
                  [classes.purple]: index === 1,
                  [classes.red]: index === 2,
                  [classes.green]: index === 3,
                })}
              >
                {index === 0 && (
                //   <img
                //     src={data.features.Leftimg}
                //     className={classes.LeftImg}
                //     alt=""
                //   />
                <div className={classes.LeftImg}>
                    <SvgStar/>
                </div>
                )}
                {index === 3 && (
                //   <img
                //     src={data.features.Rightimg}
                //     className={classes.RightImg}
                //     alt=""
                //   />
                <div className={classes.RightImg}>
                    <SvgFrame/>
                </div>
                )}
                {/* <img
                  src={feature.icon}
                  alt=""
                  className={classes.FeatureIcon}
                /> */}
                <div className={classes.FeatureIcon}>
                {feature.icon}
                </div>
                <Typography
                  variant="TS"
                  className={clsx(classes.titleSubtext, {
                    [classes.purpleText]: index === 1,
                    [classes.redText]: index === 2,
                    [classes.greenText]: index === 3,
                  })}
                >
                  {feature.titleSubtext}
                </Typography>
                <Typography variant="BS">
                  {feature.titleSmallSubText}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  Features end */}
      {/* values */}
      <div className={classes.ValuesContainer}>
        <div className={classes.HeadSection}>
          <Typography variant="HM">{data.values.title}</Typography>
          <div className={classes.StarLogo}>
            <SvgVectorLeft/>
          </div>
          <div className={classes.StarLogo2}>
            <SvgVectorRight/>
          </div>
        </div>
        <div className={classes.ValuesDescription}>
          <Typography variant="BM">{data.values.description}</Typography>
        </div>
        <div className={classes.CardContainer}>
          {data.values.Card.map((values: any, index: number) => (
            <div key={index} className={classes.Card}>
              <div
                className={clsx(classes.ValuesImgContainer, {
                  [classes.valueBlue]: index === 1,
                  [classes.valuePurple]: index === 2,
                  [classes.valueGreen]: index === 3,
                })}
              >
                {/* <img src={values.img} alt="" /> */}
                {values.img}
              </div>
              <div className={classes.ValuesTitle}>
                <Typography
                  variant="LM"
                  className={clsx(classes.valuesSubTitle, {
                    [classes.valueBluetitle]: index === 1,
                    [classes.valuePurpletitle]: index === 2,
                    [classes.valueGreentitle]: index === 3,
                  })}
                >
                  {values.subTitle}
                </Typography>
                <Typography variant=":'LM">
                  {values.titleDescription}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Button
            element="button"
            onClick={() => navigate("/about")}
            className={classes.button}
            rightIcon={<SvgChevronRight/>}
          >
                {data.values.action.label}
          </Button>
        </div>
      </div>
      {/* values end */}
      {/* scbcribe */}
      <div className={classes.MainSubscribe}>
        <div className={classes.SubscribeDiv}>
          <div className={classes.Subscribe}>
            <div className={classes.NewsLetterImg}>
             <SvgNewsletter/>
            </div>
            <Typography variant="HS">{data.subscribe.title}</Typography>
            <div className={classes.Description}>
              {data.subscribe.description}
            </div>
          </div>
          <div className={classes.InputDiv}>
            <input
              className={classes.InputText}
              placeholder="Enter Your Email"
              type="text"
              value=""
            />
            <Button element="button" brand>
              {data.subscribe.action.label}
            </Button>
          </div>
        </div>
      </div>
      {/* subscribe end */}
    </div>
  )
}

export default Products