import React from "react";
import styled from "styled-components";

import { glowPlaceholderBasicConfig } from "@styles/animation";
import { media } from "@utils/media";

import Image from "@components/Image";

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 16vw;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5rem;

  ${media.tablet`
    max-width: unset;
    max-height: 80vh;
  `}

  &::before {
    content: "";
    display: block;
    padding-top: calc(100% / 7 * 10);
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${glowPlaceholderBasicConfig}
`;

const MovieBannerImage: React.FC<{ image: ImageProps }> = ({ image }) => {
  return (
    <ImageWrapper>
      <Image image={image} />
    </ImageWrapper>
  );
};

export default MovieBannerImage;
