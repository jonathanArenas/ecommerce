import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Public from './Routes/public'
import { AuthProvider } from './context/Auth.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <AuthProvider>
      <Public />
    </AuthProvider>
  </BrowserRouter>
)
