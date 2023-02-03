// import React, { useState } from 'react';
// import axios from 'axios';

// function StoryForm() {
//   const [formData, setFormData] = useState({
//     author: "",
//     email: "",
//     number: "",
//     title: "",
//     story: ""
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios.post('https://it-in-the-valley.onrender.com/api/stories', formData)
//     .then(res => {
//       console.log(res);
//       console.log(res.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Author:
//         <input type="text" name="author" value={formData.author} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Phone Number:
//         <input type="number" name="number" value={formData.number} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Title:
//         <input type="text" name="title" value={formData.title} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Story:
//         <textarea name="story" value={formData.story} onChange={handleChange} />
//       </label>
//       <br />
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }

// export default StoryForm;


import React, { useState } from "react";
import axios from "axios";
import "./Advert.css";

const Advert = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    title: "",
    advert: "",
    picture: {
      image: "",
      description: "",
      url: ""
    }
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePictureChange = e => {
    setFormData({
      ...formData,
      picture: { ...formData.picture, [e.target.name]: e.target.value }
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://it-in-the-valley.onrender.com/api/advert",
        formData
      );
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Number"
        name="number"
        value={formData.number}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="form-input"
      />
      <textarea
        placeholder="Advert"
        name="advert"
        value={formData.advert}
        onChange={handleChange}
        className="form-textarea"
      />
      <input
        type="text"
        placeholder="Image"
        name="image"
        value={formData.picture.image}
        onChange={handlePictureChange}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={formData.picture.description}
        onChange={handlePictureChange}
        className="form-input"
      />
      <input
        type="text"
        placeholder="URL"
        name="url"
        value={formData.picture.url}
        onChange={handlePictureChange}
        className="form-input"
      />
      <button  className="form-submit-button">Submit</button>
    </form>
 
  )
}
export default Advert;

