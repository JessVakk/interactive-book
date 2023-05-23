import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/musselfrisbee.png';

const Page3A = () => {
   
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
                  <p>Kan vi inte kasta musselfrisbee istället? föreslog Anoh. </p>
                  <br />
                  <p>-Okej. Jag är med på mussel-frisbee bara jag får börja att kasta, sa Gregor Manet.</p>
                  <br />
                  <p>Just då kom Anohs kompisar ut på gården och ville också vara med.</p>
                  <p>-Det går bra att du kastar först, sa Anoh medan han valde ett litet musselskal som han skulle kasta. -Varför tar du ett litet musselskal? Frågade Lilly Manet. -Det är ju bäst med ett stort.</p>
                  <br />
                  <p>Gregor Manet valde precis som Lilly Manet ett stort musselskal och kastade det med stor kraft mot målkorgen. Den susade förbi och landade långt ifrån korgen.  Lilly Manets landade närmare korgen, men var ändå långt ifrån. Sist ut var Anoh. Han tog sats och kastade iväg mussel-frisbeen som dalade ner bara en meter från korgen. -Det var bra att jag valde ett litet skal eftersom korgen var så nära, sa Anoh glatt.</p>
                  <br />
                  <p>Detta gjorde Gregor Manet lite irriterad, så när det var hans tur drämde han iväg mussel-frisbeen med sån kraft att den flög ut från gården. </p>
                  <br />
                  <p>Vad ska Anoh och hans kompisar göra nu?</p>
                  <div className='btn-container'>
                    <Link to="/sida4a">
                      <button className='btn'>Gå ut från gården</button>
                    </Link>
                    <Link to="/sidaC4a">
                      <button className='btn'>Stanna kvar</button>
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

export default Page3A