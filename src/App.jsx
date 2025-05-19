import { useState, useEffect } from 'react';
import './App.css';
import {Routes, Route, useParams} from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Avatars from './pages/Avatars';
import SingleCharacter from './pages/SingleCharacter'


function App() {

  return (
    <>
    <Nav/>
    <Routes>
        <Route path="/api/v1/characters" element={<Home/>}/> 
        <Route path="/api/v1/characters/avatar" element={<Avatars/>}/>
        <Route path="/api/v1/characters/:id" element={<SingleCharacter/>}/>
    </Routes>
    </>
  )
}

export default App
