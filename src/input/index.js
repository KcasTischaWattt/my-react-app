import React,{ useContext ,useRef } from 'react';

import '../App.css';

import {GlobalContext} from '../App';

export const Input = () => { 
  const inputRef = useRef(null);
  const { dispatch, state :{ inputValue, editingCity } } = useContext(GlobalContext);

  const handleOnAdd = () => {
    if (!inputValue || !inputValue.length) return;
    dispatch({ type: 'ADD_CITY', payload: inputValue });
    dispatch({ type: 'RESET_INPUT_VALUE'});
    inputRef.current.focus();
  };

  const handleOnDone = () => {
    if (!inputValue || !inputValue.length) return;
    dispatch({ type: 'EDIT_CITY_DONE', payload: inputValue });
    dispatch({ type: 'RESET_INPUT_VALUE'});
    inputRef.current.focus();
  };

  const handleOnChange = (e) => {
    dispatch({ type: 'CHANGE_INPUT_VALUE', payload: e.target.value });
  }

  return (
    <div className="InputWrap">
        <input className="Input" onChange={handleOnChange} value = {inputValue} ref={inputRef}/>
        {
          editingCity 
          ? <button className="Button" onClick={handleOnDone}>Done</button> 
          : <button className="Button" onClick={handleOnAdd}>+</button>
        }
    </div>
  );
}