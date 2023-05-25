import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/showAngry.png';

const Page5A = () => {
   
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
                  <p>Sjöhästen Alia blev var riktigt arg på maneterna och utbrast: -Det är inte schyst, ni vet att Anoh inte kan simma för fort då kan han bli dålig i hjärtat. Vi borde leka en lek som alla kan vara med på. Kan vi inte göra en dans -och-sångföreställning istället? </p>
                  <br />
                  <p>-Okej, men då vill jag spela trummor, sa Kantor bläckfisk.</p>
                  <br />
                  <p>Alla andra tyckte att det var en bra idé. -Ska vi öva lite utanför förskolegården så att de andra inte ser oss innan föreställningen är klar? frågade Deffy Delfin.</p>
                  <p>-Ja, det gör vi sa Gregor Manet.</p>
                  <br />
                  <p>Snart var de i full gång med övandet. Anoh skulle sjunga, Maneterna spela maracas, Kantor Bläckfisk skulle spela trummor medan Aliah Sjöhäst och Deffy Delfin skulle dansa. </p>
                  <p>Det tog dock inte lång stund förrän alla började att bråka med varandra.</p>
                  <p>Alia Sjöhäst tyckte inte att det Deffy Delfin gjorde var en dans. -Du simmar ju bara snabbt fram och tillbaka. Du snurrar ju inte ens, klagade Alia på Deffy.</p>
                  <p>-Jag tycker det ser fint ut när man simmar fort, förklarade Deffy Delfin. </p>
                  <p>Kantor Bläckfisk var sur att ingen lyssnade när han räknade takten och Maneterna ville bara brännas.</p>
                  <div className='btnContainer'>
                    <Link to="/sida8B">
                      <button className='btn'>Nästa sida</button>
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

export default Page5A