import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/stenbumlingar.png';

const PageC4a = () => {
   
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
                  <p>-Vi får inte gå ut från gården själva, sa Anoh.</p>
                  <p>-Vi får fråga en Pedagog om hon kan följa med oss ut och leta efter den, sa Deffy Delfin.</p>
                  <br />
                  <p>Efter en stund var de på andra sidan staketet och letade efter mussel-frisbeen tillsammans med en Pedagog.</p>
                  <p>De letar och letar men den verkar vara helt borttrollad.</p>
                  <p>När de nästan har gett upp hoppet om att någonsin kunna hitta den ropar Pedagogen att hon tror att hon ser den och skyndar fram till en mörkare del av korallrevet. Hon ser inte fiskenätet och fastnar med sina armar i nätet och faller sedan till botten med ett skrik av smärta.</p>
                  <br />
                  <p>-Hur gick det? frågar Alia sjöhäst oroligt.</p>
                  <p>-Jag har gjort illa några av mina armar och kan inte simma, säger Pedagogen med smärta i rösten.</p>
                  <br />
                  <p>-Ni måste simma tillbaka till förskolan och hämta hjälp.</p>
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

export default PageC4a