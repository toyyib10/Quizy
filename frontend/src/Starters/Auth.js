import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import


const Auth = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/signin"/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </>
  )
}

export default Auth;
