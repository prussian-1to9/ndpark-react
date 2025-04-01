import React from "react";
import { Link } from "react-router-dom";

import { getHotelInfo } from "@api/mainpage";

import Image from "@components/Image";
import Container from "@components/Container";

import MainPageHeading from "@components/MainPage/MainPageHeading";
import HotelInfoWrapper from "@components/MainPage/HotelInfoWrapper";
import HotelInfoContext from "@components/MainPage/HotelInfoContext";

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
              <h3 className="text-xl lg:text-2xl font-semibold">
                {hotel.name}
              </h3>
              <ul className="flex gap-4 text-sm lg:gap-8 lg:text-base">
                {(hotel.roomTypes ?? []).map((roomType, index) => (
                  <li key={index}>{roomType}</li>
                ))}
              </ul>
              <Image image={hotel.image} />
            </Link>
          </HotelInfoContext>
        ))}
      </HotelInfoWrapper>
    </Container>
  );
};

export default HotelInfo;
