import React, { useEffect, useState } from 'react';
import '../App.css';
import { API_KEY } from '../setting.js';

export const Card = ({ city }) => {
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

  if (!data) {
    return null;
  }

  const { name, main, weather } = data || {};
  const { description, icon } = weather[0] || {};
  const { temp, feels_like, humidity } = main || {};

  return (
    <div className="Card">
      <div className="MainInfo">
        <img className="Icon" src={`http://openweathermap.org/img/wn/${icon}.png`} alt="icon" />
        <div className="Title">{name}</div>
        <div className="Description">{description}</div>
        <div className="Temperature">{temp}</div>
      </div>
      <div className="Information">
        <div>Humidity: {humidity}</div>
        <div>Feels like: {feels_like}</div>
      </div>
    </div>
  );
}
