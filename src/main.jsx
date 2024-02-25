import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './homepage.jsx';
import App from './pages/shadow.jsx';
import Night from './pages/night.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shadow" element={<App />} />
        <Route path="/owner" element={<App />} />
        <Route path="/shdw" element={<App />} />
        <Route path="/night" element={<Night />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
