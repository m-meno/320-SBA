import { Link, useNavigate } from "react-router-dom"

export default function Nav(){
    const navigate = useNavigate();

    const nation = {

        'watertribe': 'water+tribe',
        'earthkingdom': 'earth+kingdom',
        'firenation': 'fire+nation',
        'airnomads': 'air+nomads'

    }

    function handleChange(e){
        const selectedNation = e.target.value
        navigate(`/api/v1/characters?affiliation=${nation[selectedNation]}`)
    }
     
    return(
        <div>
            <Link to="/api/v1/characters" style ={{color: 'black'}}>
                <div>Home</div>
            </Link>
            <Link to="api/v1/characters/avatar" style ={{color: 'black', fontWeight: 'bold'}}>
                <div>Avatars</div>
            </Link>
            <select onChange={handleChange}> 
                <option value="watertribe">Water Tribe</option>
                <option value="firenation">Fire Nation</option>
                <option value="earthkingdom">Earth Kingdom</option>
                <option value="airnomads">Air Nomads</option>
            </select>
        </div>

    )
}
