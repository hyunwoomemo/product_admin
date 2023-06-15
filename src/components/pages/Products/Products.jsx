import React, { useEffect, useState } from "react";
import ProductView from "./ProductView";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentMajorCategory, currentMiddleCategory } from "../../../recoil/CategoryAtom";
import axios from "axios";

const Products = () => {
  const [slideOpen, setSlideOpen] = useState(true);
  const navigate = useNavigate();
  const [majorCategories, setMajorCategories] = useState([]);
  const [middleCategories, setMiddleCategories] = useState([]);
  const url = "http://localhost:3030";

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${url}/products/category`);
        setMajorCategories([...response.data.major]);
        setMiddleCategories([...response.data.middle]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategory();
  }, []);

  const productProps = {
    slideOpen,
    handleSlideClick: (e) => {
      e.stopPropagation();
      setSlideOpen(!slideOpen);
    },
    handleHeadingClick: () => {
      navigate("/");
    },
    majorCategories,
    middleCategories,
  };

  return <ProductView {...productProps} />;
};

export default Products;
