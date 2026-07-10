import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Comments() {

     const navigate = useNavigate();
  
  const handleHome = () => {
  navigate("/home");
};

  return (
    
    <div>
       <div>
        <button onClick={handleHome}>Home</button>
       </div>

      <h1>COMMENTS</h1>
    </div>
  )
}

export default Comments
