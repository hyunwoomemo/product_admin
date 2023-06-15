import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeView from "./HomeView";

const Home = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const HomeProps = {
    handleLinkBtn: (path) => navigate(path),
    value,
  };

  return <HomeView {...HomeProps} />;
};

export default Home;
