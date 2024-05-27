import './Intro.css';
import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className='intro-container'>
      <main className='col-16'>
        <div className='intro-content col-12'>
          <h1>Crafting with care<br></br>Beyond expectations</h1>
          <p>Collaborative partnerships to craft impactful online experiences</p>
          <button className='cta'>Get in touch</button>
        </div>
      </main>
    </div>
  );
};

export default Intro;
