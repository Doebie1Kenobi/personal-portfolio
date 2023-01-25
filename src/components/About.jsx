import React from 'react';

function About() {
    return (
        <div className='flex justify-center max-w-md mx-auto md:max-w-7xl'>
            <div className='flex flex-row w-2/3'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl sm:text-7xl font-mona font-medium text-slate-50 pb-4'>About Me</h1>
                    <p className='text-xl sm:text-3xl font-mona font-light text-gray-500'>My name is Evan Doebler and I am a recent graduate of the University of Minnesota - Duluth with a bachelors of science in Computer Science. I am an aspiring software developer with a passion for machine learning and artificial intelligence. My experience includes working with programming languages such as Python, JavaScript, and C/C++. As well as database paradigms such as SQL and NoSQL. I am dedicated to continuously learning and improving my skills to stay up to date with the latest industry trends.</p>
                    <p className='text-xl sm:text-3xl font-mona font-light text-gray-500 pt-5'>I am looking to join a dynamic team where I can contribute my skills and ideas to create impactful solutions. My ultimate goal is to become a full-stack developer and work on projects that can make a positive difference in people's lives.</p>
                </div>
            </div>
        </div>
    )
}

export default About;