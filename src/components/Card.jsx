export default function Card({character}){
    return (
        <>
        <div className="card">
            <img src={character.photoUrl}/>
            <h1>{character.name}</h1>
        </div>
        </>
    )
}