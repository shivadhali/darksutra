import React from "react";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

const url = "https://test-tod.pockethost.io/";
const client = new PocketBase(url);
client.autoCancellation(false);

export default function SpecialHeader() {
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
    <nav>
      <div className="logo">
        <img
          src={require("../images/only name.png")}
          alt=""
          style={{ height: "70px" }}
        />
      </div>
      <input type="checkbox" name="" id="check" />
      <label htmlFor="check" className="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </label>

      <ul className="list" id="list">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/category">CATEGORY</a>
          <ul className="submenu" id="submenu">
            {category.map((cat) => (
              <li key={cat.id}>
                <a href={`/category/${cat.id}`}>{cat.category}</a>
              </li>
            ))}
            {/* <li><a href="#">BIRTHDAY</a></li>
                    <li><a href="#">CAR BOOT</a></li>
                    <li><a href="#">WELCOME BABY</a></li>
                    <li><a href="#">WEDDING</a></li> */}
          </ul>
        </li>
        <li>
          <a href="/product">ALL PACKAGES</a>
        </li>
        <li>
          <a href="/about.html">ABOUT US</a>
        </li>
        <li>
          <a href="/#">CONTACT US</a>
        </li>
        <li>
          <a href="/team.html">OUR TEAM</a>
        </li>
      </ul>
    </nav>
  );
}
