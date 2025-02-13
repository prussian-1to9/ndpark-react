import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsMegaphone } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Container from "@components/Container";

import { useViewPort } from "@utils/Viewport";
import { media } from "@utils/media";

import type { NoticeProps } from "@api/mainpage";
import { getNoticeTypeString } from "@api/mainpage";

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;

  & b {
    font-weight: 500;
  }
`;
const NoticeHeading = styled.h4`
  font-size: 1rem;
  width: 10rem;

  ${media.tablet`
    width: 5rem;
  `}
  & svg {
    margin-right: 0.5rem;
  }
  &.goesan,
  &.goesan svg {
    color: var(--color-s-20);
  }
  &.gurye,
  &.gurye svg {
    color: var(--color-p-20);
  }
`;

const NoticeSection: React.FC<{ notices: NoticeProps[] }> = ({ notices }) => {
  const { isMobile } = useViewPort();

  return (
    <section>
      <Container>
        <Swiper
          modules={[Autoplay]}
          direction="vertical"
          slidesPerView={1}
          speed={1000}
          observer={true}
          observeParents={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          height={60}
          autoHeight={true}
          loop={true}
        >
          {notices.map((notice) => (
            <StyledSwiperSlide key={notice.uid}>
              <NoticeHeading className={notice.type}>
                <BsMegaphone />
                <b>
                  {`${getNoticeTypeString(notice.type)}${
                    isMobile ? "" : "자연드림파크"
                  }`}
                </b>
              </NoticeHeading>
              <Link
                to={`https://www.naturaldreampark.co.kr/board/community_view.html?number=${notice.uid}`}
              >
                {notice.title}
              </Link>
              <p>{notice.date.toISOString().split("T")[0]}</p>
            </StyledSwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default NoticeSection;
