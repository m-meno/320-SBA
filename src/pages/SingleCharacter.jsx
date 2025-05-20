import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import CharacterProfile from "../components/CharacterProfile";


export default function SingleCharacter() {
    const {id} = useParams()
    const [singleCharacter, setSingleCharacter] = useState({});

    async function getSingleCharacter() {
        try {
            let url = `https://last-airbender-api.fly.dev/api/v1/characters/${id}`;
            const res = await axios(url);
            let data = res.data;
            setSingleCharacter(data)
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getSingleCharacter()
    }, []);


    return (
        <>
        <div className="single-character">
            <CharacterProfile key={singleCharacter._id} singleCharacter={singleCharacter}/>
         </div>
            
        </>
    )


}

