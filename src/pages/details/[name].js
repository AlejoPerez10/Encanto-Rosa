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
    
    if (!product) return <p className='h-screen text-7xl m-auto'>Producto no encontrado</p>;
    
    return (
        <main className='w-full px-6 pb-10 -mb-[24px]'>
            <h1 className="relative ps-10 pt-32 mb-10 flex text-center font-island text-6xl text-wrap leading-[50px]" style={{whiteSpace:'pre-line'}}>
                <a className="absolute left-[-50px] top-28" href="/"><Left className="stroke-[#f173bd] size-20" style={{strokeWidth:2}}/> </a>
                {product?.reference}
            </h1>
            <section className="flex flex-col items-center gap-5">
                <figure className="w-full flex flex-col items-center">
                    <h2 className="font-island text-4xl font-bold leading-5 mt-4 mb-4">Alias: {product?.alias}</h2>
                    <img src={product?.img} alt={product?.name} className="sectionCards my-4 w-auto rounded-md flex flex-col items-center font-island text-lg"/>
                </figure>
                <aside className="flex flex-col w-full">
                    <h3 className="font-island text-3xl mx-auto font-bold -mt-4 mb-3">{product?.price}</h3>
                    <div id="carrito" className="w-full h-[40px] bg-[#EEAED3] mb-2 rounded-full font-island text-4xl text-white flex justify-center items-center shadow-[-2px_4px_15px_black]">Agregar al Carrito</div>
                    <p className="relative w-full text-wrap font-playfair leading-4 mt-5 text-lg">{product?.description}</p>
                </aside>
            </section>

            {product?.check1 && (
                <div className="flex mt-5">
                    <Check className="relative bottom-1 size-6 me-1 fill-[#EEAED3]"/>
                    <p className="text-wrap w-full font-playfair leading-4 text-md">{product.check1}</p> 
                </div>
            )}
            {product?.check2 && (
                <div className="flex mt-5">
                    <Check className="relative bottom-1 size-6 me-1 fill-[#EEAED3]"/>
                    <p className="text-wrap w-full font-playfair leading-4 text-md">{product.check2}</p> 
                </div>
            )}
        </main>
    )
}

export default Details;
