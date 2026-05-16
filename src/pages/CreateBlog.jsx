import React, { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'
function CreateBlog() 
{
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
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
    try {
      await API.post('/blogs', formData)
      setSuccessMessage('Blog Added Successfully!')
      setTimeout(() => {
        navigate('/')
      }, 1500)
    } catch (error) {
      setSuccessMessage('Please try again.')
    }
  }
  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>Create Blog</h2>
        {successMessage && (
          <div className={`alert ${successMessage.includes('Successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form-control mb-3"
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="form-control mb-3"
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="form-control mb-3"
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            className="form-control mb-3"
            onChange={handleChange}
          ></textarea>
          <button className="btn btn-primary">
            Add Blog
          </button>
        </form>
      </div>
    </div>
  )
}
export default CreateBlog
