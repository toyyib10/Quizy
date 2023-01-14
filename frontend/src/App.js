import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Auth from "../src/Starters/Auth"
import Dashboard from "../src/Starters/Dashboard";
import Notfound from "../src/Starters/Notfound"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap"
import "../src/cssfiles/notfound.css"
import JoinQuiz from './Starters/JoinQuiz';
import LandingPage from "./Starters/LandingPage";
import Start from './Starters/Start';
import Demo from './Starters/Demo';

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signin" element={<Navigate to="/auth/" />} />
        <Route path="/signup" element={<Navigate to="/auth/createaccount"/>} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/admin/*" element={<Dashboard />} /> 
        <Route path="/joinquiz/*" element={<JoinQuiz />} />
        <Route path="/start" element={<Start />} />
        <Route path="/start/demo" element={<Demo />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;
