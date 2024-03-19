import React, { useContext, useState } from 'react';

import '../App.css';
import { Card } from '../Card';
import { GlobalContext } from '../App';

export const CardList = () => {
  const [orderBy, setOrderBy] = useState('desc');
  const { state } = useContext(GlobalContext);
  const sortedCitiesList = [...state.citiesList].sort((a, b) => {
    if (orderBy === 'asc') {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  });

  const handleOnChange = (e) => {
    setOrderBy(e.target.value);
  }

  return (
    <>
      <select class = "Select" value={orderBy} onChange={handleOnChange}>
        <option value="desc">By name desc</option>
        <option value="asc">By name asc</option>
      </select>
      <div className='CardList'>
        {sortedCitiesList.map((city) => (
          <Card key={city} city={city} />
        ))}
      </div>
    </>
  );
};