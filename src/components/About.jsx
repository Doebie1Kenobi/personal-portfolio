import React from 'react';

function About() {
    return (
        <div className='flex justify-center h-2/3 bg-black'>
            <div className='flex flex-row w-2/3'>
                <div className='flex flex-col w-auto bg-purple-500'>
                    
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-7xl font-mona font-medium text-slate-50 pb-4'>About Me</h1>
                    <p className='text-3xl font-mona font-light text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis exercitationem mollitia incidunt asperiores harum sint dolor maiores, velit iusto! At rerum facere odio ratione perspiciatis quo officiis exercitationem recusandae incidunt!</p>
                </div>
            </div>
        </div>
    )
}

export default About;