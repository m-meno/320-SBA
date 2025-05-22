import {useState, useEffect} from "react";
import Card from "../../components/Card/Card"
import axios from "axios";
import styles from "./Home.module.css"

export default function Home(){
  // initialize state to store character data
  const [characters, setCharacters] = useState([]);

  //function to retrieve all characters using axios request  
  async function getAllCharacters(){
    try{
      //defines endpoint for all characters
      let url = `https://last-airbender-api.fly.dev/api/v1/characters`;
      const res = await axios(url);
      let data = res.data;
      // updates characters state with fetched data
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