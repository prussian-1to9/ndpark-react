import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { media } from "@utils/media";

const StyledH2 = styled.h2`
  margin: 0;
  margin-top: 1rem;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0 1.5rem;

  & p {
    display: flex;
    gap: 0.5rem;
    margin: 0;
  }
  & a {
    border: 1px solid var(--color-n-95);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  & a:hover {
    background-color: var(--color-n-90);
    color: var(--color-n-10);
  }

  & .movieinfo-2d b {
    color: var(--color-p-50);
  }
  & .movieinfo-3d b {
    color: var(--color-s-40);
  }
  ${media.tablet`
    margin: 0rem 0 0.75rem;

    & a:hover {
      background-color: transparent;
      color: var(--color-n-90);
    }
  `}
`;

const TheaterInfo: React.FC = () => {
  return (
    <>
      <StyledH2>자연드림파크 시네마 개봉영화</StyledH2>
      <StyledDiv>
        <div>
          <p className="movieinfo-2d">
            <b>2D</b> 주중 9,000원 / 주말(공휴일) 10,000원
          </p>
          <p className="movieinfo-3d">
            <b>3D</b> 주중 10,000원 / 주말(공휴일) 11,000원
          </p>
        </div>
        <Link to="https://www.naturaldreampark.co.kr/movie.html">예약안내</Link>
      </StyledDiv>
    </>
  );
};

export default TheaterInfo;
