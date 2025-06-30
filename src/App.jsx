import React from 'react';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import Navigation from './navigation/Navigation';
import Author from './pages/Author'
import Search from './pages/Search';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoDetail from './pages/VideoDetail';


const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news-detail" element={<NewsDetail />} />
          <Route path="/video-details" element={<VideoDetail />} />
          <Route path="/author" element={<Author />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
