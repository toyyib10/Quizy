import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"
import Main from "../components/Dashboard/Main"
import Quiz from '../components/Dashboard/Quiz';
import Game from '../components/Dashboard/Game';
import Notfound from "./Notfound"
import axios from 'axios';

const Dashboard = () => {
  const toggleMenu = () => {
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active')
    toggle.classList.toggle('active')
  }
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
        navigate("/auth/signin")
      }
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/createquiz" element={<Quiz />} />
        <Route path="/creategame" element={<Game />} />
        <Route path="/*" element={<Notfound/>}/>
      </Routes>
    </>
  )
}

export default Dashboard;
