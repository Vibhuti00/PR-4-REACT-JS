import React from 'react'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Login()
{
  const [formData, setFormData] = useState(
  {
    email: '',
    password: ''
  })
  const handleChange = (e) => 
  {
    setFormData(
    {
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => 
  {
    e.preventDefault()
    alert('Login Successfully')
    console.log(formData)
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Login Page</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" placeholder="Enter Email" className="form-control" onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="password" placeholder="Enter Password" className="form-control" onChange={handleChange}/>
              </div>
              <button className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
