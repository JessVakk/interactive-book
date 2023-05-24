import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/simtävling2.png';
import img2 from '../../assets/simtävling3.png';

const Page6 = () => {
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
                  <p>-Jag är med i simtävlingen, sa Anoh högt.</p>
                  <br />
                  <p>-Då är jag domare istället, sa Alia Sjöhäst.</p>
                  <br />
                  <p>Alla samlades vid startlinjen och väntade på Alia sjöhäst skulle trumpeta för att starta simtävlingen.</p>
                  <p>Hjälp Alia! Gör ett trumpetljud och tryck på Alia Sjöhäst.</p>
                  <br />
                  <p>Alla började att simma och Anoh förvånade alla genom att vara den första som kastade sig ut på Alias startsignal och började simma. Han var snabbast och låg etta efter de första 5 metrarna.</p>
                  <br />
                  <p>Då hördes plötslig Alia ropa: -Stoppa tävlingen, Anoh ser inte ut att må bra</p>
                  <p>Anoh stannade och la sig på botten och andades tungt medan de andra dundrade förbi honom mot mållinjen. Han hörde Deffy skrika glatt att hon vann, men sedan var hon vid hans sida och frågade oroligt hur han mådde. Han låg kvar en stund för att hämta andan och kände sig glad att Alia hade skrikit stopp innan det hade blivit något allvarlig. Han kände sig faktiskt hyfsat pigg efter en stund.</p>
                  <br />
                  <p>-Vi gör något annat. Kan vi inte ha en musik och dansföreställning? föreslog Alia.</p>
                  <p>-Nej, vi leker kurragömma, sa Kantor Bläckfisk.</p>        
                  
                  <div className='btn-container'>
                    <Link to="/sida6b">
                      <button className='btn'>Kurragömma</button>
                    </Link>
                    <Link to="/sida7a">
                      <button className='btn'>Dansföreställning</button>
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

export default Page6