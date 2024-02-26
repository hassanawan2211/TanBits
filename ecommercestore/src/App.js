import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Services from "./components/Services";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPerPage, setShowPerPage] = useState(12);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSortChange = (sortBy, sortOrder) => {
    setSortBy(sortBy);
    setSortOrder(sortOrder);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleShowChange = (value) => {
    setShowPerPage(value);
  };

  return (
    <>
      <Navbar/>
      <Header/>
      <Filter
        onSortChange={handleSortChange}
        onSearch={handleSearch}
        onShowChange={handleShowChange} 
        totalItemsCount={products.length}
        showPerPage={showPerPage}
      />
      <Products
        products={products}
        sortBy={sortBy}
        sortOrder={sortOrder}
        searchQuery={searchQuery}
        showPerPage={showPerPage}
      />
      <Services />
      <Footer />
    </>
  );
}

export default App;
