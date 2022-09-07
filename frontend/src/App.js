import React from 'react'
import {Routes, Route} from "react-router-dom"
import Auth from "../src/Starters/Auth"

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
