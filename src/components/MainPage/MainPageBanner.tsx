import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

import { glowPlaceholderBasicConfig } from "@styles/animation";

import Image from "@components/Image";

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 25%;
  max-width: 60rem;
  & h4 {
    font-weight: 400;
    color: var(--color-n-20);
  }
  & p {
    color: var(--color-n-50);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 16vw;
  max-height: 14.8rem;
  margin-bottom: 0.5rem;
  overflow: hidden;

  ${glowPlaceholderBasicConfig}

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

import type { BannerProps } from "@api/mainpage/bannerData";
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
            <h4 className="text-xl line-clamp-2 lg:text-2xl lg:line-clamp-none">
              {banner.title}
            </h4>
            <p className="text-base line-clamp-2 lg:text-lg lg:line-clamp-none">
              {banner.desc}
            </p>
          </Link>
        </StyledSwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainPageBanner;
