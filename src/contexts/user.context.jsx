import {createContext, useEffect, useReducer} from 'react';

import {onAuthStateChangedListener, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});


export const USER_ACTION_TYPES = {
    SET_CURRECT_USER: 'SET_CURRECT_USER',
};

const INITIAL_STATE = {
    currentUser: null,
};

const userReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case  USER_ACTION_TYPES.SET_CURRECT_USER:
            return{...state, currentUser: payload};
        default:
            throw new Error(`unhandled type ${type} in userReducer`);
    }
};

export const UserProvider = ({children}) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    
    const setCurrentUser = (user) => 
        dispatch({type:  USER_ACTION_TYPES.SET_CURRECT_USER, currentUser: user});
     
    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubcribe;
    }, []);

    const value = {
        currentUser,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

