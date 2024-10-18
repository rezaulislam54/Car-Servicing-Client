import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/BasicRoutes'
import AuthProvider from './provider/AuthProvider'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>
);
