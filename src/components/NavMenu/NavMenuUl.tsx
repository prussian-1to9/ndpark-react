import styled from "styled-components";

import { media } from "@utils/media";

const StyledUl = styled.ul`
  text-align: center;
  color: var(--color-n-50);
  background-color: var(--color-n-95);
  border-right: 1px solid var(--color-n-90);
  border-left: 1px solid var(--color-n-90);

  & > li {
    padding: 0.2rem 0.5rem;
    width: 100%;
    border-bottom: 1px solid var(--color-n-80);

    font-size: 0.75rem;
  }
  & > li:last-child {
    border-bottom: none;
  }
  & > li:hover {
    background-color: var(--color-n-90);
  }

  ${media.tablet`
    border: none;
  
    & > li {
      font-size: 1rem;
    }
    & > li:hover {
      background-color: var(--color-n-95);
    }
  `}
`;

export default StyledUl;
