import React from "react";
import Typography from "../../components/typography/component.tsx";
import { usestyles } from "./style.ts";
import Button from "../../components/button/button.tsx";
import SvgUserlogo from "../../components/svg/Userlogo.tsx";
import SvgChevronRight from "../../components/svg/ChevronRight.tsx";
import clsx from "clsx";
import SvgFrame from "../../components/svg/Frame.tsx";
import SvgStar from "../../components/svg/Star.tsx";
import SvgPuzzle from "../../components/svg/Puzzle.tsx";
import SvgShieldCheck from "../../components/svg/ShieldCheck.tsx";
import SvgBoxes from "../../components/svg/Boxes.tsx";
import SvgPackage from "../../components/svg/Package.tsx";
import SvgVectorLeft from "../../components/svg/VectorLeft.tsx";
import SvgVectorRight from "../../components/svg/VectorRight.tsx";
import SvgFeature1 from "../../components/svg/Feature1.tsx";
import SvgFeature2 from "../../components/svg/Feature2.tsx";
import SvgFeature3 from "../../components/svg/Feature3.tsx";
import SvgFeature4 from "../../components/svg/Feature4.tsx";
import SvgNewsletter from "../../components/svg/Newsletter.tsx";
import sideImage from "../../assets/images/sideimg.svg";
import { useNavigate } from "react-router-dom";
import StickyScrollSection from "../../components/stickyScrollSection/index.tsx";
import SvgNewHero from "../../custom-icons/NewHero.tsx";
import StorageGraphic from "../../components/svg/StorageGraphic.tsx";

// Import static data from JSON
import data from "../../data/home.json";

// Icon mappings for data items referenced by ID in home.json
const featureIcons: Record<string, React.ReactNode> = {
  puzzle: <SvgPuzzle />,
  shieldCheck: <SvgShieldCheck />,
  boxes: <SvgBoxes />,
  package: <SvgPackage />,
};

const valueIcons: Record<string, React.ReactNode> = {
  feature1: <SvgFeature1 />,
  feature2: <SvgFeature2 />,
  feature3: <SvgFeature3 />,
  feature4: <SvgFeature4 />,
};

const Products = () => {
  const navigate = useNavigate();
  const classes = usestyles();

  return (
    <div>
      {/* HeaderSection */}
      <div className={classes.mainSecCon}>
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
            <Button element="button" brand className={classes.headbutton} rightIcon={<SvgChevronRight className={classes.rightIcon} />}>
              {data.headSection.action.label}
            </Button>
          </div>
        </div>
        <div className={classes.heroSvgContainer}>
          <SvgNewHero />
        </div>
      </div>

      {/* BannerSection */}
      <div className={classes.BannerSection}>
        {data.banner.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <div className={classes.BannerHeadSectionDiv}>
              <div className={classes.BannerHeadSection}>
                <div>
                  <SvgUserlogo />
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
                    rightIcon={<SvgChevronRight />}
                  >
                    <div className={classes.BannerLabel}>
                      {item.action.label}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className={classes.SideImageContainer}>
              <img src={sideImage} alt="" className={classes.SideImage} />
            </div>
          </React.Fragment>
        ))}
      </div>
      {/* BannerSection end */}

      {/* Sticky sections */}
      <StickyScrollSection />

      {/*  Features */}
      <div className={classes.FeatureContainer}>
        <div className={classes.FeatureDiv}>
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
                  <div className={classes.LeftImg}>
                    <SvgStar />
                  </div>
                )}
                {index === 3 && (
                  <div className={classes.RightImg}>
                    <SvgFrame />
                  </div>
                )}

                <div className={classes.FeatureIcon}>
                  {featureIcons[feature.id] || feature.icon}
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
            <SvgVectorLeft />
          </div>
          <div className={classes.StarLogo2}>
            <SvgVectorRight />
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
                {valueIcons[values.id] || values.img}
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
                <Typography variant="LM">
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
            rightIcon={<SvgChevronRight />}
          >
            {data.values.action.label}
          </Button>
        </div>
      </div>
      {/* values end */}

      {/* storage start */}
      <div className={classes.StorageContainer}>
        <div className={classes.StorageWrapper}>
          <div className={classes.StorageContentLeft}>
            <Typography variant="TS" className={classes.StorageCategory}>
              {data.storage.category}
            </Typography>
            <Typography variant="HM" className={classes.StorageTitle}>
              {data.storage.title}
            </Typography>
            <Typography variant="BL" className={classes.StorageDescription}>
              {data.storage.description}
            </Typography>
          </div>
          <div className={classes.StorageGraphicRight}>
            <StorageGraphic />
          </div>
        </div>
      </div>
      {/* storage end */}

      {/* subscribe */}
      <div className={classes.MainSubscribe}>
        <div className={classes.SubscribeDiv}>
          <div className={classes.Subscribe}>
            <div className={classes.NewsLetterImg}>
              <SvgNewsletter />
            </div>
            <Typography variant="HS">{data.subscribe.title}</Typography>
            <div className={classes.Description}>
              {data.subscribe.description}
            </div>
          </div>
          <div className={classes.InputDiv}>
            <input
              className={classes.InputText}
              placeholder={data.subscribe.inputPlaceholder}
              type="text"
              defaultValue=""
            />
            <Button element="button" brand>
              {data.subscribe.action.label}
            </Button>
          </div>
        </div>
      </div>
      {/* subscribe end */}
    </div>
  );
};

export default Products;
