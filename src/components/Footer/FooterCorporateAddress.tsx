import React from "react";
import styled from "styled-components";

import { media } from "@utils/media";
import { CorporateInfo } from "@api/footerData";

const StyledAddress = styled.address`
  & p,
  & b {
    color: var(--color-n-50);
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
    ${media.mobile`
      font-size: 0.7rem;
    `}
  }
`;

const FooterCorporateAddress: React.FC<{ info: CorporateInfo }> = ({
  info,
}) => {
  return (
    <StyledAddress>
      <b>{info.name}</b>
      <p>
        대표자 : {info.ceo} | 사업자등록번호 : {info.registrationNumber}
      </p>
      <p>
        이메일: {info.email} | 전화 : {info.tel}
      </p>
      <p>주소 : {info.address}</p>
    </StyledAddress>
  );
};

export default FooterCorporateAddress;
