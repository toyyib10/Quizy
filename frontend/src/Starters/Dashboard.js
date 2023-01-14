import axios from "axios";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"
import Main from "../components/Dashboard/Main"
import Quiz from '../components/Dashboard/Quiz';
import Success from "../components/Dashboard/Success";
import Notfound from "./Notfound"

const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const endpoint = "http://localhost:5000/auth/dashboard"
    let token = localStorage.token
    axios.get(endpoint, {
      headers: {
        "authorization": `Bearer ${token}`,
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }).then((result) => {
      if (!result.data.status) {
        localStorage.removeItem('token')
        navigate("/auth/signin")
      }
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/createquiz" element={<Quiz />} />
        <Route path="/createquiz/successful" element={<Success />} />
        <Route path="/*" element={<Notfound />}/>
      </Routes>
    </>
  )
}

export default Dashboard;