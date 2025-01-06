import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import AuthProvider from './Components/AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './Components/ThemeContext/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>

    </AuthProvider>
  </StrictMode>,
)
