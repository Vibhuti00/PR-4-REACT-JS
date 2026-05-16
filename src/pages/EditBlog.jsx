import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../services/api'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function EditBlog() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    description: ''
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getBlog = async () => {
    try {
      const response = await API.get(`/blogs/${id}`)
      setFormData(response.data || {
        title: '',
        category: '',
        image: '',
        description: ''
      })
    } catch (err) {
      setError('Failed to load blog details. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      getBlog()
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await API.put(`/blogs/${id}`, formData)
      navigate('/')
    } catch (err) {
      setError('Unable to update the blog. Please try again.')
      console.error(err)
    }
  }

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="alert alert-info">Loading blog details...</div>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>Edit Blog</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Title"
            className="form-control mb-3"
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            placeholder="Category"
            className="form-control mb-3"
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            placeholder="Image URL"
            className="form-control mb-3"
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={formData.description}
            placeholder="Description"
            className="form-control mb-3"
            onChange={handleChange}
          ></textarea>
          <button className="btn btn-success">Update Blog</button>
        </form>
      </div>
    </div>
  )
}

export default EditBlog
