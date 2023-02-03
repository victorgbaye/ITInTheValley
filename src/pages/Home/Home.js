import React, { useState } from 'react';
import './Home.css';
import Homepic from './Home.jpg'
import Nav from './Nav';
const Home = () => {
  return (
    <>
        <Nav/>
        <div className="landing-page">
        <div className="center-text">
            <h1>Welcome to IT In The Valley</h1>
            <p>Connecting you to the latest technology trends and innovations</p>
            <img style={{width:"50%"}} src={Homepic} alt="landing img"/>
        </div>
        </div>
    </>
  )
}

export default Home