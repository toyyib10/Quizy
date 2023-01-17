import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Spinner from "../../Starters/Spinner"

const Main = () => {
  const navigate = useNavigate()
  const [pin, setPin] = useState("")
  const [done, setDone] = useState()
  
  const getPin = (value) => {
    const endPoint = "https://quizy-api.vercel.app/quiz/getQuiz";
    if (value.length === 4) {
      setDone("true")
      setPin(value)
      axios.post(endPoint, { pin }).then((result) => {
        if (result) {
          localStorage.quizy = JSON.stringify(result.data);
          setDone(false)
          navigate("/joinquiz/start")
        }
      }).catch((err) => {
        if (err) {
          setDone(false)
          console.log('err')
        }
      })
    }
  }
 
  return (
    <>
      <section className="section d-flex align-items-center justify-content-center">
        <div className="col-10 col-lg-5 col-md-4 d-flex align-items-center bg-white shadow rounded-2 p-3">
          <input className="form-control join-input form-control-lg bg-light" type="number" placeholder="Quiz Pin" onChange={ (e) => getPin(e.target.value) } required />
        </div>
      </section>
      <Spinner check={ done }/>
    </>
  )
}

export default Main;
