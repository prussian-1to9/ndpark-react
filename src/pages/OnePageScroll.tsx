import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Footer from "@components/Footer";
import Header from "@components/Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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
    height: 100vh;
  }
`;

const OnePageScroll: React.FC = () => {
  const [top, setTop] = useState("0");
  const pageRef = useRef(0);
  const isScrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  let currentClientY = 0;

  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(false);

  let container = Array.from(containerRef.current?.children || []); // :scope > *
  let lastPage = container ? container.length - 1 : 0;

  const checkScrolling = () => {
    if (isScrolling.current) return false;

    isScrolling.current = true;
    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  const checkPage = () => {
    if (pageRef.current < 0) {
      pageRef.current = 0;
      setShowHeader(true);
    } else if (pageRef.current > lastPage) {
      pageRef.current = lastPage;
      setShowFooter(true);
    }
  };
  const increasePage = () => {
    pageRef.current++;
    setShowHeader(false);
    setShowFooter(false);
  };
  const decreasePage = () => {
    pageRef.current--;
    setShowHeader(true);
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (checkScrolling() === false) return;

    if (e.deltaY > 0) increasePage();
    if (e.deltaY < 0) decreasePage();

    checkPage();
    setTop(pageRef.current * -100 + "vh");
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    currentClientY = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (checkScrolling() === false) return;
    if (e.changedTouches[0].clientY < currentClientY) increasePage();
    if (e.changedTouches[0].clientY > currentClientY) decreasePage();

    checkPage();
    setTop(pageRef.current * -100 + "vh");
  };

  useEffect(() => {
    container = Array.from(containerRef.current?.children || []); // :scope > *
    lastPage = container ? container.length - 1 : 0;
  }, []);

  return (
    <>
      <Header display={showHeader ? "block" : "none"} />
      <Wrapper
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onWheel={onWheel}
      >
        <StyledDiv ref={containerRef} style={{ top: top }}>
          <Outlet />
        </StyledDiv>
      </Wrapper>
      <Footer display={showFooter ? "block" : "none"} />
    </>
  );
};

export default OnePageScroll;
