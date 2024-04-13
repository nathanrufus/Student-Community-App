import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import  { useEffect, useState } from "react";

function Homepage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("http://127.0.0.1:5000/items", {
                  method: "GET",
              });

              if (response.ok) {
                  const data = await response.json();
                  // console.log(data);
                  setItems(data);
              } else {
                  console.error("Failed to fetch items");
              }
          } catch (error) {
              console.error("Error:", error);
          }
      };

      fetchData();
  }, []);
  return (
    <div>
      <Home items={items}/> 
       <Footer />
    </div>
  ); 
}

export default Homepage;
