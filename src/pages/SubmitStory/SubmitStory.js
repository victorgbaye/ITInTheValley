import React, { useState } from "react";
import "./SubmitStory.css";
import axios from "axios";

const SubmitStory = () => {
  const [formData, setFormData] = useState({
    author: "",
    email: "",
    number: "",
    title: "",
    story: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://it-in-the-valley.onrender.com/api/stories", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  return (
    <div className="form-container">
      <h1 className="form-header">Submit Story</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Author
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Number
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Story
          <textarea
            name="story"
            value={formData.story}
            onChange={handleChange}
            className="form-textarea"
            required
          />
        </label>
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitStory;
