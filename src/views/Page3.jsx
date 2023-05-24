import React from 'react';
import {useState} from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../App.css';
import img1 from '../assets/anohAngrywithbackground.png';
import img2 from '../assets/anohShining.png';

const Page3 = () => {
  const [change, setChange] = useState(true);
  const toggle=() => {setChange(!change);}
  
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
                  <p>-Jag ska testa att bränna, men jag har aldrig gjort det förut, sa Anoh försiktigt.</p>
                  <br />
                  <p>-Man är ingen riktig brännmanet om man inte kan brännas, sa den största Maneten.</p>
                  <br />
                  <p>Anoh blev lite arg. Han skulle allt visa dem att han var bra på att brännas precis som alla andra brännmaneter. Det var dock lite läskigt att prova något han aldrig hade gjort förut.</p>
                  <br />
                  <p><strong> Kan du hjälpa honom? Blås allt vad du kan.</strong></p>
                  <p><strong>Hände det inget? Blås igen och tryck på Anoh.</strong></p>
                  <br />
                  <p>När Anoh försökte brännas kom det inget bränn, men han började att lysa med ett svagt sken.</p>
                  <div className='btn-container'>
                    <Link to="/sida4">
                      <button className='btn'>Nästa sida</button>
                    </Link>
                  </div>
                </div>
              </div>  
            </div>
            <div className='column2'>
              <div className='rightSide'>
                <button className='imgButton' onClick={toggle}>
                  {change ? <img className='buttonImg' src={img1} alt=""/> :<img className='pageImg' src={img2} alt=""/> }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Page3