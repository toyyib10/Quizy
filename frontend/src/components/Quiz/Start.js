import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Spinner from "../../Starters/Spinner"

const Start = () => {
  const navigate = useNavigate()
  const [check, setCheck] = useState()

  const goTo = () => {
    setCheck("true")
    setTimeout(() => {
      navigate("/joinquiz/start/question")
    }, 3000)
  }

  return (
    <>
      <section className="section d-flex align-items-center flex-column justify-content-center text-white">
        <div className='mb-2'>
          <h2><b>NAME</b> Quiz</h2>
        </div>
        <div className='mt-2 mb-2'>
          <ul>
            <li> You will have only 15 seconds per each question.</li>
            <li>You can't select any option once time goes off.</li>
            <li>Once you select your answer, it can't be undone.</li>
            <li>You'll get marks on the basis of your correct answers.</li>
            <li>Correct answer of question can only be reviewed after finishing the quiz.</li>
          </ul>
        </div>
        <div className='mt-2'>
          <button className='btn btn-lg btn-light' onClick={ goTo }>Start Quiz</button>
        </div>
      </section>
      <Spinner check={ check } />
    </>
  )
}

export default Start
