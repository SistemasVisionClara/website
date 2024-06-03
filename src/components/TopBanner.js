import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TopBanner.css';
import Carousel1 from "../images/beautiful-teenage-woman-covering-one-eye-with-her-hand.jpg"
import Carousel2 from "../images/old-man-standing-gray-backround-with-his-granddaughter.jpg"
import Carousel3 from "../images/side-view-woman-getting-her-eyes-checked.jpg"

const TopBanner = () => {
  return (
    <div className="banner-carousel">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000}>
        <div>
          <img  className="carousel-image" src={Carousel1} alt=" Free copyrights downloaded from Freepick.com" />
          <div className="carousel-overlay">
            <h2>Turnos disponibles al WhatsApp</h2>
          </div>
        </div>
        <div>
          <img src={Carousel2} className="carousel-image" alt='Free copyrights downloaded from Freepick.com'/>
          <div className="carousel-overlay">
            <h2>50% de descuento PAMI con reembolso</h2>
          </div>
        </div>
        <div>
          <img style={{filter:"blur(.5px)"}} src={Carousel3} alt="Free copyrights downloaded from Freepick.com"className="carousel-image" />
          <div className="carousel-overlay">
            <h2>Atendemos todas las prepagas con reembolso</h2>
          </div>
        </div>

      </Carousel>
    </div>
  );
}

export default TopBanner;
