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
          console.log(error);
        }
      });
  }, []);

  return (
    <div className="product">
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
      <div className="product_desc">{product.name}</div>
    </div>
  );
};

export default Products;
