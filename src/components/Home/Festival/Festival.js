import React from 'react';
import './Festival.css';

const Festival = () => {
    return (
        <div className='festival-img h-[800px] mb-20 pt-64'>
            <div className='flex flex-col justify-center items-center gap-6 text-white'>
                <h3 className='text-5xl w-[530px] h-[88px] font-semibold'>FOREVER 21</h3>
                <h3 className='text-3xl'>Big Fashion Festival</h3>
                <h3 className='text-3xl'>70% - 80% off</h3>
                <button className='pl-6 pr-6 border rounded-md border-white'>Explore</button>
            </div>
        </div>
    );
};

export default Festival;