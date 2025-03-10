import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { media } from "@utils/media";
import { useViewPort } from "@utils/Viewport";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & p {
    margin: 0;
    font-size: 0.9rem;
    text-align: center;
    color: var(--color-p-40);
  }
  & > p {
    color: var(--color-n-50);
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;

  & li {
    color: var(--color-n-20);
    padding: 0 0.5rem;
    border-right: 1px solid var(--color-n-70);
  }
  & li:last-child {
    border: none;
  }
  & a:hover {
    color: var(--color-p-30);

    ${media.tablet`
      color: var(--color-n-20);
    `}
  }
`;

const AuthFooter: React.FC = () => {
  const { isMobile } = useViewPort();
  const authBaseURL = isMobile
    ? "https://icoop.or.kr/mobile/auth/"
    : "https:/icoop.or.kr/coopmall/auth/";

  const findIDLink = `${authBaseURL}${
    isMobile ? "idsearch_main.phtm" : "idsearch_v1712.phtm"
  }`;
  const resetPWLink = `${authBaseURL}${
    isMobile ? "pwsearch_main.phtm" : "pwsearch_v1712.phtm"
  }`;

  return (
    <StyledFooter>
      <StyledUl>
        <li>
          <Link to={findIDLink}>ID 찾기</Link>
        </li>
        <li>
          <Link to={resetPWLink}>비밀번호 재설정</Link>
        </li>
        <li>
          <Link to="https://icoop.or.kr/join/silver_membership_join_02.phtm">
            회원가입
          </Link>
        </li>
      </StyledUl>
      <div>
        <p>자연드림파크는 자연드림몰 아이디를 동일하게 사용합니다.</p>
        <p>자연드림몰 회원이 아닐 경우, 회원가입을 눌러</p>
        <p>자연드림몰 실버회원으로 가입 후 이용해 주시기 바립니다.</p>
      </div>
      <p>
        ☎️ 단체 예약문의 :<Link to="tel:1833-5753">1833-5753</Link>
        {"> 1번 괴산 / 2번 구례"}
      </p>
    </StyledFooter>
  );
};

export default AuthFooter;
