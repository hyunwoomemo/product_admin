import styled from "@emotion/styled";
import React from "react";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import PinSearchItem from "../atoms/PinSearchItem";

const PinSearchList = () => {
  return (
    <Base>
      <Heading size={20}>⭐ 즐겨찾기한 조회 그룹</Heading>
      <ButtonWrapper>
        <PinSearchItem first="가방" second="많이 판매된" third="3개" />
      </ButtonWrapper>
    </Base>
  );
};

const Base = styled.div``;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export default PinSearchList;
