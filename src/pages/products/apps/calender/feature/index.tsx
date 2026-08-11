import React from 'react';
import FeatureTemp from '../../../../../components/featureTemp/index.tsx';
import ComparisonTemp from '../../../../../components/comparationTemp/index.tsx';
import calendarDataJson from '../../../../../data/calendar.json';
import SvgAbstract from '../../../../../components/svg/Abstract.tsx';

// Import 5 images from src/assets/images/calendar/
import meetingsImg from '../../../../../assets/images/calendar/meetings.svg';
import tasksImg from '../../../../../assets/images/calendar/tasks.svg';
import scheduleImg from '../../../../../assets/images/calendar/schedule.svg';
import durationImg from '../../../../../assets/images/calendar/duration.svg';
import tagsFilterImg from '../../../../../assets/images/calendar/tags_filter.svg';

const imageMap: Record<string, string> = {
  meetings: meetingsImg,
  tasks: tasksImg,
  schedule: scheduleImg,
  duration: durationImg,
  tags_filter: tagsFilterImg,
};

const CalenderFeature = () => {
  const featureData = {
    main: {
      subtitle: calendarDataJson.feature.main.subtitle,
      title: calendarDataJson.feature.main.title,
      content: calendarDataJson.feature.main.content,
      action: calendarDataJson.feature.main.action,
      img: [
        {
          alt: "Calendar Workspace",
          src: meetingsImg,
          path: "",
        },
      ],
    },
    features: calendarDataJson.feature.features.map((item: any) => ({
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
        src: imageMap[item.imageKey] || meetingsImg,
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
      <ComparisonTemp comparisonData={calendarDataJson.comparison} />
    </div>
  );
};

export default CalenderFeature;