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

        
        <div className='text-content'>
           <h2>CLICK EACH MOVIE CARD FOR INFO</h2>
        </div>

      <div className="content">
        <div className={`flip-card ${flippedCards.card1 ? "flipped" :""}`}
         onClick={()=>handleFlip("card1")}
        >
          
        <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/alpha.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>ALPHA</h2>
      <p >Action Movie</p>
    </div>

  </div>
</div>
 
        <div className={`flip-card ${flippedCards.card2 ? "flipped" :""}`}
         onClick={()=>handleFlip("card2")}
        >
      <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="img" src="/booster.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>I LOVE BOOSTERS</h2>
      <p>Action Movie</p>
    </div>

      </div>
        </div>

        <div className={`flip-card ${flippedCards.card3 ? "flipped" :""}`}
         onClick={()=>handleFlip("card3")}
        >
        
         <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/furious.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>FURIOUS</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>

        <div className={`flip-card ${flippedCards.card4 ? "flipped" :""}`}
         onClick={()=>handleFlip("card4")}
        
        > 
        
        <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/minions.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>MINIONS</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div> 






        </div>

            
        <div className="content1">
        <div className={`flip-card ${flippedCards.card5 ? "flipped" :""}`}
         onClick={()=>handleFlip("card5")}
        >
           <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/motor city.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>MOTOR CITY</h2>
      <p>Action Movie</p>
    </div>

      </div>

        </div>
        <div className={`flip-card ${flippedCards.card6 ? "flipped" :""}`}
         onClick={()=>handleFlip("card6")}
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/mutiny.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>MUTINY</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card ${flippedCards.card7 ? "flipped" :""}`}
         onClick={()=>handleFlip("card7")}
        
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/nagabandham.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>NAGABANDHAM</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        </div>

          
         
      <div className="content2">
        <div className={`flip-card ${flippedCards.card8 ? "flipped" :""}`}
         onClick={()=>handleFlip("card8")}
        >
 <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/spiderman.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>SPIDERMAN BRAND NEW DAY</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card ${flippedCards.card9 ? "flipped" :""}`}
         onClick={()=>handleFlip("card9")}
        >
           <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/super girl.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>SUPERGIRL</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card ${flippedCards.card10 ? "flipped" :""}`}
         onClick={()=>handleFlip("card10")}
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/toy story 5.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>TOY STORY 5</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card ${flippedCards.card11 ? "flipped" :""}`}
         onClick={()=>handleFlip("card11")}
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/washington.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>YOUNG WASHINGTON</h2>
      <p>Action Movie</p>
    </div>

  </div>

        </div>
        </div>  
        
      
        </div>
      

      <div className="parent slide-right">

        
        <div className='text-content'>
           <h2>CLICK EACH MOVIE CARD FOR INFO</h2>
        </div>

      <div className="content">
        <div className={`flip-card ${flippedCards.card1 ? "flipped" :""}`}
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
 
        <div className={`flip-card ${flippedCards.card2 ? "flipped" :""}`}
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

        <div className={`flip-card ${flippedCards.card3 ? "flipped" :""}`}
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

        <div className={`flip-card ${flippedCards.card4 ? "flipped" :""}`}
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
        <div className={`flip-card ${flippedCards.card5 ? "flipped" :""}`}
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
        <div className={`flip-card ${flippedCards.card6 ? "flipped" :""}`}
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
        <div className={`flip-card ${flippedCards.card7 ? "flipped" :""}`}
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
        </div>

          
         
      <div className="content2">
        <div className={`flip-card ${flippedCards.card8 ? "flipped" :""}`}
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
        <div className={`flip-card ${flippedCards.card9 ? "flipped" :""}`}
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
        <div className={`flip-card ${flippedCards.card10 ? "flipped" :""}`}
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
        <div className={`flip-card ${flippedCards.card11 ? "flipped" :""}`}
         onClick={()=>handleFlip("card11")}
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/moana2.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2>MOANA 2</h2>
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