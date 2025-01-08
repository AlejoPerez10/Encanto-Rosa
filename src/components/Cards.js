import React, { useState, useEffect } from 'react';
import { products } from "@/data/productos";

const Cards = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        const searchInput = document.getElementById('search');

        const handleSearch = (e) => {
            const inputText = e.target.value.toLowerCase().trim();
            const results = products.filter((item) => item.name.toLowerCase().includes(inputText));
            setFilteredProducts(results);
        };

        searchInput?.addEventListener('input', handleSearch);

        return () => {
            searchInput?.removeEventListener('input', handleSearch);
        };
    }, []);

    if(filteredProducts.length < 5){
        return(
            <div className='h-[calc(100dvh-180px)] flex items-center'>
            <article className="w-full flex gap-5 flex-wrap justify-center pb-16">
                {filteredProducts.map((product) => (
                    <section key={product.name} className="sectionCards h-auto w-[140px] rounded-md flex flex-col items-center text-center font-island">
                        <a href={`/details/${product.name}`} className="flex flex-col items-center">
                            <h2 className="font-bold text-[#b02275] text-2xl">{product.price}</h2>
                            <img src={product.img} alt={`foto de ${product.img}`} className="size-[90px]" />
                            <h2 className="text-wrap text-4xl text-[#b02275] leading-6 mt-2 mb-1 p-1">{product.name}</h2>
                        </a>
                    </section>
                ))}
            </article>
        </div>
        )
    }

    return (
        <article className="w-full flex gap-5 flex-wrap justify-center pb-16">
            {filteredProducts.map((product) => (
                <section key={product.name} className="sectionCards h-auto w-[140px] rounded-md flex flex-col items-center text-center font-island">
                    <a href={`/details/${product.name}`} className="flex flex-col items-center">
                        <h2 className="font-bold text-[#b02275] text-2xl">{product.price}</h2>
                        <img src={product.img} alt={`foto de ${product.img}`} className="size-[90px]" />
                        <h2 className="text-wrap text-4xl text-[#b02275] leading-6 mt-2 mb-1 p-1">{product.name}</h2>
                    </a>
                </section>
            ))}
        </article>
    );
};

export default Cards;