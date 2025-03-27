import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { getMovieInfo, getMovieBanners } from "@api/new-mainpage";
import { numberWithCommas } from "@utils/stringHandling";

import Container from "@components/Container";

import MainPageHeading from "@components/MainPage/MainPageHeading";
import MovieBannerImage from "@components/MainPage/MovieBannerImage";

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-n-05);
  color: white;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  & span {
    font-size: 0.8rem;
  }
`;

const MovieBanner: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <MainPageHeading className="mt-8 text-center">
          자연드림파크 시네마 개봉영화
        </MainPageHeading>
        <InfoWrapper>
          {getMovieInfo().map((movie) => (
            <p key={movie.type}>
              {movie.type} 주중 {numberWithCommas(movie.weekday)}원 / 주말
              (공휴일) {numberWithCommas(movie.weekend)}원
            </p>
          ))}
        </InfoWrapper>

        <div className="mb-8">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            navigation
            loop
            modules={[Navigation, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              300: { slidesPerView: 2 },
              600: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {getMovieBanners().map((banner) => (
              <StyledSwiperSlide key={banner.key}>
                <MovieBannerImage image={banner.image} />
                <p>{banner.title}</p>
                <span>{banner.desc}</span>
              </StyledSwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Wrapper>
  );
};

export default MovieBanner;
