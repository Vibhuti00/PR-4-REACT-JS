import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../services/api'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function BlogDetails() {
  const { id } = useParams([])
  const [blog, setBlog] = useState({})
  const getBlog = async () => 
  {
    const response = await API.get(`/blogs/${id}`)
    setBlog(response.data)
  }
  useEffect(() => 
    {
      getBlog()
    }, []
  )
  return (
    <div className="container mt-4">
      <div className="card p-4">
        <img src={blog.image} className="img-fluid mb-3"/>
        <h2>{blog.title}</h2>
        <h5>{blog.category}</h5>
        <p>{blog.description}</p>
      </div>
    </div>
  )
}

export default BlogDetails
