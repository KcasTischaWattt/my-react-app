import { useEffect, useReducer } from 'react';

const initialState = {
    inputValue: '',
    editingCity: '',
    citiesList: localStorage.getItem('citiesList') 
        ? JSON.parse(localStorage.getItem('citiesList')) : [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY':
            return {...state, citiesList: [...state.citiesList, action.payload]};
        case 'DELETE_CITY': 
            return {...state, citiesList: state.citiesList.filter(city => city !== action.payload)};
        case 'EDIT_CITY': 
            return {...state, inputValue: action.payload, editingCity: action.payload};
        case 'EDIT_CITY_DONE': {
            const { editingCity } = state;
            const oldArr = state.citiesList;
            const filteredArr = oldArr.filter(city => city !== editingCity);
            const newArr = [...filteredArr, action.payload];
            return {
                ...state, 
                citiesList: newArr, 
                inputValue:initialState.inputValue, 
                editingCity: initialState.editingCity
            };
        }
        case 'CHANGE_INPUT_VALUE':
            return {...state, inputValue: action.payload};
        case 'RESET_INPUT_VALUE':
            return {...state, inputValue: initialState.inputValue};
        default:
            return state;
    }
};

export const useCitiesList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => { 
        localStorage.setItem('citiesList', JSON.stringify(state.citiesList)) 
    }, [state.citiesList]);
    
    return [state, dispatch];
 }