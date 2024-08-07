import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputKehadiran from './pages/InputKehadiran';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputKehadiran />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
