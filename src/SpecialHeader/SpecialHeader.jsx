import React from "react";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import SearchIcon from "./search.png"

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
        <a href="/"><img
          src={require("../images/only name.png")}
          alt=""
          style={{ height: "70px" }}
        /></a>
      </div>
      <input type="checkbox" name="" id="check" />
      <label htmlFor="check" className="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </label>

      <ul className="list" id="list">
        {/* <li>
        <input type="checkbox" name="" id="search" />
      <label htmlFor="search" className="menu-btn">
        <img src={SearchIcon} alt="ssss" />
      </label>
        </li> */}
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
          <a href="/about">ABOUT US</a>
        </li>
        <li>
          <a href="/contact">CONTACT US</a>
        </li>
        <li>
          <a href="/team.html">OUR TEAM</a>
        </li>
        {/* <li>
        
        <a href=""><img src={SearchIcon} alt="ssss" style={{height:'25px'}} /></a>
        
        </li> */}
      </ul>
    </nav>
  );
}
