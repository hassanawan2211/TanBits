import React from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const Products = ({ products, sortBy, sortOrder, searchQuery, showPerPage }) => {
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    } else if (sortBy === "alphabetically") {
      return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedProducts = filteredProducts.slice(0, showPerPage);

  return (
    <div>
      <div className="bg-white flex flex-wrap justify-center gap-7 mt-16 mb-16">
        {paginatedProducts.map((item, index) => (
          <Link to={`/product/${item.id}`}><Card img={item.image} title={item.title} price={item.price} key={index} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
