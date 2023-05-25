import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/show.png';

const Page11A = () => {
   
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
                  <p>Det ville hajen gärna. Han och alla andra barn och Pedagoger på förskolan satte sig förväntansfullt för att titta på föreställningen.</p>
                  <br />
                  <p>Det blev en fantastisk föreställning. Alla lyssnade på Kantor Bläckfisk när han räknade takten. Anoh sjöng mycket vackert medan Maneterna skakade sina maracas genom att brännas och dansen med Alia Sjöhästs piruetter och Deffys Delfins snabbsim blev pricken över i:et.</p>
                  <br />
                  <p>När föreställningen var slut och alla hurrarop dog ut utbrast Anoh: </p>
                  <p>-Vi kan klara allt när vi jobbar tillsammans.</p>
                  <div className='btnContainer'>
                    <Link to="/sida1">
                      <button className='btn'>Gå tillbaka till början</button>
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

export default Page11A