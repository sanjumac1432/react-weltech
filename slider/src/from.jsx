import React, { useState } from 'react'

export const From = () => {


    const [data,Setdata]= useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        conformPassword : ''
    })


    const handelinput = (e)=>{

        Setdata({...data, [e.target.name]: e.target.value})

    }

    // const lastname =(e)=>{
    //     Setdata( {...data, 'lastName': e.target.value})

    // }

    // const email = (e)=>{
    //     Setdata({ ...data,"email":e.target.value})
    // }

    // const password = (e)=>{
    //     Setdata({ ...data,"password":e.target.value})
    // }
    // const conformpassword = (e)=>{
    //     Setdata({ ...data,"conformPassword":e.target.value})
    // }

    const submitForm=(e)=>{
e.preventDefault()
console.log(data)
    }


  return (
    <div>
<form onSubmit={submitForm}>

<label>firstName</label>
<input type="text" name='firstName' onChange={handelinput} />

<label>lastName</label>
<input type="text" name='lastName' onChange={handelinput} />

<label>email</label>
<input type="email" name='email' onChange={handelinput} />

<label>password</label>
<input type="password" name='password' onChange={handelinput} />

<label> Conform password</label>
<input type="password" name='conformPassword' onChange={handelinput} />

<input type="submit"  name='submit'/>



</form>


    </div>
  )
}
