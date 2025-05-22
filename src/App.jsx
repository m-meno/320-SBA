import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/Home/Home"
import Nav from "./components/Nav/Nav";
import Avatars from './pages/Avatars';
import Character from './pages/Character';
// import FireNation from './pages/FireNation';
// import AirNomad from "./pages/AirNomad";
// import EarthKingdom from "./pages/EarthKingdom";
// import WaterTribe from "./pages/WaterTribe";

function App() {

  return (
    <>
    <div className="background">
        <main className="main">
          <h1>Avatar The Last Airbender Wiki</h1>
          <Nav/>
          <Routes>
              <Route path="/api/v1/characters" element={<Home/>}/> 
              <Route path="/api/v1/characters/avatar" element={<Avatars/>}/>
              <Route path="/api/v1/characters/:id" element={<Character/>}/>
              {/* Route paths for the in-progress dropdown menu */}
              {/* <Route path="api/v1/characters?affiliation=fire+nation" element={<FireNation/>}/>
              <Route path="api/v1/characters?affiliation=air+nomads" element={<AirNomad/>}/>
              <Route path="api/v1/characters?affiliation=water+tribe" element={<WaterTribe/>}/>
              <Route path="api/v1/characters?affiliation=earth+kingdom" element={<EarthKingdom/>}/>  */}
          </Routes>
        </main>
    </div>
    </>
  )
}

export default App
