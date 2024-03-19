import React from 'react';

import '../App.css';

export const Input = () => {
  const currentDate = new Date().toDateString();
  const handleOnChange = (event) => {
      console.log(event.target.value);
  }
  const handleOnClick = (value) => () => {
      console.log('clicked');
      console.log(value);
  }
  const handleOnSubmit = (event) => {
      event.preventDefault();
      console.log('submitted');
  } 
  return (
    <div className="InputWrap">
        <form onSubmit={handleOnSubmit}>
          <input className="Input" onChange={handleOnChange} />
          <button className="Button" onClick={handleOnClick(currentDate)}>+</button>
        </form>
    </div>
  );
}