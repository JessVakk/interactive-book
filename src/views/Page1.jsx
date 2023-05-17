import React from 'react'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';
import img1 from '../assets/Anoh.png';

const Page1 = () => {
    const [nextPage, setNextPage] = useState(false);

    if (nextPage) {
        return <Navigate to="/sida2" />;
    }

  return (
    <div>
      <div className='BackgroundCover'>
        <div className='splitScren'>
          <div className='column1'>
            <div className='leftSide'>
              <div className='text-container'>
                <p>Det här är Anoh. Han är en Manet. När han föddes slog inte hans hjärta som det skulle.</p>
                <br />
                <p>Ser du honom inte? Klicka på förstoringsglaset.</p>
                <br />
                <p>När han blev lite större fick han genomgå en operation för att laga sitt hjärta. Nu är han precis som alla andra Maneter och kan hoppa och simma omkring, men han kan inte simma för fort eller göra det för länge för att hans hjärta ska må bra.</p>
                <div className='btn-container'>
                  <button className='btn' onClick={() => {setNextPage(true);}}>
                  {" "} Gå vidare </button>
                </div>
              </div>
            </div>  
          </div>
          <div className='column2'>
            <div className='rightSide'>
              < img className='pageImg' src={img1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1