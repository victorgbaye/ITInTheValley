import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Home/Nav';

const Photograph = () => {
  const [formData, setFormData] = useState({
    photographer: '',
    email: '',
    number: '',
    title: '',
    photoURL: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://it-in-the-valley.onrender.com/api/photograph', formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
        <Nav/>
        <div className="form-container">
            <h1 className="form-header">Submit Photograph</h1>
            <form onSubmit={handleSubmit}>
            <label className="form-label">
                Photographer:
                <input type="text" name="photographer" value={formData.photographer} onChange={handleChange} className="form-input"/>
            </label>
            <br />
            <label className="form-label">
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input"/>
            </label>
            <br />
            <label className="form-label">
                Number:
                <input type="text" name="number" value={formData.number} onChange={handleChange} className="form-input"/>
            </label>
            <br />
            <label className="form-label">
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-input"/>
            </label>
            <br />
            <label className="form-label">
                Photo URL:
                <input type="url" name="photoURL" value={formData.photoURL} onChange={handleChange} className="form-input"/>
            </label>
            <br />
            <button type="submit">Submit</button>
            </form>
        </div>
    </>
  );
}

export default Photograph;
