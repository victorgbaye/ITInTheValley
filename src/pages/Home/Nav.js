import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
      };
    
      const handleOpenModal = () => {
        setShowModal(!showModal);
      }
  return (
    <div >
        <nav className="navbar" >
            <Link to="/">
                <div className="logo" >IT In The Valley</div>
            </Link>
            <div className="buttons">
            <Link to="/advertise-with-us">
            <button className="advertise-button">Advertise with us</button>
            </Link>
            <button className="submit-button" onClick={handleOpenModal}>Submit Content</button>
            </div>
        </nav>
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Select type of content</h2>
            <div className="options">
              <button className="photograph">Photograph</button>
              
              <Link to="/submit/story">
              <button className="story">Story</button>
            </Link>
            </div>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default Nav