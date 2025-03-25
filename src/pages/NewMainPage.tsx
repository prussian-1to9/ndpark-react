import React from "react";

import ArrivalBanner from "@components/MainPage/ArrivalBanner";
import TopBanner from "@components/MainPage/TopBanner";
/** @TODO */
// import HotelInfo from "@components/MainPage/HotelInfo";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NewMainPage: React.FC = () => {
  return (
    <>
      <section key="intro" className="gap-y-4">
        <TopBanner />
        <ArrivalBanner />
      </section>
      {/*<section key="hotel-info">
        <HotelInfo />
      </section> */}
      <div className="container bg-blue-300 w-full">안녕하세요?</div>
      <div className="container bg-red-300 w-full">원페이지스크롤 입니다.</div>
      <div className="container bg-green-300 w-full">어때요</div>
      <div className="container bg-pink-300 w-full">괜찮나요?</div>
    </>
  );
};

export default NewMainPage;
