import styled from "@emotion/styled";
import React from "react";

const CategoryItem = ({ children, onClick }) => {
  return <Base onClick={onClick}>{children}</Base>;
};

const Base = styled.div`
  padding: 1rem;
  background-color: #2c2c2c;
  border-radius: 10px;
  cursor: pointer;
`;

export default CategoryItem;
