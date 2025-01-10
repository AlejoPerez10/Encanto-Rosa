import React, {useEffect} from 'react'
import Search from '@/assets/icons/search.svg'
import Menu from '@/assets/icons/menu.svg'
import X from '@/assets/icons/x.svg'
import Insta from '@/assets/icons/insta.svg'
import Wpp from '@/assets/icons/wpp.svg'
import Face from '@/assets/icons/face.svg'
import Tik from '@/assets/icons/tik.svg'
import Star from '@/assets/icons/star.svg'

const Header = () => {

    const openMenu = () => {
    const aside = document.getElementById('menu');
    const div = document.getElementById('divDetras');
    aside?.classList.remove('hiddenn');
    aside?.classList.add('visiblee');
    div?.classList.remove('hiddenn');
    div?.classList.add('visiblee');
};

const closeMenu = () => {
    const aside = document.getElementById('menu');
    const div = document.getElementById('divDetras');
    aside?.classList.remove('visiblee');
    aside?.classList.add('hiddenn');
    div?.classList.remove('visiblee');
    div?.classList.add('hiddenn');
};


    const nameSidebar = (name) => {
        const input = document.getElementById('search')
        input.value = name;
        closeMenu();
    };

    useEffect(() => {
        let lastScrollTop = 0;
        const header = document.getElementById('header');
    
        const handleScroll = function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && window.scrollY > 45) {
                header.style.top = '-93px';
            } else {
                header.style.top = '0';
            }
            lastScrollTop = scrollTop;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll); // Limpieza
    }, []);
    

    return (
        <header id='header' className='fixed w-full h-[93px] bg-[#EEAED3] flex items-center justify-between z-50 px-1 transition-all duration-[400ms]'>
            <Star className='absolute size-[6px] top-3 left-2'/>
            <Star className='absolute size-[6px] top-1 left-14'/>
            <Star className='absolute size-[6px] top-4 left-[105px]'/>
            <Star className='absolute size-[6px] top-3 left-[245px]'/>
            <Star className='absolute size-[6px] top-1 left-[295px]'/>
            <Star className='absolute size-[6px] top-10 left-[312.5px]'/>
            <Star className='absolute size-[6px] top-2 left-[360px]'/>
            <Star className='absolute size-[6px] top-[82px] left-4'/>
            <Star className='absolute size-[6px] top-[70px] left-[85px]'/>
            <Star className='absolute size-[6px] top-[75px] left-[145px]'/>
            <Star className='absolute size-[6px] top-[80px] left-[230px]'/>
            <a href="/"><img src="/images/Logo.webp" alt="logo de encanto rosa" className="w-[93px]" /></a>
            <img className='absolute left-28 top-2 w-36' src="/images/nube.webp" alt="nube"/>
            <img className='absolute left-64 top-[68px] w-36' src="/images/nube2.webp" alt="nube"/>
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

            <div id="divDetras" className="hiddenn transition-opacity duration-[400ms] ease-linear" onClick={closeMenu}></div>
            <aside id="menu" className="hiddenn transition-all duration-[400ms] fixed h-screen w-auto right-0 top-0 bg-[#EEAED3] z-50 shadow-[-30px_0_60px_black]">
                <nav className='transition-all duration-700'>
                    <ul id="navToScroll" className="flex flex-col items-center p-3 list-none font-island text-3xl text-white max-h-[calc(100vh-100px)] overflow-auto overflow-x-hidden">
                        <div className="flex">
                            <h1 className="relative top-3 text-5xl">Productos</h1>
                            <X id="x" className="relative left-2 mt-[10px] mb-5 ms-auto size-12" style={{strokeWidth:3}} onClick={closeMenu} />
                        </div>
                        <li onClick={() => nameSidebar('rubor')}>Rubores</li>
                        <li onClick={() => nameSidebar('polvo')}>Polvos</li>
                        <li onClick={() => nameSidebar('base')}>Bases</li>
                        <li onClick={() => nameSidebar('corrector')}>Correctores</li>
                        <li onClick={() => nameSidebar('gel')}>Gel</li>
                        <li onClick={() => nameSidebar('lápiz')}>Lápices</li>
                        <li onClick={() => nameSidebar('kit')}>Kits</li>
                        <li onClick={() => nameSidebar('fijador')}>Fijadores</li>
                        <li onClick={() => nameSidebar('serum')}>Serum</li>
                        <div className='absolute bottom-0 flex justify-center gap-3 w-full h-32 p-5 bg-[#9b005a4a] '>
                            <a className='size-10' href="/"><Face className='w-[36px] m-auto'style={{strokeWidth:2}}/></a>
                            <a className='size-10' href="https://www.instagram.com/encantorosaa"><Insta className='w-10 m-auto' style={{strokeWidth:2}}/></a>
                            <a className='size-10' href="https://wa.me/3103893622"><Wpp className='w-[38px] m-auto' style={{strokeWidth:2}}/></a>
                            <a className='size-10' href="/"><Tik className='w-[38px] m-auto' style={{strokeWidth:2}}/></a>
                        </div>
                    </ul>
                </nav>
            </aside>
        </header>
    );
}

export default Header;