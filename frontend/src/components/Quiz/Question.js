import React, { useEffect, useState } from 'react'

const Question = () => {
  const [time, setTime] = useState(10)
  const [check, setCheck] = useState(false)
  const [change, setChange] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => { setTime(time - 1) }, 900)
    if (time<6) {
      setCheck(true)
    } 
    if (time < 0) {
      setChange(false)
      setCheck(false)
      document.getElementById("danger").disabled = true;
      document.getElementById("primary").disabled = true;
      document.getElementById("warning").disabled = true;
      document.getElementById("success").disabled = true;
      clearTimeout(timer)
    } 
  }, [time])
  
  return (
    <>
      <section className="section d-flex flex-column align-items-center justify-content-center">
        <section className='d-flex mb-3 col-12'>
          <div className='d-flex justify-content-end col-7'>
            <h1 className='text-white' style={{"font-size":"4em"}}>Quizy</h1>
          </div>
          <div className='col-5 d-flex justify-content-end pe-4'>
            <div className={check?'col-lg-3 col-md-4 col-8 h-75 shadow-lg bg-white d-flex align-items-center justify-content-center rounded-2 border border-3 border-danger':'col-lg-3 col-md-4 col-8 h-75 shadow-lg bg-white d-flex align-items-center justify-content-center rounded-2'}>
              { change?<h1 style={{ "font-weight": "bold" }}>{time}</h1>:<button className='btn w-100 h-100 fs-4' style={{ "font-weight": "bold" }}>Next</button> }
            </div>
          </div>
        </section>
        <section className='col-12 col-md-10 col-lg-12 d-flex flex-column align-items-center'>
          <div className='bg-white p-2 col-9 col-md-8 mb-5 rounded-2 overflow-auto' style={{ "height": "5.6em" }}>
            <h3 className='overflow-auto'>
              How old are you?
            </h3>
            
          </div>
          <div className='col-12 d-flex px-3 px-md-4 px-md-4 mb-3 justify-content-between'>
            <button className='btn btn-danger shadow btn-lg w-50 me-2' id='danger' style={{ "height": "5em" }}>
              <h2>Elon Musk</h2>
            </button>
            <button className='btn btn-primary btn-lg shadow ms-2 w-50' id='primary' style={{ "height": "5em" }}>
              <h2>Bill Gate</h2>
            </button>
          </div>
          <div className='col-12 d-flex px-3 px-md-4 px-md-4 mb-3 justify-content-between'>
            <button className='btn text-white btn-warning shadow btn-lg w-50 me-2' id='warning' style={{ "height": "5em" }}>
              <h2>Jeff Bezos</h2>
            </button>
            <button className='btn btn-success btn-lg shadow ms-2 w-50' id='success' style={{ "height": "5em" }}>
              <h2>Yekeen Toyyib</h2>
            </button>
          </div>
        </section>
      </section> 
    </>
  )
}

export default Question
