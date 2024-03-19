import React,{ useEffect, useRef, useState } from 'react';

import './App.css';

import { Input } from './input';
import { CardList } from './CardList';
import { useCitiesList } from './hooks/useCitiesList';

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <div className="Main">
      <Input dispatch={dispatch} inputValue = {state.inputValue} editingCity = {state.editingCity}/>
      <CardList citiesList={state.citiesList} dispatch={dispatch}/>
    </div>
  );
}

export default App;
