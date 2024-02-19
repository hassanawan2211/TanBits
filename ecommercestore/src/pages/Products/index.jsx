import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";

const Products = ({ sortBy, showItems }) => { 
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0); 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        setItems(data);
        setTotalItems(data.length); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    getData();
  }, []);

  useEffect(() => {
    const sortItems = () => {
      if (sortBy === "price") {
        setItems(prevItems =>
          [...prevItems].sort((a, b) => a.price - b.price)
        );
      } else if (sortBy === "title") {
        setItems(prevItems =>
          [...prevItems].sort((a, b) => a.title.localeCompare(b.title))
        );
      }
    };

    sortItems();
  }, [sortBy]);

  return (
    <div>
      <div className="flex justify-center flex-wrap p-10">
        {items.slice(0, showItems).map((item, index) => ( 
          <Card
            img={item.image}
            title={item.title}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
