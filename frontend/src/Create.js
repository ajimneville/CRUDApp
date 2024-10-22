import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/index.css";

function Create() {
    const [values, setValues] = useState({
        username: "",
        content: ""
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/users", values)
        .then(response => {
            console.log(response);
            navigate('/');
        })
      .catch(err => console.log(err));
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-center align-items-center">
            <div className="w-50 bg-white roundedp-3">
                <form onSubmit={handleSubmit}>
                    <h2>Make a Post</h2>
                    <div className="mb-2">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Enter Name" className="form-control" onChange={e => setValues({...values, username:e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Blog</label>
                        <input type="text" placeholder="Make Post" className="form-control" onChange={e => setValues({...values, content:e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-success">Create Post</button>
                </form>
            </div>
        </div>
    )
}

export default Create;