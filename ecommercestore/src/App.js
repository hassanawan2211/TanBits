import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";

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
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/shop"
          element={
            <Shop
              onSortChange={handleSortChange}
              onSearch={handleSearch}
              onShowChange={handleShowChange}
              totalItemsCount={products.length}
              showPerPage={showPerPage}
              products={products}
              sortBy={sortBy}
              sortOrder={sortOrder}
              searchQuery={searchQuery}
            />
          }
        />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>

      <Footer />
      </Router>
    </>
  );
}

export default App;
