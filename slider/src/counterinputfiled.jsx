import React, { useState } from "react";

export const Counterinputfiled = () => {
  const [count, setcount] = useState(0);
  const [inputvalue, setvalue] = useState({
    number: "",
  });

  const hendelinputvalue = (e) => {
    setvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };
  


  const plus = () => {
    setcount(count + Number(inputvalue.number));
    console.log(count);
  };
  const minus = () => {
    if(count - Number(inputvalue.number)>=0)
    setcount(count - Number(inputvalue.number));
    console.log(count);
  };

  return (
    <div>
      <form >
        <input type="text" name="number" onChange={hendelinputvalue} />
        
        <button type="button" onClick={plus}>+</button>
        <button  type="button" onClick={minus}>-</button>
        <div>{count}</div>
      </form>
     
    </div>
  );
};
