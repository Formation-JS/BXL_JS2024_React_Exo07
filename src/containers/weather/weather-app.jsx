import { useCallback, useState } from "react";
import SearchBar from "../../components/search-bar/search-bar-v2.jsx";
import WeatherRequester from "./weather-requester.jsx";

export default function Weather() {

    const [cityQuery, setCityQuery] = useState(null);

    const handleCitySearch = useCallback((query) => {
        setCityQuery(query);
    })

    return (
        <>
            <h1>Rechercher une ville</h1>
            <SearchBar onSearch={handleCitySearch} />
        
            <h2>Resultat</h2>
            {cityQuery ? (
                <WeatherRequester cityName={cityQuery} />
            ): (
                <p>Aucune ville recherché...</p>
            )}
        </>
    )
}