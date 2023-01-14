import React, { useEffect, useState } from 'react'

const Question = () => {
  const [time, setTime] = useState(Number(JSON.parse(localStorage.quizy).quizTime))
  const [check, setCheck] = useState(false)
  const [change, setChange] = useState(true)
  const [quiz, setQuiz] = useState(JSON.parse(localStorage.quizy).allQuestion)
  const [question, setQuestion] = useState("")
  const [number, setNumber] = useState(0)
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [c, setC] = useState("")
  const [d, setD] = useState("")
  const [action, setAction] = useState(true)
  const [correct, setCorrect] = useState("")
  let timer;
  
  const answer = (answer) => {
    setChange(false)
    setCheck(false)
    clearTimeout(timer)
    document.getElementById("danger").disabled = true;
    document.getElementById("success").disabled = true;
    if (c) {
      document.getElementById("warning").disabled = true;
    }
    if (d) {
      document.getElementById("info").disabled = true;
    }
    if (localStorage.finishedQuestion) {
      localStorage.finishedQuestion = JSON.stringify([...JSON.parse(localStorage.finishedQuestion),{number:number-1, answer, correct} ]);
    } else {
      localStorage.finishedQuestion = JSON.stringify([{number:number-1, answer, correct} ]);
    }
  }

  const next = () => {
    setTime(JSON.parse(localStorage.quizy).quizTime)
    setCheck(false)
    setChange(true)
    setQuestion(quiz[number].question)
    setA(quiz[number].firstanswer)
    setB(quiz[number].secondanswer)
    setC(quiz[number].thirdanswer)
    setD(quiz[number].forthanswer)
    setCorrect(quiz[number].correct)
    setNumber(number + 1)
    
    document.getElementById("danger").disabled = false;
    document.getElementById("success").disabled = false;
    if (c) {
      document.getElementById("warning").disabled = false;
    }
    if (d) {
      document.getElementById("info").disabled = false;
    }
    if (number === question.length) {
      setAction(false)
    }
  }

  const finish = () => {
    alert("dey play")
  }

  useEffect(() => {
    timer = setTimeout(() => { setTime(time - 1) }, 900)
    if (time<6) {
      setCheck(true)
    } 
    if (time < 0) {
      setChange(false)
      setCheck(false)
      document.getElementById("danger").disabled = true;
      document.getElementById("success").disabled = true;
      if (c) {
        document.getElementById("warning").disabled = true;
      }
      if (d) {
        document.getElementById("info").disabled = true;
      }
      if (localStorage.finishedQuestion) {
        localStorage.finishedQuestion = JSON.stringify([...JSON.parse(localStorage.finishedQuestion),{number:number-1,answer:"", correct} ]);
      } else {
        localStorage.finishedQuestion = JSON.stringify([{number:number-1,answer:"", correct} ]);
      }
      clearTimeout(timer)
    } 
  }, [time])

  useEffect(() => {
    setQuestion(quiz[number].question)
    setA(quiz[number].firstanswer)
    setB(quiz[number].secondanswer)
    setC(quiz[number].thirdanswer)
    setD(quiz[number].forthanswer)
    setCorrect(quiz[number].correct)
    setNumber(number+1)
  }, [])
  

  return (
    <>
      <section className="section d-flex flex-column align-items-center justify-content-center">
        <section className='d-flex mb-3 col-12'>
          <div className='d-flex justify-content-end col-7'>
            <h1 className='text-white' style={{"font-size":"4em"}}>Quizy</h1>
          </div>
          <div className='col-5 d-flex justify-content-end pe-4'>
            <div className={check?'col-lg-3 col-md-4 col-8 h-75 shadow-lg bg-white d-flex align-items-center justify-content-center rounded-2 border border-3 border-danger':'col-lg-3 col-md-4 col-8 h-75 shadow-lg bg-white d-flex align-items-center justify-content-center rounded-2'}>
              {change ? <h1 style={{ "font-weight": "bold" }}>{time}</h1> : <button className='btn w-100 h-100 fs-4' style={{ "font-weight": "bold" }} onClick={action?next:finish}>{ action? "Next": "Finish"}</button> }
            </div>
          </div>
        </section>
        <section className='col-12 col-md-10 col-lg-12 d-flex flex-column align-items-center'>
          <div className='bg-white p-2 ps-3 col-9 col-md-8 mb-5 rounded-2 overflow-auto' style={{ "height": "5.6em" }}>
            <h3 className='overflow-auto'>{ question }</h3>
          </div>
          <div className='col-12 d-flex px-3 px-md-4 px-md-4 mb-3 justify-content-between'>
            <button onClick={() => answer("A")} className='btn btn-danger shadow btn-lg w-50 me-2' id='danger' style={{ "height": "5em" }}>
              <h2>{ a }</h2>
            </button>
            <button onClick={() => answer("B")} className='btn btn-success btn-lg shadow ms-2 w-50 overflow-auto' id='success' style={{ "height": "5em" }}>
              <h2>{ b }</h2>
            </button>
          </div>
          <div className='col-12 d-flex px-3 px-md-4 px-md-4 mb-3 justify-content-between'>
            {c? <button onClick={() => answer("C")} className='btn text-white btn-warning shadow btn-lg w-50 me-2 overflow-auto' id='warning' style={{ "height": "5em" }}>
              <h2>{ c }</h2>
            </button>:<b></b>}
            {d? <button onClick={() => answer("D")} className='btn btn-info text-white btn-lg shadow ms-2 w-50 overflow-auto' id='info' style={{ "height": "5em" }}>
              <h2>{ d }</h2>
            </button>:<b></b>}
            
          </div>
        </section>
      </section> 
    </>
  )
}

export default Question;
