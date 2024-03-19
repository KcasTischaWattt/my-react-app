import React,{ useState } from 'react';

import '../App.css';

export const Input = ({setCitiesList}) => { 
  const [inputValue, setInputValue] = useState('');

  const handleOnClick = () => {
    setCitiesList((prevCitiesList) => [...prevCitiesList, inputValue]);
    setInputValue('');
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="InputWrap">
        <input className="Input" onChange={handleOnChange} value = {inputValue}/>
        <button className="Button" onClick={handleOnClick}>+</button>
    </div>
  );
}