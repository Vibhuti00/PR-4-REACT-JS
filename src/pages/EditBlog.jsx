import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../services/api'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function EditBlog() 
{
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState([])
  const getBlog = async () => 
  {
    const response = await API.get(`/blogs/${id}`)
    setFormData(response.data)
  }
  useEffect(() => 
  {
    getBlog()
  }, [])

  const handleChange = (e) => 
  {
    setFormData(
    {
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => 
  {
    e.preventDefault()
    await API.put(`/blogs/${id}`, formData)
    navigate('/')
  }
  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={formData.title} className="form-control mb-3" onChange={handleChange}/>
          <input type="text" name="category" value={formData.category} className="form-control mb-3" onChange={handleChange}/>
          <input type="text" name="image" value={formData.image} className="form-control mb-3" onChange={handleChange}/>
          <textarea name="description" value={formData.description} className="form-control mb-3" onChange={handleChange}></textarea>
          <button className="btn btn-success">Update Blog</button>
        </form>
      </div>
    </div>
  )
}

export default EditBlog
