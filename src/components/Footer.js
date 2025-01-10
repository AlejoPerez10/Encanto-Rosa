import React from 'react'
import Wpp from "@/assets/icons/wpp.svg"
import Insta from "@/assets/icons/insta.svg"
import Star from "@/assets/icons/star.svg"

const Footer = () => {
    return (
        <footer className="relative w-full h-[100px] bg-[#EEAED3] flex justify-between items-center mt-[24px]">
            <Star className='absolute size-[6px] top-[11px] left-[12px]'/>
            <Star className='absolute size-[6px] top-1 left-32'/>
            <Star className='absolute size-[6px] top-5 left-56'/>
            <Star className='absolute size-[6px] top-3 left-[294.5px]'/>
            <Star className='absolute size-[6px] top-4 left-[355px]'/>
            <Star className='absolute size-[6px] top-[89px] left-1'/>
            <Star className='absolute size-[6px] top-[53px] left-12'/>
            <Star className='absolute size-[6px] top-[83px] left-[100px]'/>
            <Star className='absolute size-[6px] top-[70px] left-[171px]'/>
            <Star className='absolute size-[6px] top-[75px] left-[235px]'/>
            <Star className='absolute size-[6px] top-[58px] left-[335px]'/>

            <img src="/images/Logotipo.webp" alt="logotipo de Encanto Rosa" className='w-56 z-50'/>
            <img className='absolute left-[-12px] top-2 w-36' src="/images/nube2.webp" alt="nube"/>
            <img className='absolute left-56 top-[68px] w-36' src="/images/nubeFooter.webp" alt="nube"/>
            <aside className="flex h-[95px] relative gap-1">
                <a className="absolute top-3 right-[80px] size-10 flex items-center justify-end" href="https://wa.me/3103893622"><Wpp className="size-10" style={{strokeWidth:2}}/></a>
                <a className="absolute top-3 right-[35px] size-10 flex items-center justify-start" href="https://www.instagram.com/encantorosaa"><Insta className="size-10" style={{strokeWidth:2}}/></a>
            </aside>
        </footer>
    );
};

export default Footer;
