import { Link } from "react-router-dom"

export default function Nav(){
    return(
        <div className="nav">
            <Link to="/api/v1/characters">
                <div>Home</div>
            </Link>
            <Link to="api/v1/characters/avatar">
                <div>Avatars</div>
            </Link>
            <Link to="api/v1/characters/:id">
                <div>Character Profile</div>
            </Link>
        </div>

    )
}