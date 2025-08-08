import React, { useState } from "react";
import { usestyles } from "../comparationTemp/comparisonstyle.tsx";
import Typography from "../typography/component.tsx";
import Button from "../button/button.tsx";
import clsx from "clsx";
import SvgWeblingslogo from "../svg/Weblingslogo.tsx";
import SvgChevronRight from "../svg/ChevronRight.tsx";
import SvgVector from "../svg/Vector.tsx";
import SvgClose from "../svg/Close.tsx";

const Comparison: React.FC<any> = (props): JSX.Element => {
  const classes = usestyles();
  const comparisonData = props.comparisonData || [];
  console.log("comparisondata", comparisonData);

  const [openRow, setOpenRow] = useState(null);

  const toggleRow = (index: any) => {
    setOpenRow(openRow === index ? null : index);
  };

  return (
    <div className={classes.MainComparisontemp}>
      {/* title subtext */}
      <div>
        <Typography variant="TS" className={classes.para}>
          {comparisonData.titleSubtext}
        </Typography>
      </div>

      {/* title subtext */}
      <div>
        <Typography variant="HM" className={classes.title}>
          {comparisonData.title}
        </Typography>
      </div>

      {/* title description */}
      <div className={classes.textDiv}>
        <Typography variant="BL" className={classes.text}>
          {comparisonData.titleDescription}
        </Typography>
      </div>

      {/* Table */}
      <div>
        {/* Tooltip Image */}

        <table className={classes.table}>
          <thead>
            <tr>
              {comparisonData?.tableHead?.map((data: any, idx: number) => (
                <th
                  style={{ verticalAlign: idx === 0 ? "center" : "top" }}
                  className={clsx(classes.th, {
                    [classes.titleheading]: idx === 0,
                    [classes.headingColor]: idx === 1,
                  })}
                >
                  <div className={classes.popupDiv}>
                    {data?.popupImg && (
                      // <img
                      //   src={data?.popupImg}
                      //   alt="Tooltip"
                      //   className={classes.tooltipimg}
                      // />
                      data?.popupImg
                    )}
                  </div>
                  {data.title && (
                    <div>
                      {data.title === "Weblings Worksuite" && (
                        <>
                          {/* <img
                            src={weblingslogo}
                            alt={weblingslogo}
                            className={classes.weblingslogo}
                          /> */}
                          <SvgWeblingslogo/>
                          <Typography
                            variant="TS"
                            className={classes.titleText}
                          >
                            {data.title}
                          </Typography>
                        </>
                      )}
                      {data.title !== "Weblings Worksuite" && (
                        <Typography variant="TS">{data.title}</Typography>
                      )}
                    </div>
                  )}
                  {data?.priceValue?.symbol && (
                    <div className={classes.SpanDiv}>
                      <Typography
                        component={"span"}
                        variant="HM"
                        className={classes.value}
                      >
                        {data?.priceValue?.symbol}
                      </Typography>
                      <Typography
                        component={"span"}
                        variant="HM"
                        className={classes.value}
                      >
                        {data.priceValue?.largeText}
                      </Typography>
                      <br />
                      <Typography
                        component={"span"}
                        variant="TS"
                        className={classes.subtext}
                      >
                        {data.priceValue.smallText}
                      </Typography>
                    </div>
                  )}
                  {data.featureShort?.key && (
                    <div className={classes.featureShort}>
                      <Typography
                        component={"span"}
                        variant="LS"
                        className={classes.subtextColor}
                      >
                        {data.featureShort?.key}
                      </Typography>{" "}
                      <Typography
                        component={"span"}
                        variant="LS"
                        className={classes.subtext}
                      >
                        {data.featureShort?.value}
                      </Typography>
                    </div>
                  )}
                  {data.action?.label && (
                    <div>
                      <Button element="button" outline className={classes.btn}>
                        {data.action.label}
                      </Button>
                    </div>
                  )}
                  {data.actionSubtext && (
                    <Typography variant="LXS" className={classes.actionSubtext}>
                      {data.actionSubtext}
                    </Typography>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(comparisonData?.tableBody).map(
              (data: any, index: number) => {
                const isOpen = openRow === index;
                return (
                  <React.Fragment key={index}>
                    <tr
                      key={index}
                      onClick={() => toggleRow(index)}
                      className={classes.accordionbutton}
                    >
                      <td className={classes.td}>
                        {/* <img
                          src={chevorn_right}
                          alt={chevorn_right}
                          className={`${classes.accordionimg} ${
                            isOpen ? classes.rotate : ""
                          }`}
                        /> */}
                        <SvgChevronRight className={`${classes.accordionimg} ${
                            isOpen ? classes.rotate : ""
                          }`}/>
                        <Typography variant="BL">{data}</Typography>
                      </td>
                      <td
                        className={classes.td}
                        style={{ backgroundColor: "#F7FBFE" }}
                      >
                        {/* <Typography  variant="BS">Second</Typography> */}
                      </td>
                      <td className={classes.td}>
                        {/* <Typography  variant="BS">Third</Typography> */}
                      </td>
                    </tr>

                    {isOpen &&
                      comparisonData?.tableBody[data].map(
                        (dat: any, ind: number) => {
                          return (
                            <tr key={`pr${ind}`}>
                              {dat.map((da: any, idx: number) => {
                                let content;
                                if (da.toString() === "true") {
                                  // content = <img src={vector} alt="True"/>;
                                  content = (
                                    <td
                                      key={idx}
                                      style={{ backgroundColor: "#F7FBFE" }}
                                      className={classes.td}
                                    >
                                      {/* <img src={vector} alt="True" /> */}
                                      <SvgVector/>
                                    </td>
                                  );
                                } else if (da.toString() === "false") {
                                  // content = <img src={close} alt="False"/>;
                                  content = (
                                    <td key={idx} className={classes.td}>
                                      {/* <img src={close} alt="False" /> */}
                                      <SvgClose/>
                                    </td>
                                  );
                                } else {
                                  content = (
                                    <td key={idx} className={classes.td}>
                                      <Typography variant="BL">
                                        {da.toString()}
                                      </Typography>
                                    </td>
                                  );
                                }
                                return content;
                              })}
                            </tr>
                          );
                        }
                      )}
                  </React.Fragment>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
