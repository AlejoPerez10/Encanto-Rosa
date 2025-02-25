import { React } from 'react'
import { useRouter } from 'next/router'
import { products } from '@/data/productos'
import Left from '@/assets/icons/leftDetails.svg'
import Check from '@/assets/icons/check.svg';
import Head from 'next/head';

const Details = () => {

    const router = useRouter();
    const { name } = router.query;
    const product = products.find((item) => item?.name.toLowerCase().trim() === name?.toLowerCase().trim());
    
    if (!product) return (
        <div className='h-screen flex justify-center items-center'>
            <p className='text-6xl font-bold font-island text-[#9b005b] m-auto'>Cargando...</p>
        </div>
    )
    
    return (
        <>
            <Head>
                <title>{product.reference} - Encanto Rosa</title>
            </Head>
            <main className='lg:flex lg:flex-col w-full px-6 md:px-12 lg:px-20 pb-10 -mb-[24px] mainXl'>
                <h1 className="relative ps-10 lg:ps-24 pt-5 mb-10 lg:mb-5 flex text-center font-island text-5xl lg:text-8xl text-wrap leading-[50px] lg:leading-[100px]" style={{whiteSpace:'pre-line'}}>
                    <a className="absolute left-[-30px] lg:left-[-40px] top-[18px] lg:top-[30px]" href="/"><Left className="stroke-[#9b005b] size-14 lg:size-20" style={{strokeWidth:2}}/> </a>
                    {product?.reference}
                </h1>

                <h2 className="hidden lg:flex font-island text-6xl font-bold leading-6 my-5 m-auto text-[#9b005b]">Alias: {product?.alias}</h2>

                <section className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0">
                    <figure className="w-full lg:w-auto flex flex-col items-center">
                        <h2 className="flex lg:hidden font-island text-3xl font-bold leading-6 mb-10 text-[#9b005b]">Alias: {product?.alias}</h2>
                        <img src={product?.img} alt={product?.name} className="sectionCards mb-4 lg:my-5 w-auto rounded-md flex flex-col items-center font-island text-lg max-w-[300px] lg:max-w-[400px] imgXl"/>
                    </figure>
                    <aside className="flex flex-col lg:flex-col-reverse w-full">
                        <h3 className="font-island text-3xl lg:text-6xl mx-auto font-bold -mt-4 mb-3 lg:my-5">{product?.price}</h3>
                        <a href='https://wa.me/3103893622' className="w-full max-w-[80%] md:w-[50%] lg:w-auto lg:w-max-full lg:px-8 mx-auto lg:mx-10 h-[40px] lg:h-[60px] bg-[#EEAED3] my-2 lg:my-5 rounded-full font-island font-bold text-3xl lg:text-5xl text-[#9b005b] flex justify-center items-center shadow-[-2px_4px_15px_black] loQuieroXl">¡ LO QUIERO !</a>
                        <p className="relative lg:w-[80%] m-auto text-wrap font-playfair leading-4 mt-5 lg:my-5 lg:ms-10 text-lg lg:text-3xl">{product?.description}</p>
                    </aside>
                </section>

                {product?.check1 && (
                    <div className="flex mt-8 lg:w-[85%] m-auto">
                        <Check className="relative bottom-1 lg:bottom-2 size-6 lg:size-10 me-1 fill-[#EEAED3]"/>
                        <p className="text-wrap w-full font-playfair leading-4 text-md lg:text-2xl">{product.check1}</p> 
                    </div>
                )}

                {product?.check2 && (
                    <div className="flex mt-5 mb-5 lg:w-[85%] m-auto">
                        <Check className="relative bottom-1 lg:bottom-2 size-6 lg:size-10 me-1 fill-[#EEAED3]"/>
                        <p className="text-wrap w-full font-playfair leading-4 text-md lg:text-2xl">{product.check2}</p> 
                    </div>
                )}
            </main>
        </>
    )
}

export default Details;
