import React from 'react'
import "../../cssfiles/main.css"

const Main = () => {
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
                  <a className="nav-link active fs-4" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    Home
                  </a>
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
            <div className=" rounded-1 col-12 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4">
              <button className="btn w-100 rounded-1 bg-info text-white d-flex justify-content-between align-items-center" style={{fontSize: "2.5em"}}>
                Create Game
              </button>
            </div>
            <div className="rounded-1 col-12 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4">
             <button className="btn w-100 rounded-1 bg-danger text-white d-flex justify-content-between align-items-center" style={{fontSize: "2.5em"}}>
                Play Demo
              </button>
            </div>
            <div className="rounded-1 col-12 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4">
              <button className="btn w-100 rounded-1 bg-warning text-white d-flex justify-content-between align-items-center" style={{fontSize: "2.5em"}}>
                Create Quiz  
              </button>
            </div>
            <div className="rounded-1 col-12 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4">
              <button className="btn w-100 rounded-1 bg-primary text-white d-flex justify-content-between align-items-center" style={{fontSize: "2.5em"}}>
                Join Game
              </button>
            </div>
            <div className="rounded-1 col-12 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4">
              <button className="btn w-100 rounded-1 bg-success text-white d-flex justify-content-between align-items-center" style={{fontSize: "2.5em"}}>
                Join Quiz
              </button>
            </div>      
          </main>
        </div>
      </div>
    </>
  )
}

export default Main;
