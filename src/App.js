import { BrowserRouter, Routes, Route } from "react-router-dom";
// src/App.js
import React from "react";
import Header from "../../my-app/src/components/Header.js";
import Products from "../../my-app/src/components/products.js";
import Pages from "./components/Pages.js";
import Footer from "./components/Footer.js";
import Shop from './Components2/shop.js'
import Shopping from "./components/shopping.js";
import Checkout from "./components/Checkout.js";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Shop />} />
          <Route path="/about" element={< Products/>}/>
          <Route path="/shopping" element={<Shopping/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
