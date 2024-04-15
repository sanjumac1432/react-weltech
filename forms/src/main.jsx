import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Login } from './formwithformik&yup.jsx'
import { Validate } from './validate.jsx'
import { Costumvalidation } from './costumvalidation.jsx'
import { PracticeApi } from './practiceApi.jsx'
import { Validatewithmui } from './formwithmui.jsx'

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
<Validatewithmui/>
  </React.StrictMode>,
)
