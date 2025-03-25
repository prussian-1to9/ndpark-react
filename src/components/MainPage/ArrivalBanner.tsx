import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import Image from "@components/Image";
import Container from "@components/Container";

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

  & img {
    width: 100%;
  }
`;

const NewMainBannerSection: React.FC = () => {
  return (
    <Container>
      <h3 className="text-4xl w-full text-left my-4">New Arrival</h3>
      <Swiper
        className="my-4"
        slidesPerView={3}
        modules={[Navigation]}
        loop={true}
        spaceBetween={30}
      >
        <StyledSwiperSlide>
          <Link to="https://www.naturaldreampark.co.kr/kanazawa/intro.html">
            <Image
              image={{
                src: "https://www.naturaldreampark.co.kr/images/Xfile/kanazawa.webp",
                alt: "가나자와 호텔",
              }}
            />
            <h4 className="text-2xl">가나자와 호텔 예약 오픈</h4>
            <p className="text-lg">
              웰빙, 그리고 항암생활을 위한 자연드림 여행
            </p>
          </Link>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Link to="https://www.naturaldreampark.co.kr/board/community_view.html?number=3822">
            <Image
              image={{
                src: "https://www.naturaldreampark.co.kr/images/Xfile/fish-cake-soup.jpg",
                alt: "어묵탕",
              }}
            />
            <h4 className="text-2xl">디너·석식 패키지 오픈</h4>
            <p className="text-lg">자연드림의 특별한 디너를 즐겨보세요</p>
          </Link>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Link to="https://www.naturaldreampark.co.kr/g_facilities_6.html">
            <Image
              image={{
                src: "https://www.naturaldreampark.co.kr/images/Xfile/hanok.jpg",
                alt: "전주집",
              }}
            />
            <h4 className="text-2xl">전주집 오픈</h4>
            <p className="text-lg">전이 주인인 집, 전주집이 오픈했습니다</p>
          </Link>
        </StyledSwiperSlide>
      </Swiper>
    </Container>
  );
};

export default NewMainBannerSection;
