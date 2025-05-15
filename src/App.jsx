import { useState } from 'react';
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';

import HomeUI from "./view/home_ui.jsx";
import LoginUI from "./view/login.jsx";
import RegisterUI from "./view/register.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeUI />} />
          <Route path="/home" element={<HomeUI />} />
          <Route path="/login" element={<LoginUI />} />
          <Route path="/register" element={<RegisterUI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
