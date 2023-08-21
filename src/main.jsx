import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={route}/>
      </React.StrictMode>
    </AuthProvider>
  </div>
)
