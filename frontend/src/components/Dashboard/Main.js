import React, { useEffect } from 'react'
import "../../cssfiles/main.css"
import { Link, useNavigate } from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  const navigate = useNavigate()

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

  const logOut = () => {
    localStorage.removeItem("token")
    navigate("/auth")
  }
  
  return (
    <>
      <header className="navbar sticky-top bg-white navbar-white px-4 shadow d-flex ">
        <h2 className="navbar-brand m-0 p-0 col-md-3 col-lg-2" style={{ fontSize: "2.9em" }}>Quizy</h2>
        <div>
          <button className="btn btn-light bg-white" onClick={logOut}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="red" d="M19 21h-9a2 2 0 0 1-2-2v-4h2v4h9V5h-9v4H8V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Zm-7-5v-3H3v-2h9V8l5 4l-5 4Z"/></svg>
          </button>
        </div>
      </header>
      <div className=" col-12 px-4 pt-4">
        <div data-aos="fade-right" className="rounded-1 col-12 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4">
          <Link to="/start" className="btn btn-main w-100 rounded-1 bg-danger text-white d-flex justify-content-between align-items-center" style={{fontSize: "2.5em"}}>
            Play Demo
          </Link>
        </div>
        <div data-aos="fade-right" className="rounded-1 col-12 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4">
          <Link to="/admin/createquiz" className="btn btn-main w-100 rounded-1 bg-warning text-white d-flex justify-content-between align-items-center" style={{fontSize: "2.5em"}}>
            Create Quiz  
          </Link>
        </div>
        <div data-aos="fade-right" className=" rounded-1 col-12 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2" >
          <Link to="/joinquiz
          " className="btn btn-main w-100 rounded-1 bg-info text-white d-flex justify-content-between align-items-center" style={{ fontSize: "2.5em" }}>
            Join Quiz
          </Link>
        </div>   
      </div>
    </>
  )
}

export default Main;
