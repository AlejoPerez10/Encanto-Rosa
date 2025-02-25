import React from 'react'
import Footer from '@/components/Footer'
import {SearchProvider} from '@/context/SearchContext'

const Layout = ({ children }) => {
    return (
        <SearchProvider>
            {children}
            <Footer/>
        </SearchProvider>
    );
};

export default Layout;