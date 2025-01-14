import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {SearchProvider} from '@/context/SearchContext';

const Layout = ({children}) => {
    return (
        <SearchProvider>
            <Header/>
                {children}
            <Footer/>
        </SearchProvider>
    );
};

export default Layout;