import React from "react";
import ConversionIcon from "./ConversionIcon";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const VoiceToCodeIcon: React.FC<IconProps> = (props) => {
  return <ConversionIcon {...props} />;
};

export default VoiceToCodeIcon;
