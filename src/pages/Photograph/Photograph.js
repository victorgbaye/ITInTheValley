import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllPhotographs.css";
import Sidebar from "../Sidebar/MarketingDpt";

function AllPhotographs() {
  const [photographs, setPhotographs] = useState([]);

  useEffect(() => {
    axios
      .get("https://it-in-the-valley.onrender.com/api/photograph")
      .then(response => {
        setPhotographs(response.data.photographs);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{display:"flex"}}>
    <Sidebar/>
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Photographer</th>
            <th>Email</th>
            <th>Number</th>
            <th>Photo Title</th>
            <th>Photo URL</th>
          </tr>
        </thead>
        <tbody>
          {photographs.map(photograph => (
            <tr key={photograph._id}>
              <td>{photograph.photographer}</td>
              <td>{photograph.email}</td>
              <td>{photograph.number}</td>
              <td>{photograph.title}</td>
              <td>{photograph.photoURL || photograph.photo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AllPhotographs;
