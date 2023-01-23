import React from 'react';
import Header from './Header';
import About from './About';

function Intro() {
    return (
        <div className='flex flex-col bg-yellow-500'>
            <Header />
            <About />
        </div>
    )
}

export default Intro;