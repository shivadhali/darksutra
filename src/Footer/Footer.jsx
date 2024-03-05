import React from "react";
import "./footer.css";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

const url = "https://test-tod.pockethost.io/";
const client = new PocketBase(url);
client.autoCancellation(false);

const Footer = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    client
      .collection("category")
      .getFullList()
      .then((res) => {
        setCategory(res);
      });
  }, []);

  const [contact, setContact] = useState([]);

  useEffect(() => {
    client
      .collection("contact")
      .getFullList()
      .then((res) => {
        setContact(res);
        console.log(res);
      });
  }, []);
  return (
    <div>
      <div className="footer">
        <div className="logo">
          <a href="/">
            <img
              src={require("../images/only name.png")}
              alt=""
              // style={{ height: "70px" }}
            />
          </a>
        </div>
        {/* <div className="nav">
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
          </ul>
        </div> */}

        <div className="contact">
          <div className="contact_information">
            {contact.map((info) => (
              <div className="contact_info" key={info.id}>
                <img
                  src={
                    "https://test-tod.pockethost.io/api/files/contact/" +
                    info.id +
                    "/" +
                    info.icon
                  }
                  alt=""
                  // style={{ height: "20px"}}
                />
                {/* <a href={info.link} target="_blank" rel="noreferrer">
                  <p>{info.data}</p>
                </a> */}
                {/* <h1>Email: contact@darksutra.com</h1>
            <h1>Instagram: <a href="https://www.instagram.com/dark.sutra/">@DARK.SUTRA</a></h1> */}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="copyright">Copyright @2024</div> */}
      </div>
    </div>
  );
};

export default Footer;
