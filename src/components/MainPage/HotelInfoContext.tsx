import styled, { css } from "styled-components";

import { media } from "@utils/media";

const imageStyles = css`
  & img,
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  & img {
    object-fit: cover;
    z-index: -1;
  }
  &::after {
    content: "";
    background: rgba(255, 255, 255, 0.7);
    transition: width 0.5s;
  }
`;

const hoverStyles = css`
  &:hover ul,
  &:hover h3 {
    color: white;
    text-shadow: 0 0 0.4rem black;
  }
  &:hover::after {
    width: 0;
  }
  ${media.tablet`
    &:hover ul, &:hover h3 { color: var(--color-n-30); text-shadow: none; }
    &:hover::after { width: 100%; }
  `}
`;

const HotelInfoContext = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  max-height: 10rem;
  padding: 0 2rem;

  color: var(--color-n-30);
  transition: color 0.5s;
  z-index: 0;

  ${media.tablet`
    height: fit-content;
    padding: 1rem;
    min-height: 5rem;
  `}
  ${media.mobile`
    padding: 0.5rem;
    min-height: 4rem;
  `}

  ${imageStyles}
  ${hoverStyles}
`;

export default HotelInfoContext;
