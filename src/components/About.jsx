import React from 'react';
import { useRef, useEffect, useState } from 'react';

function About() {
    const myRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState();
    console.log(myElementIsVisible);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setMyElementIsVisible(entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
        observer.observe(myRef.current);
    }, [])

    return (
        <div ref={myRef} className='flex justify-center hidden-text'>
            <div className='flex flex-row w-2/3'>
                <div className='flex flex-col pr-10'>
                    <div className='flex flex-col h-full justify-center'>
                        <div className='w-1 h-half bg-gradient-to-b from-black to-purple-400'></div>
                        <div className='w-1 h-full bg-gradient-to-t from-black to-purple-400'></div>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl sm:text-7xl font-mona font-medium text-slate-50 pb-4'>About Me</h1>
                    <p className='text-xl sm:text-3xl font-mona font-light text-gray-500'>My name is Evan Doebler and I am a recent graduate of the University of Minnesota - Duluth with a Bachelor of Science in Computer Science. I am an aspiring software developer with a passion for machine learning and artificial intelligence. My experience includes working with programming languages such as Python, JavaScript, and C/C++. As well as database paradigms such as SQL and NoSQL. I am dedicated to continuously learning and improving my skills to stay up to date with the latest industry trends.</p>
                    <p className='text-xl sm:text-3xl font-mona font-light text-gray-500 pt-5'>I am looking to join a team where I can contribute my skills and ideas to create impactful solutions. My ultimate goal is to become a full-stack developer and work on projects that can make a positive difference in people's lives.</p>
                </div>
            </div>
        </div>
    )
}

export default About;