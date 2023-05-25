import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../App.css';
import img1 from '../assets/skrattande.png';

const Page4 = () => {
   
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
                  <p>De andra maneterna började att skratta.</p>
                  <p> -Maneter ska inte lysa. De ska brännas, sa den gröna maneten som hette Gregor.</p>
                  <br />
                  <p>-Äsch, jag klarade inte heller att brännas på första försöket sa Lilly Manet. -Kan vi inte göra något annat?</p>
                  <p>-Vi har en simtävling istället, sa Gregor Manet.</p>
                  <br />
                  <p>Precis då kom Anohs vänner ut och hörde maneterna föreslå en simtävling.</p>
                  <p>Både Alia Sjöhäst och Deffy Delfin reagerade och pratade i munnen på varandra om förslaget. Det var omöjligt för Anoh att höra vad någon av dem sa.</p>
                  <br />
                  <p>Vem ska Anoh lyssna på?</p>
                  <div className='btnContainer'>
                    <Link to="/sida5">
                      <button className='btn'>Deffy Delfin</button>
                    </Link>
                    <Link to="/sida5a">
                      <button className='btn'>Alia Sjöhäst</button>
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

export default Page4