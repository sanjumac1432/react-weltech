import React, { useEffect, useState } from "react";


import axios from "axios";
import { Productdisplay } from "./productdisplay";

export const PracticeApi = () => {
  // product Api

  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((y) => {
      setdata(y.data);
    }, []);
  });

  return (
    <>
      {data.map((value, index) => {
        return <Productdisplay key={index} item={value}></Productdisplay>
      })}
    </>
  );
};
