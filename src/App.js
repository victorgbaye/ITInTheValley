import React from 'react';
import Advert from './pages/Advert/Advert';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import SubmitStory from './pages/SubmitStory/SubmitStory';
import Photograph from './pages/Photograph';
import StoriesPage from './pages/Stories/Stories';
import AllPhotographs from './pages/Photograph/Photograph';
import AllAds from './pages/AllAds/AllAdverts';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/advertise-with-us' element={<Advert/>}/>
        <Route path='/submit/story' element={<SubmitStory/>}/>
        <Route path='/submit/photograph' element={<Photograph/>}/>
        <Route path='/Admin/Stories' element={<StoriesPage/>}/>
        <Route path='/Admin/Photographs' element={<AllPhotographs/>}/>
        <Route path='/Admin/Adverts' element={<AllAds/>}/>

      </Routes>
      <div className="App">
       
      </div>
    </Router>
  );
}

export default App;
