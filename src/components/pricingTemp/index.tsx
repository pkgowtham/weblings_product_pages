import React from "react";
import { usestyles } from "./pricingstyle.tsx";
import Typography from "../typography/component.tsx";
import Button from "../button/button.tsx";

const PricingTemp: React.FC<any> = (props): JSX.Element => {
  const classes = usestyles();
  const { pricingData } = props;
  console.log("pricing", pricingData);

  return (
    <div className={classes.MainPricing}>
      <div>
        <Typography variant="HM" className={classes.h1}>Find the Perfect Plan for Your Team</Typography>
      </div>
      <div className={classes.table}>
        {pricingData.map((table: any, index: number) => (
          <div key={index} className={classes.TableStyle}>
            <div className={classes.dollar}>
              <div className={classes.title}><Typography variant="TS">{table.price.title}</Typography></div>
              <div> 
                <Typography component={"span"} variant="HM" className={classes.value}>{table?.price?.value?.symbol}</Typography>
                <Typography component={"span"} variant="HM" className={classes.value}>{table?.price?.value?.largeText}</Typography>
                <Typography component={"span"} variant="TS">{table?.price?.value?.smallText}</Typography>
                <div className={classes.subtext}><Typography variant="BM">{table?.price?.value?.subtext}</Typography></div>

                {/* {table.price.value} */}
              </div>
              {index === 0 ? (
                <Button element='button' outline className={classes.btn}>
                {table.price?.action?.label}
              </Button>
              ):<Button element='button' brand className={classes.btn}>
              {table.price?.action?.label}
            </Button>}
              
              <div className={classes.actionSubtext}>
               <Typography variant="LXS">{table.price.actionSubtext}</Typography> 
              </div>
            </div>
            <div>
              <div className={classes.featuretitle}><Typography variant="BL">{table.feature.title}</Typography></div>
              {table?.feature?.features?.map((dat: string, index: number) => {
                return (
                  <div key={index}>
                    <li className={classes.li}><Typography component={"span"} variant="BM">{dat}</Typography></li>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTemp;
