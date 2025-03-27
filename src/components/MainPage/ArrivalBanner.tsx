import React from "react";

import { getArrivalBanners } from "@api/new-mainpage";

import Container from "@components/Container";

import MainPageHeading from "@components/MainPage/MainPageHeading";
import MainPageBanner from "@components/MainPage/MainPageBanner";

const NewMainBannerSection: React.FC = () => {
  return (
    <Container>
      <MainPageHeading className="text-left my-4">New Arrival</MainPageHeading>
      <MainPageBanner banners={getArrivalBanners()} />
    </Container>
  );
};

export default NewMainBannerSection;
