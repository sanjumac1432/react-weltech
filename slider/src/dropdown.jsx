import { useState } from "react";

export const Contactmanage = () => {
  const [details, setdata] = useState({
    contact: "Home",
    FullName: "",
    number: "",
  });

  const handeldeatails = (e) => {
    setdata({ ...details, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };
  
  return (
    <div>
      <form onSubmit={handlesubmit}>
      
        <label>Contact On : </label>
        <select onChange={handeldeatails} name="contact">
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Phone">Phone</option>
        </select>
        <input type="number" name="number" onChange={handeldeatails} />
    

        <br />

        <br />
        <label>Full Name : </label>
        <input type="text" name="FullName" onChange={handeldeatails} />

        <br />
        <br />
        <button type="submit" value="Save" >save</button>
      </form>
    </div>
  );
};