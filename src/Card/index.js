import React, { memo, useContext } from 'react';

import '../App.css';
import { useWeather } from '../hooks/useWeather';
import { GlobalContext } from '../App';

export const Card = memo(({ city }) => {
  const { dispatch } = useContext(GlobalContext);
  const data = useWeather(city);

  if (!data) return null;

  const { name, main, weather } = data || {};
  const { description, icon } = weather[0] || {};
  const { temp, feels_like, humidity } = main || {};

  const handleOnClickDelete = () => { 
    dispatch({ type: 'DELETE_CITY', payload: city });
  };

  const handleOnClickEdit = () => {
    dispatch({ type: 'EDIT_CITY', payload: city });
  };

  return (
    <div className="Card">
      <div className="ActionButtonWrap">
        <button className="EditCity" onClick={handleOnClickEdit}>Edit</button>
        <button className="DeleteCity" onClick={handleOnClickDelete}>X</button>
      </div>
      <div className="MainInfo">
        <img className="Icon" src={`http://openweathermap.org/img/wn/${icon}.png`} alt="icon" />
        <div className="Title">{name}</div>
        <div className="Description">{description}</div>
        <div className="Temperature">{temp.toFixed()}</div>
      </div>
      <div className="Information">
        <div>Humidity: {humidity}</div>
        <div>Feels like: {feels_like}</div>
      </div>
    </div>
  );
});
