import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/stenbumlingar.png';

const PageC5 = () => {
   
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
                  <p>-Det spelar ingen roll om jag vinner eller förlorar funderade Anoh. Om en vän är i fara måste jag hjälpa till tänkte Anoh och struntade i musselfrisbeen.</p>
                  <br />
                  <p>Ropen på hjälp kom från den gamla grottruinen. Alla samlades runt den gamla ingången. Den som förut hade varit öppen var nu blockerat av sten som hade rasat ner över ingången och den Gregor Manet var nu fångad där inne.</p>
                  <br />
                  <p>-Är du okej därinne? ropade Alia Sjöhäst till Gregor Manet. -Jag är inte skadad, men det är alldeles mörkt och jag är rädd, snyftade maneten.</p>
                  <p>-Jag är inte skadad, men det är alldeles mörkt och jag är rädd, snyftade maneten.</p>
                  <br />
                  <p>-Hur ska vi få ut honom? skrek den ena maneten. -Vi försöker att flytta på stenarna sa Kantor Bläckfisk. Alla försökte gemensamt flytta på stenarna, men de var för tunga. De lyckades bara skapa en öppning så liten att man kunde kika igenom den med ett öga.</p>
                  <br />
                  <p>-Vi måste leta om det finns någon annan öppning, föreslog Anoh. De simmade runt grottan och fick till sist syn på en öppning som blockerades av en muräna</p> 
                  <div className='btn-container'>
                    <Link to="/sidaC6">
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

export default PageC5