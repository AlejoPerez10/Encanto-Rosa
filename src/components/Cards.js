import React from 'react';

const Cards = ({ products }) => {

    if (products.length === 0){
        return (
            <div className='h-[calc(100dvh-180px)] flex items-center justify-center'>
                <p className="text-4xl md:text-6xl lg:text-9xl mt-[-220px] text-[#b02275] font-island">Producto no encontrado</p>
            </div>
        )
    }

    return (
        <article className="w-full md:w-[80%] lg:w-[70%] min-h-[calc(100dvh-200px)] flex gap-5 md:gap-10 lg:gap-14 flex-wrap justify-center items-center md:items-stretch mb-20 md:mb-24 lg:mb-36">
            {products.map((product) => (
                <section key={product.name} className="sectionCards min-h-[190px] h-auto max-h-[190px] md:max-h-[280px] lg:max-h-[360px] w-[140px] md:w-[220px] lg:w-[300px] rounded-md flex flex-col items-center text-center font-island">
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

};

export default Cards;