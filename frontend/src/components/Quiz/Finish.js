import React, { useEffect, useState } from 'react'

const Finish = () => {
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
  
  return (
    <>
      <section className="section d-flex align-items-center flex-column justify-content-center text-white">
        <div style={{"fontSize":"6em"}}>
          {mark} / {numb}
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <div>
            <button className='btn btn-success btn-lg me-3'>Correction</button>
          </div>
          <div>
            <button className='btn btn-warning btn-lg text-white ms-3'>Leave</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Finish;
