import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const SearchContext = createContext();

// Proveedor del contexto
export const SearchProvider = ({ children }) => {
    const [getInput, setGetInput] = useState('');

    return (
        <SearchContext.Provider value={{ getInput, setGetInput }}>
            {children}
        </SearchContext.Provider>
    );
};

// Custom hook para usar el contexto
export const useSearch = () => useContext(SearchContext);
