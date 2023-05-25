import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../../App.css';
import img1 from '../../assets/savingshark.png';

const Page10A = () => {
   
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
                  <p>Anoh tog ett stort andetag och Skrek det högsta skrik han kunde uppbåda: -Ät inte upp min kompis din dumma haj.</p>
                  <br />
                  <p>Hajen stängde förvånat munnen. -Det var inte meningen att skrämma er jag fick bara panik. En krok har fastnat i min mun och jag är så rädd för krokar. När jag såg er tänkte jag att ni kunde hjälpa mig.</p>
                  <br />
                  <p>-Förlåt att vi gjorde dig illa, sa Alia Sjöhäst. -Vi trodde att du skulle anfalla och äta upp oss.</p>
                  <br />
                  <p>Kantor Bläckfisk klappade hajen på huvudet med en av sina tentakler och sa. -Kan du öppna munnen igen så kan jag ta ut kroken.</p>
                  <p>Alia Sjöhäst höll hajen i fenan medan Kantor Bläckfisk drog ut kroken. Hajen tackade för hjälpen.</p>
                  <br />
                  <p>-Nu när kroken är borta vill du komma till vår förskola och se på vår musik-och- dansföreställning frågade Anoh?</p>  
                  <div className='btnContainer'>
                    <Link to="/sida11a">
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

export default Page10A