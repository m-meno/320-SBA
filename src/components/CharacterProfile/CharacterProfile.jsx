import styles from "./CharacterProfile.module.css"

export default function CharacterProfile({ singleCharacter }) {
    // There's probably a much better way to handle this, but I was having trouble rendering this component because the .enemies and .allies properties are arrays of different lengths, and when I tried to use .map()
    // on an empty array I would have issues

    function enemies() {
        if (Array.isArray(singleCharacter.enemies)) {
            if (singleCharacter.enemies.length > 0) {
                return singleCharacter.enemies.map((enemy, index) => <li key={index}>{enemy}</li>);
            } else {
                return <p>No enemies.</p>
            }
        } else {
            return <p>No enemy data available.</p>
        }
    };

    function allies() {
        if (Array.isArray(singleCharacter.allies)) {
            if (singleCharacter.allies.length > 0) {
                return singleCharacter.allies.map((ally, index) => <li key={index}>{ally}</li>);
            } else {
                return <p>No allies listed.</p>
            }
        } else {
            <p>No ally data available.</p>
        }
    };



    //     if (singleCharacter.enemies == []){
    //         if (singleCharacter.enemies.length > 1){
    //             return singleCharacter.enemies.map((enemy, index)=> <li key={index}>{enemy}</li>);
    //         } else if (singleCharacter.enemies.length === 1) {
    //             return <li>{singleCharacter.enemies[0]}</li>
    //         } else if (singleCharacter.enemies.length == 0)  {
    //             return <p>No enemies</p>
    //         }
    //     } else {
    //         return `Not an array`
    //     }
    //  };

    // function allies(){
    //     if (singleCharacter.allies == []){
    //         if (singleCharacter.allies.length > 1){
    //             return singleCharacter.allies.map((ally, index)=> <li key={index}>{ally}</li>);
    //         } else if (singleCharacter.allies.length === 1) {
    //             return <li>{singleCharacter.allies[0]}</li>
    //         } else {
    //             return <p>No allies</p>
    //         }
    //     } else {
    //         return `Not an array`
    //     }


    return (
        <>
            <div className="character-profile">
                <img src={singleCharacter.photoUrl} />
                <h1>{singleCharacter.name}</h1>
                <h3>Affiliation: {singleCharacter.affiliation}</h3>
                <ul>Enemies:{enemies()}</ul>
                <ul>Allies:{allies()}</ul>
            </div>

        </>
    )
}