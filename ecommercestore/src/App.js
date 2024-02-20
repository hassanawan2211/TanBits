// App.js
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  const [sortBy, setSortBy] = useState("");
  const [showItems, setShowItems] = useState(12); 

  const handleSort = (sortBy) => {
    console.log("Sorting by:", sortBy);
    setSortBy(sortBy);
  };

  const handleShowItems = (e) => {
    const numItems = parseInt(e.target.value);
    setShowItems(numItems);
  };

  return (
    <>
      <Navbar />
      <Header />
      <Filter handleSort={handleSort} handleShowItems={handleShowItems} />
      <Products sortBy={sortBy} showItems={showItems} />
      <Services/>
      <Footer />
    </>
  );
}

export default App;
