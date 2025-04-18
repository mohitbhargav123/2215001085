// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopPosts from './components/TopPosts';
import TrendingPosts from './components/TrendingPosts';
import Feed from './components/Feed';
import './App.css'; // Basic CSS for layout

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/top">Top Posts</Link>
            </li>
            <li>
              <Link to="/trending">Trending Posts</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/top" element={<TopPosts />} />
          <Route path="/trending" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/" element={<Feed />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;