import { useEffect, useState } from 'react'
import "../../cssfiles/main.css"
import {Link} from "react-router-dom"
import axios from "axios"

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
  const endPoint = "http://localhost:5000/quiz/game/addQuestion"
  const deletePoint = "http://localhost:5000/quiz/game/deleteQuestion"
  
  useEffect(() => {
    if (localStorage.questions) {
      setallQuestion(JSON.parse(localStorage.questions))
    } else {
      setallQuestion([])
    }
    
  }, [count])
  

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
      alert("hhh")
    }
  } 
  const deleteQuestion = (quizQuestion, index) => {
    if (allQuestion) {
      alert("work")
      axios.post(deletePoint, {allQuestion , ind }).then((result) => {
        localStorage.questions = JSON.stringify(result.data)
        setallQuestion(result.data)
        setcount(count - 1)
        setquestion("")
        setfirstanswer("") 
        setsecondanswer("")
        setthirdanswer("") 
        setforthanswer("") 
        setcorrect("")
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

  return (
    <>
      <header className="navbar sticky-top bg-white navbar-white px-md-0 px-lg-0 px-3 shadow d-flex ">
        <h2 className="navbar-bran m-0 p-0 col-md-3 col-lg-2 ps-md-4 ps-lg-4" style={{ fontSize: "2.9em" }}>Quizy</h2>
        <div>
          <button className="navbar-toggler me-4 bg-light" type="button">
            <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.1em" height="1.5em"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
          </button>
          <button className="navbar-toggler d-md-none collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse bg-white">
            <div className="position-sticky pt-3">
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-2 mb-1 text-muted px-md-4 px-lg-4 ps-4">
                <span>Dashboard</span>
                <a className="link-secondary" href="#" aria-label="Add a new report">
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column px-md-4 px-lg-4 ps-4">
                <li className="nav-item">
                  <Link to="/admin/" className="nav-link active fs-4">
                    <span data-feather="home"></span>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file"></span>
                    Results
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="users"></span>
                    Partners
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted px-md-4 px-lg-4 ps-4">
                <span>Preferences</span>
                <a className="link-secondary" href="#" aria-label="Add a new report">
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2  px-md-4 px-lg-4 ps-4">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Notification
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Theme
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>

                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-4">
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
                  <button type="button"  className="btn btn-primary mx-3 h-100" data-bs-toggle="modal" data-bs-target="#saveQuestion"> Save</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    <div class="modal fade" id="saveQuestion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="saveQuestionLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLiveLabel">Extra Information</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save Game</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Game;
