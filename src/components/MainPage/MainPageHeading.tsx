import React from "react";

const MainHeading: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  props
) => {
  const { children, className } = props;
  return (
    <h3 className={`text-xl md:text-2xl lg:text-3xl ${className}`}>
      {children}
    </h3>
  );
};

export default MainHeading;
