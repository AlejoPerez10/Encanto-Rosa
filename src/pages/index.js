import Cards from "@/components/Cards";
import Left from '@/assets/icons/left.svg'
import Right from '@/assets/icons/right.svg'

export default function Home() {
  return (
    <main className="w-full h-auto pt-[93px] px-3 -mb-[24px] flex flex-col justify-center items-center">
        <div className="box relative w-[185px] h-[30px] bg-[#EEAED3] mx-auto mt-5 mb-8 rounded-full flex justify-center items-center text-white font-island text-3xl shadow-[-2px_4px_15px_black]">
            <a href="#" className="pe-5"><Left style={{strokeWidth:4}}/></a>
            <span className="me-3 font-semibold">1</span>
            <span className="me-3 font-bold">DE</span>
            <span className="font-bold">10</span>
            <a href="#" className="ps-5"><Right style={{strokeWidth:4}}/></a>
        </div>
        <Cards/>
    </main>
  );
}
