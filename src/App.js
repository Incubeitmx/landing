import React, { Component } from 'react';
import logoFoot from './img/page_1_copy.png';
import logoHead from './img/page_1.png';
import phone from './img/bitmap.png'
import playstore from './img/playstore.png'
import './App.css';
import { div,p,h1,h2,h3,h4 } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a href="#"><img src={logoHead} className="head-logo" alt="head-logo"/></a>
          <div className="App-links">
            <p ><a href="#App-download" className="links">DESCARGAR</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#App-why" className="links">¿POR QUÉ DEBERÍA USARLA?</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#App-about" className="links">ACERCA DE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </div>
          <div className="App-intro">
            <h1>¿Qué es CitiTour Morelia?</h1><br/>
            <p className="intro">CitiTour Morelia es una aplicación que cuenta todo sobre los sitios de interés histórico, cultural y artísticos más relevantes de la ciudad de Morelia.</p><br/><br/>
            <div className="btmDownload">
              <a href="#App-download" className="links2">Descargar App</a>
            </div>
          </div>
        </div>


        <div className='App-why' alt="App-why" id="App-why">
          <img src={phone} className="phone-logo" alt="phone-logo"/>
          <div className="Why-desc">
            <h1>¿Por qué deberías usarla?</h1><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel ultricies tellus.
               Phasellus convallis varius ipsum, nec blandit ipsum pretium id. In hac habitasse platea dictumst. </p>
             <br/><p>Ver los eventos más cercanos.</p>
             <p>Listado de lugares populares por categoría.</p>
             <p>Ver lugares y conocer más sobre ellos.</p>
             <p>Hacer un recorrido guíado, caminando, en bicicleta o en automóvil.</p>
          </div>
        </div>


        <div className='App-download' id="App-download">
          <h2>¿Cómo descargarla?</h2>
          <h4>Disponible ya en las tiendas</h4>
          <a href='https://play.google.com/store/apps/details?id=com.cititourIncubeit' className="play-logo"><img src={playstore} className="play-logo" alt="play-logo"/></a>
        </div>


        <div className='App-about' id="App-about"><br/>
          <h2>Acerca de CitiTour Morelia</h2>
          <h4>Conóce mas sobre el proyecto.</h4>
          <p className="descrip"><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Mauris accumsan, orci in ornare feugiat, diam mi venenatis elit, sit ametc
          euismod velit mi efficitur ipsum. Nam tristique mi ut vehicula dictum. Aliquam in porttitor nulla. Sed dapibus dignissim metus, vitae
          rutrum ex. Proin posuere vitae urna et commodo. Curabitur dignissim luctus sem at tincidunt. Mauris risus arcu, placerat id euismod
          non, faucibus in est. Pellentesque pellentesque luctus urna, id porta nisl dignissim eu. Proin eu mattis nulla. Vivamus pellentesque
          velit ut nibh maximus tempus. Fusce sed bibendum mi. In rhoncus consequat felis. Vivamus ligula leo, lobortis quis odio non, posuere
        interdum justo. Fusce laoreet quam id fermentum varius.</p>
        </div>



        <div className='App-foot'>
          <a href="#"><img src={logoFoot} className="foot-logo" alt="foot-logo"/></a>
          <div className="rights">©2017 CitiTour Morelia.<br/>Todos los derechos reservados.</div>
        </div>

      </div>
    );
  }
}

export default App;
