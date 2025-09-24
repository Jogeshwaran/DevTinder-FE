import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import BasePage from "./Component/BasPage";
import Profile from "./Component/Profile";
import Login from "./Component/Login";
import Feed from "./Component/Feed";
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasePage />} >  //parentRoute
          <Route path="/login" element={<Login />} /> //childRoutes
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element = {<Feed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
