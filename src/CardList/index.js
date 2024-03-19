import React, { useState } from 'react';

import '../App.css';
import { Card } from '../Card';

export const CardList = ({citiesList}) => {
  return (
    <div className='CardList'>
      {
        citiesList.map((city) => (
          <Card key={city} city={city}/>
        ))
      }
    </div>
  );
}