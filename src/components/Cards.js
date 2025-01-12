import React, { useState, useEffect } from 'react';
import { products } from "@/data/productos";

const Cards = ({ currentPage, setTotalProducts, setCurrentPage}) => {
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;

    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setTotalProducts(filteredProducts.length);
    }, [filteredProducts]);

    useEffect(() => {
        const searchInput = document.getElementById('search');

        const handleSearch = (e) => {
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

    if (currentProducts.length === 0){
        return (
            <div className='h-[calc(100dvh-180px)] flex items-center justify-center'>
                <p className="text-4xl md:text-6xl lg:text-9xl text-[#b02275] font-island">Producto no encontrado</p>
            </div>
        )
    }

    if(currentProducts.length <= 2){
        return(
            <div className='h-[calc(100dvh-180px)] pb-16 flex justify-center'>
            <article className="w-full md:w-[100%] lg:w-[100%] flex gap-5 md:gap-10 lg:gap-14 flex-wrap justify-center m-auto pb-10">
                {currentProducts.map((product) => (
                    <section key={product.name} className="sectionCards h-auto w-[140px] md:w-[220px] lg:w-[300px] rounded-md flex flex-col items-center text-center font-island">
                        <a href={`/details/${product.name}`} className="flex flex-col items-center">
                            <h2 className="font-bold text-[#b02275] text-2xl md:text-3xl lg:text-4xl">
                                {product.price}
                            </h2>
                            <img src={product.img} alt={`foto de ${product.img}`} className="size-[90px] md:size-[130px] lg:size-[180px]" />
                            <h2 className="text-wrap text-4xl md:text-5xl lg:text-6xl text-[#b02275] leading-6 mt-2 mb-1 p-1" style={{whiteSpace:'pre-line'}}>
                                {product.name}
                            </h2>
                        </a>
                    </section>
                ))}
            </article>
        </div>
        )
    } else if (currentProducts.length <= 4){
        return(
            <div className='h-auto pb-16 flex justify-center'>
            <article className="w-full md:w-[80%] lg:w-[70%] h-auto flex gap-5 md:gap-10 lg:gap-14 flex-wrap justify-center pb-10">
                {currentProducts.map((product) => (
                    <section key={product.name} className="sectionCards h-auto w-[140px] md:w-[220px] lg:w-[300px] rounded-md flex flex-col items-center text-center font-island">
                        <a href={`/details/${product.name}`} className="flex flex-col items-center">
                            <h2 className="font-bold text-[#b02275] text-2xl md:text-3xl lg:text-4xl">
                                {product.price}
                            </h2>
                            <img src={product.img} alt={`foto de ${product.img}`} className="size-[90px] md:size-[130px] lg:size-[180px]" />
                            <h2 className="text-wrap text-4xl md:text-5xl lg:text-6xl text-[#b02275] leading-6 mt-2 mb-1 p-1" style={{whiteSpace:'pre-line'}}>
                                {product.name}
                            </h2>
                        </a>
                    </section>
                ))}
            </article>
        </div>
        )
    } else{
        return (
            <article className="w-full md:w-[80%] lg:w-[70%] flex gap-5 md:gap-10 lg:gap-14 flex-wrap justify-center pb-16">
                {currentProducts.map((product) => (
                    <section key={product.name} className="sectionCards h-auto w-[140px] md:w-[220px] lg:w-[300px] rounded-md flex flex-col items-center text-center font-island">
                        <a href={`/details/${product.name}`} className="flex flex-col items-center">
                            <h2 className="font-bold text-[#b02275] text-2xl md:text-3xl lg:text-4xl">
                                {product.price}
                            </h2>
                            <img src={product.img} alt={`foto de ${product.img}`} className="size-[90px] md:size-[130px] lg:size-[180px]" />
                            <h2 className="text-wrap text-4xl md:text-5xl lg:text-6xl text-[#b02275] leading-6 mt-2 mb-1 p-1" style={{whiteSpace:'pre-line'}}>
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