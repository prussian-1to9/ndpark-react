import React from "react";
import styled, { keyframes } from "styled-components";

const arrowAnimation = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
`;
const StyledSpan = styled.span`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 70px;
  color: var(--color-n-80);
  text-align: center;
  z-index: 10;

  & span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid var(--color-n-80);
    border-bottom: 1px solid var(--color-n-80);
    transform: rotate(-45deg);
    animation: ${arrowAnimation} 1.5s infinite;
  }
`;

const ScrollArrow: React.FC<{
  pageRef: React.MutableRefObject<number>;
  scrollText?: string;
  color?: string;
}> = ({ pageRef, scrollText, color }) => {
  if (pageRef.current !== 0) return null;

  return (
    <StyledSpan style={{ color: color }}>
      <span style={{ borderColor: color }}></span>
      {scrollText ?? "아래로 스크롤"}
    </StyledSpan>
  );
};

export default ScrollArrow;
