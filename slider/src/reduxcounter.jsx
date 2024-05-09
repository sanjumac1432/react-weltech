import React from 'react'
import { dec, inc } from './action/Actionreducer'
import { useDispatch, useSelector } from 'react-redux'

export const ReduxCounter = () => {

    const a = useSelector(y=>y)
    const d=useDispatch()


    const incr= ()=>{

        d(inc())

    }
    const decr =()=>{
        d(dec())
    }
  return (
    <div>{a}
    


    <button onClick={incr}>+</button>
    <button onClick={decr}>-</button>
    
    </div>
  )
}
