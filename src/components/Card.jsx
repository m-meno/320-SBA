import { Link } from "react-router-dom";

export default function Card({character}){
    let endpoint = `/api/v1/characters/${character._id}`;
    
    return (
        <>
        <div className="card">
            <img src={character.photoUrl}/>
            <h1><Link to= {endpoint}>{character.name}</Link></h1>
        </div>
        </>
    )
}