import React,{ useEffect, useRef, useState } from 'react';

import './App.css';

import { Input } from './input';
import { CardList } from './CardList';
import { useCitiesList } from './hooks/useCitiesList';

function App() {
  const [citiesList, dispatch] = useCitiesList();

  return (
    <div className="Main">
      <Input dispatch={dispatch}/>
      <CardList citiesList={citiesList}/>
    </div>
  );
}

export default App;
