import styled from "styled-components";

import { media } from "@utils/media";

const NavMenuButton = styled.button`
  outline: none;
  border: none;
  padding: 0.2rem 0.5rem;

  background-color: var(--color-n-50);
  color: var(--color-n-90);

  &:hover {
    background-color: var(--color-p-40);

    ${media.tablet`
      background-color: var(--color-n-50);
    `}
  }
  &.active {
    background-color: var(--color-p-30);
  }
`;

export default NavMenuButton;
