import React from 'react'
import {Routes,Route}  from 'react-router-dom'

import { Html } from './Html'
import { Css } from './Css'
import { Home } from './Home'
import { Js } from './Js'

export const W3school = () => {
  return (
    
    <Routes>
        <Route path='/home'  element={<Home/>}/>
        <Route path='/html' element={<Html/>}/>
        <Route path='/css' element={<Css/>}/>
        <Route path='/js' element={<Js/>}/>
    </Routes>
    

  )
}
