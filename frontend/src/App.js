// src/App.js
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from './Pages/Services'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Pricing from './Pages/Pricing';
import Explore from './Pages/explore'
import AddCollab from './Pages/addcollab'
import OngoingCollab from './Pages/ongoingcollab'
import PastCollab from './Pages/pastcollab';
import Financial from './Pages/financials';
import Pulse from './Pages/pulse';
import Profile from './Pages/profile';
import Notifications from './Pages/notifications';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Services" element={<Services/>}/>
          <Route path="Pricing" element={<Pricing/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
          <Route path="explore" element={<Explore/>}/>
          <Route path="addcollab" element={<AddCollab/>}/>
          <Route path="ongoingcollab" element={<OngoingCollab/>}/>
          <Route path="pastcollab" element={<PastCollab/>}/>
          <Route path="financials" element={<Financial/>}/>
          <Route path="pulse" element={<Pulse/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="notifications" element={<Notifications/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
