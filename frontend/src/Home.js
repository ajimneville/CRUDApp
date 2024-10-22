import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([])
    useEffect(() => {
      axios.get("http://localhost:3000/")
      .then(res => {
        setData(res.data); // Update state with received data
      })
      .catch(err => console.log(err));
    }, [])
    // console.log(res)
    const handleDelete = (id) => {
      axios.delete("http://localhost:3000/delete/"+id)
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
    }
    
    return(
      <div className="d-flex w-100 h-100 bg-primary align-items-center">
        {/* <h1>Hello friends</h1> */}
        <div className="w-100 h-100 bg-white rounded p-3">
          <h2>Blogging Page</h2>
          <div className="d-flex justify-content-end">
          {/* <p>Make a Post</p>
          <input className="message" type="text" /> */}
          <Link to="/create" className="btn btn-success">Create Post</Link>
          </div>
        <table className="table">
          <thead>
            <tr className="tr">
              <th>id</th>
              <th>username</th>
              <th>content</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((users, index) => {
                return <tr key={index}>
                    <td>{users.id}</td> 
                    <td>{users.username}</td> 
                    <td>{users.content}</td> 
                    <td>
                      <Link to={'/read/${users.id}'} className="btn btn-sm btn-info">Read</Link>
                      <Link to={'/edit/${users.id}'} className="btn btn-sm btn-primary mx-2">Edit</Link>
                      <button onClick={ () => handleDelete(users.id)} className="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
          })}
          </tbody>
        </table>
        </div>
        <div class="col">
              <img src="https://th.bing.com/th/id/OIP.QlCF-UgsfbrFs4QbezyWuAHaE7?w=291&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7" class="pull-right"  alt="our Logo"/>
        </div>
      </div>
    )
}

export default Home;
