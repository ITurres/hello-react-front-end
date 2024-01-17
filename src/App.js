import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
