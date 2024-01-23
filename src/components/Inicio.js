// Inicio.js
import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component (to be created)
import './Modal.css'; // Import the Modal styles
import './Inicio.css'; // Import the Inicio styles
import inicio1 from '../images/inicio1.png'
import inicio2 from '../images/inicio2.png'
import inicio3 from '../images/inicio3.png'
import inicio4 from '../images/inicio4.png'

const Inicio = () => {

  // State to track whether the modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Area 1 */}
      <div className="inicio-area odd-row">
        <div className="picture">
          {/* Generic placeholder image with max width of 150px */}
          <img src={inicio1} alt=" 1" />
        </div>
        <div className="content">
          <h2 className="blue-title">Title 1</h2>
          <p>Text for area 1 goes here.
          Text for area 1 goes here.
          Text for area 1 goes here.
          Text for area 1 goes here.Text for area 1 goes here.
          Text for area 1 goes here.</p>
          <button className="ver-mas-button" onClick={openModal}>Ver más</button>
        </div>
      </div>

      {/* Area 2 */}
      <div className="inicio-area even-row">
        <div className="content">
          <h2 className="blue-title">Title 2</h2>
          <p>Text for area 2 goes here.</p>
          <button className="ver-mas-button" onClick={openModal}>Ver más</button>
        </div>
        <div className="picture">
          {/* Generic placeholder image with max width of 150px */}
          <img src={inicio3} alt=" 2" />
        </div>
      </div>

      {/* Area 3 */}
      <div className="inicio-area odd-row">
        <div className="picture">
          {/* Generic placeholder image with max width of 150px */}
          <img src={inicio2} alt=" 3" />
        </div>
        <div className="content">
          <h2 className="blue-title">Title 3</h2>
          <p>Text for area 3 goes here.</p>
          <button className="ver-mas-button" onClick={openModal}>Ver más</button>
        </div>
      </div>

      {/* Area 4 */}
      <div className="inicio-area even-row">
        <div className="content">
          <h2 className="blue-title">Title 4</h2>
          <p>Text for area 4 goes here.</p>
          <button className="ver-mas-button" onClick={openModal}>Ver más</button>
        </div>
        <div className="picture">
          {/* Generic placeholder image with max width of 150px */}
          <img src={inicio4} alt=" 4" />
        </div>
      </div>

      {/* Modal Window */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default Inicio;
