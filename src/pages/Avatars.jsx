import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card/Card";

export default function Avatars() {
    const [avatars, setAvatars] = useState([]);

    //fetches data for avatar characters
    async function getAllAvatars() {
        try {
            let url = `https://last-airbender-api.fly.dev/api/v1/characters/avatar`
            const res = await axios(url)
            let data = res.data;
            setAvatars(data)

        } catch (err) {
            console.error(err)
        }
    }
    
    //runs getAllAvatars when the component loads 
    useEffect(()=>{
        getAllAvatars()
    }, []);

    return(
        <>
        <div className="avatar-grid">
            <h1>Avatars</h1>
            {/* map over the avatar array and create a card component for each character */}
            {avatars.map((character)=> <Card key={character._id} character={character}/>)}
        </div>
        </>
    )
}