import { useCallback, useState } from "react";
import SearchBar from "../../components/search-bar/search-bar-v2.jsx";
import WeatherRequester from "./weather-requester.jsx";
import WeatherList from "../../components/weather-list/weather-list.jsx";
import { useArrayState } from "../../hooks/array-state.hook.js";

export default function WeatherApp() {

    const [cityQuery, setCityQuery] = useState(null);
    const [weatherFav, handleFav] = useArrayState()

    const handleCitySearch = useCallback((query) => {
        setCityQuery(query);
    });

    return (
        <>
            <h1>Rechercher une ville</h1>
            <SearchBar onSearch={handleCitySearch} />

            <h2>Resultat</h2>
            {cityQuery ? (
                <WeatherRequester cityName={cityQuery} onSaveWeather={handleFav.add} />
            ) : (
                <p>Aucune ville recherché...</p>
            )}

            <h2>Favoris</h2>
            <WeatherList weathers={weatherFav} onRemoveFav={handleFav.remove} />
        </>
    );
}