import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export const Formcomponents = (props) => {
  
  const { open, handleClose, data, setdata, index ,setindex} = props;
  const [form, setform] = useState({
    name: "",
    email: "",
    id: 0,
  });

  useEffect(() => {
    if (index >= 0) {
      setform(data[index]);
    }
    else{
     setform({
      name :"",
      email: "",
      id : 0
     })
    }
  }, [index,open]);
  const handelchange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const savedata = () => {
    let p = [...data];

    if (index < 0) {
      p.push({ ...form, id: p.length });
    } 
    else {
      p[index] = form;
    }
    setindex(-1)

    setdata(p);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries.entries();
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="name"
          type="text"
          value={form.name}
          fullWidth
          variant="standard"
          onChange={handelchange}
        />

        <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={form.email}
          fullWidth
          variant="standard"
          onChange={handelchange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="button" onClick={savedata}>
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
