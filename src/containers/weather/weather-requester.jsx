import useSWR from "swr";
import Loader from "../../components/loader/loader.jsx";
import Weather from "../../components/weather/weather.jsx";
import { fetchWeatherByCity } from "../../services/weather.service.js";

export default function WeatherRequester({ cityName, className }) {

    const { data, isLoading, error } = useSWR(`weather-${cityName}`, () => fetchWeatherByCity(cityName));

    return (
        <div className={className}>
            {isLoading ? (
                <Loader />
            ) : data ? (
                <Weather {...data} />
            ) : error && (
                <WeatherRequesterError message={error} />
            )}
        </div>
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