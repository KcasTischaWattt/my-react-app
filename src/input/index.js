import React,{ useState } from 'react';

import '../App.css';

export const InputTag = () => {
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  }
  return (
      <input className="Input" onChange={handleOnChange} value = {inputValue}/>
  );
};

export const Input = () => {
  return (
    <div className="InputWrap">
        <InputTag />
        <Button />
    </div>
  );
}

const Button = () => {
  return (
    <button className="Button">+</button>
  );
}