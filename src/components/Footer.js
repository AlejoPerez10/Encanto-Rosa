import React, { useState, useEffect } from 'react';
import Wpp from "@/assets/icons/wpp.svg";
import Insta from "@/assets/icons/insta.svg";
import Star from "@/assets/icons/star.svg";

const starsSmall = [
    { top: '11px', left: '12px' },
    { top: '4px', left: '128px' },
    { top: '15px', left: '185px' },
    { top: '30px', left: '220px' },
    { top: '89px', left: '4px' },
    { top: '80px', left: '65px' },
    { top: '70px', left: '100px' },
    { top: '85px', left: '140px' },
    { top: '7px', right: '5px' },
    { top: '12px', right: '76px' },
    { top: '55px', right: '20px' },
    { top: '65px', right: '115px' },
    { top: '75px', right: '170px' },
];

const starsMedium = [
    { top: '11px', left: '12px' },
    { top: '4px', left: '140px' },
    { top: '20px', left: '305px' },
    { top: '10px', left: '390px' },
    { top: '89px', left: '30px' },
    { top: '75px', left: '150px' },
    { top: '85px', left: '230px' },
    { top: '65px', left: '350px' },
    { top: '16px', right: '15px' },
    { top: '12px', right: '80px' },
    { top: '20px', right: '240px' },
    { top: '30px', right: '320px' },
    { top: '80px', right: '50px' },
    { top: '70px', right: '270px' },
    { top: '80px', right: '370px' },
];

const starsLarge = [
    { top: '20px', left: '30px' },
    { top: '10px', left: '128px' },
    { top: '15px', left: '332px' },
    { top: '20px', left: '425px' },
    { top: '40px', left: '550px' },
    { top: '20px', left: '670px' },
    { top: '20px', left: '800px' },
    { top: '130px', left: '15px' },
    { top: '90px', left: '75px' },
    { top: '115px', left: '150px' },
    { top: '130px', left: '300px' },
    { top: '100px', left: '500px' },
    { top: '115px', left: '620px' },
    { top: '85px', left: '740px' },
    { top: '15px', right: '20px' },
    { top: '40px', right: '120px' },
    { top: '10px', right: '220px' },
    { top: '70px', right: '325px' },
    { top: '20px', right: '450px' },
    { top: '50px', right: '580px' },
    { top: '40px', right: '730px' },
    { top: '90px', right: '50px' },
    { top: '120px', right: '160px' },
    { top: '120px', right: '250px' },
    { top: '110px', right: '500px' },
    { top: '110px', right: '650px' },
    { top: '120px', right: '790px' },
];

const Footer = () => {
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
        <footer className="relative w-full h-[100px] lg:h-[150px] md:px-16 lg:px-52 bg-[#EEAED3] flex justify-between items-center mt-[24px]">
            {stars.map((star, index) => (
                <Star
                    key={index}
                    className="absolute size-[6px]"
                    style={{ ...star }}
                />
            ))}



            <img src="/images/Logotipo.webp" alt="logotipo de Encanto Rosa" className="w-44 md:w-[220px] lg:w-[300px] z-40" />

            <img className='absolute left-[-12px] md:left-0 lg:left-24 top-2 w-36 md:w-56 lg:w-96' src="/images/nube2.webp" alt="nube"/>
            <img className="absolute right-0 md:right-16 lg:right-48 bottom-0 w-36 md:w-48 lg:w-72" src="/images/nubeFooter.webp" alt="nube" />

            <aside className="relative flex h-[95px] gap-1">
                <a className="absolute top-3 md:top-1 lg:top-[-20px] right-[80px] md:right-[95px] lg:right-32 size-10 md:size-14 lg:size-20 lg:w-20 flex items-center justify-end" href="https://wa.me/3103893622">
                    <Wpp className="size-10 md:size-16 lg:size-20" style={{ strokeWidth: 2 }} />
                </a>
                <a className="absolute top-3 md:top-1 lg:top-[-20px] right-[35px] md:right-9 size-10 md:size-14 lg:size-20 flex items-center justify-start" href="https://www.instagram.com/encantorosaa">
                    <Insta className="size-10 md:size-14 lg:size-20" style={{ strokeWidth: 2 }} />
                </a>
            </aside>
        </footer>
    );
};

export default Footer;
