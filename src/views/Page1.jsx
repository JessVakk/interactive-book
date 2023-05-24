import React from 'react';
import {useState} from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../App.css';
import img1 from '../assets/anoh1smaller.png';
import img2 from '../assets/Anoh.png';


const Page1 = () => {
  const [change, setChange] = useState(true);
  const toggle=() => {setChange(!change);}
 
  return (
    <motion.div intial={{scaleX: 1}} 
    animate={{scaleX: 1}} 
    exit={{scaleX: 0}}
    transition={{duration: 1, stiffness: 5000}}  
    >
      <div >
      <div className='overlay'>
        <div className="modalContainer">
          <h1>Var god vänd på plattan för att läsa boken.</h1>
        </div>
        </div>
        <div className='BackgroundCover'>
          <div className='splitScren'>
            <div className='column1'>
              <div className='leftSide'>
                <div className='text-container'>
                  <p>Det här är Anoh. Han är en Manet.</p>
                  <p>Ser du honom inte? </p>
                  <br />
                  <p><strong>Klicka på honom så kommer han närmare.</strong></p>
                  <br />
                  <p>När Anoh föddes slog inte hans hjärta som det skulle.</p>
                  <p>När han blev lite större fick han genomgå en operation för att laga sitt hjärta.</p>
                  <p>Nu är han precis som alla andra Maneter och kan hoppa och simma omkring, men han kan inte simma för fort eller göra det för länge för att hans hjärta ska må bra.</p>
                  <div className='btn-container'>
                    <Link to="/sida2">
                      <button className='btn'>Nästa sida</button>
                    </Link>
                  </div>
                </div>
              </div>  
            </div>
            <div className='column2'>
              <div className='rightSide'>
                <motion.div className="image-container">
                <button className='imgButton' onClick={toggle}>
                  {change ? <img className='buttonImg' src={img1} alt=""/> :<img className='pageImg' src={img2} alt=""/> }
                </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </motion.div>
  )
}

export default Page1