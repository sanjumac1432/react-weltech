import React from 'react'
import axios from  "axios";
import { useState } from 'react';
import { useEffect } from 'react';

export const Axios = () => {


     const [data,Setdata]= useState([]);

     useEffect(()=>{

axios.get("https://jsonplaceholder.typicode.com/todos").then(y=>{
    Setdata(y.data)
})




     },[])

  return (
  <div>
    {
        data.map((value,index)=>{
            return (
                <div key={index
                }>{value.title}</div>
            )
        })
    }
        
  </div>
  )
}
