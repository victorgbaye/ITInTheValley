import React, { useState } from 'react';
import axios from 'axios';

const Photograph = () => {
  const [formData, setFormData] = useState({
    photographer: '',
    email: '',
    number: '',
    title: '',
    photoURL: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://it-in-the-valley.onrender.com/api/photograph', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Photographer:
        <input type="text" name="photographer" value={formData.photographer} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Number:
        <input type="tel" name="number" value={formData.number} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Photo URL:
        <input type="url" name="photoURL" value={formData.photoURL} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Photograph;
