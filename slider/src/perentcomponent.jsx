import React, { useState } from "react";
import { Formcomponents } from "./formcomponents";
import Button from "@mui/material/Button";
import { Employeecomponente } from "./employeecomponente";

export const Perentcomponent = () => {
  const [data, setdata] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setindex] = useState(-1);

  const handleClickOpen = () => {
    setOpen(true);
   
  };

  const deletemp = (index) => {
    let p = [...data];
    p.splice(index, 1);
    setdata(p);
  };

  const editemp = (index) => {
  setOpen(true)
  
  setindex(index)
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button sx={{ mb: 4 }} variant="outlined" onClick={handleClickOpen}>
        enter employee details
      </Button>

      <Formcomponents
        open={open}
        handleClose={handleClose}
        data={data}
        setdata={setdata}
        index={index}
        setindex= {setindex}
      />
      

      <Employeecomponente data={data} deletemp={deletemp} editemp={editemp}/>
    </>
  );
};
