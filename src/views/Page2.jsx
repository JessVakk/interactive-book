import React from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import '../App.css';
import img2 from '../assets/friends.png';

const Page2 = () => {
 
  return (
    <motion.div intial={{scaleX: 0}} 
    animate={{scaleX: 1}} 
    exit={{scaleX: 0}}
    transition={{duration: .8}}
    >
      <div>
        <div className='BackgroundCover'>
          <div className='splitScren'>
            <div className='column1'>
              <div className='leftSide'>
                <div className='text-container'>
                  <p>Anoh går på förskolan Korallrevet tillsammans med sina kompisar. Alia Sjöhäst, Deffy Delfin och Kantor Bläckfisk. De brukar leka med varandra ute på gården.</p>
                  <br />
                  <p>Idag skulle hans kompisar vara inne och måla, så han gick gå ut på gården innan dem. </p>
                  <br />
                  <p>När han kom ut såg han maneterna från den stora avdelningen bredvid. 
                  Han blev nyfiken vad de höll på med och gick fram för att se.
                  <p>-Får jag vara med? frågade Anoh.</p>
                  Maneterna ställde sig ihop och viskade en stund innan de svarade. 
                  -Javisst får du det. Vi leker vem kan brännas mest. Vill du vara med?</p>
                  <br />
                  <p>Anoh hade inte lärt sig brännas ännu och hans Mamma och Pappa brukade säga att han inte att han skulle försöka eftersom det krävdes mycket arbete för hans hjärta.</p>
                  <div className='btn-container'>
                    <Link to="/sida3">
                      <button className='btn'>Brännas</button>
                    </Link>
                    <Link to="/sida3a">
                      <button className='btn'>Musselfrisbee</button>
                    </Link>
                  </div>
                </div>
              </div>  
            </div>
            <div className='column2'>
              <div className='rightSide'>
                <img className='pageImg' src={img2} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
  </motion.div>
  )
}


export default Page2