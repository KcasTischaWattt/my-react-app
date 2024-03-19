import React, {useEffect} from 'react';

import '../App.css';
import { Card } from '../Card';

export const CardList = ({citiesList}) => {
  useEffect(() => {
    console.log('CardList rendered');
  }, [citiesList]);
  return (
    <div className='CardList'>
      {
        citiesList.map((city) => (
          <Card key={city} city={city} />
        ))
      }
    </div>
  );
}