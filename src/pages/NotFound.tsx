import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { pageImageNotFound } from "@assets/image";

import Image from "@components/Image";
import Container from "@components/Container";

import { media } from "@utils/media";

const StyledButton = styled.button`
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-n-80);
  background: transparent;
  color: var(--color-n-20);

  &:hover {
    background: var(--color-n-80);
  }

  ${media.mobile`
    font-size: 1rem;
  `}
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  & p {
    margin: 0;
    text-align: center;
  }
`;

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const key = e.currentTarget.dataset.key;
    if (key === "main") navigate("/");
    else if (key === "back") navigate(-1);
  };
  return (
    <Container className="flex flex-col justify-center items-center h-screen gap-4 text-gray-700">
      <Image image={pageImageNotFound} className="w-full h-auto max-w-3xl" />
      <h2 className="text-2xl m-0 font-semibold text-center">
        죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.
      </h2>
      <StyledDiv>
        <p>페이지의 주소가 잘못 입력되었거나,</p>
        <p>주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.</p>
      </StyledDiv>
      <div className="flex flex-row gap-2 text-base">
        <StyledButton onClick={handleButtonClick} data-key="main">
          메인으로
        </StyledButton>
        <StyledButton onClick={handleButtonClick} data-key="back">
          뒤로가기
        </StyledButton>
      </div>
    </Container>
  );
};

export default NotFound;
