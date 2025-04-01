import React from "react";

const Image: React.FC<{
  image: ImageProps;
  className?: string;
}> = ({ image, className }) => {
  return (
    <>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={className}
        useMap={image.map ? `#${Object.keys(image.map)[0]}` : undefined}
      />
      {image.map && (
        <map name={Object.keys(image.map)[0]}>
          {Object.keys(image.map).map(
            (key) =>
              image.map &&
              image.map[key].map((area) => <area key={area.coords} {...area} />)
          )}
        </map>
      )}
    </>
  );
};

export default Image;
