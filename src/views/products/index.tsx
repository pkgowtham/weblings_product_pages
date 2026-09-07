'use client';

import React from "react";
import Typography from "../../components/typography/component";
import { usestyles } from "./style";
import Button from "../../components/button/button";
import SvgUserlogo from "../../components/svg/Userlogo";
import SvgChevronRight from "../../components/svg/ChevronRight";
import clsx from "clsx";
import SvgFrame from "../../components/svg/Frame";
import SvgStar from "../../components/svg/Star";
import SvgPuzzle from "../../components/svg/Puzzle";
import SvgShieldCheck from "../../components/svg/ShieldCheck";
import SvgBoxes from "../../components/svg/Boxes";
import SvgPackage from "../../components/svg/Package";
import SvgVectorLeft from "../../components/svg/VectorLeft";
import SvgVectorRight from "../../components/svg/VectorRight";
import SvgFeature1 from "../../components/svg/Feature1";
import SvgFeature2 from "../../components/svg/Feature2";
import SvgFeature3 from "../../components/svg/Feature3";
import SvgFeature4 from "../../components/svg/Feature4";
import SvgNewsletter from "../../components/svg/Newsletter";
import dashboardPreview from "../../assets/images/dashboard_preview.png";
import sideImage from "../../assets/images/sideimg.svg";
import { getSrc } from "../../utils/getSrc";
import { useRouter } from "next/navigation";
import StickyScrollSection from "../../components/stickyScrollSection/index";
import SvgNewHero from "../../custom-icons/NewHero";
import StorageGraphic from "../../components/svg/StorageGraphic";
import {
  SvgBrain,
  SvgMic,
  SvgBolt,
  SvgClipboardCheck,
  SvgCodeSearch,
  SvgBellAlert,
  SvgSmartphone,
  SvgTrendingUp,
  SvgCheckCircle,
  SvgMessageSquare,
  SvgHandshake,
  SvgCloud,
  SvgShieldLock,
  SvgDoorOpen,
  SvgGlobe,
  SvgBuilding,
  SvgLock,
  SvgBarChart,
} from "../../components/svg/CustomIcons";

// Import static data from JSON
import data from "../../data/home.json";

