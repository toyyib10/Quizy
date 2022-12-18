import { useState } from "react"
// import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Modal } from "react-bootstrap"

const Main = () => {
  // const navigate = useNavigate()
  const [pin, setPin] = useState("")

  const getPin = (value) => {
    const endPoint = "http://localhost:5000/quiz/getQuiz";
    if (value.length === 4) {
      setPin(value)
      const but = document.getElementById("but")
      
      but.click()
      axios.post(endPoint, { pin }).then((result) => {
        if (!result) {
          
        }
      })
      // document.getElementById("close").style.display = "none"
    }
    
  }
 
  return (
    <>
      <section className="section d-flex align-items-center justify-content-center">
        <div className="col-10 col-lg-5 col-md-4 d-flex align-items-center bg-white shadow rounded-2 p-3">
          <input className="form-control join-input form-control-lg bg-light" type="number" placeholder="Quiz Pin" onChange={ (e) => getPin(e.target.value) } required />
        </div>
      </section>
      <div className="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
        <div className="modal-dialog w-100 h-75 d-flex">
          <svg className="rounded-3" style={{"margin": "auto", "background": "white", "display": "block", "shapeRendering": "auto"}} width="4em" height="4em"
            viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="rotate(0 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(30 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(60 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite">
                </animate>
              </rect>
            </g>
            <g transform="rotate(90 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(120 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(150 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite">
                </animate>
              </rect>
            </g>
            <g transform="rotate(180 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(210 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(240 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite">
                </animate>
              </rect>
            </g>
            <g transform="rotate(270 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(300 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(330 50 50)">
              <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite">
                </animate>
              </rect>
            </g>
          </svg>
        </div>
      </div>
      <button id="but" className='d-none' data-bs-toggle="modal" data-bs-target="#staticBackdropLive" type='button'></button>
    </>
  )
}

export default Main;
