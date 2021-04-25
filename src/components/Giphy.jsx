import React, { useEffect, useState } from "react";
import axios from "axios";

const Giphy = () => {

  useEffect(() => {
    const fetchData = async () => {
      axios("api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "bobN2UYDcCQoe3F3RKpP6kZ6GPnAfdu2"
        }
      })
    }




  return <div className="">Giphy</div>;
};

export default Giphy;
