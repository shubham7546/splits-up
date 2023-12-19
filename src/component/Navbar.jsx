import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const [glow, setGlow] = useState(false);

    useEffect(() => {
        // Trigger the glow effect
        setGlow(true);

        // Clear the glow effect after a certain duration
        const timeoutId = setTimeout(() => {
            setGlow(false);
        }, 3000); // Adjust the duration (in milliseconds) as needed

        return () => clearTimeout(timeoutId);
    }, []); // This effect runs only once after the component is mounted
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'guide'
        },
        {
            id: 3,
            link: 'problem statement'
        }

    ]

    return (
        <div className=' w-full fixed bg-black h-20 text-white flex justify-between items-center px-4'>

            <div>
                <h1 className='ml-2 text-5xl font-normal'>splits-up</h1>
            </div>

            <div className='font-rubik-doodle-shadow text-2xl'>
                <p className='tracking-widest'>Hassle-free spliting</p>
            </div>



            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => <li key={id} className='px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-105'>
                    <Link to={link === 'home' ? "/" : link} smooth duration={500} offset={-65} className={`${id === 3 ? `transition-all duration-500 ${glow ? 'glow' : ''}` : ``}`}>
                        {link}
                    </Link>
                </li>)}
            </ul>

            <div onClick={() => setNav(!nav)} className='z-10 pr-4 text-gray-500 cursor-pointer md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (

                <ul className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 py-6 text-4xl capitalize cursor-pointer'>
                            <Link to={link === 'home' ? "/" : link} smooth duration={500} onClick={() => setNav(!nav)}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}







        </div>
    )
}

export default Navbar

