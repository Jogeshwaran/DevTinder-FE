import React from "react";
import Navbar from "./Component.tsx/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import BasePage from "./Component.tsx/BasPage";
import Profile from "./Component.tsx/Profile";
import Login from "./Component.tsx/Login";
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasePage />} >  //parentRoute
          <Route path="/login" element={<Login />} /> //childRoutes
          <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
