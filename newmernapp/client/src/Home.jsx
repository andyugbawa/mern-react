import React from 'react'
import { useState } from 'react'
import "./style.css"


function Home() {
 const [fliped, setFliped] =useState(false)

  return(
    <div>

    <h1>Welcome Home</h1>

    <div>
            {/* <img src="/action.jpeg" alt="Movie" /> */}
    </div>
       
       <div>
        
       </div>
      <div className="parent slide-left">

      <div className="content">
        <div className="box1">
        <img src="/action.jpeg" alt="Movie" />
        </div>

{/* 
        <div className="box2">
        </div>
        <div className="box3">
        </div>
        <div className="box4">
        </div> */}

        </div>
{/*          
        <div className="content1">
        <div className="box5">
        </div>
        <div className="box6">
        </div>
        <div className="box7">
        </div>

        </div>  */}
{/*         
      <div className="content2">
        <div className="box1">
        </div>
        <div className="box2">
        </div>
        <div className="box3">
        </div>
        <div className="box4">
        </div>


        </div>  */}

        
      </div>
   


    </div>


  ) 
}

export default Home