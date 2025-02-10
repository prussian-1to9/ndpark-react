import React, { useState } from "react";
import styled from "styled-components";

import Container from "@components/Container";
import HeaderMenu from "@components/Header/HeaderMenu";

import HeaderLinkSection from "@components/Header/HeaderLinkSection";
import HeaderMenuSection from "@components/Header/HeaderMenuSection";
import HeaderDetailMenuSection from "@components/Header/HeaderDetailMenuSection";

import { useViewPort } from "@utils/Viewport";

import { Link } from "react-router-dom";
import { getHeaderMenuLinks, getHeaderDetailMenuLinks } from "@api/index";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderGridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(${getHeaderMenuLinks().length}, 1fr);

  & a {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    line-height: 1.8rem;
  }
  & a:hover {
    font-weight: 600;
    color: var(--color-p-30);
  }
`;

const Header: React.FC = () => {
  const { isMobile } = useViewPort();

  const isSignedIn = false; // TODO
  // const isSignedIn = true; // TODO
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [isDetailMenuOpen, setIsDetailMenuOpen] = useState(false);

  const handleMenuMouseHover = (key: string | undefined) => {
    key = key ?? "";
    setHoveredMenu(key);
    setIsDetailMenuOpen(key !== "");
  };

  return (
    <StyledHeader>
      {!isMobile && <HeaderLinkSection isSignedIn={isSignedIn} />}

      <HeaderMenuSection isMobile={isMobile}>
        {!isMobile && (
          <HeaderGridContainer>
            {getHeaderMenuLinks().map((link) => (
              <HeaderMenu
                link={link}
                hoveredMenu={hoveredMenu}
                hoverFunc={handleMenuMouseHover}
              />
            ))}
          </HeaderGridContainer>
        )}
      </HeaderMenuSection>

      {!isMobile && (
        <HeaderDetailMenuSection isDetailMenuOpen={isDetailMenuOpen}>
          <HeaderGridContainer>
            {getHeaderMenuLinks().map((link) => (
              <StyledDiv>
                {getHeaderDetailMenuLinks(link.key).map((detailLink) => (
                  <Link
                    key={detailLink.key}
                    to={detailLink.to}
                    onMouseEnter={() => handleMenuMouseHover(link.key)}
                    onMouseLeave={() => handleMenuMouseHover("")}
                  >
                    {detailLink.alt}
                  </Link>
                ))}
              </StyledDiv>
            ))}
          </HeaderGridContainer>
        </HeaderDetailMenuSection>
      )}
    </StyledHeader>
  );
};

export default Header;
