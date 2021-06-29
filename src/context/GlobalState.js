import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function increaseQuantity(id) {
        dispatch({
            type: 'INCREASE_QUANTITY',
            payload: id
        });
    }

    function decreaseQuantity(id) {
        dispatch({
            type: 'DECREASE_QUANTITY',
            payload: id
        });
    }

    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction, increaseQuantity, decreaseQuantity}}>
            {children}
        </GlobalContext.Provider>
    );
}