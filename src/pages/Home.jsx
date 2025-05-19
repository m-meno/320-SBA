import {useState, useEffect} from "react";
import Card from "../components/Card";
import axios from "axios"

export default function Home(){
    const [characters, setCharacters] = useState([]);

  //function to retrieve all characters using axios request  
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

  //renders all characters upon loading of the webpage
  useEffect(()=>{
    getAllCharacters()
  }, [])

    
    return(
        <>
        {/* maps over the characters array and creates a Card component for each character, with a key of the character id and a character value of character */}
        <div className="character-grid"> 
            {characters.map((character)=> <Card key={character._id} character={character}/> )}
        </div>
        </>
    )
}