import React from 'react'
import { useState } from 'react'
import "./style.css"
import { Link } from "react-router-dom";



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

      <div className='log-out'>
        <button>Log out</button>
      </div>

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
      <p className='genre'>Action Movie</p>
      <p>Keda, a young hunter who is separated from his tribe during a buffalo hunt. To survive the harsh winter, he befriends an injured wolf, beginning a historic bond.</p>
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
      <p className='genre'>Comedy Movie</p>
      <p>It follows the Velvet Gang—a crew of shoplifters ("boosters") who steal high-end luxury clothes to redistribute them at lower prices. When an elite designer targets them, the gang retaliates, launching a chaotic, sci-fi-fueled anti-capitalist crusade.</p>
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
      <p className='genre'>Action Movie</p>
      <p>The movie is set in an unnamed city in Southeast Asia and follows Wang Wei, a mute handyman whose unassuming day job conceals a lifetime of martial arts training. His daughter, Rainy, visits him from mainland China during her school holidays and pushes him to relocate and live with her instead. Wang refuses, the two argue, and Rainy storms off into the city.</p>
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
      <p className='genre'>Action Movie</p>
    <p>In 1920s Hollywood, a new tribe of Minions becomes accidental silent film sensations but loses everything when "talkies" arrive. Desperate, friends James and Henry try to shoot their own monster movie using a stolen spellbook. They accidentally summon real, globe-threatening monsters and must team up to save the world.</p>
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
      <p className='genre'>Action Movie</p>
      <p>In 1970s Detroit, auto-worker John Miller is framed for a major drug crime by a ruthless mobster and his corrupt police contacts. Years later, he emerges from prison seeking bloody vengeance to reclaim his life and the woman he loves. Directed by Potsy Ponciroli, the action thriller is famously "virtually silent," prioritizing brutal choreography and visuals over dialogue.</p>
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
      <p className='genre'>Action Movie</p>
      <p>Cole Reed (Jason Statham) is a former Special Forces soldier and ex-NYPD officer who works in private security. When his billionaire boss is murdered in front of him and he is framed for the crime, Reed goes on the run to clear his name and unravel a massive international conspiracy.</p>
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
      <p className='genre'>Action Movie</p>
      <p>The Secret Treasure (2026) is a Telugu-language mythological action-adventure film directed by Abhishek Nama. The story follows a ruthless mercenary, Abdali, who hunts for the sacred Brahma Kamalam (a golden lotus) and an ancient manuscript to unlock the mystical Nagabandham—a supernatural gateway concealing a priceless treasure.</p>
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
      <p className='genre'>Action Movie</p>
      <p>One More Day" storyline, where Peter Parker made a deal with the demon Mephisto to save Aunt May's life at the cost of his marriage to Mary Jane, his identity is wiped from everyone's memories.</p>
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
      <p className='genre'>Action Movie</p>
      <p>Supergirl follows a cynical, grief-stricken Kara Zor-El as she parties across the galaxy with her pet dog Krypto. When a ruthless adversary murders the father of a young galactic warrior, Ruthye Marye Knoll, Supergirl reluctantly joins her on an epic, interstellar journey of vengeance and justice.</p>
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
      <p className='genre'>Cartoon Movie</p>
      <p>Jessie steps up as the new leader of Bonnie's toys as they face their biggest rival yet: a frog-shaped tablet named Lilypad. When Bonnie becomes addicted to the screen, alienating her peers and neglecting her toys, the gang goes on an adventure to help her make real-life friends.</p>
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
      <p className='genre'>Action Movie</p>
      <p>Young Washington is a 2026 historical war drama directed by Jon Erwin. It follows the 22-year-old George Washington (William Franklyn-Miller) as he rises above a modest station to serve in the French and Indian War. Driven by ambition, his early military missteps during the Jumonville Glen ambush inadvertently spark global conflict before he grows into a capable, respected leader at the Battle of the Monongahela.</p>
      
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
      <img className="img" src="/crime 101.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>Crime 101</h2>
      <p className='genre'>Action Movie</p>
    </div>

  </div>
</div>
 
        <div className={`flip-card ${flippedCards.card2 ? "flipped" :""}`}
         onClick={()=>handleFlip("card2")}
        >
      <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="img" src="/desert warior.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>Desert Warior</h2>
      <p className='genre'>Action Movie</p>
    </div>

      </div>
        </div>

        <div className={`flip-card ${flippedCards.card3 ? "flipped" :""}`}
         onClick={()=>handleFlip("card3")}
        >
        
         <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/goat.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>Goat</h2>
      <p className='genre'>Cartoon Movie</p>
    </div>

  </div>

        </div>

        <div className={`flip-card ${flippedCards.card4 ? "flipped" :""}`}
         onClick={()=>handleFlip("card4")}
        
        > 
        
        <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/hoopers.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>The Hoopers</h2>
      <p className='genre'>Cartoon Movie</p>
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
      <img className="img" src="/jack ryan.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>Jack Ryan</h2>
      <p className='genre'>Action Movie</p>
    </div>

      </div>

        </div>
        <div className={`flip-card ${flippedCards.card6 ? "flipped" :""}`}
         onClick={()=>handleFlip("card6")}
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/mortal kombat.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>Mortal Kombat</h2>
      <p className='genre'>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card ${flippedCards.card7 ? "flipped" :""}`}
         onClick={()=>handleFlip("card7")}
        
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/pet.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>Pet Detective</h2>
      <p className='genre'>Thriller Movie</p>
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
      <img className="img" src="/prada.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>Devil Wears Prada 2</h2>
      <p className='genre'>Thriller Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card ${flippedCards.card9 ? "flipped" :""}`}
         onClick={()=>handleFlip("card9")}
        >
           <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/robin hood.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>Death of Robin Hood</h2>
      <p className='genre'>Action Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card ${flippedCards.card10 ? "flipped" :""}`}
         onClick={()=>handleFlip("card10")}
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/scary movie.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>Scary Movie VI</h2>
      <p className='genre'>Comedy Movie</p>
    </div>

  </div>

        </div>
        <div className={`flip-card ${flippedCards.card11 ? "flipped" :""}`}
         onClick={()=>handleFlip("card11")}
        >
            <div className="flip-card-inner">

    <div className="flip-card-front">
      <img className="img" src="/masters.jpeg" alt="Movie" />
    </div>

    <div className="flip-card-back">
      <h2 className='title'>Masters of the Universe</h2>
      <p className='genre'>Action Movie</p>
    </div>

  </div>

        </div>
        </div>  
        
      
        </div>
      

      

        
      
   


    </div>


  ) 
}

export default Home