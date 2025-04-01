import styled from "styled-components";

import { media } from "@utils/media";

const HotelInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  ${media.tablet`
    display: flex;
    flex-direction: column;
  `}
`;

export default HotelInfoWrapper;
