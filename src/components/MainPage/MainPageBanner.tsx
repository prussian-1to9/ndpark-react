import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

import type { BannerProps } from "@api/mainpage/bannerData";
import { media } from "@utils/media";
import { text, lineClamp } from "@styles/text";
import { glowPlaceholderBasicConfig } from "@styles/animation";

import Image from "@components/Image";

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 25%;
  max-width: 60rem;
  min-height: 10rem;
`;

const StyledH4 = styled.h4`
  color: var(--color-n-20);
  ${text("normal")}
  ${text("2xl")}

  ${media.tablet`
    ${text("2xl")}
    ${lineClamp(2)}
  `}
  ${media.mobile`
    ${text("xl")}
  `}
`;
const StyledP = styled.p`
  color: var(--color-n-50);

  ${media.tablet`
    ${text("sm")}
    ${lineClamp(2)}
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 16vw;
  max-height: 20vh;
  margin-bottom: 0.5rem;
  overflow: hidden;

  ${glowPlaceholderBasicConfig}

  & img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MainPageBanner: React.FC<{ banners: BannerProps[] }> = ({ banners }) => {
  return (
    <Swiper
      className="my-4"
      slidesPerView={3}
      scrollbar
      loop
      modules={[Scrollbar]}
      spaceBetween={30}
    >
      {banners.map((banner) => (
        <StyledSwiperSlide key={banner.key}>
          <Link to={banner.to ?? ""}>
            <ImageWrapper>
              <Image image={banner.image} />
            </ImageWrapper>
            <StyledH4>{banner.title}</StyledH4>
            <StyledP>{banner.desc}</StyledP>
          </Link>
        </StyledSwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainPageBanner;
