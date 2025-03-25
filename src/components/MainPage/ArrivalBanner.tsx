import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ArrivalBannerData } from "@api/mainpage/bannerData";

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
        {ArrivalBannerData.map((banner) => (
          <StyledSwiperSlide key={banner.key}>
            <Link to={banner.to ?? ""}>
              <Image image={banner.image} />
              <h4 className="text-2xl">{banner.title}</h4>
              <p className="text-lg">{banner.desc}</p>
            </Link>
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default NewMainBannerSection;
