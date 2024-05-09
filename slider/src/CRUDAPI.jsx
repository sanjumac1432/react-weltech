import React from 'react'
import { Displaywithcurdapi } from './Displaywithcurdapi'
import { Fromcurdwithapi } from './fromcurdwithapi'
import { useState } from 'react'
import { Button } from '@mui/material'
export const Crudapi = () => {

  


    const [d, setd]= useState(null)
    const [open,setopne] = useState(false)

    const handelclose=()=>{

setopne(false);
setd(null)

    }

    const handelopne =()=>{
        setopne(true);
    }

    const handleOpenForAdd= ()=>{

      setopne(true);
    }


  return (
    <div>

<Button
             variant="contained"
             size="small"
             style={{ marginLeft: 16 ,marginBottom:20 }}
            onClick={handleOpenForAdd}
           >
             add employee
           </Button>

        <Displaywithcurdapi handelopne={handelopne}    open = {open}/>
        
        <Fromcurdwithapi handelclose={handelclose} open= {open} d={d}/>
    </div>
  )
}
