import React from "react";
import "./map.css";

const Map = () => {
  return (
    <div className="map_container">
      <iframe
        className="map_frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1685070037693!2d77.33707707520041!3d28.564702287158283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a24e65eb61%3A0x55dc716885b9b8bf!2sDarkSutra%20-%20Party%20Planner%20in%20Noida!5e0!3m2!1sen!2sin!4v1709618278951!5m2!1sen!2sin"
        // width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
