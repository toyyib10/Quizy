import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import Main from "../components/Dashboard/Main"
import Quiz from '../components/Dashboard/Quiz';
import Game from '../components/Dashboard/Game';
import Notfound from "./Notfound"

const Dashboard = () => {
  const toggleMenu = () => {
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active')
    toggle.classList.toggle('active')
  }
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
