import React, { useState, useEffect } from 'react';
import ProblemStatement from './ProblemStatement';
import { Link } from 'react-router-dom';

const FadingComponent = () => {
    const [visible, setVisible] = useState(true);


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

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(false);
        }, 3000); // Adjust the duration (in milliseconds) as needed

        return () => clearTimeout(timeoutId);
    }, []); // This effect runs only once after the component is mounted

    return (
        <div className={`top-20 ${visible ? 'block' : 'hidden'} absolute  bg-black text-white p-8 h-full w-full flex flex-col items-center justify-center font-inter`}>
            {/* Your component content */}
            Kindly refer to problem statement first to understand applicable scenarios

            <Link to='/Problem Statement' smooth duration={500} offset={-65} className={`transition-all duration-500 ${glow ? 'glow' : ''} mt-5 sm:hidden rounded-md p-2`}>
                Problem Statement
            </Link>
        </div>
    );
};

export default FadingComponent;
