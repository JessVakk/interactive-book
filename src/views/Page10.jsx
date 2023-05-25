import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../App.css';
import img1 from '../assets/shiningAnoh1.png';

const Page10 = () => {
   
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
                  <p>-Då sätter vi planen i verket, sa Anoh.</p>
                  <br />
                  <p>Anoh höll andan när han såg Lilly Manet bränna muränan, skulle han nappa på betet och simma efter Deffy Delfin?</p>
                  <p>Just när han tänkte den tanken simmade en rosenrasande muräna ut ur hålet för att jaga efter Deffy.</p>
                  <p>När muränan var borta gick alla in i grottan för att hämta sin vän, förutom Kantor Bläckfisk som höll vakt utanför ifall Muränan skulle komma tillbaka.</p>
                  <br />
                  <p>När de hade kommit en bit in i grottan blev det alldeles beckmörk och de såg ingenting.</p>
                  <p>-Hur ska vi göra nu? sa Anoh bekymrat. -Vi ser ju ingenting.</p>
                  <p>-Du är ju bra på att lysa Anoh, utbrast Lilly Manet.</p>
                  <p>-Du kan lysa så att vi hittar honom.</p>
                  <br />
                  <p>Anoh började genast att göra som den gången han försökte brännas och till hans lycka kom det ett starkare sken denna gång.</p>
                  <p>Långt borta hörde de Gregors Manets röst ropa: -Jag ser ett ljus.</p>
                  <p>-Det är jag, ropade Anoh. -Gå mot ljuset så hittar du ut.</p>
                  <br />
                  <p>Det gick inte många sekunder innan Gregor Manet var framme och kramade om sina kompisar.</p> 
                  <div className='btnContainer'>
                    <Link to="/sida11">
                      <button className='btn'>Nästa sida</button>
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

export default Page10