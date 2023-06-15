import styled from "@emotion/styled";
import React from "react";

const Button = ({ children, onClick }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export const ButtonStyle = styled.div`
  background-color: #5f5f5f;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #4e4e4e;
  }
`;

export default Button;
