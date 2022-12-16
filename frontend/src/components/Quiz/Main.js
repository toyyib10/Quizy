import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Main = () => {
  const navigate = useNavigate()
  const [pin, setPin] = useState("")

  const getPin = (value) => {
    console.log(value)
  }
 
  return (
    <>
      <section className="section d-flex align-items-center justify-content-center">
        <div className="col-10 col-lg-5 col-md-4 d-flex align-items-center bg-white shadow rounded-2 p-3">
          <input className="form-control join-input form-control-lg bg-light" type="number" placeholder="Quiz Pin" onChange={ (e) => getPin(e.target.value) } required />
        </div>
      </section>
    </>
  )
}

export default Main;
