import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup"
import axios from "axios"
import Spinner from '../../Starters/Spinner'

const Signup = () => {
  const [message, setmessage] = useState("")
  const [done, setDone] = useState()
  const navigate = useNavigate()
  const endPoint = "http://localhost:5000/auth/createaccount";

  const logIn = () => {
    navigate("/auth/signin")
  }

  const formik = useFormik({
    initialValues : {
      firstname  : "",
      lastname: "",
      email: "",
      password : ""
    },
    onSubmit: (values) => {
      setDone("true")
      axios.post(endPoint, values).then((result) => {
        if (result.data.status === true) {
          setDone(false)
          navigate("/auth/signin")
        } else {
          setDone(false)
          setmessage(result.data.message)
        }
      }).catch((err) => {
        if (err) {
          setDone(false)
          setmessage("Unable to connect try again later")
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
    <div className="col-lg-7 col-md-9  col-11 bg-white shadow rounded-2" style={{minHeight: "80vh"}}>
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
        <h1 className="text-center pb-3">Welcome To Quizy</h1>  
        {message && <h5 className="mx-4 pb-1 alert alert-danger">{message}</h5>}
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
      </div>
      <Spinner check={ done } />
    </div>
  )
}

export default Signup;
