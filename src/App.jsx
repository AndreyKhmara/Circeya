import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './Componenets/Mainpage/Mainpage';
import './fonts/stylesheet.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
    </Routes>

  );
}

export default App;
