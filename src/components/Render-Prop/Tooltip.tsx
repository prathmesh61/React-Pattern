import React, { ReactNode, useState } from "react";

type Props = {
  children: React.ReactNode;
  text: string;
  renderTooltipContent: (isVisible: boolean, text: string) => ReactNode;
};

const Tooltip = ({ children, renderTooltipContent, text }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const mouseEnter = () => {
    setIsVisible(true);
  };
  const mouseLeave = () => {
    setIsVisible(false);
  };
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      {renderTooltipContent(isVisible, text)}
      {children}
    </div>
  );
};

export default Tooltip;
