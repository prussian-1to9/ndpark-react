/**
 * @FIXME : This is a temporary component for testing. */
import React from "react";
import styled from "styled-components";

const ContainerForTest = styled.div`
  height: 3000px;
  text-align: center;
  color: white;
  background: lightgray;
  & p {
    margin: 0;
  }
`;

const MainPage: React.FC = () => {
  return (
    <ContainerForTest>
      {new Array(20).fill(0).map((_, index) => (
        <p key={index}>Main Page{index}</p>
      ))}
    </ContainerForTest>
  );
};

export default MainPage;
