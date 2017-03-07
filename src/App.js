import React, { Component } from 'react';
import logoFoot from './img/page_1_copy.png';
import logoHead from './img/page_1.png';
import phone from './img/bitmap.png'
import playstore from './img/playstore.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoHead} className="head-logo" alt="head-logo"/>
        </div>
        <div className='App-why'>
          <img src={phone} className="phone-logo" alt="phone-logo"/>
        </div>
        <div className='App-download'>
          <h2>¿Cómo descargarla?</h2>
          <h4>Disponible ya en las tiendas</h4>
          <a href='https://play.google.com/store/apps/details?id=com.cititourIncubeit' className="play-logo"><img src={playstore} className="play-logo" alt="play-logo"/></a>
        </div>
        <div className='App-about'>
        </div>
        <div className='App-team'>
        </div>
        <div className='App-foot'>
          <img src={logoFoot} className="foot-logo" alt="foot-logo"/>
        </div>
      </div>
    );
  }
}

export default App;
