import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Image from "@components/Image";
import { mainBannerImages } from "@assets/main/index";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 60%;
  cursor: grab;
  overflow: hidden;

  & .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .swiper-slide img {
    width: 100%;
    height: auto;
  }

  & .swiper-pagination {
    top: 75% !important;
  }
  & .swiper-pagination-bullet {
    background-color: white;
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
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }

  & h3 {
    font-size: 2.4rem;
  }
`;

const MainBanner: React.FC = () => {
  return (
    <StyledSwiper
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
    >
      <SwiperSlide>
        <Image image={mainBannerImages.kanazawa} />
        <BannerText>
          <h3>가나자와 호텔 오픈</h3>
          <p>
            호텔 가나자와는 아름다운 호수와 다카오산의 푸른 품에 자리하고
            있습니다.
            <br />
            호수를 따라 여유로운 산책을 즐기거나 마을 주변에서 시작되는 다카오산
            등산을 경험해 보세요
          </p>
        </BannerText>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/">
          <Image image={mainBannerImages.goesanPark} />
          <BannerText>
            <h3>괴산자연드림파크</h3>
            <p>
              공방견학과 V&B 검사센터 실험체험을 한번에!
              <br />
              자연드림파크 치유와 힐링을 위한 견학프로그램
            </p>
          </BannerText>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/">
          <Image image={mainBannerImages.hotelRoum} />
          <BannerText>
            <h3>호텔로움</h3>
            <p>
              '한가로움, 자유로움 등 &lt;로움&gt;을 위해 떠나는 여행'의
              <br />
              의미를 담은 괴산자연드림파크의 호텔
            </p>
          </BannerText>
        </Link>
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default MainBanner;
