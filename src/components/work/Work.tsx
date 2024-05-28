import './Work.css';
import React from 'react';

class ContainerWork extends React.Component {
  render() {
    return (
      <div id='work' className='work-container'>
        <div className='work-content col-16'>
          <div className='work-content-header'>
            <h2>Latest creations</h2>
          </div>
          <div className='work-content-row'>
            <div className='work-content-row-item col-8'>
              <img src='https://via.placeholder.com/150' alt='work' />
              <h3>Project name</h3>
              <p>Project description</p>
            </div>
            <div className='work-content-row-item col-8'>
              <img src='https://via.placeholder.com/150' alt='work' />
              <h3>Project name</h3>
              <p>Project description</p>
            </div>
          </div>
          <div className='work-content-row'>
            <div className='work-content-row-item col-8'>
              <img src='https://via.placeholder.com/150' alt='work' />
              <h3>Project name</h3>
              <p>Project description</p>
            </div>
            <div className='work-content-row-item col-8'>
              <img src='https://via.placeholder.com/150' alt='work' />
              <h3>Project name</h3>
              <p>Project description</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerWork;