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
        <div className="card1">
        <img className='img' src="/city hunter.jpeg" alt="Movie" />
        </div>

 
        <div className="card2">
             <img className='img' src="/dune part2.jpeg" alt="Movie" />
        </div>
        <div className="card3">
           <img className='img' src="/gladiator2.jpeg" alt="Movie" />
        </div>
        <div className="card4">
           <img className='img' src="/heart of a hunter.jpeg" alt="Movie" />
        </div> 

        </div>
         
        <div className="content1">
        <div className="card5">
           <img className='img' src="/hounds of war.jpeg" alt="Movie" />
        </div>
        <div className="card6">
           <img className='img' src="/sonic.jpeg" alt="Movie" />
        </div>
        <div className="card7">
           <img className='img' src="/red one.jpeg" alt="Movie" />
        </div>

        </div>  
         
      <div className="content2">
        <div className="card8">
           <img className='img' src="/sonic.jpeg" alt="Movie" />
        </div>
        <div className="card9">
           <img className='img' src="/venom.jpeg" alt="Movie" />
        </div>
        <div className="card10">
           <img className='img' src="/wanted man.jpeg" alt="Movie" />
        </div>
        <div className="card11">
           <img className='img' src="/moana2.jpeg" alt="Movie" />
        </div>


        </div>  

        
      </div>
   


    </div>


  ) 
}

export default Home