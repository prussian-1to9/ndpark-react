import React from "react";

import OnePageScroll from "@pages/OnePageScroll";

import ArrivalBanner from "@components/MainPage/ArrivalBanner";
import MainBanner from "@components/MainPage/MainBanner";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NewMainPage: React.FC = () => {
  return (
    <OnePageScroll>
      <section key="intro" className="gap-y-4">
        <MainBanner />
        <ArrivalBanner />
      </section>
      <div className="container bg-blue-300 w-full">안녕하세요?</div>
      <div className="container bg-red-300 w-full">원페이지스크롤 입니다.</div>
      <div className="container bg-green-300 w-full">어때요</div>
      <div className="container bg-pink-300 w-full">괜찮나요?</div>
    </OnePageScroll>
  );
};

export default NewMainPage;
