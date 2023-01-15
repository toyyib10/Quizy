import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Finish = () => {
  const navigate = useNavigate()
  const [mark, setMark] = useState(0)
  const [numb, setNumb] = useState(0)
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

  const leave = () => {
    localStorage.removeItem("finishedQuestion")
    navigate("/")
  }
  
  return (
    <>
      <section className="section d-flex align-items-center flex-column justify-content-center text-white">
        <div style={{"fontSize":"6em"}}>
          {mark} / {numb}
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <div>
            <button onClick={ leave } className='btn btn-warning btn-lg text-white'>Leave</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Finish;
