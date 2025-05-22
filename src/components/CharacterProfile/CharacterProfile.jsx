import styles from "./CharacterProfile.module.css"

export default function CharacterProfile({ singleCharacter }) {
    
    // functions to check if the enemies and allies properties are arrays.
    // If so, maps over them to create a list item for each enemy/ally.
    // Returns message if empty or if not an array
    function enemies() {
        if (Array.isArray(singleCharacter.enemies)) {
            if (singleCharacter.enemies.length > 0) {
                return singleCharacter.enemies.map((enemy, index) => <li key={index}>{enemy}</li>);
            } else {
                return <p>No enemies.</p>
            }
        } else {
            return console.log(`Not an array`)
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
            return console.log(`Not an array`)
        }
    };

    return (
        <>
            <div className="character-profile">
                <img className={styles.img} src={singleCharacter.photoUrl} />
                <h2>{singleCharacter.name}</h2>
            <div className={styles.info}>   
                {/* Ternary to if character has an affiliation.
                If true, displays affiliation in a paragraph */}
                {singleCharacter.affiliation ? (<p><b>Affiliation:</b> {singleCharacter.affiliation}</p>) : null }
                <ul><b>Enemies:</b>{enemies()}</ul><br/>
                <ul><b>Allies:</b>{allies()}</ul>
            </div>     
            </div>

        </>
    )
}