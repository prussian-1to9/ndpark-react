import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "@components/Image";
import FooterLinkSection from "@components/Footer/FooterLinkSection";
import FooterInfoSection from "@components/Footer/FooterInfoSection";
import FooterFamilySiteSelect from "@components/Footer/FooterFamilySiteSelect";

import { useViewPort } from "@utils/Viewport";
import { media } from "@utils/media";

import { footerNDParkLogo } from "@api/imageData";
import {
  getFooterUserLinks,
  getFooterFamilySiteLinks,
  getFooterCorporateInfos,
} from "@api/index";

const StyledFooter = styled.footer`
  background-color: var(--color-n-20);
  color: white;

  & p,
  & b {
    color: var(--color-n-50);
    margin: 0;
    padding: 0;
    font-size: 0.6rem;
  }
`;

const FooterUserLinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${media.tablet`
    gap: 0.5rem;
  `}

  & > a {
    font-size: 0.6rem;
    margin: 0;
    padding: 0 0.5rem;

    ${media.mobile`
      padding: 0.2rem;
    `}
  }
`;

const Footer: React.FC = () => {
  const { isMobile } = useViewPort();

  return (
    <StyledFooter>
      <FooterLinkSection>
        <FooterUserLinkWrapper>
          {getFooterUserLinks().map((info) => (
            <Link key={info.key} to={info.to ?? "javascript:;"}>
              {info.alt}
            </Link>
          ))}
          {isMobile && (
            <Link to="https://www.naturaldreampark.co.kr/main.html?path=mobile">
              PC 버전
            </Link>
          )}
        </FooterUserLinkWrapper>
        <FooterFamilySiteSelect>
          {getFooterFamilySiteLinks().map((link) => (
            <option key={link.key} value={link.to}>
              {link.alt}
            </option>
          ))}
        </FooterFamilySiteSelect>
      </FooterLinkSection>
      <FooterInfoSection>
        <Image image={footerNDParkLogo} />
        {getFooterCorporateInfos().map((info) => (
          <div key={info.key}>
            <b>{info.name}</b>
            <p>
              대표자 : {info.ceo} | 사업자등록번호 : {info.registrationNumber}
            </p>
            <p>
              이메일: {info.email} | 전화 : {info.tel}
            </p>
            <p>주소 : {info.address}</p>
          </div>
        ))}
      </FooterInfoSection>
    </StyledFooter>
  );
};

export default Footer;
