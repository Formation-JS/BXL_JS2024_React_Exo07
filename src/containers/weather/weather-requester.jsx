import Loader from "../../components/loader/loader.jsx";
import Weather from "../../components/weather/weather.jsx";

export default function WeatherRequester({ cityName, className }) {

    const isLoading = true;
    const error = null;
    const resultat = null;

    return (
        <div className={className}>
            {isLoading ? (
                <Loader />
            ) : resultat ? (
                <Weather {...resultat} />
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
    )
}