import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TopBanner.css';
import Carousel1 from "../images/carrousel1.png"
import Carousel2 from "../images/carrousel2.png"

const TopBanner = () => {
  return (
    <div className="banner-carousel">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000}>
        <div>
          <img src={Carousel1} alt=" 1" />
          <div className="carousel-overlay">
            <h2>Informacion importante!</h2>
          </div>
        </div>
        <div>
          <img src={Carousel2} alt=" 2" />
          <div className="carousel-overlay">
            <h2>Maximize su visita</h2>
          </div>
        </div>
        {/* Add placeholders for other carousel items */}
      </Carousel>
    </div>
  );
}

export default TopBanner;
