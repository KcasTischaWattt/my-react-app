import React,{ useState,useRef } from 'react';

import '../App.css';

export const Input = ({setCitiesList}) => { 
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleOnClick = () => {
    setCitiesList((prevCitiesList) => [...prevCitiesList, inputValue]);
    setInputValue('');
    inputRef.current.focus();
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  }
  
  return (
    <div className="InputWrap">
        <input className="Input" onChange={handleOnChange} value = {inputValue} ref={inputRef}/>
        <button className="Button" onClick={handleOnClick}>+</button>
    </div>
  );
}