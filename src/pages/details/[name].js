import { React } from 'react'
import { useRouter } from 'next/router'
import { products } from '@/data/productos'
import Left from '@/assets/icons/leftDetails.svg'
import Check from '@/assets/icons/check.svg';

const Details = () => {

    const router = useRouter();
    const { name } = router.query;
    console.log('Name: ', name)
    const product = products.find((item) => item?.name.toLowerCase().trim() === name?.toLowerCase().trim());
    
    if (!product) return (
        <div className='h-screen flex justify-center items-center'>
            <p className='text-6xl font-bold font-island text-[#9b005b] m-auto'>Cargando...</p>
        </div>
    )
    
    return (
        <main className='w-full px-6 md:px-12 lg:px-52 pb-10 lg:mt-12 -mb-[24px]'>
            <h1 className="relative ps-10 lg:ps-24 pt-32 mb-10 flex text-center font-island text-5xl lg:text-8xl text-wrap leading-[50px] lg:leading-[100px]" style={{whiteSpace:'pre-line'}}>
                <a className="absolute left-[-30px] lg:left-0 top-[125px] lg:top-[140px]" href="/"><Left className="stroke-[#9b005b] size-14 lg:size-20" style={{strokeWidth:2}}/> </a>
                {product?.reference}
            </h1>
            <section className="flex flex-col items-center gap-5">
                <figure className="w-full flex flex-col items-center">
                    <h2 className="font-island text-3xl lg:text-6xl font-bold leading-6 mt-4 mb-4 text-[#9b005b]">Alias: {product?.alias}</h2>
                    <img src={product?.img} alt={product?.name} className="sectionCards my-4 w-auto rounded-md flex flex-col items-center font-island text-lg md:max-w-[500px]"/>
                </figure>
                <aside className="flex flex-col w-full">
                    <h3 className="font-island text-3xl lg:text-6xl mx-auto font-bold -mt-4 lg:mt-0 mb-3 lg:mb-6">{product?.price}</h3>
                    <a href='https://wa.me/3103893622' className="w-full md:w-[70%] lg:w-auto lg:px-20 m-auto h-[40px] lg:h-[60px] bg-[#EEAED3] mb-2 lg:mb-8 rounded-full font-island font-bold text-3xl lg:text-6xl text-[#9b005b] flex justify-center items-center shadow-[-2px_4px_15px_black]">¡ LO QUIERO !</a>
                    <p className="relative w-full lg:w-[80%] m-auto text-wrap font-playfair leading-4 mt-5 text-lg lg:text-3xl">{product?.description}</p>
                </aside>
            </section>

            {product?.check1 && (
                <div className="flex mt-8 lg:w-[70%] m-auto">
                    <Check className="relative bottom-1 lg:bottom-2 size-6 lg:size-10 me-1 fill-[#EEAED3]"/>
                    <p className="text-wrap w-full font-playfair leading-4 text-md lg:text-2xl">{product.check1}</p> 
                </div>
            )}

            {product?.check2 && (
                <div className="flex mt-5 mb-5 lg:w-[70%] m-auto">
                    <Check className="relative bottom-1 lg:bottom-2 size-6 lg:size-10 me-1 fill-[#EEAED3]"/>
                    <p className="text-wrap w-full font-playfair leading-4 text-md lg:text-2xl">{product.check2}</p> 
                </div>
            )}
        </main>
    )
}

export default Details;
