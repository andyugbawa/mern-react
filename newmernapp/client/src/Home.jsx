import React from 'react'
import { useState } from 'react'
import "./style.css"


function Home() {
 const [flippedCards, setFlippedCards] = useState({});

    const handleFlip = (card) => {
  setFlippedCards((prev) => ({
    ...prev,
    [card]: !prev[card],
  }));
};

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
        <div className={`flip-card${flippedCards.card1 ? "fliiped" :""}`}
         onClick={()=>handleFlip("card1")}
        >
          
        <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/city hunter.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>City Hunter</h2>
      <p>Action Movie</p>
    </div>

  </div>
</div>
        </div>

 
        <div className={`flip-card${flippedCards.card2 ? "fliiped" :""}`}
         onClick={()=>handleFlip("card2")}
        >
      <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="img" src="/dune part2.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>DUNE Part 2</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card${flippedCards.card3 ? "fliiped" :""}`}
         onClick={()=>handleFlip("card3")}
        >
        
         <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/gladiator2.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>Gladiator2</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card${flippedCards.card4 ? "fliiped" :""}`}
         onClick={()=>handleFlip("card4")}
        
        > 
        
        <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/heart of a hunter.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>Heart of a  Hunter</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div> 

        </div>
         
        <div className="content1">
        <div className={`flip-card${flippedCards.card5 ? "fliiped" :""}`}
         onClick={()=>handleFlip("card5")}
        >
           <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/hounds of war.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>Hounds of War</h2>
      <p>Action Movie</p>
    </div>

      </div>

        </div>
        <div className={`flip-card${flippedCards.card6 ? "fliiped" :""}`}
         onClick={()=>handleFlip("card6")}
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/sonic.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>Sonic</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card${flippedCards.card7 ? "fliiped" :""}`}
         onClick={()=>handleFlip("card7")}
        
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/red one.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>RED ONE</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>

      
         
      <div className="content2">
        <div className={`flip-card${flippedCards.card8 ? "fliiped" :""}`}
         onClick={()=>handleFlip("card8")}
        >
 <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/sonic.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>Sonic</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card${flippedCards.card9 ? "fliiped" :""}`}
         onClick={()=>handleFlip("card9")}
        >
           <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/venom.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>Venom</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card${flippedCards.card10 ? "fliiped" :""}`}
         onClick={()=>handleFlip("card10")}
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/wanted man.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>Wanted Man</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card${flippedCards.card11 ? "fliiped" :""}`}
         onClick={()=>handleFlip("card11")}
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/moana2.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>City Hunter</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>


        </div>  

        
      </div>
   


    </div>


  ) 
}

export default Home