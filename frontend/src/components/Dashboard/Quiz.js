import { useEffect, useState } from 'react'
import "../../cssfiles/main.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useFormik } from "formik"

const Game = () => {
  const [firstanswer, setfirstanswer] = useState("");
  const [secondanswer, setsecondanswer] = useState("");
  const [thirdanswer, setthirdanswer] = useState("");
  const [forthanswer, setforthanswer] = useState("");
  const [correct, setcorrect] = useState("");
  const [question, setquestion] = useState("")
  const [count, setcount] = useState(0)
  const [allQuestion, setallQuestion] = useState([])
  const [ind, setindex] = useState("")
  const [modal, setmodal] = useState()
  const endPoint = "https://quizy-api.vercel.app/quiz/addQuestion"
  const deletePoint = "https://quizy-api.vercel.app/quiz/deleteQuestion"
  const savePoint = "https://quizy-api.vercel.app/quiz/saveQuiz"
  const checkPoint = "https://quizy-api.vercel.app/auth/dashboard"
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.questions) {
      setallQuestion(JSON.parse(localStorage.questions))
    } else {
      setallQuestion([])
    }
    
  }, [count])
  
  const formik = useFormik({
    initialValues : {
      quizName: "",
      quizTime: ""
    },
    onSubmit: (values) => {
      let token = localStorage.token
      axios.get(checkPoint, {
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
          "Accept": "application/json"
        }
      }).then((result) => {
        let email = result.data.email;
        let quiz = { ...values, allQuestion, email}
        axios.post(savePoint, quiz).then((result) => {
          if (result.data) {
            localStorage.id = result.data._id;
            localStorage.removeItem('questions')
            navigate("/admin/createquiz/successful")
          }
        })
      })
    }
  })
  
  const addQuestion = () => { 
    if (question && firstanswer && secondanswer && correct) {
      const quizQuestion = {
        question , 
        firstanswer, 
        secondanswer,
        forthanswer, 
        thirdanswer, 
        correct  
      }
      axios.post(endPoint, quizQuestion).then((result) => {
        console.log(result.data)
        if (!localStorage.questions) {
          localStorage.questions = JSON.stringify([result.data])
          setcount(count)
        } else {
          let preQuestion = JSON.parse(localStorage.questions)
          localStorage.questions = JSON.stringify([...preQuestion,result.data])
        }
        setcount(count + 1)
        setquestion("")
        setfirstanswer("") 
        setsecondanswer("")
        setthirdanswer("") 
        setforthanswer("") 
        setcorrect("")
      })
    } else {
      
    }
  } 
  const deleteQuestion = (quizQuestion, index) => {
    if (allQuestion) {
      axios.post(deletePoint, { allQuestion, ind }).then((result) => {
        if (!result.data) {
          console.log("Unable to save")
        } else {
          localStorage.questions = JSON.stringify(result.data)
          setallQuestion(result.data)
          setcount(count - 1)
          setquestion("")
          setfirstanswer("") 
          setsecondanswer("")
          setthirdanswer("") 
          setforthanswer("") 
          setcorrect("")
        }
      })
    } else {
      alert("worked")
    }
  }
  const goTo = (index) => {
    setindex(index)
    let requestedQuestion = allQuestion.find((item, i) => index === i)
    setcorrect(requestedQuestion.correct)
    setquestion(requestedQuestion.question)
    setfirstanswer(requestedQuestion.firstanswer)
    setforthanswer(requestedQuestion.forthanswer)
    setsecondanswer(requestedQuestion.secondanswer)
    setthirdanswer(requestedQuestion.thirdanswer)
  }

  const preSave = () => {
    if (allQuestion.length <= 0 ) {
      setmodal(false)
    } else {
      setmodal(true)
    }
  }
  return (
    <>
      <header className="navbar sticky-top bg-white navbar-white px-md-0 px-lg-0 px-4 shadow d-flex ">
        <h2 className="navbar-bran m-0 p-0 col-md-3 col-lg-2 ps-md-4 ps-lg-4" style={{ fontSize: "2.9em" }}>Quizy</h2>
        <div>
          <Link to="/admin" className="navbar-toggler btn me-4 bg-light">
            <svg width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288q.413-.012.713.288q.3.275.313.687q.012.413-.288.713L7.4 11h11.175q.425 0 .713.287q.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7q.012.425-.288.7q-.275.3-.7.3q-.425 0-.725-.3Z"/></svg>
          </Link>
        </div>
      </header> 
      <div className="col-12 px-4 pt-4">
        <div className="w-100 d-flex justify-content-center mt-2">
          <div className="col-11 col-lg-8 col-md-9 bg-white rounded-2 shadow p-4 d-flex flex-column">
            <h2>Question</h2>
            <input onChange={(e)=>setquestion(e.target.value)} className="form-control form-control-lg mt-2" placeholder="Start typing question" value={question} name="question" type="text" required />
          </div>
        </div>
        <form action="">
          <div className="w-100 mt-4 d-flex justify-content-between px-1 px-md-4 px-lg-4">
            <div className="w-50 me-2 me-md-3 p-md-3 p-lg-3 p-2 mt-3 text-white rounded-2 bg-danger shadow d-flex">
              <p className="m-0 fs-1 text-centerp-lg-0 pt-3 p-md-0 ">A. </p>
              <input className="form-control form-control-lg ms-2 ms-lg-4 ms-md-4" placeholder="Required" onChange={(e) => setfirstanswer(e.target.value)} value={firstanswer} name="firstanswer" type="text" required />
              <input onClick={(e) => setcorrect(e.target.value)} className="h-75 ms-1" value="A" name="correct" type="radio" />
            </div>
            <div className="w-50 ms-2 ms-md-3 p-md-3 p-lg-3 p-2 mt-3 text-white rounded-2 bg-success shadow d-flex">
              <p className="m-0 fs-1 text-centerp-lg-0 pt-3 p-md-0 ">B. </p>
              <input className="form-control form-control-lg ms-2 ms-lg-4 ms-md-4 " placeholder="Required" onChange={(e) => setsecondanswer(e.target.value)} value={secondanswer} type="text" name="secondanswer" required />
              <input className="h-75 ms-1" onClick={(e) => setcorrect(e.target.value)} value="B" name="correct" type="radio" />
            </div>
          </div>
          <div className="w-100 mt-4 d-flex justify-content-between px-2 px-md-4 px-lg-4">
            <div className="w-50 me-2 me-md-3 p-md-3 p-lg-3 p-2 mt-3 text-white rounded-2 bg-warning shadow d-flex">
              <p className="m-0 fs-1 text-center p-lg-0 pt- p-md-0 ">
                C. </p>
              <input placeholder="Optional" className="form-control form-control-lg ms-2 ms-md-4 ms-lg-4" onChange={(e) => setthirdanswer(e.target.value)} value={thirdanswer} name="thirdanswer" type="text" />
              <input className="h-75 ms-1" onClick={(e) => setcorrect(e.target.value)} value="C" name="correct" type="radio" />
            </div>
            <div className="w-50 ms-2 ms-md-3 p-md-3 p-lg-3 p-2 mt-3 text-white rounded-2 bg-info shadow d-flex">
              <p className="m-0 fs-1 text-centerp-lg-0 pt-3 p-md-0 ">D. </p>
              <input placeholder="Optional" value={forthanswer} name="forthanswer" className="form-control form-control-lg ms-2 ms-md-4 ms-lg-4" onChange={(e) => setforthanswer(e.target.value)} type="text" />
              <input className="h-75 ms-1" onClick={(e) => setcorrect(e.target.value)} value="D" name="correct" type="radio" />
            </div>
          </div>
        </form>
        
        <div className="col-12 shadow px-3 bg-white mt-4 d-flex justify-content-between align-items-center flex-wrap rounded-2">
          <div className="col-md-6 my-1 col-12 bg-light p-1 d-flex" style={{ height: "55px" , overflowY: "auto"}}>
            {
              allQuestion.map((item,index) =>
                <button onClick={() => goTo(index)} className='btn btn-primary rounded-1 h-100 text-white mx-1' style={{ width: "50px" }}>{ index + 1 }</button>
              )
            }
          </div>
          <div className="d-flex justify-content-end col-md-6 col-12 my-2">
            <div>
              <button onClick={addQuestion} className="btn btn-success h-100 mx-3"> Add</button>
            </div>
            <div>
              <button onClick={() => deleteQuestion()} className="btn btn-danger h-100 mx-3">Delete</button>
            </div>
            <div>
              <button type="button" onClick={preSave} className="btn btn-primary mx-3 h-100" data-bs-toggle="modal" data-bs-target="#saveQuestion"> Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="saveQuestion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="saveQuestionLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLiveLabel">Extra Information</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="modal-body">
                {modal ?
                  <>
                      <div className='d-flex justify-content-between mb-1'>
                        <h5>Name of quiz?</h5>
                        <input
                          className='form-control-sm'
                          name="quizName"
                          onChange={formik.handleChange}
                          type="text" required/>
                      </div>
                      <div className='d-flex justify-content-between my-2'>
                        <h5>Seconds per question?</h5>
                        <input className='form-control-sm'
                          name="quizTime"
                          onChange={formik.handleChange}
                          type="number" required/>
                      </div>
                  </> : <>You have not created any questions yet</>}
              </div>
              <div className="modal-footer">
                <button type='button' className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                {modal?<button type='submit' className="btn btn-primary">Save Quiz</button>:<button type='button' disabled className="btn btn-primary">Save Quiz</button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Game;
