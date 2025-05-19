import {useState, useEffect} from "react";
import Card from "../components/Card";
import axios from "axios"

export default function Home(){
    const [characters, setCharacters] = useState([]);

  async function getAllCharacters(){
    try{
      let url = `https://last-airbender-api.fly.dev/api/v1/characters`;
      const res = await axios(url);
      let data = res.data;
      setCharacters(data)
      console.log(data)
    } catch(err) {
      console.error(err)
    }  
  }

  useEffect(()=>{
    getAllCharacters()
  }, [])

    
    return(
        <>
        <div className="character-grid"> {characters.map((character)=> <Card key={character._id} character={character}/> )}</div>
        </>

    )
}