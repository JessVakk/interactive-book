import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/sharkattack.png';

const Page6 = () => {
   
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
                  <p>Nu tjöt alla i munnen på varandra.  Kantor Bläckfisk spelade trummorna så det dånade om det och Lilly Manet som tyckte det var för läskigt med alla som bråkade började sjunga gällt för att slippa höra allt bråk.</p>
                  <br />
                  <p>Då dök det upp en haj långt borta som simmade rakt mot dem med en hiskelig fart och han verkade vara rasande.</p>
                  <br />
                  <p>Hjälp mig att få alla att sluta skrika på varandra.</p>
                  <p>Ropa: -Se upp en haj!</p>
                  <br />
                  <p>När de fick syn på hajen som kom farandes mot dem i ilfart fick alla panik och började simma det snabbaste de kunde åt alla håll och kanter.</p>
                  <br />
                  <p>Hajen började jaga Anoh och Alia Sjöhäst som simmade åt samma håll, men bara efter några meter kände Anoh att hans hjärta började bulta konstigt och han kände sig matt.</p>
                  <p>-Simma vidare utan mig Alia, skrek Anoh. -Jag måste stanna.</p>
                  <br />
                  <p>Alia Sjöhäst som var lite före Anoh simmade snabbt tillbaka till honom. Hon tänkte inte lämna honom ensam med en ilsken haj. Hon funderade på vad hon kunde göra när hajen hastigt närmade sig.</p>    
                  <div className='btn-container'>
                    <Link to="/sida9a">
                      <button className='btn'>Gå vidare</button>
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

export default Page6