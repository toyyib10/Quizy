import React from 'react'
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()
  const createAccount = () => {
    navigate("/auth/createaccount")
  }
  const logIn = () => {

  }
  return (
    <div className="h-75 col-lg-7 col-md-9  col-11 bg-white shadow rounded-2" style={{minHeight: "80vh"}}>
      <div className="slide-controls d-flex border-bottom rounded-top-2">
        <input type = "radio" name = "slide" id ="login" checked/>
        <input type = "radio" name = "slide" id ="signup" />
        <label for="login" className="slide login w-50" onClick={() => logIn()}> Login </label>
        <label for="signup" className="slide signup w-50" onClick={() => createAccount()}>Create Account</label>
        < div className = "slider-tab"
        id = "tab"
        style = {{borderRadius: "5px 0px 0px 0px"}}> </div>
      </div>  
      <div className="w-100 pt-3 hold">
          <h1 className="text-center mt-2 pb-3">Welcome Back</h1>  
        <form action="" className="w-100 h-100 px-4">
          <div className="form-floating my-4 my-lg-3">
            <input type="email" className="form-control ps-4" id="validationTooltip02" placeholder="Email" required/>
            <label className="form-label text-start ms-2">Email</label>
          </div>
          {/* <div>This field is required</div> */}
          <div className="form-floating my-4 my-lg-3">
            <input type="password" className="form-control ps-4" id="validationTooltip02" placeholder="Password" required/>
            <label className="form-label text-start ms-2">Password</label>
          </div>
          {/* <div>This field is required</div> */}
          <div className="w-100 d-flex justify-content-center pt-4">
            <button className="btn btn-lg btn-light text-white w-75" style={{background: "-webkit-linear-gradient(left, #a445b2, #fa4299)"}}>Login In</button>
          </div>
        </form>
        <h5 className="text-center m-0 mt-4">Or Login With</h5>
        <div className="w-100 d-flex px-4 justify-content-around align-content-end flex-wrap mt-lg-4 mt-4">
          <a className="btn btn-lg mt-2 mb-3 d-flex justify-content-between align-content-center bg-light"> <img src="/images/google.png" className="me-2" style={{height:"25px"}} alt="fhfhh"/> Google</a>
          <a className="btn btn-lg mt-2 mb-3 d-flex justify-content-between align-content-center bg-light"> <img src="/images/facebook.png" className="me-2" style={{height:"30px"}} alt="fhfhh"/> FaceBook</a>
        </div>
      </div>
    </div>
  )
}

export default Signup;
