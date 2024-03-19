import { useEffect, useState } from 'react';

export const useCitiesList = () => {
    const [citiesList, setCitiesList] = useState(localStorage.getItem('citiesList') 
        ? JSON.parse(localStorage.getItem('citiesList')) : []);
    useEffect(() => { 
        localStorage.setItem('citiesList', JSON.stringify(citiesList)) 
    }, [citiesList]);
    
    return [citiesList, setCitiesList];
 }