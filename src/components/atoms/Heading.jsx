import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const Heading = ({ children, size, onClick, cursor }) => {
  return (
    <Base size={size} onClick={onClick} cursor={cursor}>
      {children}
    </Base>
  );
};

const Base = styled.div`
  font-size: ${({ size }) => (size ? `${size}px` : undefined)};
  font-weight: bold;
  cursor: ${({ cursor }) => (cursor ? `${cursor}` : undefined)};
`;

export default Heading;
