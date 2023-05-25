import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/Anohbakomsten.png';

const Page7 = () => {
   
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
                <div className='textContainer'>
                  <p>-Jag är gärna med på kurragömma, sa Anoh och tänkte på att han var bra på att gömma sig och att han kunde ta det lugnt och passa på att återhämta sig på sitt gömställe.</p>
                  <br />
                  <p> -Jag räknar, sa Kantor Bläckfisk. -för det är jag bra på.</p>
                  <br />
                  <p>Alla simmade iväg för att gömma sig medan Kantor Bläckfisk räknade: Ett, två , tre , fyra, fem, sex, sju, åtta, nio, tio. </p>
                  <p>-Nu kommer jag.</p>
                  <br />
                  <p>Det tog inte lång stund för Kantor Bläckfisk att hitta Deffy Delfin, Lilly Manet och Alia Sjöhäst. Nu var det bara Anoh och Gregor Manet kvar att hitta.</p>
                  <br />
                  <p>Anoh hade hittat ett perfekt gömställe bakom en sten som hade samma blå färg som honom. Precis när han tänkte att han definitivt kommer att vinna den här omgången så hörde han Gregor Manet ropa efter hjälp.</p>
                  <p>Skulle han simma ut från sitt gömställe och hjälpa Gregor Manet? men då skulle han inte vinna. Tänk om den Gregor Manet bara lurades för att locka ut Anoh från sitt gömställe, så att han kunde vinna istället?</p>        
                  <br />
                  <p>Vad skulle Anoh göra?</p>
                  <div className='btnContainer'>
                    <Link to="/sida8">
                      <button className='btn'>Hjälpa till</button>
                    </Link>
                    <Link to="/sida8a">
                      <button className='btn'>Stanna och vinna</button>
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

export default Page7