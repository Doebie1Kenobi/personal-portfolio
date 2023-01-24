import React from 'react';
import Title from './Title';

function Contact() {
    return (
        <div className='flex justify-center h-2/3 bg-black'>
            <div className='flex flex-row w-2/3'>
                <div className='flex flex-col w-auto bg-orange-500'>
                    
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-7xl font-mona font-medium text-slate-50'>Contact Me</h1>
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
                            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md bg-purple-500 text-slate-50'>Contact Me</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;