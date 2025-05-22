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
            return <p>No ally data available.</p>
        }
    };

    return (
        <>
            <div className="character-profile">
                <img className={styles.img} src={singleCharacter.photoUrl} />
                <h2>{singleCharacter.name}</h2>
            <div className={styles.info}>   
                {singleCharacter.affiliation ? (<p><b>Affiliation:</b> {singleCharacter.affiliation}</p>) : null }
                <ul><b>Enemies:</b>{enemies()}</ul><br/>
                <ul><b>Allies:</b>{allies()}</ul>
            </div>     
            </div>

        </>
    )
}