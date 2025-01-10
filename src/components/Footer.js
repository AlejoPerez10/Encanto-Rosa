import React from 'react'
import Wpp from "@/assets/icons/wpp.svg"
import Insta from "@/assets/icons/insta.svg"
import Star from "@/assets/icons/star.svg"

const Footer = () => {
    return (
        <footer className="relative w-full h-[100px] bg-[#EEAED3] flex justify-between items-center mt-[24px]">
            <Star className='absolute size-[6px] top-[11px] left-[12px]'/>
            <Star className='absolute size-[6px] top-1 left-32'/>
            <Star className='absolute size-[6px] top-5 left-[185px]'/>
            <Star className='absolute size-[6px] top-3 right-20'/>
            <Star className='absolute size-[6px] top-4 right-5'/>
            <Star className='absolute size-[6px] top-[89px] left-1'/>
            <Star className='absolute size-[6px] top-[80px] left-[65px]'/>
            <Star className='absolute size-[6px] top-[70px] left-[100px]'/>
            <Star className='absolute size-[6px] top-[85px] left-[140px]'/>
            <Star className='absolute size-[6px] top-[75px] right-32'/>
            <Star className='absolute size-[6px] top-[58px] right-10'/>

            <img src="/images/logotipo.webp" alt="logotipo de Encanto Rosa" className='w-44 z-50'/>
            <img className='absolute left-[-12px] top-2 w-36' src="/images/nube2.webp" alt="nube"/>
            <img className='absolute right-0 top-[68px] w-36' src="/images/nubeFooter.webp" alt="nube"/>
            <aside className="relative flex h-[95px] gap-1">
                <a className="absolute top-3 right-[80px] size-10 flex items-center justify-end" href="https://wa.me/3103893622"><Wpp className="size-10" style={{strokeWidth:2}}/></a>
                <a className="absolute top-3 right-[35px] size-10 flex items-center justify-start" href="https://www.instagram.com/encantorosaa"><Insta className="size-10" style={{strokeWidth:2}}/></a>
            </aside>
        </footer>
    );
};

export default Footer;
