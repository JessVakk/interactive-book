import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../App.css';
import img1 from '../assets/inför simtävling.png';

const Page5 = () => {
   
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
                  <p>-Ja, vi tävlar sa Deffy Delfin entusiastiskt.</p>
                  <p>Hon tyckte att en simtävling var en bra idé eftersom hon själv var snabb och tyckte om att vinna.</p>
                  <p> Hon visste dock att det inte var bara för Anohs hjärta att simma så fort så hon tillade:</p>
                  <p>-Anoh, du kan ju vara domare om du inte kan simma snabbt.</p>
                  <br />
                  <p>Lilly Manet la huvudet på sned och sa: </p>
                  <p>-Vad är du för en manet egentligen? Du kan varken brännas eller simma fort.</p>
                  <br />
                  <p>Anoh funderade på vad han skulle göra.</p>
                  <div className='btn-container'>
                    <Link to="/sida6">
                      <button className='btn'>Vara domare</button>
                    </Link>
                    <Link to="/sida6a">
                      <button className='btn'>Tävla i simning</button>
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

export default Page5