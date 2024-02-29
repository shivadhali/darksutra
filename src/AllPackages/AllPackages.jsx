import React from "react";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const url = "https://test-tod.pockethost.io/";
const client = new PocketBase(url);
client.autoCancellation(false);

const AllPackages = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client
      .collection("products")
      .getFullList()
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <div>
      <div>
        <div id="categories">
          <h2>ALL PACKAGES</h2>

          <div class="flex-container">
            <div className="container" id="container">
              {products.map((cat) => (
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

export default AllPackages;