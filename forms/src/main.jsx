import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Login } from './formwithformik&yup.jsx'
import { Validate } from './validate.jsx'
import { Costumvalidation } from './costumvalidation.jsx'

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
<Costumvalidation/>
  </React.StrictMode>,
)
