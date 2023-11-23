import React from 'react';
import './Apresentacoes.css';
import ap1 from './assets/apresentacao1.png';
import ap2 from './assets/apresentacao2.png';

const Apresentacoes = () => {
  return (
    <div>
      <div className="section">
        <div className="text">
          <h2>Ballet Kids</h2>
          <p>Data: 01/11/2023</p>
          <p>Local: Teatro Inatel</p>
        </div>
        <img src={ap1}/>
      </div>

      <div className="section">
        <div className="text">
          <h2>Garotos da Vila - Cinema</h2>
          <p>Data: 02/11/2023</p>
          <p>Local: Cinema</p>
        </div>
        <img src={ap2}/>
      </div>
    </div>
  );
};


export default Apresentacoes;