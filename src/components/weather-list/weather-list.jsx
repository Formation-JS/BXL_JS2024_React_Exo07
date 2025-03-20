import Weather from "../weather/weather.jsx";

export default function WeatherList({ weathers = [], onRemoveFav }) {

    return (
        <ul>
            {weathers.map(weather => <li key={weather.id}>
                <Weather {...weather}
                    btnActionText='✖️'
                    btnActionFct={onRemoveFav} />
            </li>)}
        </ul>
    );
}