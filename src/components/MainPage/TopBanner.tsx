import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { media } from "@utils/media";
import { getTopBanners } from "@api/mainpage";

import Image from "@components/Image";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  cursor: grab;
  overflow: hidden;

  & .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .swiper-slide img {
    height: 100%;
    object-fit: cover;
  }

  & .swiper-pagination {
    top: 60% !important;
    ${media.mobile` top: 65% !important; `}
  }
  & .swiper-pagination-bullet {
    position: relative;
    transition: 0.5s;
  }
  & .swiper-pagination-bullet.swiper-pagination-bullet-active::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
    border: 1px solid white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

const BannerText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  & h3 {
    font-weight: 600;
  }
  & p {
    white-space: pre-line;
  }
`;

const TopBanner: React.FC = () => {
  return (
    <StyledSwiper
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
    >
      {getTopBanners().map((banner, index) => (
        <SwiperSlide key={`top-${index}`}>
          <Image image={banner.image} />
          <BannerText>
            <h3 className="text-3xl font-semibold">{banner.title}</h3>
            <p>{banner.desc}</p>
          </BannerText>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default TopBanner;
