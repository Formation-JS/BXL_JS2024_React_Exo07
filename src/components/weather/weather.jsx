
export default function Weather({ city, country, temp, tempLike, desc }) {

    return (
        <div>
            <p>{city} ({country})</p>
            <p>Temperature : {temp}</p>
            <p>Ressenti : {tempLike}</p>
            <p>Description : {desc}</p>
        </div>
    )
}