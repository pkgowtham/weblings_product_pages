import React from "react";
import { usestyles } from "../featureTemp/futurestyle.tsx";
import Typography from "../typography/component.tsx";
import Button from "../button/button.tsx";

const FeatureTemp: React.FC<any> = (props): JSX.Element => {
  const classes = usestyles();
  const { jsonData } = props;
  console.log('jsonData', jsonData)
  return (
    <div className={classes.Mainsection}>
      <div className={classes.subtitle}>
        <Typography variant="HM" className={classes.heading}>{jsonData.main.subtitle}</Typography>
      </div>
      <div className={classes.content}>
        <Typography variant="BL" className={classes.para}>{jsonData.main.content}</Typography>
      </div>

      <div className={classes.action}>
        {jsonData.main.action.map((action: any, index: number) => (
          index === 0 ? (
          <Button element='button' primary key={`${index}`} >
            {action.label}
          </Button>
          ) : 
          (
            <Button element='button' brand key={`${index}`} >
            {action.label}
          </Button>
          )
        )
        )}
      </div>
      <div className={classes.img}>
        {jsonData.main.img.map((img: any, index: number) => (
          <img
            key={`${index}`}
            src={img.src}
            alt={img.alt}
            className={classes.imgstyle}
          />
        ))}
      </div>
      {/* Feature Section */}
      <div className={classes.Mainfeature}>
        {jsonData.features.map((feature: any, index: number) => {
          console.log('feature', feature)
          return index % 2 == 0 ? (
            <div key={`${index}`} className={classes.featureContainer}>
              <div className={classes.featureleftcontainer}>
                <div className={classes.subtitleDiv}>
                  <Typography variant="TS" className={classes.ptitle}>{feature.subtitle}</Typography>
                </div>
                <div className={classes.titleDiv}>
                  <Typography variant="HM" className={classes.htitle}>{feature.title}</Typography>
                </div>
                <div className={classes.listDiv}>
                  <ul className={classes.ulline}>
                    {feature.content.map((line: any, idx: Number) => (
                      <li key={`${index}`}><Typography component={"span"} variant="BL">{line}</Typography></li>
                    ))}
                  </ul>
                </div>
                <div className={classes.button}>
                  {feature.action.map((act: any) => (
                    <Typography variant="TS">{act.label}</Typography>
                  ))}
                </div>
              </div>
              <div className={classes.imgDiv}>
                <img
                  src={feature.img.src}
                  alt={feature.img.alt}
                  className={classes.featureimg}
                />
                <div className={classes.abstractDiv}>
                  {/* <img
                    src={feature.abstractImg.src}
                    alt={feature.abstractImg.alt}
                    className={classes.abstractimg}
                  /> */}
                  {feature.abstractImg.src}
                </div>
              </div>
            </div>
          ) : (
            <div key={`${index}`} className={classes.featureContainer}>
              <div className={classes.imgDiv}>
                <img
                  src={feature.img.src}
                  alt={feature.img.alt}
                  className={classes.featureimg}
                />
                <div className={classes.abstractDiv2}>
                  {/* <img
                    src={feature.abstractImg.src}
                    alt={feature.abstractImg.alt}
                    className={classes.abstractimg}
                  /> */}
                  {feature.abstractImg.src}
                </div>
              </div>
              <div>
                <div className={classes.subtitleDiv}>
                  <Typography variant="TS" className={classes.ptitle}>{feature.subtitle}</Typography>
                </div>
                <div className={classes.titleDiv}>
                  <Typography variant="HM" className={classes.htitle}>{feature.title}</Typography>
                </div>
                <div className={classes.listDiv}>
                  <ul className={classes.ulline}>
                    {feature.content.map((line: any, idx: Number) => (
                      <li key={`${index}`}><Typography component={"span"} variant="BL">{line}</Typography></li>
                    ))}
                  </ul>
                </div>
                <div className={classes.button}>
                  {feature.action.map((act: any) => (
                    <div><Typography variant="TS">{act.label}</Typography></div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Feature Section End */}
    </div>
  );
};

export default FeatureTemp;
