import React from 'react';

import '../App.css';

export const Card = () => {
  return (
    <div className="Card">
        <div className="MainInfo">
          <img className="Icon" scr="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
          <div className="Title">Moscow</div>
          <div className="Description">Sunny</div>
          <div className="Temperature">20</div>
        </div>
        <div className="Information">
          <div>Humidity: 15</div>
          <div>Feels like: 19</div>
        </div>
    </div>
  );
}