import React from "react";
import "./product.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PocketBase from "pocketbase";

const url = "https://test-tod.pockethost.io/";
const client = new PocketBase(url);
client.autoCancellation(false);

const Products = () => {
  const [product, setProduct] = useState([]);
  const location = useLocation();
  const productLocation = location.pathname.split("/")[2];
  console.log(productLocation);

  useEffect(() => {
    client
      .collection("products")
      .getFullList()
      .then((res) => {
        if (productLocation) {
          const filteredProduct = res.filter(
            (ele) => ele.id == productLocation
          );
          setProduct(filteredProduct[0]);
        } else {
          console.log(res);
        }
      });
  }, []);

  return (
    <div className="productpage_container">
      <div className="product basicproduct">
      <div className="img">
        <div className="product_image">
          <img
            className="product_image_casaroul"
            src={
              "https://test-tod.pockethost.io/api/files/products/" +
              product.id +
              "/" +
              product.image
            }
            alt=""
          />
        </div>
      </div>
      <div className="product_description">
        <div className="product_desc"><h1>{product.name}</h1></div>
        <div className="product_price">
          <span className="offer">Original Price: ₹{product.original_price}</span>
          <span>Offer Price: ₹{product.offer_price}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: product.desc }}></div>
            <button>
              <a href={`https://wa.me/917533030500?text=Hello There, I would like to know more about ${product.name}`}>Send Message</a>
            </button>
      </div>
      
    </div>
    </div>
    
  );
};

export default Products;
