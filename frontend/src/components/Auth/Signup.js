import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup"
import axios from "axios"

const Signup = () => {
  const navigate = useNavigate()
  const logIn = () => {
    navigate("/auth/signin")
  }
  const [message, setmessage] = useState("")
  const formik = useFormik({
    initialValues : {
      firstname  : "",
      lastname: "",
      email: "",
      password : ""
    },
    onSubmit: (values) => {
      const endPoint = "http://localhost:5000/auth/createaccount"
      axios.post(endPoint, values).then((result) => {
        setmessage(result.data.message)
        if (result.data.status === true) {
          navigate("/auth/signin")
        }
      })
    },
    validationSchema : yup.object({
      firstname: yup.string().required("This field is required"),
      lastname: yup.string().required("This field is required"),
      email: yup.string().required("This field is required").email("This field must be an email"),
      password: yup.string().required("This field is required").min(6, "This field must be greater than 6").max(15, "This field must be less than 15")
    })
  })
  return (
    <div className="h-75 col-lg-7 col-md-9  col-11 bg-white shadow rounded-2" style={{minHeight: "80vh"}}>
      <div className="slide-controls d-flex border-bottom rounded-top-2">
        <input type = "radio" name = "slide" id ="login"/>
        <input type = "radio" name = "slide" id ="signup" checked/>
        <label for="login" className="slide login w-50" onClick={() => logIn()}> Login </label>
        <label for="signup" className="slide signup w-50">Create Account</label>
        < div className = "slider-tab"
        id = "tab"
        style = {{borderRadius: "0px 5px 0px 0px"}}> </div>
      </div>  
      <div className="w-100 pt-2 hold">
        <h1 className="text-center mt-1 pb-2">Welcome To Quizy</h1>  
        {message && <h5 className="mx-4 pb-2 alert alert-danger">{message}</h5>}
        <form action="" className="w-100 h-100 px-4" onSubmit={formik.handleSubmit}>
          <div className="form-floating my-2">
            <input
              type="text"
              className={ formik.errors.firstname && formik.touched.firstname ? 'form-control is-invalid ps-4' : 'form-control ps-4' }
              name="firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="First Name" required />
            <label className="form-label text-start ms-2">First Name</label>
          </div> 
          {formik.touched.firstname ? <div className="text-danger">{ formik.errors.firstname }</div> : ""}
          <div className="form-floating my-2">
            <input
              type="text"
              className={ formik.errors.lastname && formik.touched.lastname ? 'form-control is-invalid ps-4' : 'form-control ps-4' }
              name="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Last Name" required />
            <label className="form-label text-start ms-2">Last Name</label>
          </div> 
          {formik.touched.lastname ? <div className="text-danger">{ formik.errors.lastname }</div> : ""}
          <div className="form-floating my-2">
            <input
              type="email"
              className={ formik.errors.email && formik.touched.email ? 'form-control is-invalid ps-4' : 'form-control ps-4' }
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email" required />
            <label className="form-label text-start ms-2">Email</label>
          </div>
          {formik.touched.email ? <div className="text-danger">{ formik.errors.email }</div> : ""}
          <div className="form-floating my-2">
            <input
              type="password"
              className={ formik.errors.password && formik.touched.password ? 'form-control is-invalid ps-4' : 'form-control ps-4' }
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Password" required />
            <label className="form-label text-start ms-2">Password</label>
          </div>
          {formik.touched.password ? <div className="text-danger">{ formik.errors.password }</div> : ""}
          <div className="w-100 d-flex justify-content-center pt-lg-3 pt-4">
            <button type="submit" className="btn btn-lg btn-light text-white w-75 hover">Create Account</button>
          </div>
        </form>
        <h5 className="text-center m-0 mt-lg-3 mt-4">Or Create Account With</h5>
        <div className="w-100 d-flex px-4 justify-content-around align-content-end flex-wrap mt-lg-2 mt-3">
          <a href="/" className="btn btn-lg mt-1 mb-2 d-flex justify-content-between align-content-center bg-light"> <img src="/images/google.png" className="me-2" style={{height:"25px"}} alt="fhfhh"/> Google</a>
          <a href="/" className="btn btn-lg mt-1 mb-2 d-flex justify-content-between align-content-center bg-light"> <img src="/images/facebook.png" className="me-2" style={{height:"30px"}} alt="fhfhh"/> FaceBook</a>
        </div>
      </div>
    </div>
  )
}

export default Signup;
