// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import response from "react";


// function Read() {
//     const {id} = useParams();
//     const [users, setUser] = useState([])
//     useEffect(() =>{
//         axios.post("http://localhost:3000/read/" + id)
//         .then(response => 
//             console.log(response),
//             setUser(response.data)
//         )
//         .catch(err => console.log(err))
//     }, [])
//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                 <div className="p-2">
//                 <h2>User Details</h2>
//                 <h2>{users?.id}</h2>
//                 <h2>{users?.username}</h2>
//                 <h2>{users?.content}</h2>
//                 </div>
//                 <Link to="/" className="btn btn-primary me-2">Back</Link>
//                 <Link to={'/edit/${users.id}'} className="btn btn-primary me-2">Edit</Link>
//             </div>
//         </div>
//     )
// }

// export default Read