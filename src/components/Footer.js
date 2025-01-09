import React from 'react'
import Wpp from "@/assets/icons/wpp.svg"
import Insta from "@/assets/icons/insta.svg"

const Footer = () => {
    return (
        <footer className="w-full h-[100px] bg-[#EEAED3] flex justify-around items-center mt-[24px]">
            <h4 className="font-island text-white ps-[18px] text-5xl text-nowrap">Ruby Jaramillo</h4>
            <aside className="flex gap-1">
                <a className="size-10 flex items-center justify-end" href="https://wa.me/3103893622"><Wpp className="size-10" style={{strokeWidth:2}}/></a>
                <a className="size-10 flex items-center justify-start" href="https://www.instagram.com/encantorosaa"><Insta className="size-10" style={{strokeWidth:2}}/></a>
            </aside>
        </footer>
    );
};

export default Footer;
