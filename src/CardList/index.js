import React, { useContext } from 'react';

import '../App.css';
import { Card } from '../Card';
import { GlobalContext } from '../App';

export const CardList = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div className='CardList'>
      {
        state.citiesList.map((city) => (
          <Card key={city} city={city}/>
        ))
      }
    </div>
  );
}