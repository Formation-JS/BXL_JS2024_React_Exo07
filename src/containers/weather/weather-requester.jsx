import useSWR from "swr";
import Loader from "../../components/loader/loader.jsx";
import Weather from "../../components/weather/weather.jsx";
import { fetchWeatherByCity } from "../../services/weather.service.js";
import { useCallback } from "react";

export default function WeatherRequester({ cityName, className, onSaveWeather = () => { } }) {

    const { data, isLoading, error } = useSWR(`weather-${cityName}`, () => fetchWeatherByCity(cityName));

    const handleSave = useCallback(() => {
        onSaveWeather(data)
    }, [data, onSaveWeather]);

    return (
        <div className={className}>
            {isLoading ? (
                <Loader />
            ) : data ? (
                <WeatherRequesterResult data={data} onSave={handleSave} />
            ) : error && (
                <WeatherRequesterError message={error} />
            )}
        </div>
    );
}

function WeatherRequesterResult({ data, onSave }) {
    return (
        <Weather {...data} btnActionFct={onSave} btnActionText='⭐' />
    );
}

function WeatherRequesterError({ message }) {
    return (
        <div>
            <p>Erreur lors de la recherche !</p>
            <p>Info : {message || 'N/A'}</p>
        </div>
    );
}