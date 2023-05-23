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
                <div className='text-container'>
                  <p>Sjöhästen Alia blev var riktigt arg på maneterna och utbrast. </p>
                  <p>-Det är inte schyst, ni vet att Anoh inte kan simma för fort då kan han bli dålig i hjärtat. Vi borde leka en lek som alla kan vara med på.</p>
                  <p> -Kan vi inte göra en dans -och-sångföreställning istället? </p>
                  <br />
                  <p>-Okej, men då vill jag spela trummor, sa Kantor bläckfisk.</p>
                  <p>-För jag är bra på att räkna och hålla takten.</p>
                  <br />
                  <p>Alla andra tyckte att det var en bra idé. -Ska vi öva lite utanför förskolegården så att de andra inte ser oss innan föreställningen är klar? frågade Deffy Delfin. -Ja, det gör vi sa Gregor Manet. (hjälp maneterna att spela maracas)</p>
                  <br />
                  <p>Snart var de i full gång med övandet. Anoh skulle sjunga, maneterna spela maracas, Kantor Bläckfisk skulle spela trummor medan Aliah Sjöhäst och Deffy Delfin skulle dansa. </p>
                  <p>Det tog dock inte lång stund förrän alla började att bråka med varandra.</p>
                  <p>Alia Sjöhäst tyckte inte att det Deffy Delfin gjorde var en dans. -Du simmar ju bara snabbt fram och tillbaka du snurrar ju inte ens, klagade Alia på Deffy.</p>
                  <p>-Jag tycker det ser fint ut när man simmar fort, förklarade Deffy Delfin. Kantor Bläckfisk var sur att ingen lyssnade när han räknade takten och maneterna ville bara brännas.</p>
                  <div className='btn-container'>
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