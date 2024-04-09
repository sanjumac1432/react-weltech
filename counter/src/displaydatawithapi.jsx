import React, { useEffect, useState } from 'react'

export const Displaydatawithapi = () => {

    const [data,setdata] = useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts").then(y=> y.json()).then(y=>{
            setdata(y);
            console.log(y);
        })

    },[])


  return (
    <div>{
        
        data.map((v,index)=>{
            
            return(
                <div key={index}> {v.body}</div>
            )
        })
        
        
        }</div>
  )
}
