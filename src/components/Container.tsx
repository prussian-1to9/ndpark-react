import styled from "styled-components";

import { media } from "@utils/media";

const StyledDiv = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;

  ${media.mobile` padding: 0 1rem; `}
  ${media.tablet` padding: 0 1.5rem; `}
`;

export default StyledDiv;
