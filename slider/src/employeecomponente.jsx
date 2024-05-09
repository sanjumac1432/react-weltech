import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { render } from 'react-dom';
import { Button } from '@mui/material';
export const Employeecomponente = (props) => {
  console.log(props)



    const columns = [
  
      { field: 'name', headerName: 'Name', width: 300 },
      { field: 'email', headerName: 'email', width: 300 },
      { field: 'id', headerName: '', width: 300 , renderCell :(params)=>{

        return (<>
          <Button
             variant="contained"
             size="small"
             style={{ marginLeft: 16 }}
             onClick={()=>{props.editemp(params.id)}}
           >
             Edit
           </Button>
   
           <Button
             variant="contained"
             size="small"
             style={{ marginLeft: 16 }}
             onClick={()=>{ props.deletemp(params.id)}}
           >
             Delete
           </Button>
         
         
         </>)

      } },
    ]
  
  return (
    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={props.data} columns={columns} />
  </div>
  )
}
