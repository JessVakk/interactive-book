import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../App.css';
import img1 from '../assets/bookcover.png';

const Home = () => {
 
    return (
        <div className='bookCover'>
            <div className='overlay'>
                <div className="modalContainer">
                    <h1>Var god vänd på plattan för att läsa boken.</h1>
                </div>
            </div>
            <div className='bookContainer'>
                <div className='btnBookcoverContainer'>
                    <Link to="/sida1">
                        <button className='btn'>Läs boken</button>
                    </Link>
                </div>
                <div className='coverImage'>
                    <motion.div className="image-container">
                        <motion.img className='pageImg' src={img1} alt=""/>
                    </motion.div>
                </div>
            </div>
        </div>
      
    )
  }
  
  export default Home