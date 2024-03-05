import React from "react";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import "../../styles.css";
import { Link } from "react-router-dom";
import "./category.css";

const url = "https://test-tod.pockethost.io/";
const client = new PocketBase(url);
client.autoCancellation(false);

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    client
      .collection("category")
      .getFullList()
      .then((res) => {
        setCategory(res);
      });
  }, []);

  return (
    <div>
      <div>
        <div id="categories">
          <h2>CATEGORY</h2>

          <div className="flex-container">
            <div className="container" id="container">
              {category.map((cat) => (
                <div className="product product_category" key={cat.id}>
                  <Link to={`/category/${cat.id}`}>
                    <img
                      src={
                        "https://test-tod.pockethost.io/api/files/category/" +
                        cat.id +
                        "/" +
                        cat.category_image
                      }
                      alt=""
                    />
                    {/* <Link to={`/category/${cat.id}`}> */}
                    <p>{cat.category}</p>
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

export default Category;
