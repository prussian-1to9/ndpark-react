import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Mousewheel,
  Pagination,
} from "swiper/modules";

import Container from "@components/Container";
import Image from "@components/Image";
import TheaterInfo from "@components/MainPage/TheaterInfo";

import { media } from "@utils/media";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: var(--color-n-20);
  color: white;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: var(--color-n-30);

  ${media.tablet`
    font-size: 0.9rem;
  `}
  ${media.mobile`
      font-size: 0.8rem;
  `}
`;

const MovieSection: React.FC<{ movies?: ImageProps[] }> = ({ movies = [] }) => {
  return (
    <StyledSection>
      <Container>
        <TheaterInfo />
      </Container>

      <Container>
        <Swiper
          modules={[Autoplay, Pagination, Mousewheel, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          mousewheel
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
          slidesPerView={3}
          width={250}
          breakpoints={{
            1100: { width: 1176 },
            1050: { width: 1050 },
            1000: { width: 1000 },
            950: { width: 950 },
            900: { width: 900 },
            850: { width: 850 },
            800: { width: 800 },
            750: { width: 750 },
            700: { width: 700 },
            650: { width: 650 },
            600: { width: 600 },
            550: { width: 550 },
            500: { width: 500 },
            450: { width: 450 },
            400: { width: 400 },
            350: { width: 350 },
            300: { width: 300 },
          }}
        >
          {movies.map((movie) => (
            <StyledSwiperSlide key={movie.alt}>
              <Image image={movie} />
              <p>{movie.alt}</p>
            </StyledSwiperSlide>
          ))}
        </Swiper>
      </Container>
    </StyledSection>
  );
};
export default MovieSection;
