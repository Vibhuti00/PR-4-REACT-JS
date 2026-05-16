import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h1 className="text-center mb-4">Dashboard</h1>
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Dashboard illustration" className="img-fluid rounded mb-4"/>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card p-3">
              <h3>Total Users</h3>
              <h4>120</h4>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-3">
              <h3>Total Blogs</h3>
              <h4>45</h4>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-3">
              <h3>Total Products</h3>
              <h4>30</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

