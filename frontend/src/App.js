import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Auth from "../src/Starters/Auth"
import Dashboard from "../src/Starters/Dashboard";
import Notfound from "../src/Starters/Notfound"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Navigate to="/auth/" />} />
        <Route path="/signup" element={<Navigate to="/auth/createaccount" />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/admin/*" element={<Dashboard />} /> 
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;
