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
      <p>Crime 101 follows a meticulous, elusive jewel thief whose high-stakes heists along Los Angeles' iconic 101 freeway confound police. When he eyes the score of a lifetime for his final job, his path collides with an obsessive, relentless detective determined to catch him before he gets away.</p>
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
      <p>Desert Warrior (2026) follows fearless Princess Hind (Aiysha Hart), who defies the Sasanian Emperor Kisra by refusing to become his concubine. Fleeing into the desert with her father, she allies with a mysterious bandit (Anthony Mackie) to unite disparate Arab tribes and make a historic last stand at the Battle of Dhi Qar.</p>
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
      <p>an animated sports-comedy following Will, a small, underdog goat with big dreams of playing "roarball"—an intense, full-contact sport dominated by massive animals. After a viral video lands him on a pro team with his idol, he must overcome team skepticism to prove "smalls can ball."</p>
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
      <p>Hoppers (2026) follows Mabel (voiced by Piper Curda), an animal-loving college student who uses groundbreaking technology to transfer her consciousness into a lifelike robotic beaver. She uses this to infiltrate the animal kingdom, but gets caught up in trying to save their habitat from a destructive local mayor.</p>
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
      <p>a retired Jack Ryan is pulled back into espionage by CIA Director James Greer. He is tasked with a simple courier job in Dubai that quickly turns deadly, unraveling a conspiracy tied to "Project Starling," an unsanctioned post-9/11 black-ops unit that Greer and MI6 helped create.</p>
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
      <p>Mortal Kombat centers on an ancient, interdimensional martial arts tournament where Earthrealm's greatest warriors must defeat the forces of the tyrannical Outworld. If Outworld wins ten consecutive tournaments, they are legally permitted to invade and conquer Earthrealm.</p>
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
      <h2 className='title'>The Sheep Detective</h2>
      <p className='genre'>Thriller Movie</p>
      <p>The Sheep Detectives (originally anticipated as a pet detective-style project) follows George Hardy (Hugh Jackman), an idyllic English shepherd who reads murder mysteries to his sheep every night. When George is mysteriously murdered, the flock takes matters into their own hooves, working to solve the crime and bring the real killer to justice.</p>
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
      <p>The Devil Wears Prada 2 follows a laid-off journalist, Andy Sachs (Anne Hathaway). To save a scandal-plagued Runway magazine, she is forced to reunite with her former boss, Miranda Priestly (Meryl Streep), and navigate cutthroat corporate threats from a powerful Dior executive, Emily (Emily Blunt).</p>
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
      <p>The Death of Robin Hood, an aging, remorseful Robin (Hugh Jackman) hides in self-imposed exile after a lifetime of violent banditry. Grappling with his bloody past and fatal injuries, he finds sanctuary at an island priory, where he seeks redemption and ultimately asks Sister Brigid (Jodie Comer) to assist him in his death through bloodletting.</p>
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
      <p>Scary Movie 6 (also titled Scary Movie), the original crew reunites 26 years after their first run-in with Ghostface. When a new masked killer attacks Tuesday Campbell, her sister Sara and boyfriend Jack seek help from her mother, Cindy (Anna Faris). Cindy—now a recluse with booby-trapped survival gear—must team up with Brenda, Shorty, and Ray to stop the bloodshed.</p>
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
      <p>fifteen years after being exiled to Earth, Prince Adam (Nicholas Galitzine) reclaims the Sword of Power. He returns to his war-torn home world of Eternia to unite fractured factions and defeat the ruthless Skeletor (Jared Leto) before Castle Grayskull falls into eternal darkness.</p>
    </div>

  </div>

        </div>
        </div>  
        
      
        </div>

      <div className="parent slide-left1">

        
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
      <p>Crime 101 follows a meticulous, elusive jewel thief whose high-stakes heists along Los Angeles' iconic 101 freeway confound police. When he eyes the score of a lifetime for his final job, his path collides with an obsessive, relentless detective determined to catch him before he gets away.</p>
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
      <p>Desert Warrior (2026) follows fearless Princess Hind (Aiysha Hart), who defies the Sasanian Emperor Kisra by refusing to become his concubine. Fleeing into the desert with her father, she allies with a mysterious bandit (Anthony Mackie) to unite disparate Arab tribes and make a historic last stand at the Battle of Dhi Qar.</p>
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
      <p>an animated sports-comedy following Will, a small, underdog goat with big dreams of playing "roarball"—an intense, full-contact sport dominated by massive animals. After a viral video lands him on a pro team with his idol, he must overcome team skepticism to prove "smalls can ball."</p>
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
      <p>Hoppers (2026) follows Mabel (voiced by Piper Curda), an animal-loving college student who uses groundbreaking technology to transfer her consciousness into a lifelike robotic beaver. She uses this to infiltrate the animal kingdom, but gets caught up in trying to save their habitat from a destructive local mayor.</p>
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
      <p>a retired Jack Ryan is pulled back into espionage by CIA Director James Greer. He is tasked with a simple courier job in Dubai that quickly turns deadly, unraveling a conspiracy tied to "Project Starling," an unsanctioned post-9/11 black-ops unit that Greer and MI6 helped create.</p>
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
      <p>Mortal Kombat centers on an ancient, interdimensional martial arts tournament where Earthrealm's greatest warriors must defeat the forces of the tyrannical Outworld. If Outworld wins ten consecutive tournaments, they are legally permitted to invade and conquer Earthrealm.</p>
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
      <h2 className='title'>The Sheep Detective</h2>
      <p className='genre'>Thriller Movie</p>
      <p>The Sheep Detectives (originally anticipated as a pet detective-style project) follows George Hardy (Hugh Jackman), an idyllic English shepherd who reads murder mysteries to his sheep every night. When George is mysteriously murdered, the flock takes matters into their own hooves, working to solve the crime and bring the real killer to justice.</p>
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
      <p>The Devil Wears Prada 2 follows a laid-off journalist, Andy Sachs (Anne Hathaway). To save a scandal-plagued Runway magazine, she is forced to reunite with her former boss, Miranda Priestly (Meryl Streep), and navigate cutthroat corporate threats from a powerful Dior executive, Emily (Emily Blunt).</p>
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
      <p>The Death of Robin Hood, an aging, remorseful Robin (Hugh Jackman) hides in self-imposed exile after a lifetime of violent banditry. Grappling with his bloody past and fatal injuries, he finds sanctuary at an island priory, where he seeks redemption and ultimately asks Sister Brigid (Jodie Comer) to assist him in his death through bloodletting.</p>
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
      <p>Scary Movie 6 (also titled Scary Movie), the original crew reunites 26 years after their first run-in with Ghostface. When a new masked killer attacks Tuesday Campbell, her sister Sara and boyfriend Jack seek help from her mother, Cindy (Anna Faris). Cindy—now a recluse with booby-trapped survival gear—must team up with Brenda, Shorty, and Ray to stop the bloodshed.</p>
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
      <p>fifteen years after being exiled to Earth, Prince Adam (Nicholas Galitzine) reclaims the Sword of Power. He returns to his war-torn home world of Eternia to unite fractured factions and defeat the ruthless Skeletor (Jared Leto) before Castle Grayskull falls into eternal darkness.</p>
    </div>

  </div>

        </div>
        </div>  
        
      
        </div>

      <div className="parent slide-right2">

        
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
      <p>Crime 101 follows a meticulous, elusive jewel thief whose high-stakes heists along Los Angeles' iconic 101 freeway confound police. When he eyes the score of a lifetime for his final job, his path collides with an obsessive, relentless detective determined to catch him before he gets away.</p>
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
      <p>Desert Warrior (2026) follows fearless Princess Hind (Aiysha Hart), who defies the Sasanian Emperor Kisra by refusing to become his concubine. Fleeing into the desert with her father, she allies with a mysterious bandit (Anthony Mackie) to unite disparate Arab tribes and make a historic last stand at the Battle of Dhi Qar.</p>
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
      <p>an animated sports-comedy following Will, a small, underdog goat with big dreams of playing "roarball"—an intense, full-contact sport dominated by massive animals. After a viral video lands him on a pro team with his idol, he must overcome team skepticism to prove "smalls can ball."</p>
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
      <p>Hoppers (2026) follows Mabel (voiced by Piper Curda), an animal-loving college student who uses groundbreaking technology to transfer her consciousness into a lifelike robotic beaver. She uses this to infiltrate the animal kingdom, but gets caught up in trying to save their habitat from a destructive local mayor.</p>
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
      <p>a retired Jack Ryan is pulled back into espionage by CIA Director James Greer. He is tasked with a simple courier job in Dubai that quickly turns deadly, unraveling a conspiracy tied to "Project Starling," an unsanctioned post-9/11 black-ops unit that Greer and MI6 helped create.</p>
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
      <p>Mortal Kombat centers on an ancient, interdimensional martial arts tournament where Earthrealm's greatest warriors must defeat the forces of the tyrannical Outworld. If Outworld wins ten consecutive tournaments, they are legally permitted to invade and conquer Earthrealm.</p>
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
      <h2 className='title'>The Sheep Detective</h2>
      <p className='genre'>Thriller Movie</p>
      <p>The Sheep Detectives (originally anticipated as a pet detective-style project) follows George Hardy (Hugh Jackman), an idyllic English shepherd who reads murder mysteries to his sheep every night. When George is mysteriously murdered, the flock takes matters into their own hooves, working to solve the crime and bring the real killer to justice.</p>
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
      <p>The Devil Wears Prada 2 follows a laid-off journalist, Andy Sachs (Anne Hathaway). To save a scandal-plagued Runway magazine, she is forced to reunite with her former boss, Miranda Priestly (Meryl Streep), and navigate cutthroat corporate threats from a powerful Dior executive, Emily (Emily Blunt).</p>
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
      <p>The Death of Robin Hood, an aging, remorseful Robin (Hugh Jackman) hides in self-imposed exile after a lifetime of violent banditry. Grappling with his bloody past and fatal injuries, he finds sanctuary at an island priory, where he seeks redemption and ultimately asks Sister Brigid (Jodie Comer) to assist him in his death through bloodletting.</p>
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
      <p>Scary Movie 6 (also titled Scary Movie), the original crew reunites 26 years after their first run-in with Ghostface. When a new masked killer attacks Tuesday Campbell, her sister Sara and boyfriend Jack seek help from her mother, Cindy (Anna Faris). Cindy—now a recluse with booby-trapped survival gear—must team up with Brenda, Shorty, and Ray to stop the bloodshed.</p>
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
      <p>fifteen years after being exiled to Earth, Prince Adam (Nicholas Galitzine) reclaims the Sword of Power. He returns to his war-torn home world of Eternia to unite fractured factions and defeat the ruthless Skeletor (Jared Leto) before Castle Grayskull falls into eternal darkness.</p>
    </div>

  </div>

        </div>
        </div>  
        
      
        </div>
      

      

        
      
   


    </div>


  ) 
}

export default Home