import React from 'react';
import Icon from './Icon';
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub, BsFacebook } from "react-icons/bs";

function SideBarGraphic({color, icon}) {
    return (

            <div className='flex flex-col h-full justify-center'>
                <div className='w-1 h-half bg-orange-600'></div>
                <div className='w-1 h-full bg-orange-600'></div>
            </div>
        
    )
}

export default SideBarGraphic;