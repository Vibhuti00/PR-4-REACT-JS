import React from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import API from '../services/api'
import BlogCard from '../components/BlogCard'
function Home() 
{
    const [blogs, setBlogs] = useState([])
    const getBlogs = async () => 
    {
        const response = await API.get('/blogs')
        setBlogs(response.data)
    }
    const handleDelete = async (id) => 
    {
        await API.delete(`/blogs/${id}`)
        getBlogs()
    }
    useEffect(() => 
    {
        getBlogs()
    }, [])
    return (
        <div className="container mt-4">
            <div className="row">
                {
                    blogs.map((blog) => 
                    (
                        <BlogCard key={blog.id} blog={blog} handleDelete={handleDelete}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Home

