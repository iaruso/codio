import './Services.css';
import React from 'react';

class ContainerServices extends React.Component {
  render() {
    return (
      <section id='services' className='services-container'>
        <div className='services-content col-16'>
          <div className='services-content-header'>
            <h2>Our services</h2>
          </div>
          <div className='services-content-area'>
            <div className='services-content-area-grid-options col-12'>
              <button className='services-content-area-grid-options-item col-4'>Design</button>
              <button className='services-content-area-grid-options-item col-4'>Development</button>
              <button className='services-content-area-grid-options-item col-4'>Branding</button>
            </div>
            <div className='services-content-area-grid'>
              <div className='empty-block col-2'></div>
              <div className='services-content-area-grid-container col-12'>
                <div className='services-content-area-grid-container-description'>
                  <p>Designing impactful online experiences that resonate with your audience</p>
                </div>
                <div className='services-content-area-grid-container-canvas'>
                  <div className='bg'></div>
                </div>
              </div>
              <div className='empty-block col-2'></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContainerServices;