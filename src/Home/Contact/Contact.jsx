import React from "react";
import "./contact.css"
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";


const url = "https://test-tod.pockethost.io/";
const client = new PocketBase(url);
client.autoCancellation(false);

export default function Contact() {

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
        <div class="contact-container">
        <div class="contact">
            <h1>Contact Us</h1>
        </div>

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
                    />
            <a href={info.link} target="_blank" rel="noreferrer"><p>{info.data}</p></a>
            {/* <h1>Email: contact@darksutra.com</h1>
            <h1>Instagram: <a href="https://www.instagram.com/dark.sutra/">@DARK.SUTRA</a></h1> */}
        </div>
        ))}
        {/* {about.map((info) => (
            <div class="who" key={info.id}>
            <h1>{info.about}</h1>
            <p>{info.about_desc}</p>
            
        </div>
        ))} */}
        
    </div>
        </div>
    )
}