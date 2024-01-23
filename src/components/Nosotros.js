// Nosotros.js
import React from 'react';
import './Nosotros.css'; // Import the Nosotros styles

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h1 className="blue-title">Nosotros</h1>
      <div className="text-container">
        <p>
          Welcome to our organization. We are a dedicated team of professionals committed to providing
          excellent services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget metus
          nec libero pharetra facilisis.
        </p>
        <p>
          In our journey, we have achieved remarkable milestones and earned the trust of our clients.
          Fusce vitae elit vel justo facilisis congue. Suspendisse potenti. Maecenas ac volutpat elit.
        </p>
        {/* Add more highlighted text as needed */}
      </div>
    </div>
  );
}

export default Nosotros;
