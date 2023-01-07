import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Spinner from "../../Starters/Spinner"

const Start = () => {
  const navigate = useNavigate()
  const [check, setCheck] = useState()
  const [time, setTime] = useState()
  const [title, setTitle] = useState()
  const [numb, setNumb] = useState()

  const goTo = () => {
    setCheck("true")
    setTimeout(() => {
      navigate("/joinquiz/start/question")
    }, 3000)
  }

  useEffect(() => {
    setTime(JSON.parse(localStorage.quizy).quizTime);
    setTitle(JSON.parse(localStorage.quizy).quizName);
    setNumb(JSON.parse(localStorage.quizy).allQuestion.length)
  }, [])
  

  return (
    <>
      <section className="section d-flex align-items-center flex-column justify-content-center text-white">
        <div className='mb-2'>
          <h2 className='fs-1'><b>{ title }</b> Quiz</h2>
        </div>
        <div className='mt-2 mb-2 fs-5'>
          <ul>
            <li>There are <b>{ numb }</b> questions.</li>
            <li>You will have only <b>{ time }</b> seconds per question.</li>
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
