import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav(){
  
     
    return(
        <div className={styles.nav}>
            <Link to="/api/v1/characters">
                <div>Home</div>
            </Link>
            <Link to="api/v1/characters/avatar">
                <div>Avatars</div>
            </Link>
        </div>

    )
}
