import React, { useState, useEffect } from 'react'
import Search from '@/assets/icons/search.svg'
import Menu from '@/assets/icons/menu.svg'
import X from '@/assets/icons/x.svg'
import Insta from '@/assets/icons/insta.svg'
import Wpp from '@/assets/icons/wpp.svg'
import Face from '@/assets/icons/face.svg'
import Tik from '@/assets/icons/tik.svg'
import Star from '@/assets/icons/star.svg'

const starsSmall = [
    { top: '12px', left: '8px' },
    { top: '4px', left: '56px' },
    { top: '16px', left: '105px' },
    { top: '12px', right: '128px' },
    { top: '4px', right: '80px' },
    { top: '40px', right: '56px' },
    { top: '8px', right: '8px' },
    { top: '82px', left: '16px' },
    { top: '70px', left: '85px' },
    { top: '75px', left: '145px' },
    { top: '80px', right: '144px' },
];

const starsMedium = [
    { top: '12px', left: '8px' },
    { top: '4px', left: '56px' },
    { top: '16px', left: '130px' },
    { top: '6px', left: '350px' },
    { top: '82px', left: '16px' },
    { top: '70px', left: '85px' },
    { top: '75px', left: '145px' },
    { top: '60px', left: '205px' },
    { top: '80px', left: '300px' },
    { top: '75px', left: '400px' },
    { top: '4px', right: '80px' },
    { top: '12px', right: '128px' },
    { top: '25px', right: '190px' },
    { top: '15px', right: '290px' },
    { top: '8px', right: '8px' },
    { top: '70px', right: '35px' },
    { top: '55px', right: '100px' },
    { top: '65px', right: '230px' },
];

const starsLarge = [
    { top: '12px', left: '50px' },
    { top: '20px', left: '150px' },
    { top: '8px', left: '250px' },
    { top: '25px', left: '350px' },
    { top: '15px', left: '420px' },
    { top: '15px', left: '650px' },
    { top: '23px', left: '800px' },
    { top: '90px', left: '40px' },
    { top: '70px', left: '110px' },
    { top: '75px', left: '180px' },
    { top: '107px', left: '275px' },
    { top: '80px', left: '400px' },
    { top: '100px', left: '500px' },
    { top: '65px', left: '600px' },
    { top: '90px', left: '720px' },
    { top: '30px', right: '30px' },
    { top: '15px', right: '120px' },
    { top: '12px', right: '220px' },
    { top: '25px', right: '340px' },
    { top: '15px', right: '460px' },
    { top: '40px', right: '580px' },
    { top: '10px', right: '700px' },
    { top: '100px', right: '60px' },
    { top: '60px', right: '160px' },
    { top: '90px', right: '230px' },
    { top: '65px', right: '390px' },
    { top: '80px', right: '520px' },
    { top: '105px', right: '630px' },
    { top: '95px', right: '790px' },
];

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
                header.style.top = '-120px';
            } else {
                header.style.top = '0';
            }
            lastScrollTop = scrollTop;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [screenSize, setScreenSize] = useState('small');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 500) {
                setScreenSize('small');
            } else if (window.innerWidth > 1024) {
                setScreenSize('large');
            } else {
                setScreenSize('medium');
            }
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const stars = screenSize === 'small' ? starsSmall : screenSize === 'large' ? starsLarge : starsMedium;


    return (
        <header id='header' className='fixed w-full h-[93px] lg:h-[120px] md:px-16 lg:px-52 bg-[#EEAED3] flex items-center justify-between z-50 px-1 transition-all duration-[400ms]'>
            {stars.map((star, index) => (
                <Star
                    key={index}
                    className='absolute size-[6px]'
                    style={{...star}}
                />
            ))}
            <a href="/"><img src="/images/Logo.webp" alt="logo de encanto rosa" className="w-[93px] lg:w-[120px]" /></a>
            <img className='absolute w-36 md:w-44 lg:w-60 left-28 md:left-44 lg:left-96 top-2' src="/images/nube.webp" alt="nube"/>
            <img className='absolute w-36 md:w-52 lg:w-72 right-[-30px] md:right-12 lg:right-72 top-[68px] md:top-[57px]' src="/images/nube2.webp" alt="nube"/>
            <div className="relative">
                <input
                    id="search"
                    type="search"
                    className="w-[180px] md:w-[270px] lg:w-[420px] h-[40px] lg:h-[50px] rounded-full pe-2 ps-11 md:ps-16 font-island text-[#EEAED3] text-4xl md:text-5xl placeholder:text-[#EEAED3] focus:outline-none appearance-none"
                    placeholder="Buscar..."
                />
                <Search className="absolute left-2 top-[5px] lg:size-10" style={{strokeWidth:3}} />
            </div>

            <div className='hidden lg:block absolute right-52 w-20 h-16 cursor-pointer' onClick={openMenu}> </div>
            <Menu id="menuIcon" className='lg:size-16 lg:m-3' style={{strokeWidth:3}} onClick={openMenu}/>

            <div id="divDetras" className="hiddenn transition-opacity duration-[400ms] ease-linear" onClick={closeMenu}></div>
            <aside id="menu" className="hiddenn transition-all duration-[400ms] fixed h-screen w-auto right-0 top-0 bg-[#EEAED3] z-50 shadow-[-30px_0_60px_black]">
                <nav className='transition-all duration-700'>
                    <ul id="navToScroll" className="flex flex-col items-center p-3 md:pe-16 lg:pe-52 list-none font-island text-3xl lg:text-5xl text-white max-h-dvh overflow-auto overflow-x-hidden">
                        
                        <div className="flex">
                            <h1 className="relative top-3 text-5xl lg:text-8xl lg:ps-3 lg:pe-8 lg:mb-5">Productos</h1>
                            <X id="x" className="relative left-2 lg:left-0 mt-[10px] lg:mt-6 mb-5 ms-auto size-12 lg:size-16 cursor-pointer" style={{strokeWidth:3}} onClick={closeMenu} />
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

                        <div className='absolute right-0 bottom-0 md:top-0 flex md:flex-col justify-center items-start md:items-center gap-3 md:gap-10 lg:gap-16 w-full md:w-14 lg:w-52 h-44 md:h-full p-2 md:p-5 bg-[#9b005a4a] '>
                            <a className='size-10' href="/"><Face className='w-8 md:w-9 lg:w-[36px] m-auto'style={{strokeWidth:2}}/></a>
                            <a className='size-10' href="https://www.instagram.com/encantorosaa"><Insta className='w-[34px] md:w-9 lg:w-10 m-auto' style={{strokeWidth:2}}/></a>
                            <a className='size-10' href="https://wa.me/3103893622"><Wpp className='w-8 md:w-[34px] lg:w-[38px] m-auto' style={{strokeWidth:2}}/></a>
                            <a className='size-10' href="/"><Tik className='w-8 md-w-9 lg:w-[38px] m-auto' style={{strokeWidth:2}}/></a>
                        </div>

                        <img src="/images/Logo.webp" alt="logo de encanto rosa" className="hidden md:block md:w-40 lg:w-52" />

                    </ul>
                </nav>
            </aside>
        </header>
    );
}

export default Header;