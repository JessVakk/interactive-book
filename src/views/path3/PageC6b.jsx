import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/savingshark.png';

const PageC6b = () => {
   
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
                  <p>Anoh tog ett stort andetag och fokuserade på att brännas.</p>
                  <p>Anoh blev förvånad när han istället för att bränna hajen började lysa med ett starkt ljus som bländade hajen.</p>
                  <br />
                  <p>Hurra! Vi besegrade hajen, skrek Kantor Bläckfisk när han såg hajen singla ner på botten och bli liggande.</p>
                  <br />
                  <p>Då hörde de helt plötsligt hajen snyfta till och sedan började han storgråta. -Det var inte meningen att skrämma er jag fick bara panik. En krok har fastnat i min mun och jag är så rädd för krokar. När jag såg tänkte jag att ni kunde hjälpa mig.</p>
                  <br />
                  <p>-Förlåt att jag bländade dig, sa Anoh. Vi trodde att du skulle anfalla och äta upp oss.</p>
                  <br />
                  <p>Kantor Bläckfisk klappade hajen på huvudet med en av sina tentakler och sa: -Kan du öppna munnen igen så kan jag ta ut kroken.</p>
                  <p>Alia Sjöhäst höll hajen i fenan medan Kantor Bläckfisk drog ut kroken.</p>
                  <div className='btnContainer'>
                    <Link to="/sidaC7b">
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

export default PageC6b