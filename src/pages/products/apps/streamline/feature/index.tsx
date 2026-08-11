import React from 'react';
import FeatureTemp from '../../../../../components/featureTemp/index.tsx';
import ComparisonTemp from '../../../../../components/comparationTemp/index.tsx';
import streamlineDataJson from '../../../../../data/streamline.json';
import SvgAbstract from '../../../../../components/svg/Abstract.tsx';

import projectImg from '../../../../../assets/images/streamline/project.svg';
import timelineImg from '../../../../../assets/images/streamline/timeline.svg';
import backlogsImg from '../../../../../assets/images/streamline/backlogs.svg';
import membersImg from '../../../../../assets/images/streamline/members.svg';
import settingsImg from '../../../../../assets/images/streamline/settings.svg';

const imageMap: Record<string, string> = {
  project: projectImg,
  timeline: timelineImg,
  backlogs: backlogsImg,
  members: membersImg,
  settings: settingsImg,
};

const StreamlineFeature = () => {
  const featureData = {
    main: {
      subtitle: streamlineDataJson.feature.main.subtitle,
      title: streamlineDataJson.feature.main.title,
      content: streamlineDataJson.feature.main.content,
      action: streamlineDataJson.feature.main.action,
      img: [
        {
          alt: "Streamline Workspace",
          src: projectImg,
          path: "",
        },
      ],
    },
    features: streamlineDataJson.feature.features.map((item: any) => ({
      subtitle: item.subtitle,
      title: item.title,
      content: item.content,
      showSparkle: item.showSparkle,
      isFullWidth: item.imagePosition === "fullWidth",
      action: [
        {
          label: "",
          path: "",
          color: "Secondary",
        },
      ],
      img: {
        alt: item.imageAlt || item.title,
        src: imageMap[item.imageKey] || projectImg,
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
      <ComparisonTemp comparisonData={streamlineDataJson.comparison} />
    </div>
  );
};

export default StreamlineFeature;