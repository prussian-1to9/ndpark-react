import React from "react";

const Image: React.FC<{ image: ImageProps; className?: string }> = ({
  image,
  className,
}) => {
  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={className}
    />
  );
};

export default Image;
