import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TopBanner.css';
import Carousel1 from "../images/carrousel2.png"
import Carousel2 from "../images/inicio2.png"
import Carousel3 from "../images/inicio3.png"

const TopBanner = () => {
  return (
    <div className="banner-carousel">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000}>
        <div>
          <img src={Carousel1} alt=" 1" />
          <div className="carousel-overlay">
            <h4>Turnos disponibles al WhatsApp</h4>
          </div>
        </div>
        <div>
          <img src={Carousel2}  alt='asd'/>
          <div className="carousel-overlay">
            <h2>50% de descuento ahora con PAMI</h2>
          </div>
        </div>
        <div>
          <img src={Carousel3} alt=","/>
          <div className="carousel-overlay">
            <h2>Atendemos todas las prepagas</h2>
          </div>
        </div>

      </Carousel>
    </div>
  );
}

export default TopBanner;
