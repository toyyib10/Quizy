import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Signin from "../components/Auth/Signin"
import Signup from "../components/Auth/Signup"
import "../cssfiles/sign.css"


const Auth = () => {
  const createAccount = () => {
    document.querySelector(".slider-tab").style.borderRadius ="0px 5px 0px 0px"
  }
  const logIn = () => {
    document.querySelector(".slider-tab").style.borderRadius = "5px 0px 0px 0px"
  }
  return (
    <>
      {/* twillo */}
      < section className = "w-100 d-flex justify-content-center align-items-center body">
        <div className="h-75 col-lg-7 col-md-9  col-11 bg-white shadow rounded-2" style={{minHeight: "80vh"}}>
          <div className="slide-controls d-flex border-bottom rounded-top-2">
            <input type = "radio" name = "slide" id ="login" checked />
            <input type = "radio" name = "slide" id ="signup" />
            <label for="login" className="slide login w-50" onClick={() => logIn()}> Login </label>
            <label for="signup" className="slide signup w-50" onClick={() => createAccount()}>Create Account</label>
            < div className = "slider-tab"
            id = "tab"
            style = {{borderRadius: "5px 0px 0px 0px"}}> </div>
          </div>  
          <div className="w-100 pt-2" style={{ minHeight: "80vh", borderRadius: "0px 0px 5px 5px" }}>
              <h1 className="text-center mt-2 pb-3">Welcome To Quizy</h1>  
            <form action="" className="w-100 h-100 px-4">
              <div className="form-floating mb-2 mt-1">
                <input type="text" className="form-control ps-4" id="validationTooltip02" placeholder="First Name" required/>
                <label className="form-label text-start ms-2">First Name</label>
              </div> 
              <div className="form-floating my-2">
                <input type="text" className="form-control ps-4" id="validationTooltip02" placeholder="Last Name" required/>
                <label className="form-label text-start ms-2">Last Name</label>
              </div> 
              <div className="form-floating my-2">
                <input type="email" className="form-control ps-4" id="validationTooltip02" placeholder="Email" required/>
                <label className="form-label text-start ms-2">Email</label>
              </div>
              <div className="form-floating my-2">
                <input type="password" className="form-control ps-4" id="validationTooltip02" placeholder="Password" required/>
                <label className="form-label text-start ms-2">Password</label>
              </div>
              <div className="w-100 d-flex justify-content-center pt-3">
                <button className="btn btn-lg btn-light text-white" style={{background: "-webkit-linear-gradient(left, #a445b2, #fa4299)"}}>Create Account</button>
              </div>
            </form>
            <div className="w-100 d-flex px-4 justify-content-around align-content-end flex-wrap mt-4">
              <a className="btn btn-lg my-3">Create Account with Google</a>
              <a className="btn btn-lg my-3">Create Account with FaceBook</a>
            </div>
          </div>
        </div>
      </section>    
      {/* <Routes>
        <Route path="/" element={<Navigate to="/auth/signin"/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/createaccount" element={<Signup/>}/>
        <Route path="/signup" element={<Navigate to="/auth/createaccount"/>}/>
      </Routes> */}
    </>
  )
}

export default Auth;
