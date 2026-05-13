import React from 'react'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Navbar()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <form action="" method="">
                    <Link className="navbar-brand" to="/">Blog App</Link>
                    <Link className="btn btn-light me-2" to="/">Home</Link>
                    <Link className="btn btn-warning" to="/create">Create Blog</Link>
                </form>
            </div>
        </nav>
    )
}
export default Navbar;


