import styled from "@emotion/styled";
import React from "react";
import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";
import PinSearchList from "../../molecules/PinSearchList";

const HomeView = ({ value, handleLinkBtn }) => {
  console.log(value);
  return (
    <Base>
      <Heading size={36}>NoTag 상품 관리</Heading>
      <Button onClick={() => handleLinkBtn("/products")}>전체 상품 조회</Button>
      <PinWrapper>
        <PinSearchList />
      </PinWrapper>
    </Base>
  );
};

const Base = styled.div`
  padding: 1rem;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const PinWrapper = styled.div`
  margin-top: 2rem;
`;

export default HomeView;
