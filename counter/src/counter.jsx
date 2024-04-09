import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const plushcount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const minuscount = ()=>{
    setCount(count - 1);
    console.log(count);
  }

  return (
    <>
      <button onClick={minuscount}>-</button>

      <div>{count} </div>

      <button onClick={plushcount}>+</button>
    </>
  );
};
