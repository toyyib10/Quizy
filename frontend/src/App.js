import React from 'react'
import {Routes, Route} from "react-router-dom"
import Auth from "../src/Starters/Auth"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App;
