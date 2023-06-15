import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Heading from "../atoms/Heading";
import { useRecoilState } from "recoil";
import { currentMajorCategory, currentMiddleCategory } from "../../recoil/CategoryAtom";

const Sidebar = ({ slideOpen, onClick, handleHeadingClick }) => {
  const [selectedMajor, setSelectedMajor] = useRecoilState(currentMajorCategory);
  const [selectedMiddle, setSelectedMiddle] = useRecoilState(currentMiddleCategory);
  console.log(selectedMajor, selectedMiddle);
  return (
    <Base open={slideOpen}>
      <Container open={slideOpen}>
        <Heading size={16} onClick={handleHeadingClick} cursor="pointer">
          NoTag 상품 관리
        </Heading>
        {selectedMajor && <div onClick={() => setSelectedMajor("")}>{selectedMajor}</div>}
        {selectedMiddle && <div onClick={() => setSelectedMiddle("")}>{selectedMiddle}</div>}
      </Container>
      <CloseBtn onClick={onClick}>N</CloseBtn>
    </Base>
  );
};

const Base = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #202020;
  transition: all 0.3s;
  position: relative;

  ${({ open }) =>
    open
      ? css`
          width: 250px;
        `
      : css`
          width: 50px;
        `}
`;

const Container = styled.div`
  padding: 2rem;
  transition: all 0.3s;
  white-space: nowrap;
  /* overflow-x: hidden; */

  ${({ open }) =>
    open
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  width: 30px;
  height: 30px;
  background-color: #4c4c4c;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;

export default Sidebar;
