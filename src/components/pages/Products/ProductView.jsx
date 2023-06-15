import styled from "@emotion/styled";
import React from "react";
import Sidebar from "../../molecules/Sidebar";
import ProductList from "../../molecules/ProductList";
import ProductHeader from "../../molecules/ProductHeader";

const ProductView = ({ handleSlideClick, slideOpen, handleHeadingClick, majorCategories, middleCategories }) => {
  return (
    <Base>
      <Sidebar onClick={handleSlideClick} slideOpen={slideOpen} handleHeadingClick={handleHeadingClick} />
      <Main>
        <ProductHeader majorCategories={majorCategories} middleCategories={middleCategories}></ProductHeader>
        <ProductList></ProductList>
      </Main>
    </Base>
  );
};

const Base = styled.div`
  display: flex;
  gap: 1rem;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

export default ProductView;
