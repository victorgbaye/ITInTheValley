import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/MarketingDpt';

function StoriesPage() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://it-in-the-valley.onrender.com/api/stories')
      .then(response => response.json())
      .then(data => setStories(data.stories))
      .catch(error => setError(error));
  }, []);
console.log(stories.stories);
  return (
    <div style={{display:"flex"}}>
        <Sidebar/>
        <div style={{ padding: '20px' }}>
        <h1>Stories</h1>
        {error && <p>An error occurred: {error.message}</p>}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
            <tr style={{ borderBottom: '1px solid black' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>Author</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Number</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Title</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Story</th>

            </tr>
            </thead>
            <tbody>
            {stories.map(story => (
                <tr key={story._id} style={{ borderBottom: '1px solid gray' }}>
                <td style={{ padding: '10px', textAlign: 'left' }}>{story.author}</td>
                <td style={{ padding: '10px', textAlign: 'left' }}>{story.email}</td>
                <td style={{ padding: '10px', textAlign: 'left' }}>{story.number}</td>
                <td style={{ padding: '10px', textAlign: 'left' }}>{story.title}</td>
                <td style={{ padding: '10px', textAlign: 'left' }}>{`${story.story.substring(0, 150)}...read more`}</td>

                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
  );
}

export default StoriesPage;
