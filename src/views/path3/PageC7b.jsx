import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/helping.png';

const PageC7b = () => {
   
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
                  <p>-Tack för hjälpen, sa Hajen lättad.</p>
                  <br />
                  <p>-Nu när kroken är borta kan du hjälpa oss att få hem vår skadade fröken till gården? frågade Lilly manet.</p>
                  <br />
                  <p>-Absolut, sa hajen.</p>
                  <br />
                  <p>Med förenade krafter lyckades de få Pedagogen till förskolan.</p>
                  <br />
                  <p>-Tack för att ni hjälpte mig tillbaka till Förskolan, sa Pedagogen.</p>
                  <p>-Det var bara roligt att ha varit med på ett räddningsuppdrag, sa Deffy Delfin glatt.</p>
                  <p> Alla vännerna skrattade.</p>
                  <p>-Jag har fått nog av äventyr för i dag, sa Anoh. -Är det någon som vill gå in och sitta lugnt och stilla och läsa en bok?</p>
                  <p>Alla vänner tyckte det var en bra idé och kröp ner i soffan.</p>
                  <br />
                  <div className='btnContainer'>
                    <Link to="/sida1">
                      <button className='btn'>Börja om från början</button>
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

export default PageC7b