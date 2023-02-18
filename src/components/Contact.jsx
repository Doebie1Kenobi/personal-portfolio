import React from 'react';
import { useRef, useState, useEffect } from 'react';
import Icon from './Icon';
import Title from './Title';
import { MdOutlineContactMail } from "react-icons/md";

function Contact() {
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
        <div ref={myRef} className='flex hidden-text justify-center pt-24'>
            <div className='flex flex-row w-4/5 sm:w-2/3'>
                <div className='flex flex-col w-auto'>
                    <div className='flex flex-col h-full justify-center items-center pr-10'>
                        <div className='w-1 h-half bg-gradient-to-b from-black to-blue-400'></div>
                        <div className='w-1 h-half bg-gradient-to-t from-black to-blue-400'></div>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl sm:text-7xl font-mona font-medium text-slate-50'>Contact Me</h1>
                    <form 
                        action='https://getform.io/f/6eadcb82-495b-4f95-8336-54313cc2c894'
                        method='POST'
                        className='flex flex-col w-full'
                    >
                        <input 
                            type='text'
                            name='name'
                            placeholder='Name'
                            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none text-slate-50 font-mona'
                        />
                        <input 
                            type='text'
                            name='email'
                            placeholder='Email'
                            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none text-slate-50 font-mona'
                        />
                        <textarea
                            name='message'
                            placeholder='Message'
                            rows='10'
                            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none text-slate-50 font-mona'
                        />
                        <button
                            name='button'
                            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md bg-blue-500 hover:bg-blue-400 text-slate-50'>Contact Me</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;