'use client';

import React from "react";
import { usestyles } from "../featureTemp/futurestyle";
import Typography from "../typography/component";
import Button from "../button/button";
import VideoSection from "../videoSection/index";
import { getSrc } from "../../utils/getSrc";
import largeStar from "../../assets/icons/largeStickyStar.svg";
import smallStar from "../../assets/icons/smallStickyStar.svg";

const FeatureTemp: React.FC<any> = (props): React.ReactElement => {
  const classes = usestyles();
  const { jsonData } = props;

  return (
    <>
      <div className={classes.Mainsection}>
        <div className={classes.subtitle}>
          <Typography variant="HM" className={classes.heading}>
            {jsonData.main.subtitle}
          </Typography>
        </div>
        <div className={classes.content}>
          <Typography variant="BL" className={classes.para}>
            {jsonData.main.content}
          </Typography>
        </div>

        <div className={classes.action}>
          {jsonData.main.action.map((action: any, index: number) =>
            index === 0 ? (
              <Button element="button" primary key={`${index}`}>
                {action.label}
              </Button>
            ) : (
              <Button element="button" brand key={`${index}`}>
                {action.label}
              </Button>
            )
          )}
        </div>

        {/* Feature Section */}
        <div className={classes.Mainfeature}>
          {jsonData.features.map((feature: any, index: number) => {
            const isFullWidth = feature.isFullWidth || index === 3;
            const isEven = index % 2 === 0;

            // Render description paragraph lines without bullets
            const renderDescription = () => (
              <div className={classes.listDiv}>
                {Array.isArray(feature.content) ? (
                  feature.content.map((line: any, idx: number) => (
                    <Typography
                      key={idx}
                      component="p"
                      variant="BL"
                      className={classes.paraLine}
                    >
                      {line}
                    </Typography>
                  ))
                ) : (
                  <Typography
                    component="p"
                    variant="BL"
                    className={classes.paraLine}
                  >
                    {feature.content}
                  </Typography>
                )}
              </div>
            );

            // 4th Item: Full-Width Layout (Header title left / description right, framed full image below)
            if (isFullWidth) {
              return (
                <div key={`${index}`} className={classes.fullWidthContainer}>
                  <div className={classes.fullWidthHeaderRow}>
                    <div className={classes.fullWidthLeftCol}>
                      <div className={classes.subtitleDiv}>
                        <Typography variant="TS" className={classes.ptitle}>
                          {feature.subtitle}
                        </Typography>
                        {feature.showSparkle && (
                          <div className={classes.floatingStarsWrapper}>
                            <img
                              src={getSrc(largeStar)}
                              alt="star"
                              className={classes.floatingLargeStar}
                            />
                            <img
                              src={getSrc(smallStar)}
                              alt="star"
                              className={classes.floatingSmallStar}
                            />
                          </div>
                        )}
                      </div>
                      <div className={classes.titleDiv}>
                        <Typography variant="HM" className={classes.htitle}>
                          {feature.title}
                        </Typography>
                      </div>
                    </div>
                    <div className={classes.fullWidthRightCol}>
                      {renderDescription()}
                    </div>
                  </div>

                  <div className={classes.fullWidthFrameCard}>
                    <img
                      src={getSrc(feature.img.src)}
                      alt={feature.img.alt}
                      className={classes.fullWidthImg}
                    />
                  </div>
                </div>
              );
            }

            // Side-by-Side Layouts (Items 1, 2, 3, 5)
            // Uniform JSX: Text content FIRST, Image SECOND for all rows.
            // CSS handles row-reverse on desktop for odd rows, and column (text top, image bottom) on mobile/tab!
            return (
              <div
                key={`${index}`}
                className={`${classes.featureContainer} ${!isEven ? classes.featureContainerOdd : ""
                  }`}
              >
                {/* Text Content Column */}
                <div className={classes.featureleftcontainer}>
                  <div className={classes.subtitleDiv}>
                    <Typography variant="TS" className={classes.ptitle}>
                      {feature.subtitle}
                    </Typography>
                    {feature.showSparkle && (
                      <div className={classes.floatingStarsWrapper}>
                        <img
                          src={getSrc(largeStar)}
                          alt="star"
                          className={classes.floatingLargeStar}
                        />
                        <img
                          src={getSrc(smallStar)}
                          alt="star"
                          className={classes.floatingSmallStar}
                        />
                      </div>
                    )}
                  </div>
                  <div className={classes.titleDiv}>
                    <Typography variant="HM" className={classes.htitle}>
                      {feature.title}
                    </Typography>
                  </div>
                  {renderDescription()}
                  {feature.action && feature.action.length > 0 && (
                    <div className={classes.button}>
                      {feature.action.map((act: any, idx: number) => (
                        <div key={idx}>
                          <Typography variant="TS">{act.label}</Typography>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Image Container Column */}
                <div className={classes.imgDiv}>
                  <img
                    src={getSrc(feature.img.src)}
                    alt={feature.img.alt}
                    className={classes.featureimg}
                  />
                  {feature.abstractImg && (
                    <div
                      className={
                        isEven ? classes.abstractDiv : classes.abstractDiv2
                      }
                    >
                      {feature.abstractImg.src}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* Feature Section End */}

        {/* Reusable Video Demo Section */}
      </div>
      <VideoSection demoData={jsonData.demo} />
    </>
  );
};

export default FeatureTemp;
