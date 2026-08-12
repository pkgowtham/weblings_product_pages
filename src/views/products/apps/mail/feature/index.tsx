'use client';

import React from 'react';
import FeatureTemp from '../../../../../components/featureTemp/index';
import ComparisonTemp from '../../../../../components/comparationTemp/index';
import mailDataJson from '../../../../../data/mail.json';
import SvgAbstract from '../../../../../components/svg/Abstract';

// Import 5 images from src/assets/images/mail/
import inboxImg from '../../../../../assets/images/mail/inbox.svg';
import composeMailImg from '../../../../../assets/images/mail/compose_mail.svg';
import replyManageImg from '../../../../../assets/images/mail/reply_manage.svg';
import mailBoxesImg from '../../../../../assets/images/mail/mail_boxes.svg';
import labelsTagsImg from '../../../../../assets/images/mail/labels_tags.svg';

const imageMap: Record<string, string> = {
  inbox: inboxImg,
  compose_mail: composeMailImg,
  reply_manage: replyManageImg,
  mail_boxes: mailBoxesImg,
  labels_tags: labelsTagsImg,
};

const MailFeature = () => {
  const featureData = {
    main: {
      subtitle: mailDataJson.feature.main.subtitle,
      title: mailDataJson.feature.main.title,
      content: mailDataJson.feature.main.content,
      action: mailDataJson.feature.main.action,
      img: [
        {
          alt: "Mail Workspace",
          src: inboxImg,
          path: "",
        },
      ],
    },
    features: mailDataJson.feature.features.map((item: any) => ({
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
        src: imageMap[item.imageKey] || inboxImg,
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
      <ComparisonTemp comparisonData={mailDataJson.comparison} />
    </div>
  );
};

export default MailFeature;