import React from 'react';
import FeatureTemp from '../../../../../components/featureTemp/index.tsx';
import ComparisonTemp from '../../../../../components/comparationTemp/index.tsx';
import eofficeDataJson from '../../../../../data/eoffice.json';
import SvgAbstract from '../../../../../components/svg/Abstract.tsx';

// Import 5 images from src/assets/images/eoffice/
import attendanceImg from '../../../../../assets/images/eoffice/attendance.svg';
import leaveImg from '../../../../../assets/images/eoffice/leave.svg';
import clientsImg from '../../../../../assets/images/eoffice/clients.svg';
import organizationImg from '../../../../../assets/images/eoffice/organization.svg';
import teamsImg from '../../../../../assets/images/eoffice/teams.svg';

const imageMap: Record<string, string> = {
  attendance: attendanceImg,
  leave: leaveImg,
  clients: clientsImg,
  organization: organizationImg,
  teams: teamsImg,
};

const EofficeFeature = () => {
  const featureData = {
    main: {
      subtitle: eofficeDataJson.feature.main.subtitle,
      title: eofficeDataJson.feature.main.title,
      content: eofficeDataJson.feature.main.content,
      action: eofficeDataJson.feature.main.action,
      img: [
        {
          alt: "eOffice Workspace",
          src: attendanceImg,
          path: "",
        },
      ],
    },
    features: eofficeDataJson.feature.features.map((item: any) => ({
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
        src: imageMap[item.imageKey] || attendanceImg,
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
      <ComparisonTemp comparisonData={eofficeDataJson.comparison} />
    </div>
  );
};

export default EofficeFeature;