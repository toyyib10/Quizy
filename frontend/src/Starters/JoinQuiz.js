import React from 'react'
import "../cssfiles/joinquiz.css"

const JoinQuiz = () => {
  return (
    <>
      <section className="section d-flex align-items-center justify-content-center">
        <div className="col-10 col-lg-5 col-md-4 d-flex align-items-center bg-white shadow rounded-2 p-3">
          <input className="form-control join-input form-control-lg bg-light" type="number" placeholder="Quiz Pin" required />
        </div>
      </section>
    </>
  )
}

export default JoinQuiz
