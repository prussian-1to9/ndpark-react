import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "@components/Image";
import Container from "@components/Container";

import MainBannerSection from "@components/MainPage/MainBannerSection";
import MovieSection from "@components/MainPage/MovieSection";
import NoticeSection from "@components/MainPage/NoticeSection";

import { media } from "@utils/media";

// swipers
import "swiper/css";
import "swiper/css/pagination";

import {
  getIntroduceImages,
  getMainBannerData,
  getMovieData,
  getNoticeData,
} from "@api/mainpage";

const StyledButton = styled.button`
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;

  border: none;
  border-radius: 9999px;
  background-color: var(--color-n-20);
  color: #ffffff;
  cursor: pointer;
`;

const StyledContainer = styled(Container)`
  display: flex;
  gap: 1rem;
  margin: 1rem auto;
  justify-content: space-between;

  ${media.tablet`
    margin: 0.5rem auto;
    flex-direction: column;
  `}
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  & img {
    width: 100%;
  }
  & > * {
    width: 100%;
    ${media.tablet`
      width: 50% !important;
    `}
  }
`;

const MainPage: React.FC = () => {
  /** @FIXME */
  const [selectedPark, setSelectedPark] = React.useState("");
  const [selectedProgram, setSelectedProgram] = React.useState("");

  /** @FIXME */
  const handleParkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSelectedPark(e.target.value);
  };
  useEffect(() => {
    console.log(selectedPark);
  }, [selectedPark]);

  return (
    <>
      <MainBannerSection banners={getMainBannerData()} />
      <NoticeSection notices={getNoticeData()} />

      <StyledContainer>
        <ImageWrapper>
          <Image image={getIntroduceImages("stay")[0]} />
          <Image image={getIntroduceImages("tour")[0]} />
        </ImageWrapper>
        {/**
         * @FIXME when the reservation pages are ready, replace the link with the actual link
         */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={{ width: "100%" }}>
            <h3>자연드림파크 예약</h3>
            <ImageWrapper>
              <select onChange={handleParkChange} defaultValue={selectedPark}>
                <option value="">자연드림파크 선택</option>
                <option value="gurye">구례자연드림파크</option>
                <option value="goesan">괴산자연드림파크</option>
              </select>
              <select>
                <option>준비중</option>
              </select>
              <StyledButton>예약하기</StyledButton>
            </ImageWrapper>
          </div>
          <ImageWrapper>
            <Link to="https://www.naturaldreampark.co.kr/board/community_view.html?number=3186">
              <Image image={getIntroduceImages("customerCenter")[0]} />
            </Link>
            <Image image={getIntroduceImages("reservation")[0]} />
          </ImageWrapper>
        </div>
      </StyledContainer>

      <MovieSection movies={getMovieData()} />
    </>
  );
};

export default MainPage;
