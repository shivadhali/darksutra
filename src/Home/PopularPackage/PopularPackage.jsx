import React from "react";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import "../../styles.css";
import { Link } from "react-router-dom";
import "./popularPackage.css";

const url = "https://test-tod.pockethost.io/";
const client = new PocketBase(url);
client.autoCancellation(false);

const PopularPackage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client
      .collection("products")
      .getFullList()
      .then((res) => {
        setProducts(res);
      });
  }, []);

  const popularProducts = products.slice(0, 8);

  return (
    <div>
      <div>
        <div id="categories">
          <h2>POPULAR PACKAGE</h2>

          <div className="flex-container">
            <div className="container" id="container">
              {popularProducts.map((cat) => (
                <div className="product product_container" key={cat.id}>
                  <Link to={`/product/${cat.id}`}>
                    <img
                      src={
                        "https://test-tod.pockethost.io/api/files/products/" +
                        cat.id +
                        "/" +
                        cat.image
                      }
                      alt=""
                    />
                    {/* <Link to={`/product/${cat.id}`}> */}
                    <p>{cat.name}</p>
                    <span className="pricing">
                      <span className="offer">₹{cat.original_price} </span>
                      <span>₹{cat.offer_price}</span>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPackage;
