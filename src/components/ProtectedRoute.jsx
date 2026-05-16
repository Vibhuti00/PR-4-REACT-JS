import React from 'react'
import { Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function ProtectedRoute({ children }) 
{
  const isLogin = true
  return (
    <div>{isLogin ? children : <Navigate to="/" />}</div>
  )
}
export default ProtectedRoute

