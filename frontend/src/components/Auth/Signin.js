import React from 'react'
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios"

const Signup = () => {
	const navigate = useNavigate()
	const createAccount = () => {
		navigate("/auth/createaccount")
	}
	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		onSubmit: (values) => {
			const endPoint = "http://localhost:5000/auth/login"
			axios.post(endPoint, values).then((result) => {
				console.log(result)
			})
		},
		validationSchema: yup.object({
			email: yup.string().required("This field is required").email("Must be an email"),
			password: yup.string().min(6, "Password must be at most 6 characters").max(15, "Password must be at least 15 characters").required("This field is required")
		}),
	})
	return (
		<div className="h-75 col-lg-7 col-md-9  col-11 bg-white shadow rounded-2" style={{minHeight: "80vh"}}>
			<div className="slide-controls d-flex border-bottom rounded-top-2">
				<input type = "radio" name = "slide" id ="login" checked/>
				<input type = "radio" name = "slide" id ="signup" />
				<label for="login" className="slide login w-50"> Login </label>
				<label for="signup" className="slide signup w-50" onClick={() => createAccount()}>Create Account</label>
				< div className = "slider-tab"
				id = "tab"
				style = {{borderRadius: "5px 0px 0px 0px"}}> </div>
			</div>
			<div className="w-100 pt-3 hold">
					<h1 className="text-center mt-2 pb-3">Welcome Back</h1>
				<form action="" className="w-100 h-100 px-4" onSubmit={formik.handleSubmit}>
					<div className="form-floating my-3">
						<input
							type="email"
							className={formik.errors.email ? 'form-control ps-4 is-invalid' : 'form-control ps-4'}
							onChange={formik.handleChange}
							name="email"
							onBlur={formik.handleBlur}
							placeholder="Email" required />
						<label className="form-label text-start ms-2">Email</label>
					</div>
					{formik.touched.email ? <div className="text-danger">{formik.errors.email}</div> : ""}
					<div className="form-floating my-3">
						<input
							type="password"
							className={formik.errors.password ? 'form-control ps-4 is-invalid' : 'form-control ps-4'}
							onChange={formik.handleChange}
							name="password"
							onBlur={formik.handleBlur}
							placeholder="Password" required />
						<label className="form-label text-start ms-2">Password</label>
					</div>
					{formik.touched.password ? <div className="text-danger">{formik.errors.password}</div> : ""}
					<div className="w-100 d-flex justify-content-center pt-4">
						<button className="btn btn-lg btn-light text-white w-75 hover">Login In</button>
					</div>
				</form>
				<h5 className="text-center m-0 mt-4">Or Login With</h5>
				<div className="w-100 d-flex px-4 justify-content-around align-content-end flex-wrap mt-lg-4 mt-4">
					<a className="btn btn-lg mt-2 mb-3 d-flex justify-content-between align-content-center bg-light"> <img src="/images/google.png" className="me-2" style={{height:"25px"}} alt="fhfhh"/> Gmail</a>
					<a className="btn btn-lg mt-2 mb-3 d-flex justify-content-between align-content-center bg-light"> <img src="/images/facebook.png" className="me-2" style={{height:"30px"}} alt="fhfhh"/> FaceBook</a>
				</div>
			</div>
		</div>
	)
}

export default Signup;
