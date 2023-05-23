import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/musselfrisbee.png';

const Page4A = () => {
   
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
                  <p>De bestämde sig för att gå ut från gården för att själva leta efter mussel-frisbeen.</p>
                  <br />
                  <p>Alla började leta efter musselskalet. -Den som hittar det först vinner, utbrast Kantor Bläckfisk.Alla var med på det och började leta ännu mer frenetiskt.</p>
                  <br />
                  <p>Anoh fick syn på mussel-frisbeen och utbrast nöjt: -Jag har hittat den! </p>
                  <p>Precis då hörde han hur det mullrade till och sedan hörde han hur Gregor Manet ropade på hjälp.</p>
                  <br />
                  <p>Han funderade om det var ett knep från Gregor Manets sida. Skulle han hämta mussel-frisbeen och vinna eller skulle han hjälpa Gregor Manet?</p>
                  <div className='btn-container'>
                    <Link to="/sidaC5">
                      <button className='btn'>Hjälpa Gregor Manet</button>
                    </Link>
                    <Link to="/sidaC5a">
                      <button className='btn'>Vinna</button>
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

export default Page4A