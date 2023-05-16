import React from 'react'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

const Page7 = () => {
    
    const [nextPage, setNextPage] = useState(false);
    const [choise2, setChoise2] = useState(false);
    if (nextPage) {
        return <Navigate to="/sida8" />;
    
    }else if (choise2) {
        return <Navigate to="/sida8a" />;
    }
    
  return (
    <div className='square'>
        <div className='book-text-wrapper'>
          <p className='book-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur iure error fuga quos id soluta. Veniam quis placeat nostrum consequuntur aperiam dignissimos cum minima quibusdam, molestias sit, enim quia?</p>
          
        </div>
        <div className='btn-container'>
          <button className='btn' onClick={() => {setNextPage(true);}}>
          {" "} Hjälpa Gregor </button>
          <button className='btn' onClick={() => {setChoise2(true);}}>
          {" "} Stanna och vinna </button>
        </div>
      </div>
  )
}


export default Page7