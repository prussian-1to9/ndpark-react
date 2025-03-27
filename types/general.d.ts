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

interface BannerProps {
  key: string;
  to?: string;
  image: ImageProps;
  mobileImage?: ImageProps;
}
