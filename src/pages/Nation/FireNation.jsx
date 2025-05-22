import {useState, useEffect} from "react";
import Card from "../../components/Card/Card";
import axios from "axios"

export default function FireNation(){
    const [fnCharacters, setFnCharacters] = useState([]);

  //function to retrieve all characters using axios request  
  async function getAllFnCharacters(){
    try{
      let url = `https://last-airbender-api.fly.dev/api/v1/characters?affiliation=fire+nation`;
      const res = await axios(url);
      let data = res.data;
      setFnCharacters(data)
      console.log(data)
    } catch(err) {
      console.error(err)
    }  
  }

  //renders all characters upon loading of the webpage
  useEffect(()=>{
    getAllFnCharacters()
  }, [])
    
    return(
        <>
        {/* maps over the characters array and creates a Card component for each character, with a key of the character id and a character value of character */}
        <div className="fn-character-grid"> 
            {fnCharacters.map((character)=> <Card key={character._id} character={character}/> )}
        </div>
        </>
    )
}