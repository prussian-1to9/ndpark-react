import React from "react";

const Image: React.FC<{ image: ImageProps }> = ({ image }) => {
  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
    />
  );
};

export default Image;
