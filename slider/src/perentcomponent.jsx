import React, { useState } from 'react'
import { Formcomponents } from './formcomponents'
import Button from '@mui/material/Button';
import { Employeecomponente } from './employeecomponente';

export const Perentcomponent = () => {

    const [open , setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


  return (
    <>

<Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

<Formcomponents  open ={open}  handleClose={handleClose}/>

<Employeecomponente/>

    </>
  )
}
