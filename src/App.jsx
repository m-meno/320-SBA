import { useState, useEffect } from 'react'
import './App.css';
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Avatars from './pages/Avatars';


function App() {
  // const [characters, setCharacters] = useState([]);

  // async function getAllCharacters(){
  //   try{
  //     let url = `https://last-airbender-api.fly.dev/api/v1/characters`;
  //     const res = await axios(url);
  //     let data = res.data;
  //     setCharacters(data)
  //     console.log(data)
  //   } catch(err) {
  //     console.error(err)
  //   }  
  // }

  // useEffect(()=>{
  //   getAllCharacters()
  // }, [])

  return (
    <>
    <Nav/>
    <Routes>
        <Route path="/api/v1/characters" element={<Home/>}/> 
        <Route path="/api/v1/characters/avatar" element={<Avatars/>}/>
    </Routes>
    </>
  )
}

export default App
