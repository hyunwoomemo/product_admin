import styled from "@emotion/styled";
import React from "react";
import { ButtonStyle } from "./Button";

const PinSearchItem = ({ first, second, third }) => {
  return (
    <Base>
      <span>{first}</span>
      <span>{second}</span>
      <span>{third}</span>
    </Base>
  );
};

const Base = styled(ButtonStyle)`
  display: flex;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;

  > span:first-of-type {
    font-size: 20px;
  }
`;

export default PinSearchItem;
