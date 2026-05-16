import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({ blog, handleDelete }) 
{
  const handleDeleteClick = () => {
    handleDelete(blog.id);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={blog.image || "https://via.placeholder.com/400x200?text=No+Image"} alt={blog.title || "Blog image"} className="card-img-top blog-img" style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.category}</p>
          <div className="d-flex gap-2">
            <Link className="btn btn-primary" to={`/blog/${blog.id}`}> View</Link>
            <Link className="btn btn-success" to={`/edit/${blog.id}`}> Edit</Link>
            <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogCard

