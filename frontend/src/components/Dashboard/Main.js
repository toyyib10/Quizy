import React, { useEffect } from 'react'
import "../../cssfiles/main.css"
import { Link } from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])
  
  return (
    <>
      <header className="navbar sticky-top bg-white navbar-white px-4 shadow d-flex ">
        <h2 className="navbar-brand m-0 p-0 col-md-3 col-lg-2" style={{ fontSize: "2.9em" }}>Quizy</h2>
        <div>
          <button to="/admin" className="navbar-toggler btn me-4 bg-light">
            <svg width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288q.413-.012.713.288q.3.275.313.687q.012.413-.288.713L7.4 11h11.175q.425 0 .713.287q.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7q.012.425-.288.7q-.275.3-.7.3q-.425 0-.725-.3Z"/></svg>
          </button>
          <Link to="/admin" className="navbar-toggler btn me-4 bg-light">
            <svg width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288q.413-.012.713.288q.3.275.313.687q.012.413-.288.713L7.4 11h11.175q.425 0 .713.287q.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7q.012.425-.288.7q-.275.3-.7.3q-.425 0-.725-.3Z"/></svg>
          </Link>
        </div>
      </header>
      <div className=" col-12 px-4 pt-4">
        <div data-aos="fade-right" className="rounded-1 col-12 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4">
          <button className="btn btn-main w-100 rounded-1 bg-danger text-white d-flex justify-content-between align-items-center" style={{fontSize: "2.5em"}}>
            Play Demo
          </button>
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
