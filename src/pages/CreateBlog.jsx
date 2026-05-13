import React from 'react'
import { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function CreateBlog() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState([])
  const handleChange = (e) => 
  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => 
  {
    e.preventDefault()
    await API.post('/blogs', formData)
    navigate('/')
  }
  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>Create Blog</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" className="form-control mb-3" onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" className="form-control mb-3" onChange={handleChange}/>
          <input type="text" name="image" placeholder="Image URL" className="form-control mb-3" onChange={handleChange}/>
          <textarea name="description" placeholder="Description" className="form-control mb-3" onChange={handleChange}></textarea>
          <button className="btn btn-primary">Add Blog</button>
        </form>
      </div>
    </div>
  )
}
export default CreateBlog

