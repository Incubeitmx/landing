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
        <div className='App-about'><br/>
          <h2>Acerca de CitiTour Morelia</h2>
          <h4>Conóce mas sobre el proyecto.</h4><br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Mauris accumsan, orci in ornare feugiat, diam mi venenatis elit, sit ametc<br/>
          euismod velit mi efficitur ipsum. Nam tristique mi ut vehicula dictum. Aliquam in porttitor nulla. Sed dapibus dignissim metus, vitae<br/>
          rutrum ex. Proin posuere vitae urna et commodo. Curabitur dignissim luctus sem at tincidunt. Mauris risus arcu, placerat id euismod<br/>
          non, faucibus in est. Pellentesque pellentesque luctus urna, id porta nisl dignissim eu. Proin eu mattis nulla. Vivamus pellentesque<br/>
          velit ut nibh maximus tempus. Fusce sed bibendum mi. In rhoncus consequat felis. Vivamus ligula leo, lobortis quis odio non, posuere<br/>
        interdum justo. Fusce laoreet quam id fermentum varius.<br/><br/>
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
