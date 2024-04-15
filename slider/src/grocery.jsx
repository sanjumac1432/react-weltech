import React, { useState } from "react";
import { Grocreydisplay } from "./grocreydisplay";

export const Grocery = () => {
  const [listdata, setlistdata] = useState("");
  const [items, setitems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let item = [...items];
    item.push(listdata);
    setitems(item);
    
    
  }



  const listitem = (e) => {
    setlistdata(e.target.value);

  };

  const deleteitem = (index)=>{

    let p = [...items];
    p.splice(index, 1)
    setitems(p);

  }

  return (
    <>
      <h1>Add a grocery item:</h1>

      <br />

      <input type="text" placeholder="add item ..." onChange={listitem} />
      <button onClick={handleSubmit}>+</button>

      {<Grocreydisplay items={items} delete= {deleteitem} />}
    </>
  );
};
