import { useState, React } from 'react';
import Cards from "@/components/Cards";
import Left from '@/assets/icons/left.svg';
import Right from '@/assets/icons/right.svg';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  }

  return (
    <main className="w-full h-auto pt-[93px] px-3 -mb-[24px] flex flex-col justify-center items-center">
        <div className="box relative w-[200px] h-[35px] bg-[#EEAED3] mx-auto mt-5 mb-8 rounded-full flex justify-center items-center text-white font-island text-3xl shadow-[-2px_4px_15px_black]">
            <Left className='me-5 m-2' style={{strokeWidth:4}} onClick={(e) => {e.preventDefault(); handlePrevPage()}}/>
            <span className="me-3 font-semibold">{currentPage}</span>
            <span className="me-3 font-bold">DE</span>
            <span className="font-bold">{totalPages}</span>
            <Right className='ms-5 m-2' style={{strokeWidth:4}} onClick={(e) => {e.preventDefault(); handleNextPage()}}/>
        </div>
        <Cards currentPage={currentPage} setTotalProducts={setTotalProducts} setCurrentPage={setCurrentPage}/>
    </main>
  );
}