import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getHotelInfo } from "@api/mainpage";
import { media } from "@utils/media";

import Image from "@components/Image";
import Container from "@components/Container";

import MainPageHeading from "@components/MainPage/MainPageHeading";
import HotelInfoWrapper from "@components/MainPage/HotelInfoWrapper";
import HotelInfoContext from "@components/MainPage/HotelInfoContext";

const StyledH3 = styled.h3`
  position: relative;
  font-weight: 600;
  font-size: 1.5rem;
  z-index: 1;

  ${media.tablet` font-size: 1.25rem; `}
`;
const StyledUl = styled.ul`
  position: relative;
  display: flex;
  gap: 2rem;
  z-index: 1;

  ${media.tablet` gap: 1rem; `}
  ${media.mobile` display: none; `}
`;

const HotelInfo: React.FC = () => {
  return (
    <Container>
      <MainPageHeading className="text-left my-4">
        자연드림파크만의 숙소
      </MainPageHeading>
      <HotelInfoWrapper>
        {getHotelInfo().map((hotel) => (
          <HotelInfoContext key={hotel.key}>
            <Link to={hotel.to}>
              <StyledH3>{hotel.name}</StyledH3>
              <StyledUl>
                {(hotel.roomTypes ?? []).map((roomType, index) => (
                  <li key={index}>{roomType}</li>
                ))}
              </StyledUl>
              <Image image={hotel.image} />
            </Link>
          </HotelInfoContext>
        ))}
      </HotelInfoWrapper>
    </Container>
  );
};

export default HotelInfo;
