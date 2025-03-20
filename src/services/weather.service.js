import axios from "axios";

const weatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org',
    params: {
        appid: import.meta.env.VITE_WEATHER_KEY
    }
});

async function fetchDataOfCity(city) {

    //https://api.openweathermap.org/geo/1.0/direct?q=Bruxelles&limit=1&appid=VotreClef
    const geoResponse = await weatherApi.get('/geo/1.0/direct', {
        params: {
            q: city,
            limit: 1
        }
    });
    const geoTemp = geoResponse.data && geoResponse.data[0];
    if (!geoTemp) {
        throw new Error('Ville non trouvé !');
    }

    return {
        city: geoTemp.local_names.fr,
        lat: geoTemp.lat,
        lon: geoTemp.lon,
        country: geoTemp.country
    };
}

export async function fetchWeatherByCity(searchCity) {

    const { city, country, lat, lon } = await fetchDataOfCity(searchCity);

    // https://api.openweathermap.org/data/2.5/weather?lat=50.8465573&lon=4.351697&units=metric&lang=fr&appid=VotreClef
    const weatherResponse = await weatherApi.get('/data/2.5/weather', {
        params: { lat, lon, units: 'metric', lang: 'fr' }
    });
    
    const weatherTemp = weatherResponse.data;
    if (!weatherTemp) {
        throw new Error('Météo de la ville non trouvé !');
    }

    const displayTempOption = { style:'unit', unit: 'celsius', unitDisplay: 'short' };
    return {
        id: `${lon}/${lat}`,
        city,
        country,
        temp: weatherTemp.main.temp.toLocaleString('fr-be', displayTempOption),
        tempLike: weatherTemp.main.feels_like.toLocaleString('fr-be', displayTempOption),
        desc: weatherTemp.weather.map(w => w.description).join(', ')
    }
}