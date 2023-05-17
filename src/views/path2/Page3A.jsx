import React from 'react';
import img1 from '../../assets/vännerna1.png';

const Page3A = () => {
  return (
    <div>
      <section>
        <div className='splitScren'>
          <div className='column'>
            <div className='leftSide'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda minus quas, fugiat nisi distinctio cumque fuga inventore illo architecto accusamus iure, ipsa, quo maiores consequatur odio error consectetur est aut.</p>
            </div>
          </div>
          <div className='column'>
            <div className='rightSide'>
                <img className='pageImg' src={img1} />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Page3A