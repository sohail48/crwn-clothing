import {createContext, useState, useEffect} from 'react';
import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    CategoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [CategoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const value = {CategoriesMap};

    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};