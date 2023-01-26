import React from 'react';

function Skills() {
    return (
        <div className='flex justify-center max-w-md md:max-w-7xl pt-24'>
            <div className='flex flex-row w-2/3'>
                <div className='flex flex-col w-auto'>
                    <div className='flex flex-col h-full justify-center pr-10'>
                            <div className='w-1 h-half bg-gradient-to-b from-black to-green-400'></div>
                            <div className='w-1 h-full bg-gradient-to-t from-black to-green-400'></div>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl sm:text-7xl font-mona font-medium text-slate-50 pb-4'>Skills</h1>
                    <ul className='list-disc pl-5'>
                        <li className='text-lg sm:text-3xl font-mona font-light text-gray-500 pb-3'>Proficient in programming languages such as JavaScript, Python, C, and C++</li>
                        <li className='text-lg sm:text-3xl font-mona font-light text-gray-500 pb-3'>Experience with JavaScript frameworks such as React, Node, and Express, as well as experience with web development using the MERN stack</li>
                        <li className='text-lg sm:text-3xl font-mona font-light text-gray-500 pb-3'>Strong understanding of data structures, algorithms and software development methodologies</li>
                        <li className='text-lg sm:text-3xl font-mona font-light text-gray-500 pb-3'>Familiar with Agile development methodologies and version control systems like Git</li>
                        <li className='text-lg sm:text-3xl font-mona font-light text-gray-500 pb-3'>Strong problem-solving and analytical skills</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;