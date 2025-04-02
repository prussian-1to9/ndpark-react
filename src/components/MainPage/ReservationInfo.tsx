import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { media } from "@utils/media";

import Container from "@components/Container";

import MainPageHeading from "@components/MainPage/MainPageHeading";

const StyledDiv = styled.div`
  width: 100vw;
  min-height: 14rem;
  height: 50%;
  background: url("https://www.naturaldreampark.co.kr/images/main_banner_group.jpg")
    no-repeat center center;
  background-size: cover;

  ${media.tablet` height: 30%; `}
  ${media.mobile` height: 20%; `}
`;

const StyledContainer = styled(Container)`
  color: white;
  margin: 4rem auto 8rem;

  ${media.tablet` margin: 2rem auto; `}
  ${media.mobile` margin: 1rem auto; `}
`;

const ContactWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4rem;
    border-bottom: 1px solid white;
  }
  ${media.tablet` font-size: 0.875rem; `}
`;

const ReservataionInfo: React.FC = () => {
  return (
    <StyledDiv>
      <StyledContainer>
        <h3 className="text-lg lg:text-xl font-medium mb-4">
          개인 & 단체 예약
        </h3>
        <Link to="tel:18335753">
          <MainPageHeading className="mt-4 mb-8">1833-5753</MainPageHeading>
        </Link>
        <ContactWrapper>
          <p>1번 &gt; 괴산자연드림파크</p>
          <p>2번 &gt; 구례자연드림파크</p>
        </ContactWrapper>
      </StyledContainer>
    </StyledDiv>
  );
};

export default ReservataionInfo;
