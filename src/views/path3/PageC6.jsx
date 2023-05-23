import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/muräna.png';

const PageC6 = () => {
   
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
                <p>Herr Muräna, vi vore jätteglada om du kunde flytta på dig så att vi kan gå in i grottan och hjälpa vår vän, sa Alia Sjöhäst.</p>
                  <p>Muränan fnös och sa: -Om er vän är så dum att han har tagit sig in i grottan så får han ta sig ut själv. Jag orkar inte flytta på mig.</p>
                  <br />
                  <p>-Vad ska vi ta oss till nu? sa maneten förtvivlat. Just då gav sig den inspärrade maneten till ett tjut av rädsla.</p>
                  <br />
                  <p>-Vi kan klara det här om vi gör det tillsammans, sa Anoh. -Alia, du som är bra på att dansa och sjunga får gå tillbaka till Gregor Manet och sjunga och dansa för honom så att han lugnar ner sig och inte känner sig så rädd.</p>
                  <br />
                  <p>-Kantor, du är bra på att räkna. Så när du räknar till 3 ska Lilly Manet som är bra på att brännas ställa sig ovanför muränan och bränna honom så hårt som möjligt så att han simmar ut från hålet. Då kommer Deffy Delfin om är snabb att reta muränan så att han börjar jaga Deffy. Medan muränan jagar Deffy kommer vi hinna gå in och hämta Gregor Manet.</p>
                  <br />
                  <p>-Vad händer om han får tag i mig? frågade Deffy Delfin oroligt. -Det kommer han inte göra, du är så snabb att han tillslut inte kommer att orka hänga med i din takt, sa Kantor Bläckfisk.</p>
                  <div className='btn-container'>
                    <Link to="/sidaC7">
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

export default PageC6