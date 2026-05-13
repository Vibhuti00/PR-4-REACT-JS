import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function BlogCard({ blog, handleDelete }) 
{
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={blog.image} className="card-img-top" height="200" />
        <div className="card-body">
          <h5>{blog.title}</h5>
          <p>{blog.category}</p>
          <div className="d-flex gap-2">
            <Link className="btn btn-primary" to={`/blog/${blog.id}`}> View</Link>
            <Link className="btn btn-success" to={`/edit/${blog.id}`}> Edit</Link>
            <button className="btn btn-danger" onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogCard

