import React, {useEffect, useState} from 'react';
import { API_KEY } from '../setting.js';

export const useWeather = (city) => {
    const [location, setLocation] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}&units=metric`)
            .then((response) => {
                return response.json();
            }).then(json => {
            setLocation(json);
            if (json) {
                fetchWeatherData(json);
            }
        });
    }, [city]);

    const fetchWeatherData = (location) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${location[0].lat}&lon=${location[0].lon}&appid=${API_KEY}&units=metric`)
            .then((response) => {
                return response.json();
            }).then(json => setData(json));
    };

    return data;
}