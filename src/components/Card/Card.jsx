import { Link } from "react-router-dom";
import styles from "./Card.module.css"

export default function Card({character}){
    // route to the individual character's detail page
    let endpoint = `/api/v1/characters/${character._id}`;
    
    return (
        <>
        <div className={styles.card}>
            <img className= {styles.img} src={character.photoUrl}/>
            {/* Character name is an anchor tag and links to the character's profile page */}
            <h2 className={styles.name}><Link to= {endpoint}>{character.name}</Link></h2>
        </div>
        </>
    )
}