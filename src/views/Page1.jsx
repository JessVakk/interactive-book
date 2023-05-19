import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../App.css';
import img1 from '../assets/Anoh.png';

const Page1 = () => {
   
  return (
    <motion.div intial={{scaleX: 1}} 
    animate={{scaleX: 1}} 
    exit={{scaleX: 0}}
    transition={{duration: 1, stiffness: 5000}}
    
    >
      <div>
        <div className='BackgroundCover'>
          <div className='splitScren'>
            <div className='column1'>
              <div className='leftSide'>
                <div className='text-container'>
                  <p>Det här är Anoh. Han är en Manet. När han föddes slog inte hans hjärta som det skulle.</p>
                  <br />
                  <p>Ser du honom inte? Klicka på förstoringsglaset.</p>
                  <br />
                  <p>När han blev lite större fick han genomgå en operation för att laga sitt hjärta. Nu är han precis som alla andra Maneter och kan hoppa och simma omkring, men han kan inte simma för fort eller göra det för länge för att hans hjärta ska må bra.</p>
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
                  <motion.img className='pageImg' src={img1} alt=""/>
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