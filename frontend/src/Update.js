import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import response from "react";
import { useEffect } from "react";
import { useState } from "react";

function Update() {

    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() =>{
        axios.get("http://localhost:3000/read/" + id)
        .then(response => 
            console.log(response),
            setValues({...values, username: response.data?.username, content: response.data?.content})
        )
        .catch(err => console.log(err))
    }, [])

    const [values, setValues] = useState({
        username: '',
        content: ''
    })
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/update/'+id, values)
        .then(response => {
            console.log(response)
            navigate('/')
        }).catch(err => console.log(err));
    }
    return(
        <div className="d-flex vh-100 bg-primary justify-center align-items-center">
            <div className="w-50 bg-white roundedp-3">
                <form onSubmit={handleUpdate}>
                    <h2>Update Post</h2>
                    <div className="mb-2">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Enter Name" className="form-control" value={values.username} onChange={e => setValues({...values, username:e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Blog</label>
                        <input type="text" placeholder="Make Post" className="form-control" value={values.content} onChange={e => setValues({...values, content:e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-success">Update Post</button>
                </form>
            </div>
        </div>
    )
}

export default Update