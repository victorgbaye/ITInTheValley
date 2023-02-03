import React, { useState } from 'react';
import './Home.css';
import Homepic from './Home.jpg'
const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
      };
    
      const handleOpenModal = () => {
        setShowModal(!showModal);
      };
  return (
    <>
        <div className="landing-page">
        <nav className="navbar" style={{ marginRight:"50px"}}>
            <div className="logo" style={{ paddingLeft:"50px"}}>IT In The Valley</div>
            <div className="buttons">
            <button className="advertise-button">Advertise with us</button>
            <button className="submit-button" onClick={handleOpenModal}>Submit Content</button>
            </div>
        </nav>
        <div className="center-text">
            <h1>Welcome to IT In The Valley</h1>
            <p>Connecting you to the latest technology trends and innovations</p>
            <img style={{width:"50%"}} src={Homepic} alt="landing img"/>
        </div>
        </div>
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Select type of content</h2>
            <div className="options">
              <button className="photograph">Photograph</button>
              <button className="story">Story</button>
            </div>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Home