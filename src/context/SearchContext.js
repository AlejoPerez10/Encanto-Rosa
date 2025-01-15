import React, { createContext, useState } from 'react';

// Crear el contexto
export const SearchContext = createContext();

// Proveedor del contexto
export const SearchProvider = ({ children }) => {
    const [getInput, setGetInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <SearchContext.Provider value={{ getInput, setGetInput, currentPage, setCurrentPage }}>
            {children}
        </SearchContext.Provider>
    );
};
