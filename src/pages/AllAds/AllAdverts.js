import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/MarketingDpt';

const AllAds = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://it-in-the-valley.onrender.com/api/advert'
      );
      setData(result.data.adverts);
    };
    fetchData();
  }, []);

  return (
    <div style={{display:"flex"}}>
    <Sidebar/>
    <table style={{ width: '100%' }}>
      <thead>
        <tr style={{ background: '#f0f2f5' }}>
          <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Email</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Number</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Title</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Advert</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Image name</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Image Description</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Image URL</th>



        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td style={{ padding: '8px' }}>{item.name}</td>
            <td style={{ padding: '8px' }}>{item.email}</td>
            <td style={{ padding: '8px' }}>{item.number}</td>
            <td style={{ padding: '8px' }}>{item.title}</td>
            <td style={{ padding: '8px' }}>{item.advert.substring(0, 100)}</td>
            <td style={{ padding: '8px' }}>{item.picture?.image}</td>
            <td style={{ padding: '8px' }}>{item.picture?.description}</td>
            <td style={{ padding: '8px' }}>{item.picture?.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default AllAds;
