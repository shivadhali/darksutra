import React from "react";
import "../styles.css";
import "./about.css";
import PocketBase from "pocketbase";
import { useState, useEffect } from "react";

const url = "https://test-tod.pockethost.io/";
const client = new PocketBase(url);
client.autoCancellation(false);

export default function About() {

    const [about, setAbout] = useState([]);
  
    useEffect(() => {
      client
        .collection("about")
        .getFullList()
        .then((res) => {
          setAbout(res);
          console.log(res);
        });
  
    }, []);

    return (
        <div>
        <div class="about-container">
        <div class="about">
            <h1>About Us</h1>
        </div>
        {about.map((info) => (
            <div class="who" key={info.id}>
            <h1>{info.about}</h1>
            <p>{info.about_desc}</p>
            
        </div>
        ))}
        
    </div>
        </div>
    )
}
