import React from 'react'
import Search from '@/assets/icons/search.svg'
import Menu from '@/assets/icons/menu.svg'
import X from '@/assets/icons/x.svg'
import Right from '@/assets/icons/right.svg'

const Header = () => {
    const openMenu = () => {
        const aside = document.getElementById('menu');
        const div = document.getElementById('divDetras');
        if (aside?.classList.contains('hidden')) {
            aside?.classList.remove('hidden');
            div?.classList.remove('hidden');
        } else {
            aside?.classList.add('hidden');
            div?.classList.add('hidden');
        }
    };

    const closeMenu = () => {
        const aside = document.getElementById('menu');
        const div = document.getElementById('divDetras');
        aside?.classList.add('hidden');
        div?.classList.add('hidden');
    };

    const scrollDown = () => {
        const nav = document.getElementById('navToScroll');
        nav?.scrollBy({
            top: nav.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <header className='fixed w-full h-[93px] bg-[#EEAED3] flex items-center justify-between z-50 px-1'>
            <img src="/images/Logo.webp" alt="logo de encanto rosa" className="w-[93px]" />
            <div className="relative">
                <input
                    id="search"
                    type="search"
                    className="w-[180px] h-[40px] rounded-full pe-2 ps-11 font-island text-[#EEAED3] text-4xl placeholder:text-[#EEAED3] focus:outline-none appearance-none"
                    placeholder="Buscar..."
                />
                <Search className="absolute left-2 top-[5px]" style={{strokeWidth:3}} />
            </div>
            <Menu id="menuIcon" style={{strokeWidth:3}} onClick={openMenu} />

            <div id="divDetras" className="hidden" onClick={closeMenu}></div>
            <aside id="menu" className="hidden fixed h-screen w-auto right-0 top-0 bg-[#EEAED3] z-50 shadow-[-30px_0_60px_black]">
                <nav>
                    <ul id="navToScroll" className="p-3 list-none font-island text-3xl text-white max-h-[calc(100vh-50px)] overflow-auto overflow-x-hidden">
                        <div className="flex">
                            <h1 className="relative top-3 text-5xl">Productos</h1>
                            <X id="x" className="relative left-2 mt-[10px] mb-5 ms-auto size-12" style={{strokeWidth:3}} onClick={closeMenu} />
                        </div>
                        <li>Bases</li>
                        <li>Correctores</li>
                        <li>Polvos</li>
                        <li>Rubores</li>
                        <li>Iluminadores</li>
                        <li>Sombras</li>
                        <li>Delineadores</li>
                        <li>Labiales</li>
                        <li>Brillos</li>
                        <li>Fijadores</li>
                        <li>Brochas</li>
                        <li>Aceites</li>
                        <li>Kits</li>
                        <li>Pestañinas</li>
                        <li>Brochas</li>
                        <li>Aceites</li>
                        <li>Kits</li>
                        <li>Pestañinas</li>
                        <div id="bottomIcon" className="absolute bottom-0 right-0 w-full h-[50px]" onClick={scrollDown}>
                            <Right className="relative mx-auto top-3 rotate-90" style={{ strokeWidth:5}} />
                        </div>
                    </ul>
                </nav>
            </aside>
        </header>
    );
}

export default Header;