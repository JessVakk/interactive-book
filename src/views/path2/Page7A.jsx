import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/showAngry.png';

const Page7 = () => {
   
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
                  <p>-Ja, vi har en föreställning sa Gregor Manet glatt.</p>
                  <br />
                  <p> -Okej, men då vill jag spela trummor, sa Kantor bläckfisk. -för jag är bra på att räkna och hålla takten.</p>
                  <br />
                  <p>Alla andra tyckte att det var en bra idé. -Ska vi öva lite utanför förskolegården så att de andra inte ser oss innan föreställningen är klar? frågade Deffy Delfin. -Ja, det gör vi sa Gregor Manet. (hjälp maneterna att spela maracas)</p>
                  <br />
                  <p>Snart var de i full gång med övandet. Anoh skulle sjunga, maneterna spela maracas, Kantor Bläckfisk skulle spela trummor medan Aliah Sjöhäst och Deffy Delfin skulle dansa.</p>
                  <br />
                  <p>Det tog dock inte lång stund förrän alla började att bråka med varandra. Alia Sjöhäst tyckte inte att det Deffy Delfin gjorde var en dans.</p>
                  <p>-Du simmar ju bara snabbt fram och tillbaka du snurrar ju inte ens, klagade Alia på Deffy. -Jag tycker det ser fint ut när man simmar fort, förklarade Deffy Delfin.</p> 
                  <p>-Jag tycker det ser fint ut när man simmar fort, förklarade Deffy Delfin.Kantor Bläckfisk var sur att ingen lyssnade när han räknade takten och maneterna ville bara brännas.</p>        
                  <br />
                  <div className='btn-container'>
                    <Link to="/sida8b">
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

export default Page7