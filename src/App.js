import React,{ useRef, useState } from 'react';

import './App.css';

import { Input } from './input';
import { CardList } from './CardList';

function App() {
  const [citiesList, setCitiesList] = useState(['London', 'Paris', 'New York']);
  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList}/>
      <CardList citiesList={citiesList}/>
    </div>
  );
}

export default App;
