import React, { useState } from 'react'

import data from './birthday'

export const Birthday = () => {

    const [bdata,setdata] = useState(data);

    const cleardata = ()=>{
     

        setdata([]);
    }


  return (
    <div>{
       bdata.map((v,index)=>{
        return(<>
        <div key={index}>{v.id} {v.name} {v.age}</div>

        
       
        </>
        )
       }) 
        
        }
        
        <button onClick={cleardata}>clear</button>
        </div>
  )
}
