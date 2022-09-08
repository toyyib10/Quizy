import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Signin from "../components/Auth/Signin"
import Signup from "../components/Auth/Signup"
import "../cssfiles/sign.css"


const Auth = () => {
  return (
    <>
      {/* twillo */}
      < section className = "w-100 d-flex justify-content-center align-items-center body">
        <Routes>
          <Route path="/" element={<Navigate to="/auth/signin"/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Navigate to="/auth/createaccount"/>}/>
          <Route path="/createaccount" element={<Signup/>}/>
        </Routes>
      </section>
    </>
  )
}

export default Auth;
