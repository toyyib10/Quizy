import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios"
import Spinner from '../../Starters/Spinner';

const Signup = () => {
	const navigate = useNavigate()
	const [message, setmessage] = useState('')
	const [done, setDone] = useState()
	const endPoint = "https://quizy-api.vercel.app/auth/login"

	const createAccount = () => {
		navigate("/auth/createaccount")
	}

	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		onSubmit: (values) => {
			setDone("true")
			axios.post(endPoint, values).then((result) => {
				if (result.data.status) {
					setDone(false)
					localStorage.token = result.data.token
					navigate("/admin")
				} else {
					setmessage(result.data.message)
				}
			}).catch((err) => {
        if (err) {
          setDone(false)
          setmessage("Unable to connect try again later")
        }
      })
		},
		validationSchema: yup.object({
			email: yup.string().required("This field is required").email("Must be an email"),
			password: yup.string().min(6, "Password must be at least 6 characters").max(15, "Password must be at most 15 characters").required("This field is required")
		}),
	})

	return (
		<div className="col-lg-7 col-md-9  col-11 bg-white shadow rounded-2" style={{minHeight: "80vh"}}>
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
				{message && <h5 className="mx-4 mt-1 pb-2 alert alert-danger">{message}</h5>}
				<form action="" className="w-100 h-100 px-4" onSubmit={formik.handleSubmit}>
					<div className="form-floating my-3">
						<input
							type="email"
							className={formik.touched.email && formik.errors.email ? 'form-control ps-4 is-invalid' : 'form-control ps-4'}
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
							className={formik.touched.password && formik.errors.password ? 'form-control ps-4 is-invalid' : 'form-control ps-4'}
							onChange={formik.handleChange}
							name="password"
							onBlur={formik.handleBlur}
							placeholder="Password" required />
						<label className="form-label text-start ms-2">Password</label>
					</div>
					{formik.touched.password ? <div className="text-danger">{formik.errors.password}</div> : ""}
					<div className="w-100 d-flex justify-content-center pt-4">
						<button type="submit" className="btn btn-lg btn-light text-white w-75 hover">Login</button>
					</div>
				</form>
			</div>
			<Spinner check={ done } />
		</div>
	)
}

export default Signup;
