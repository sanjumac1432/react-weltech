import React from 'react'

export const Grocreydisplay = (props) => {



 
  console.log(props)
  return (
    <div>
{
     
     props.items.map((item, index)=>{

      return (
        <div key={index}>{item}  <button>delete</button></div>
      )
       })

}


    </div>
  )
}
