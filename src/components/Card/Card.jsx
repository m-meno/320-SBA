import { Link } from "react-router-dom";
import styles from "./Card.module.css"

export default function Card({character}){
    let endpoint = `/api/v1/characters/${character._id}`;
    
    return (
        <>
        <div className={styles.card}>
            <img className= {styles.img} src={character.photoUrl}/>
            <h2 className={styles.name}><Link to= {endpoint}>{character.name}</Link></h2>
        </div>
        </>
    )
}