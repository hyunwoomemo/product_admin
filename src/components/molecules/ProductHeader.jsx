import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { currentMajorCategory } from "../../recoil/CategoryAtom";
import CategoryItem from "../atoms/CategoryItem";

const ProductHeader = ({ majorCategories, middleCategories }) => {
  const [selectedMajor, setSelectedMajor] = useRecoilState(currentMajorCategory);
  const [selectedMiddle, setSelectedMiddle] = useRecoilState(currentMajorCategory);

  return (
    <Base>
      <CategoryWrapper>
        {!selectedMajor
          ? majorCategories.map((v) => {
              return (
                <CategoryItem key={v} onClick={() => setSelectedMajor(v)}>
                  {v}
                </CategoryItem>
              );
            })
          : middleCategories.map((v) => {
              return (
                <CategoryItem key={v} onClick={() => setSelectedMiddle(v)}>
                  {v}
                </CategoryItem>
              );
            })}
      </CategoryWrapper>
    </Base>
  );
};

const Base = styled.div`
  margin: 2rem 0;
`;

const CategoryWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export default ProductHeader;
