import React from 'react';
import { useRef, useState, useEffect } from 'react';
import software_projects from '../data/software_projects';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
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
        <div ref={myRef} className='flex justify-center hidden-text pt-24'>
            <div className='flex flex-row w-4/5 sm:w-2/3'>
                <div className='flex flex-col w-auto'>
                    <div className='flex flex-col h-full justify-center pr-10'>
                        <div className='w-1 h-half bg-gradient-to-b from-black to-orange-500'></div>
                        <div className='w-1 h-full bg-gradient-to-t from-black to-orange-500'></div>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl sm:text-7xl font-mona font-medium text-slate-50 pb-4'>Featured Projects</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {software_projects.map(project => (
                            <PortfolioItem
                                imgURL= {project.imgURL}
                                title = {project.title}
                                stack = {project.stack}
                                link = {project.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;