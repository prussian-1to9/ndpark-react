import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getHotelInfo } from "@api/mainpage";

import Container from "@components/Container";
import Image from "@components/Image";

import MainPageHeading from "@components/MainPage/MainPageHeading";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  position: relative;
  width: 100%;
  height: 10rem;

  color: var(--color-n-10);
  padding: 1rem 2rem;
  z-index: 0;
  transition: color 0.5s;

  & img,
  & span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  & img {
    object-fit: cover;
    z-index: -1;
  }
  & span {
    background: rgba(255, 255, 255, 0.7);
    transition: width 0.5s;
  }
  &:hover span {
    width: 0;
  }
`;

const HotelInfo: React.FC = () => {
  return (
    <Container>
      <MainPageHeading className="text-left my-4">
        자연드림파크만의 숙소
      </MainPageHeading>
      <div className="grid grid-cols-2 gap-4">
        {getHotelInfo().map((hotel) => (
          <StyledDiv>
            <Link to={hotel.to}>
              <MainPageHeading className="font-semibold">
                {hotel.name}
              </MainPageHeading>
              <div className="flex gap-8">
                {(hotel.roomTypes ?? []).map((roomType, index) => (
                  <p key={index}>{roomType}</p>
                ))}
              </div>
              <span></span>
              <Image image={hotel.image} />
            </Link>
          </StyledDiv>
        ))}
      </div>
    </Container>
  );
};

export default HotelInfo;
