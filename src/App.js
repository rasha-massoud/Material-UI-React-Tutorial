import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div container>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
