import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Reviwe } from './reviwe.jsx'
import { From } from './from.jsx'
import { Counterinputfiled } from './counterinputfiled.jsx'
import { Contactmanage } from './dropdown.jsx'
import { Axios } from './axios.jsx'
import { Loginwithformik } from './loginwithformik.jsx'
import { Formvalidation } from './formvalidation.jsx'
import { Univercityfrom } from './univercityfrom.jsx'
import { Validation } from './selfvalidation.jsx'
import { Grocery } from './grocery.jsx'
import { Perentcomponent } from './perentcomponent.jsx'
import { W3school } from './W3school.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Crudewithapi } from './crudewithapi.jsx'
import { ReduxCounter } from './reduxcounter.jsx'
import {Provider}   from 'react-redux'
import store from './store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

<Provider store={store}>
<ReduxCounter/>
</Provider>

 
    </BrowserRouter>

  </React.StrictMode>,
)
