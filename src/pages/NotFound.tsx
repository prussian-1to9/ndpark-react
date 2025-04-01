import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { pageImageNotFound } from "@assets/image";

import Image from "@components/Image";
import Container from "@components/Container";

const StyledContainer = styled(Container)`
  color: var(--color-n-30);

  & button {
    border: 1px solid var(--color-n-80);
  }
  & button:hover {
    background: var(--color-n-80);
  }
`;

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = (key: string) => {
    if (key === "main") navigate("/");
    else if (key === "back") navigate(-1);
  };

  return (
    <StyledContainer className="flex flex-col justify-center items-center h-screen gap-4 text-gray-700">
      <Image image={pageImageNotFound} className="w-full h-auto max-w-3xl" />
      <h2 className="text-2xl m-0 font-semibold text-center">
        죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.
      </h2>
      <div className="flex flex-col justify-center items-center gap-1">
        <p>페이지의 주소가 잘못 입력되었거나,</p>
        <p>주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.</p>
      </div>
      <div className="flex flex-row gap-2 text-base">
        <button
          onClick={() => handleButtonClick("main")}
          className="px-4 py-2 rounded-lg"
        >
          메인으로
        </button>
        <button
          onClick={() => handleButtonClick("back")}
          className="px-4 py-2 rounded-lg"
        >
          뒤로가기
        </button>
      </div>
    </StyledContainer>
  );
};

export default NotFound;
