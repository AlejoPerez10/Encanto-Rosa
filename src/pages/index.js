import { useState, React, useEffect } from 'react';
import Cards from "@/components/Cards";
import Left from '@/assets/icons/left.svg';
import Right from '@/assets/icons/right.svg';
import { products } from "@/data/productos";
import { SearchProvider, useSearch } from '@/context/SearchContext';

const itemsPerPage = 6;

export default function Home() {
  const { getInput } = useSearch();
  const [filterProducts, setFilterProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const input = document.getElementById('search');

    input.addEventListener('input', () => { 
      setFilterProducts(products.filter(product => product.name.toLowerCase().trim().includes(input.value.toLowerCase().trim())))
    });

    setFilterProducts(products.filter(product => product.name.toLowerCase().trim().includes(getInput)));
  }, [getInput]);

  /*useEffect(() => {
    // Filtra los productos al cambiar 'getInput'
    setFilterProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(getInput.toLowerCase().trim())
      )
    );
  }, [getInput]);*/

  const getCurrentProducts = () => {
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    return filterProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const totalPages = () => {
    return Math.ceil(filterProducts.length / itemsPerPage);
  }

  const filterByCategory = (category) => {
    setFilterProducts(products.filter(product => product.name.toLowerCase().trim().includes(category)))
  }

  return (
    <main className="w-full h-auto pt-[100px] md:pt-[110px] lg:pt-[140px] px-3 -mb-[24px] flex flex-col justify-center items-center">
        <div className="box relative w-[200px] md:w-[230px] lg:w-[300px] h-[35px] md:h-[40px] lg:h-[45px] bg-[#EEAED3] mx-auto mt-5 lg:mt-7 mb-10 md:mb-12 lg:mb-16 rounded-full flex justify-center items-center text-white font-island text-3xl shadow-[-2px_4px_15px_black]">
            <Left className='me-5 lg:me-7 m-2 cursor-pointer md:w-14 lg:w-14' style={{strokeWidth:4}} onClick={() => currentPage > 1 && paginate(currentPage - 1)}/>
            <span className="me-3 font-semibold md:text-4xl lg:text-5xl">{currentPage}</span>
            <span className="me-3 font-bold md:text-4xl lg:text-5xl">DE</span>
            <span className="font-bold md:text-4xl lg:text-5xl">{totalPages()}</span>
            <Right className='ms-5 lg:ms-7 m-2 cursor-pointer md:w-14 lg:w-14' style={{strokeWidth:4}} onClick ={() => currentPage < totalPages() && paginate(currentPage + 1)}/>
        </div>
        <Cards products={getCurrentProducts()}/>
    </main>
  );
}