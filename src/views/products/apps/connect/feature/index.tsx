'use client';

import React from 'react';
import FeatureTemp from '../../../../../components/featureTemp/index';
import ComparisonTemp from '../../../../../components/comparationTemp/index';
import chatDataJson from '../../../../../data/chat.json';
import SvgAbstract from '../../../../../components/svg/Abstract';

// Import 4 images from src/assets/images/chat/
import individualChatImg from '../../../../../assets/images/chat/individual_chat.svg';
import groupChatImg from '../../../../../assets/images/chat/group_chat.svg';
import createGroupsImg from '../../../../../assets/images/chat/create_groups.svg';
import audioCallsImg from '../../../../../assets/images/chat/audio_calls.svg';

const imageMap: Record<string, string> = {
  individual_chat: individualChatImg,
  group_chat: groupChatImg,
  create_groups: createGroupsImg,
  audio_calls: audioCallsImg,
};

const ConnectFeature = () => {
  const featureData = {
    main: {
      subtitle: chatDataJson.feature.main.subtitle,
      title: chatDataJson.feature.main.title,
      content: chatDataJson.feature.main.content,
      action: chatDataJson.feature.main.action,
      img: [
        {
          alt: "Chat Workspace",
          src: individualChatImg,
          path: "",
        },
      ],
    },
    features: chatDataJson.feature.features.map((item: any) => ({
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
        src: imageMap[item.imageKey] || individualChatImg,
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
      <ComparisonTemp comparisonData={chatDataJson.comparison} />
    </div>
  );
};

export default ConnectFeature;