import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../components/Quiz/Main'
import Question from '../components/Quiz/Question'
import Start from '../components/Quiz/Start'
import Notfound from "./Notfound"
import "../cssfiles/joinquiz.css"
import Finish from '../components/Quiz/Finish'

const JoinQuiz = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/start' element={<Start />} />
        <Route path='/start/question' element={<Question />} />
        <Route path='/start/question/done' element={<Finish />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default JoinQuiz
