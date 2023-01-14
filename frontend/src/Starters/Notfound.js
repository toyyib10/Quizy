import React from 'react'

const Notfound = ({color}) => {
  return (
    <>
      <div className="container">
        <h1 className="first-four" style={{"color":color}}>4</h1>
        <div className="cog-wheel1">
          <div className="cog1">
            <div className="top"></div>
            <div className="down"></div>
            <div className="left-top"></div>
            <div className="left-down"></div>
            <div className="right-top"></div>
            <div className="right-down"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
        
        <div className="cog-wheel2"> 
          <div className="cog2">
            <div className="top"></div>
            <div className="down"></div>
            <div className="left-top"></div>
            <div className="left-down"></div>
            <div className="right-top"></div>
            <div className="right-down"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
        <h1 className="second-four" style={{"color":color}}>4</h1>
        <p className="wrong-para" style={{"color":color}}>Uh Oh! Page not found!</p>
      </div>
    </>
  )
}

export default Notfound;
