import React from "react";
import styled from "styled-components";

import { media } from "@utils/media";
import { linkArrow } from "@assets/icon";

import Image from "@components/Image";
import Container from "@components/Container";

import NoticeContent from "@components/MainPage/NoticeContent";
import AdditionalContext from "@components/MainPage/AdditionalContext";
import MainPageHeading from "@components/MainPage/MainPageHeading";

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 30%;

  ${media.tablet`
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    padding-top: 1rem;
    gap: 1rem;
  `}
`;

const FAQWrapper = styled.div`
  flex-grow: 1;
  padding-left: 2rem;
  border-left: 1px solid var(--color-n-50);

  ${media.tablet`
    border: none;
    padding-left: 0;
  `}
`;

const NoticeWrapper = styled.div`
  flex-grow: 1;
  padding-right: 2rem;
  width: calc(100% / 12 * 7);

  ${media.tablet`
    padding-right: 0;
  `}
`;

const AdditionalInfo: React.FC = () => {
  return (
    <StyledContainer>
      <NoticeWrapper>
        <MainPageHeading className="text-left mb-4 lg:mb-8">
          Notice
        </MainPageHeading>
        <NoticeContent />
      </NoticeWrapper>
      <FAQWrapper>
        <MainPageHeading className="text-left mb-4 lg:mb-8">
          Information
        </MainPageHeading>
        <AdditionalContext
          heading="자주 묻는 질문"
          title="반드시 예약을 해야 하나요? 당일 현장에서 진행하면 안되나요?"
          to="https://www.naturaldreampark.co.kr/faq.html?park_gubun=goesan"
        >
          <div className="flex justify-end">
            <Image image={{ ...linkArrow, width: 60 }} />
          </div>
        </AdditionalContext>
      </FAQWrapper>
    </StyledContainer>
  );
};

export default AdditionalInfo;
