import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../components/Quiz/Main'
import Question from '../components/Quiz/Question'
import Start from '../components/Quiz/Start'
import "../cssfiles/joinquiz.css"

const JoinQuiz = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/start' element={<Start />} />
        <Route path='/start/question' element={<Question/>}/>
      </Routes>
    </>
  )
}

export default JoinQuiz
