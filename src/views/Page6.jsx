import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../App.css';
import img1 from '../assets/AliaTrumpetar1.png';
import img2 from '../assets/AliaTrumpetar3.png';

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
                  <p>-Jag är domare, sa Anoh högt.</p>
                  <br />
                  <p> Alla samlades vid startlinjen och väntade på Alia sjöhäst skulle trumpeta för att starta simtävlingen.  Hjälp Alia! Gör ett trumpetljud och tryck på Alia Sjöhäst.</p>
                  <br />
                  <p>Alla började att simma. Kantor Bläckfisk att vara den första som kastade sig ut på Anohs startsignal och började simma. Han var snabbast och låg etta efter de första 5 metrarna, de andra började att närma sig honom. När Deffy Delfin simmade förbi honom sträckte han smygande ut en arm och fällde Deffy Delfin utan att någon av de andra av de tävlande såg.</p>
                  <br />
                  <p>Kantor Bläckfisk simmade över mållinjen och hurrade att han vann. Då tog Anho till orda. -Jag är domare och jag bestämmer att du inte vann. -Varför då? suckade Kantor Bläckfisk. -För att du knuffade Deffy Delfin så att hon ramlade. -Okej, okej du har rätt Anoh, förlåt Deffy, sa Kantor Bläckfisk skamset.</p>
                  <br />
                  <p>Det här var inte roligt kan vi inte göra något annat, sa Gregor Manet. - Vi kan ha en musik och dansföreställning föreslog Alia Sjöhäst.</p>
                  <p>-Nej, vi leker kurragömma, sa Lilly Manet.</p>        
                  
                  <div className='btn-container'>
                    <Link to="/sida7">
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