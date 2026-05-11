import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Home() {
    const [blog, setBlog] = useState([]);
    const [title, setTitle] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        console.log(e.target.value);
    }                                  
    return (
        <div>
            <div className="container mt-5">
                <div><h2>Home Page</h2></div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center mb-4">Date Form</h2>
                        <form>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                </div>
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action active">category</a>
                                    <a href="#" className="list-group-item list-group-item-action">Lifestyle</a>
                                    <a href="#" className="list-group-item list-group-item-action">Finance & Business</a>
                                    <a href="#" className="list-group-item list-group-item-action">Health & Fitness</a>
                                    <a href="#" className="list-group-item list-group-item-action">Technology</a>
                                    <a href="#" className="list-group-item list-group-item-action">Travel & Photography</a>
                                    <a href="#" className="list-group-item list-group-item-action">Food & Cooking</a>
                                    <a href="#" className="list-group-item list-group-item-action">Fashion & Beauty</a>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Author</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Author" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">URL</label>
                                    <input type="url" className="form-control" id="exampleFormControlInput1" placeholder="https://example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Select Date</label>
                                    <input type="date" className="form-control" id="date" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home

