import React from "react";
import styled from "styled-components";

import { glowPlaceholderBasicConfig } from "@styles/animation";

import Image from "@components/Image";

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5rem;

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
