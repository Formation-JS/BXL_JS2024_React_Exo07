import { useCallback, useState } from "react";
import SearchBar from "../../components/search-bar/search-bar-v2.jsx";
import WeatherRequester from "./weather-requester.jsx";
import WeatherList from "../../components/weather-list/weather-list.jsx";

export default function WeatherApp() {

    const [cityQuery, setCityQuery] = useState(null);
    const [weatherFav, setWeatherFav] = useState([]);

    const handleCitySearch = useCallback((query) => {
        setCityQuery(query);
    });

    const handleAddFav = useCallback((data) => {
        setWeatherFav(fav => {
            const old = fav.filter(w => w.id !== data.id);
            return [data, ...old];
        });
    }, []);

    const handleRemoveFav = useCallback((id) => {
        setWeatherFav(fav => fav.filter(w => w.id !== id));
    }, [])

    return (
        <>
            <h1>Rechercher une ville</h1>
            <SearchBar onSearch={handleCitySearch} />

            <h2>Resultat</h2>
            {cityQuery ? (
                <WeatherRequester cityName={cityQuery} onSaveWeather={handleAddFav} />
            ) : (
                <p>Aucune ville recherché...</p>
            )}

            <h2>Favoris</h2>
            <WeatherList weathers={weatherFav} onRemoveFav={handleRemoveFav} />
        </>
    );
}