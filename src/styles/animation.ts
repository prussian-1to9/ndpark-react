import { keyframes, css } from "styled-components";

export const glow = keyframes`
    50% { opacity: 0.2; }
`;
export const glowPlaceholderBasicConfig = css`
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-n-80);
    animation: ${glow} 2.5s ease-in-out infinite;
    z-index: -1;
  }
`;
