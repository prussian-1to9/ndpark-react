import React from "react";

import Container from "@components/Container";

import MainPageHeading from "@components/MainPage/MainPageHeading";
import MainPageBanner from "@components/MainPage/MainPageBanner";

import { getTourBanners } from "@api/new-mainpage";

const TourBanner: React.FC = () => {
  return (
    <Container>
      <MainPageHeading className="text-left my-4">
        공방 견학부터 만들기 체험까지
      </MainPageHeading>
      <MainPageBanner banners={getTourBanners()} />
    </Container>
  );
};

export default TourBanner;
