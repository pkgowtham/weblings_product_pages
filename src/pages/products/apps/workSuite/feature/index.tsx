import React from 'react';
import FeatureTemp from '../../../../../components/featureTemp/index.tsx';
import ComparisonTemp from '../../../../../components/comparationTemp/index.tsx';
import worksuiteDataJson from '../../../../../data/worksuite.json';
import SvgAbstract from '../../../../../components/svg/Abstract.tsx';

// Import 4 images from src/assets/images/worksuite/
import streamlineImg from '../../../../../assets/images/worksuite/streamline.svg';
import eofficeImg from '../../../../../assets/images/worksuite/eoffice.svg';
import calendarImg from '../../../../../assets/images/worksuite/calendar.svg';
import chatImg from '../../../../../assets/images/worksuite/chat.svg';

const imageMap: Record<string, string> = {
  streamline: streamlineImg,
  eoffice: eofficeImg,
  calendar: calendarImg,
  chat: chatImg,
};

const WorkSuiteFeature = () => {
  const featureData = {
    main: {
      subtitle: worksuiteDataJson.feature.main.subtitle,
      title: worksuiteDataJson.feature.main.title,
      content: worksuiteDataJson.feature.main.content,
      action: worksuiteDataJson.feature.main.action,
      img: [
        {
          alt: "Worksuite Workspace",
          src: streamlineImg,
          path: "",
        },
      ],
    },
    features: worksuiteDataJson.feature.features.map((item: any) => ({
      subtitle: item.subtitle,
      title: item.title,
      content: item.content,
      showSparkle: item.showSparkle,
      isFullWidth: item.imagePosition === "fullWidth",
      action: [
        {
          label: item.actionText || "",
          path: "",
          color: "Secondary",
        },
      ],
      img: {
        alt: item.imageAlt || item.title,
        src: imageMap[item.imageKey] || streamlineImg,
        path: "",
      },
      abstractImg: {
        alt: "background shape",
        src: <SvgAbstract />,
        path: "",
      },
    })),
  };

  return (
    <div>
      <FeatureTemp jsonData={featureData} />
      <ComparisonTemp comparisonData={worksuiteDataJson.comparison} />
    </div>
  );
};

export default WorkSuiteFeature;