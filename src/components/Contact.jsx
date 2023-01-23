import React from 'react';
import Title from './Title';

function Contact() {
    return (
        <div className='flex flex-col items-center mx-auto bg-slate-500'>
            <h1 className='text-5xl justify-center items-center pt-5'>Contact Me</h1>
            <div className='flex justify-center items-center'>
                <form 
                    action='https://getform.io/f/6eadcb82-495b-4f95-8336-54313cc2c894'
                    method='POST'
                    className='flex flex-col w-full md:w-7/12'
                >
                    <input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                    <input 
                        type='text'
                        name='email'
                        placeholder='Email'
                        className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                    <textarea
                        name='message'
                        placeholder='Message'
                        rows='10'
                        className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                    <button
                        name='button'
                        className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white 
                        bg-gradient-to-r from-amber-400 to-rose-900 drop-shadow-md'
                        >Contact Me</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;