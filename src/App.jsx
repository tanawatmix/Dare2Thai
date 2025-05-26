import { useState } from 'react';
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';

import HomeUI from "./view/home_ui.jsx";
import LoginUI from "./view/login.jsx";
import RegisterUI from "./view/register.jsx";
import PlaceUI from "./view/place.jsx";
import StoreUI from "./view/store.jsx";
import HotelUI from "./view/hotel.jsx";

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
          <Route path="/place" element={<PlaceUI />} />
          <Route path="/store" element={<StoreUI />} />
          <Route path="/hotel" element={<HotelUI />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
