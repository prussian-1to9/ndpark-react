import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import FooterLinkContainer from "@components/Footer/FooterLinkContainer";
import FooterInfoContainer from "@components/Footer/FooterInfoContainer";
import FooterFamilySiteSelect from "@components/Footer/FooterFamilySiteSelect";
import FooterCorporateAddress from "@components/Footer/FooterCorporateAddress";

import { media } from "@utils/media";
import {
  getFooterUserLinks,
  getFooterFamilySiteLinks,
  getFooterCorporateInfos,
} from "@api/index";

const StyledFooter = styled.footer`
  background-color: var(--color-n-20);
  color: white;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & * {
    display: flex;
    align-items: center;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterLinkContainer>
        <StyledUl>
          {getFooterUserLinks().map((info) => (
            <li key={info.key}>
              <Link to={info.to}>{info.alt}</Link>
            </li>
          ))}
        </StyledUl>
        <FooterFamilySiteSelect>
          {getFooterFamilySiteLinks().map((link) => (
            <option key={link.key} value={link.to}>
              {link.alt}
            </option>
          ))}
        </FooterFamilySiteSelect>
      </FooterLinkContainer>
      <FooterInfoContainer>
        {getFooterCorporateInfos().map((info) => (
          <FooterCorporateAddress key={info.key} info={info} />
        ))}
      </FooterInfoContainer>
    </StyledFooter>
  );
};

export default Footer;
