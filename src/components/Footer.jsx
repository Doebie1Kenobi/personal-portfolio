import React from 'react';
import Icon from './Icon';
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub, BsFacebook } from "react-icons/bs";

function Footer() {
    return (
        <div className='py-5 text-center'>
            <div className='flex flex-row items-center justify-center gap-5 pb-5'>
                <a href='https://www.instagram.com/evandoebler/' target='_blank' rel='noopener noreferrer'><Icon icon={<BsInstagram size="28" />}/></a>
                <a href='https://www.linkedin.com/in/evan-doebler-680173234/' target='_blank' rel='noopener noreferrer'><Icon icon={<BsLinkedin size="28" />}/></a>
                <a href='https://twitter.com/Doebie1Kenobi' target='_blank' rel='noopener noreferrer'><Icon icon={<BsTwitter size="28" />}/></a>
                <a href='https://www.facebook.com/evan.doebler.5' target='_blank' rel='noopener noreferrer'><Icon icon={<BsFacebook size="28" />}/></a>
                <a href='https://github.umn.edu/doebl028' target='_blank' rel='noopener noreferrer'><Icon icon={<BsGithub size="28" />}/></a>
            </div>
            <p className='text-sm mt-2 opacity-50'>
                &copy; {new Date().getFullYear()} Evan Doebler. All rights reserved. 
            </p>
        </div>
    )
}

export default Footer;