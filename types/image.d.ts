type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  map?: { [key: string]: ImageMapProps[] };
};

interface ImageMapProps {
  shape: "rect" | "circle" | "poly";
  coords: string;
  href: string;
  alt?: string;
  title?: string;
  target?: "_blank" | "_self";
}
