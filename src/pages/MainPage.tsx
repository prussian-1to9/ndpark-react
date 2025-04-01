import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import TopBanner from "@components/MainPage/TopBanner";

// main-info section
import ArrivalBanner from "@components/MainPage/ArrivalBanner";
import HotelInfo from "@components/MainPage/HotelInfo";

// service-info section
import MovieBanner from "@components/MainPage/MovieBanner";
import TourBanner from "@components/MainPage/TourBanner";

// cs-info section
import ReservataionInfo from "@components/MainPage/ReservationInfo";
import AdditionalInfo from "@components/MainPage/AdditionalInfo";

const MainPage: React.FC = () => {
  return (
    <>
      <section key="intro">
        <TopBanner />
      </section>

      {/* New Arrival & 자연드림파크만의 숙소 */}
      <section key="main-info">
        <ArrivalBanner />
        <HotelInfo />
      </section>

      {/* 영화 & 체험 안내 */}
      <section key="service-info">
        <MovieBanner />
        <TourBanner />
      </section>

      {/* 개인 & 단체 예약 + Notice & Information */}
      <section key="cs-info">
        <ReservataionInfo />
        <AdditionalInfo />
      </section>
    </>
  );
};

export default MainPage;
