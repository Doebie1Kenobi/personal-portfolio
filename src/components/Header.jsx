import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';

function Header() {
    
    return (
        <div className='flex justify-around pt-2 pb-24'>
            <div className='text-1xl font-mona text-slate-50'>Evan Doebler</div>
            <div className='text-1xl font-mona text-slate-50'>Software Engineer & Data Scientist</div>
        </div>
    )
}

export default Header;