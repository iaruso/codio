import './Team.css';
import React from 'react';

class ContainerTeam extends React.Component {
  render() {
    return (
      <section id='team' className='team-container'>
        <div className='team-content col-16'>
          <div className='team-content-header' style={{ height: '100vh' }}>
            <h2>Who are we?</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default ContainerTeam;