import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/sharkattack2.png';

const Page9A = () => {
   
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
                  <p>När hajen kom så nära att hon kunde se in i hans ilskna ögon började hon snurra runt i en piruett så att stjärtfenan daskade till hon om i ansiktet.</p>
                  <br />
                  <p>De andra såg Alia Sjöhästs hjältemodiga insats och var genast där för att hjälpa till. Deffy Delfin simmade flera gånger runt hajen i sådan fart att hajen blev alldeles yr. Då passade Maneterna på att bränna hajen, medan Kantor Bläckfisk gjorde krokben så att hajen föll ner på botten med en duns.</p>
                  <br />
                  <p>Dessvärre landade hajen precis bredvid Alia Sjöhäst. Han öppnade sitt gap och visade alla sina sylvassa tänder.</p>
                  <p>Om jag inte gör någonting kommer Alia bli uppäten, tänkte Anoh förtvivlat</p>
                  <br />
                  <p>Vad ska han göra?</p>  
                  <div className='btnContainer'>
                    <Link to="/sida10a">
                      <button className='btn'>Skrika</button>
                    </Link>
                    <Link to="/sida10b">
                      <button className='btn'>Brännas</button>
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

export default Page9A