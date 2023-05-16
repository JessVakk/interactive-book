import React from 'react'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

const Page8 = () => {
    const [nextPage, setNextPage] = useState(false);

    if (nextPage) {
        return <Navigate to="/sida9" />;
    }
  return (
    <div className='square'>
        <div className='book-text-wrapper'>
          <p className='book-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur iure error fuga quos id soluta. Veniam quis placeat nostrum consequuntur aperiam dignissimos cum minima quibusdam, molestias sit, enim quia?</p>
          <br />
          <p className='book-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quo facilis molestiae autem pariatur, quod eum dignissimos tempora cupiditate eaque ex iusto! Id explicabo magnam aspernatur excepturi obcaecati, eum molestiae.</p>
        </div>
        <div className='btn-container'>
          <button className='btn' onClick={() => {setNextPage(true);}}>
          {" "} Gå vidare </button>
        </div>
      </div>
  )
}

export default Page8