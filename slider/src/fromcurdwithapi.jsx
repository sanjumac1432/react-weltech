import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'

export const Fromcurdwithapi = (props) => {


  const { handelclose , open , d} = props;


  const [data,setdata]= useState({
    firstname:"",
    lastname : ""
  })

  console.log(data)

  useEffect(()=>{

    if(d)
    {
       
        setdata({...d,firstname:d.firstname,lastname: d.lastname});
    }

    console.log(d);

},[d])


const handleSave = ()=>{

  // let method1 = d? "PUT" : "POST"
  let url =  d? `https://660268879d7276a755532a05.mockapi.io/users/${data.id}` : "https://660268879d7276a755532a05.mockapi.io/users"
  fetch(url,{
    method:d? "PUT" : "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type':"Application/json"
    }
  }).then(y=>y.json())
.then(y=>{

  setdata({firstname: "",lastname:""});
  handelclose();
  // setdata(y);
})

}

const handleChange = (e)=>{


    setdata({...data,[e.target.name]: e.target.value});

}
  
  return (
    <Dialog
    open={open}
    onClose={handelclose}
    PaperProps={{
      component: 'form',
      onSubmit: (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const email = formJson.email;
        console.log(email);
        handelclose();
      },
    }}
  >
    <DialogTitle>details</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        required
        margin="dense"
        id="firstname"
        name="firstname"
        label="firstname"
        type="text"
        fullWidth
        value={data?.firstname}
        variant="standard"
        onChange={handleChange}
      />
       <TextField
        autoFocus
        required
        margin="dense"
        id="lastname"
        name="lastname"
        label="last name"
        type="text"
        value={data?.lastname}
        fullWidth
        variant="standard"
        onChange={handleChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handelclose}>Cancel</Button>
      <Button type="button" onClick={handleSave}>save</Button>
    </DialogActions>
  </Dialog>

  )
}
