/**
 *  @TODO : fix mobile touch event
 */
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);
  overflow: hidden;
`;
const StyledDiv = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  transition: 0.5s;

  & > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 10rem);
  }
`;

const OnePageScroll: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [top, setTop] = useState("0");
  const pageRef = useRef(0);
  const isScrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  let container = Array.from(containerRef.current?.children || []); // :scope > *
  let lastPage = container ? container.length - 1 : 0;

  const handlePageScroll = (e: WheelEvent | TouchEvent) => {
    if (isScrolling.current) return;

    isScrolling.current = true;
    setTimeout(() => {
      isScrolling.current = false;
    }, 500);

    e.preventDefault();

    // deltaY -> 상하 스크롤량 반환해 계산
    if (e instanceof TouchEvent) {
      if (e.touches[0].clientY > 0) pageRef.current++;
      if (e.touches[0].clientY < 0) pageRef.current--;
    } else if (e instanceof WheelEvent) {
      if (e.deltaY > 0) pageRef.current++;
      if (e.deltaY < 0) pageRef.current--;
    }

    // prevent out of index
    if (pageRef.current < 0) pageRef.current = 0;
    else if (pageRef.current > lastPage) pageRef.current = lastPage;

    setTop(`calc(${pageRef.current * 10}rem - ${pageRef.current * 100}vh)`);
  };

  // effect binding
  useEffect(() => {
    container = Array.from(containerRef.current?.children || []); // :scope > *
    lastPage = container ? container.length - 1 : 0;

    window.addEventListener(
      "touchmove",
      (e) => handlePageScroll(e as TouchEvent),
      { passive: false }
    );
    window.addEventListener("wheel", (e) => handlePageScroll(e as WheelEvent), {
      passive: false,
    });

    return () => {
      window.removeEventListener("touchmove", handlePageScroll);
      window.removeEventListener("wheel", handlePageScroll);
    };
  }, []);

  return (
    <Wrapper>
      <StyledDiv ref={containerRef} style={{ top: top }}>
        {children}
      </StyledDiv>
    </Wrapper>
  );
};

export default OnePageScroll;
