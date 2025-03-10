type LinkProps = {
  key: string;
  alt: string;
  to: string;
};
type InnerLinkProps = {
  key: string;
  alt: string;
  to?: string; // case of external link
  onClick?: () => void;
};

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

interface BannerProps {
  key: string;
  to?: string;
  image: ImageProps;
  mobileImage?: ImageProps;
}
