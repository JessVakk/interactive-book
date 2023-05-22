import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../App.css';
import img1 from '../assets/alltogheter.png';

const Page11 = () => {
   
  return (
    <motion.div intial={{scaleX: 1}} 
    animate={{scaleX: 1}} 
    exit={{scaleX: 0}}
    transition={{duration: 1}}
    >
      <div>
        <div className='BackgroundCover'>
          <div className='splitScren'>
            <div className='column1'>
              <div className='leftSide'>
                <div className='text-container'>
                  <p>-Tack för att du räddade mig Anoh, sa Gregor Manet. -Det var inte bara jag, sa Anoh. -Vi arbetade tillsammans och att vi är bra på olika saker gjorde att vi klarade det.</p>
                  <br />
                  <p>Gregor Manet såg lite skamsen ut och viskade. -Förlåt att jag att jag har varit elak mot dig. Du är en riktigt brännmanet och det är häftigt att du kan lysa istället för att brännas. </p>
                  <p>Lilly Manet höll med.</p>
                  <p>-Tack, sa Anoh förtjust. Men nu behöver vi verkligen komma ut ur grottan innan Muränan kommer tillbaka.</p>
                  <p>Alla simmade ut och mötes av Kantor Bläckfisk och Alia Sjöhäst som hoppade upp och ner av lycka för att se alla sina vänner välbehållna.</p>
                  <br />
                  <p>De simmade tillbaka mot förskolan och på vägen dit möttes de av Deffy Delfin. -Hurra! vi klarade att rädda  Gregor Manet, ropade Deffy segervisst.</p>
                  <p>-Vi är ett bra team, sa Alia.</p>
                  <br />
                  <p>När de kom fram till förskolan möttes de av en bekymrad pedagog. 
                  -Var har i varit frågade han oroligt.</p>
                  <p>-Vi har varit på ett räddningsuppdrag sa Deffy Delfin mystiskt. Alla vännerna skrattade. -Jag har fått nog av äventyr för i dag, sa Anoh. -Är det någon som vill gå in och sitta lugnt och stilla och läsa en bok?</p>
                  <p>Alla vänner tyckte det var en bra idé och kröp ner i soffan.</p>
                  <div className='btn-container'>
                    <Link to="/sida1">
                      <button className='btn'>Börja om från början</button>
                    </Link>
                  </div>
                </div>
              </div>  
            </div>
            <div className='column2'>
              <div className='rightSide'>
                <img className='pageImg' src={img1} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Page11