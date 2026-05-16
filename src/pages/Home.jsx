import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import API from '../services/api'
import BlogCard from '../components/BlogCard'
function Home() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const getBlogs = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await API.get('/blogs')
      setBlogs(response.data || [])
    } catch (err) {
      console.error(err)
      setError('Unable to load blogs. Please refresh the page.')
    } finally {
      setLoading(false)
    }
  }
  const handleDelete = async (id) => {
    try {
      await API.delete(`/blogs/${id}`)
      getBlogs()
    } catch (err) {
      console.error(err)
      setError('Unable to delete this blog. Please try again.')
    }
  }
  useEffect(() => {
    getBlogs()
  }, [])
  if (loading) {
    return (
      <div className="container mt-4">
        <div className="alert alert-info">Loading blogs...</div>
      </div>
    )
  }
  return (
    <div className="container mt-4">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} handleDelete={handleDelete} />
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-secondary">No blogs found.</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home

