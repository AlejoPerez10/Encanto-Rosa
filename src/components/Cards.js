import React, { useState, useEffect } from 'react';
import { products } from "@/data/productos";

const Cards = ({ currentPage, setTotalProducts, setCurrentPage}) => {
    const itemsPerPage = 8;
    const startIndex = (currentPage - 1) * itemsPerPage;

    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setTotalProducts(filteredProducts.length);
    }, [filteredProducts]);

    useEffect(() => {
        const searchInput = document.getElementById('search');

        const handleSearch = (e) => {
            e.preventDefault();
            const inputText = e.target.value.toLowerCase().trim();
            const results = products.filter((item) => item.name.toLowerCase().includes(inputText));
            setFilteredProducts(results);
            setCurrentPage(1);
        };

        searchInput?.addEventListener('input', handleSearch);

        return () => {
            searchInput?.removeEventListener('input', handleSearch);
        };
    }, []);

    const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    if(currentProducts.length < 5){
        return(
            <div className='h-[calc(100dvh-180px)] flex items-center'>
            <article className="w-full flex gap-5 flex-wrap justify-center pb-16">
                {currentProducts.map((product) => (
                    <section key={product.name} className="sectionCards h-auto w-[140px] rounded-md flex flex-col items-center text-center font-island">
                        <a href={`/details/${product.name}`} className="flex flex-col items-center">
                            <h2 className="font-bold text-[#b02275] text-2xl">
                                {product.price}
                            </h2>
                            <img src={product.img} alt={`foto de ${product.img}`} className="size-[90px]" />
                            <h2 className="text-wrap text-4xl text-[#b02275] leading-6 mt-2 mb-1 p-1" style={{whiteSpace:'pre-line'}}>
                                {product.name}
                            </h2>
                        </a>
                    </section>
                ))}
            </article>
        </div>
        )
    }  else {
        return (
            <article className="w-full flex gap-5 flex-wrap justify-center pb-16">
                {currentProducts.map((product) => (
                    <section key={product.name} className="sectionCards h-auto w-[140px] rounded-md flex flex-col items-center text-center font-island">
                        <a href={`/details/${product.name}`} className="flex flex-col items-center">
                            <h2 className="font-bold text-[#b02275] text-2xl">
                                {product.price}
                            </h2>
                            <img src={product.img} alt={`foto de ${product.img}`} className="size-[90px]" />
                            <h2 className="text-wrap text-4xl text-[#b02275] leading-6 mt-2 mb-1 p-1" style={{whiteSpace:'pre-line'}}>
                                {product.name}
                            </h2>
                        </a>
                    </section>
                ))}
            </article>
        );
    }

};

export default Cards;