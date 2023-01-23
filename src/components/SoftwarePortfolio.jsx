import React from 'react';
import software_projects from '../data/software_projects';
import SoftwarePortfolioItem from './SoftwarePortfolioItem';

function SoftwarePortfolio() {
    return (
        <div className='flex justify-center items-center flex-col h-3/4 bg-red-500'>
            <h1 className='text-5xl'>Featured Projects</h1>
            <p className='text-sm max-w-xl mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis exercitationem mollitia incidunt asperiores harum sint dolor maiores, velit iusto! At rerum facere odio ratione perspiciatis quo officiis exercitationem recusandae incidunt!</p>
        </div>
    )
}

export default SoftwarePortfolio;