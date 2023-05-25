import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/sharkattack3.png';

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
                  <p>Då dök det plötsligt upp en haj långt borta som simmade rakt mot dem med en hiskelig fart och han verkade vara rasande.</p>
                  <p>Men alla var så upptagna med att se hur Pedagogen mådde att de inte såg hajen komma emot dem.</p>
                  <br />
                  <p><strong>Hjälp mig att varna dem.</strong></p>
                  <p><strong>Ropa: -Se upp en haj!</strong></p>
                  <br />
                  <p>När de fick syn på hajen som kom farandes mot dem i ilfart fick alla panik och började simma det snabbaste de kunde åt alla håll och kanter.</p>
                  <br />
                  <p>Men sedan insåg Anoh att Pedagogen inte kunde simma iväg från hajen.</p>
                  <p>-Jag rädda henne tänkte Anoh bestämt.</p>
                  <div className='btn-container'>
                    <Link to="/sidaC6b">
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