// Icon mappings for data items referenced by ID in home.json
const featureIcons: Record<string, React.ReactNode> = {
  globe: <SvgGlobe />,
  building: <SvgBuilding />,
  lock: <SvgLock />,
  barChart: <SvgBarChart />,
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

const aiIcons: Record<string, React.ReactNode> = {
  brain: <SvgBrain width={22} height={22} />,
  mic: <SvgMic width={22} height={22} />,
  bolt: <SvgBolt width={22} height={22} />,
  clipboardCheck: <SvgClipboardCheck width={22} height={22} />,
  codeSearch: <SvgCodeSearch width={22} height={22} />,
  bellAlert: <SvgBellAlert width={22} height={22} />,
};

const mobileAppIcons: Record<string, React.ReactNode> = {
  smartphone: <SvgSmartphone width={28} height={28} />,
  trendingUp: <SvgTrendingUp width={28} height={28} />,
};

const migrationIconMap: Record<string, React.ReactNode> = {
  checkCircle: <SvgCheckCircle width={18} height={18} />,
  messageSquare: <SvgMessageSquare width={18} height={18} />,
  handshake: <SvgHandshake width={18} height={18} />,
  cloud: <SvgCloud width={18} height={18} />,
  shieldLock: <SvgShieldLock width={18} height={18} />,
  doorOpen: <SvgDoorOpen width={18} height={18} />,
};

const Products = () => {
  const router = useRouter();
  const classes = usestyles();

  return (
    <div>
      {/* HeaderSection */}
      <div className={classes.mainSecCon}>
        <div className={classes.HeaderSection}>
          <div className={classes.heroBadge}>
            <span className={classes.pulseDot}></span>
            {data.headSection.badge}
          </div>
          <h1 className={classes.headTitle}>
            {data.headSection.titlePart1}
            <span className={classes.titleHighlight}>
              {data.headSection.titleHighlight}
            </span>
          </h1>
          <div className={classes.headTitleDescription}>
            <Typography variant="BM">
              {data.headSection.titleDescription}
            </Typography>
          </div>
          <div className={classes.heroBtnContainer}>
            <div className={classes.heroButtons}>
              <Button
                element="button"
                brand
                className={classes.heroPrimaryBtn}
                rightIcon={<SvgChevronRight className={classes.rightIcon} />}
                onClick={() => router.push(data.headSection.action.link || "/")}
              >
                {data.headSection.action.label}
              </Button>
              <button
                className={classes.heroSecondaryBtn}
                onClick={() => router.push(data.headSection.secondaryAction?.link || "/")}
              >
                {data.headSection.secondaryAction?.label || "Watch Demo"}
              </button>
            </div>
            <span className={classes.heroSubtext}>
              {data.headSection.action.subtext}
            </span>
          </div>
        </div>
        <div className={classes.heroSvgContainer}>
          <SvgNewHero />
        </div>
      </div>

      {/* Tool Ticker Section */}
      <div className={classes.tickerSection}>
        <div className={classes.tickerInner}>
          <div className={classes.tickerTitle}>{data.ticker.title}</div>
          <div className={classes.tickerTools}>
            {data.ticker.tools.map((tool: string, index: number) => (
              <span key={index} className={classes.tickerItem}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Preview Mockup Section */}
      <div className={classes.dashboardMockupContainer}>
        <div className={classes.dashboardMockupWrapper}>
          <img
            src={getSrc(dashboardPreview)}
            alt="Weblings Workspace Dashboard"
            className={classes.dashboardMockupImg}
          />
        </div>
      </div>
      {/* Dashboard Preview Mockup Section end */}

      {/* Sticky sections */}
      {/* <StickyScrollSection /> */}

      {/* AI Dual-Engine Section */}
      <div className={classes.aiSection}>
        <div className={classes.aiHeader}>
          <div className={classes.aiBadge}>
            <span className={classes.aiBadgeDotPurple}></span>
            <span className={classes.aiBadgeDotCyan}></span>
            {data.aiEngine.badge}
          </div>
          <h2 className={classes.aiTitle}>{data.aiEngine.title}</h2>
          <p className={classes.aiDesc}>{data.aiEngine.description}</p>
        </div>

        {/* Scope Defense (The Client Meeting Flow) */}
        <div className={classes.aiFlowBlock}>
          <div className={clsx(classes.aiFlowHeader, classes.purpleFlowText)}>
            <span className={classes.flowBadgePurple}>
              {data.aiEngine.scopeDefense.badge}
            </span>
            <span>{data.aiEngine.scopeDefense.title}</span>
          </div>
          <div className={classes.aiGrid}>
            {data.aiEngine.scopeDefense.steps.map((step: any, index: number) => (
              <div key={index} className={classes.aiCardPurple}>
                <div className={clsx(classes.aiCardIcon, classes.aiCardIconPurple)}>
                  {aiIcons[step.id] || step.icon}
                </div>
                <h4 className={classes.aiCardTitle}>{step.title}</h4>
                <p className={classes.aiCardDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code Adherence (The Developer Code Flow) */}
        <div className={classes.aiFlowBlock}>
          <div className={clsx(classes.aiFlowHeader, classes.cyanFlowText)}>
            <span className={classes.flowBadgeCyan}>
              {data.aiEngine.codeAdherence.badge}
            </span>
            <span>{data.aiEngine.codeAdherence.title}</span>
          </div>
          <div className={classes.aiGrid}>
            {data.aiEngine.codeAdherence.steps.map((step: any, index: number) => (
              <div key={index} className={classes.aiCardCyan}>
                <div className={clsx(classes.aiCardIcon, classes.aiCardIconCyan)}>
                  {aiIcons[step.id] || step.icon}
                </div>
                <h4 className={classes.aiCardTitle}>{step.title}</h4>
                <p className={classes.aiCardDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automations Section */}
      <div className={classes.automationsSection}>
        <div className={classes.autoHeader}>
          <h2 className={classes.autoTitle}>{data.automations.title}</h2>
          <p className={classes.autoSubtitle}>{data.automations.subtitle}</p>
        </div>
        <div className={classes.autoList}>
          {data.automations.items.map((item: any, index: number) => (
            <div key={index} className={classes.autoCard}>
              <div className={classes.autoNum}>{item.num}</div>
              <div className={classes.autoCardContent}>
                <h3 className={classes.autoCardTitle}>{item.title}</h3>
                <p className={classes.autoCardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Apps Section */}
      <div className={classes.mobileSection}>
        <div className={classes.mobileInner}>
          <div className={classes.mobileHeader}>
            <h2 className={classes.mobileTitle}>{data.mobileApps.title}</h2>
            <p className={classes.mobileDesc}>{data.mobileApps.description}</p>
          </div>
          <div className={classes.mobileGrid}>
            {data.mobileApps.cards.map((card: any, index: number) => (
              <div key={index} className={classes.mobileCard}>
                <div className={classes.mobileIcon}>
                  {mobileAppIcons[card.id] || card.icon}
                </div>
                <div className={classes.mobileTarget}>{card.target}</div>
                <h3 className={classes.mobileCardTitle}>{card.title}</h3>
                <p className={classes.mobileCardDesc}>{card.description}</p>
                <div className={classes.mobileBadges}>
                  {card.badges.map((badge: string, bIndex: number) => (
                    <span key={bIndex} className={classes.mobileBadge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Control Section */}
      {/* <div className={classes.founderSection}>
        <div className={classes.founderHeader}>
          <h2 className={classes.founderTitle}>{data.founderControl.title}</h2>
          <p className={classes.founderDesc}>{data.founderControl.description}</p>
        </div>
        <div className={classes.founderGrid}>
          {data.founderControl.features.map((feature: any, index: number) => (
            <div key={index} className={classes.founderItem}>
              <div className={classes.founderIcon}>{feature.icon}</div>
              <div>
                <h3 className={classes.founderItemTitle}>{feature.title}</h3>
                <p className={classes.founderItemDesc}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Features */}
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
      {/* Features end */}

      {/* Hesitation & Migration Section */}
      <div className={classes.migrationSection}>
        <div className={classes.migrationHeader}>
          <h2 className={classes.migrationTitle}>{data.migration.title}</h2>
          <p className={classes.migrationDesc}>{data.migration.description}</p>
        </div>
        <div className={classes.migrationGrid}>
          {data.migration.points.map((point: any, index: number) => (
            <div key={index} className={classes.migrationCard}>
              <h4 className={classes.migrationCardTitle}>
                <span
                  className={clsx(classes.migrationIconWrapper, {
                    [classes.greenIcon]: point.iconColor === "green",
                    [classes.blueIcon]: point.iconColor === "blue",
                    [classes.yellowIcon]: point.iconColor === "yellow",
                    [classes.orangeIcon]: point.iconColor === "orange",
                    [classes.purpleIcon]: point.iconColor === "purple",
                    [classes.pinkIcon]: point.iconColor === "pink",
                  })}
                >
                  {migrationIconMap[point.id] || point.icon}
                </span>
                <span>{point.title}</span>
              </h4>
              <p className={classes.migrationCardDesc}>{point.description}</p>
            </div>
          ))}
        </div>
        <div className={classes.migrationCTA}>
          <button
            className={classes.migrationBtn}
            onClick={() => router.push(data.migration.action.link || "/")}
          >
            {data.migration.action.label}
          </button>
          <span className={classes.migrationSubtext}>
            {data.migration.action.subtext}
          </span>
        </div>
      </div>


      {/* Values */}
      {/* <div className={classes.ValuesContainer}>
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
            primary
            onClick={() => router.push("/about")}
            className={classes.button}
            rightIcon={<SvgChevronRight />}
          >
            {data.values.action.label}
          </Button>
        </div>
      </div> */}
      {/* Values end */}

      {/* Storage start */}
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
      {/* Storage end */}

      {/* Subscribe */}
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
      {/* Subscribe end */}
    </div>
  );
};

export default Products;
