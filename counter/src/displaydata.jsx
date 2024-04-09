import React, { useEffect } from "react";
import { useState } from "react";

export const Displaydata = () => {
  const [data, setdisplaydata] = useState([]);

 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((y) => y.json())
      .then((y) => {
        setdisplaydata(y);
        console.log(y);
      });
  }, []);

  const cleardata = (index)=>{

    const d = [...data]
    d.splice(index,1)
    setdisplaydata(d);
  }

  return (
    <div>
      {data.map((value,index) => {
        return(<div key={index}>{value.title}
        {
            (index % 2 == 0) && <button onClick={()=>{
                cleardata(index) }}>clear</button>
        }
        
        </div>) 
   
      })}
    </div>
  );
};
