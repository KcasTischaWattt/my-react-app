import { useEffect, useReducer } from 'react';

const initialState = {citiesList: localStorage.getItem('citiesList') 
? JSON.parse(localStorage.getItem('citiesList')) : []};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY':
            return { citiesList: [...state.citiesList, action.payload] };
        case 'DELETE_CITY': 
            const oldCitiesList = state.citiesList;
            const newCitiesList = oldCitiesList.filter((city) => city !== action.payload);
            return {...state, citiesList: newCitiesList};
        default:
            return state;
    }
};

export const useCitiesList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { citiesList } = state;
    useEffect(() => { 
        localStorage.setItem('citiesList', JSON.stringify(citiesList)) 
    }, [citiesList]);
    
    return [citiesList, dispatch];
 }