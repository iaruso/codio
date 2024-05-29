import './Intro.css';
import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className='intro-container'>
      <main className='col-16'>
        <div className='empty-block col-2'></div>
        <div className='empty-block col-2'></div>
        <div className='intro-content col-8'>
          <h1>Crafting with care<br></br>Beyond expectations</h1>
          <p>Collaborative partnerships to craft impactful online experiences</p>
          <div className='button-area'>
            <div className='empty-block'></div>
            <div className='empty-block'></div>
            <div className='cta'>
              <button>Get in touch</button>
            </div>
            <div className='empty-block'></div>
            <div className='empty-block'></div>
            <div className='button-area-overlay'></div>
          </div>
        </div>
        <div className='empty-block col-2'></div>
        <div className='empty-block col-2'></div>
      </main>
    </section>
  );
};

export default Intro;
