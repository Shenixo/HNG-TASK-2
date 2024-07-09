import React from "react";
import Products from "../components/products";
import HeaderContent from "../components/HeaderConent";
import Pages from '../components/Pages'

// import Header from '../components/Header.js'



import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <HeaderContent />
      <Products />
      <Pages />
    </div>
  );
};

export default HomePage;
