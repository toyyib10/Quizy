import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])
  return (
    <>
      <section className='d-flex align-content-center px-3 pb-3 justify-content-evenly flex-wrap' style={{"minHeight":"100vh"}}>
        <div className="col-md-4 col-12 mt-md-0 mt-3" style={{"height":"32.3vh"}} data-aos="fade-right">
          <div className='fs-5 text-center h-50'>
            Welcome to <b>Quizy</b>,
            <br /> click the button below to create account or login
          </div>
          <div className='d-flex align-items-center justify-content-center h-25 mt-2'>
            <Link to="/auth" className='btn text-white px-4' style={{ "background": "-webkit-linear-gradient(right, #a445b2, #fa4299)" }}>Quizy</Link>
          </div>
        </div>
        <div className="col-md-4 col-12" style={{"height":"32.3vh"}} data-aos="fade-right">
          <div className='fs-5 text-center h-50'>
            Welcome to <b>Quizy</b>,
            <br /> click the button below to join quiz
          </div>
          <div className='d-flex align-items-center justify-content-center h-25 mt-2'>
            <Link to="/joinquiz" className='btn text-white px-4' style={{ "background": "-webkit-linear-gradient(right, #a445b2, #fa4299)" }}>Join Quiz</Link>
          </div>
        </div>
        <div className="col-md-4 col-12" style={{"height":"32.3vh"}} data-aos="fade-right">
          <div className='fs-5 text-center h-50'>
            Welcome to <b>Quizy</b>,
            <br /> click the link below to check demo
          </div>
          <div className='d-flex align-items-center justify-content-center h-25 mt-2'>
            <Link to="/start" className='btn text-white' style={{ "background": "-webkit-linear-gradient(right, #a445b2, #fa4299)" }}>Check Demo</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage;
