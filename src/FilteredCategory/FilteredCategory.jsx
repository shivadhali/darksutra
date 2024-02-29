import React from "react";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import "../styles.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const url = "https://test-tod.pockethost.io/";
const client = new PocketBase(url);
client.autoCancellation(false);

const FilteredCategory = () => {
  const [products, setProducts] = useState([]);
  const [catName, setCatName] = useState([]);
  const [catNames, setCatNames] = useState([]);
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  useEffect(() => {
    client
      .collection("products")
      .getFullList()
      .then((res) => {
        console.log("sdfsdf", res);
        if (category) {
          const filteredCategory = res.filter(
            (ele) => ele.category == category
          );
          setProducts(filteredCategory);
        } else {
          setProducts(res);
        }
      });
    client
      .collection("category")
      .getFullList()
      .then((res) => {
        if (category) {
          const filteredCat = res.filter((ele) => ele.id == category);
          setCatName(filteredCat[0]);
          //   setCatNames(catName.category);
        } else {
          setCatName(res);
        }
      });
  }, []);

  return (
    <div>
      <div>
        <div id="categories">
          <h2>{catName.category}</h2>

          <div className="flex-container">
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

export default FilteredCategory;
