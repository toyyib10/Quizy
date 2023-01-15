import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Finish = () => {
  const navigate = useNavigate()
  const [mark, setMark] = useState(0)
  const [numb, setNumb] = useState(0)
  let num = 0
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState(JSON.parse(localStorage.quizy).allQuestion)
  const [result, setResult] = useState(JSON.parse(localStorage.finishedQuestion))

  useEffect(() => {
    const timer = setTimeout(() => {
      if (result[numb].answer === result[numb].correct) {
        setMark(mark + 1)
      }
      setNumb(numb + 1)
    }, 100)
    if (numb === result.length) {
      clearTimeout(timer)
    }
  }, [numb])
  useEffect(() => {
    setTitle(JSON.parse(localStorage.quizy).quizName)
  }, [])
  
  const leave = () => {
    localStorage.removeItem("quizy")
    localStorage.removeItem("finishedQuestion")
    navigate("/joinquiz")
  }

  return (
    <>
      <section className="section d-flex align-items-center flex-column justify-content-center text-white">
        <div style={{"fontSize":"6em"}}>
          {mark} / {numb}
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <div>
            <button type='button' className='btn btn-success btn-lg me-3' data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">Correction</button>
          </div>
          <div>
            <button onClick={ leave } className='btn btn-warning btn-lg text-white ms-3'>Leave</button>
          </div>
        </div>
      </section>
      <div className="modal fade" id="exampleModalFullscreen" tabIndex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title h3" id="exampleModalFullscreenLabel">{ title } Quiz Correction</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body px-0">
              {
                questions.map(({question,correct},index) => (
                  <div className='border-bottom pb-1 px-3 my-2' style={{'height':"5em"}}>
                    <div className='h-50 d-flex justify-content-between'>
                      <div className='fs-3 text-start'>
                        Question {index + 1}
                      </div>
                      <div className="col-md-9 col-8 bg-light p-1 px-2 text-nowrap fs-5" style={{ height: "35px" , overflowY: "hidden", overflowX:"auto"}}>
                        {question}
                      </div>
                    </div>
                    <div className='h-50 d-flex justify-content-between mt-1'>
                      <div className='fs-3 text-start'>
                        Answer
                      </div>
                      <div className="col-md-9 col-8 bg-light p-1 text-center text-nowrap fs-5" style={{ height: "35px" , overflowY: "hidden", overflowX:"auto"}}>
                        {result[num++].option}
                      </div>
                    </div>
                  </div>
                ))
              }
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Finish;
