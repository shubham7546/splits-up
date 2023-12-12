
import React from 'react'
import { IoIosDocument } from "react-icons/io";
import { GiDeadEye } from "react-icons/gi";

import { Link } from 'react-router-dom';

function DocLinks() {

    const links = [
        {
            id: 1,
            child: (
                <>
                    problem Statement <GiDeadEye size={30} />
                </>
            ),
            link: '/ProblemStatement',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                    App Guide <IoIosDocument size={30} />
                </>
            ),
            link: '/guide',
            style: 'rounded-br-md',

        },
    ];


    return (

        <div className=' lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, link, style, child }) => (
                    <li
                        key={id}
                        className={`flex items-center justify-between w-40 px-4 h-14 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                        <Link to={`${link}`} className='flex items-center justify-between w-full text-white'>
                            {child}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DocLinks