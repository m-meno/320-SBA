import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CharacterProfile from "../components/CharacterProfile/CharacterProfile";


export default function SingleCharacter() {
    // use useParams to get the character id from the URL
    const { id } = useParams()

    // initalize state to store character data
    const [singleCharacter, setSingleCharacter] = useState({});

    // fetch the data for a single character based on character id
    async function getSingleCharacter() {
        try {
            // define endpoint for single character
            let url = `https://last-airbender-api.fly.dev/api/v1/characters/${id}`;
            const res = await axios(url);
            let data = res.data;
            // update singleCharacter state with fetched data
            setSingleCharacter(data)
        } catch (err) {
            console.error(err)
        }
    }

    // calls the getSingleCharacter function once when component loads
    useEffect(() => {
        getSingleCharacter()
    }, []);


    return (
        <>
            {/* render CharacterProfile with the character data */}
            <div className="single-character">
                <CharacterProfile key={singleCharacter._id} singleCharacter={singleCharacter} />
            </div>

        </>
    )
};

