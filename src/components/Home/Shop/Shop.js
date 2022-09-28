import React from 'react';
import './Shop.css';
import { BsArrowRight } from "react-icons/bs";

const Shop = () => {
    return (
        <div className='mb-20'>
            <h2 className='text-3xl font-bold text-start pl-10 pb-3'>Shop by Categories</h2>
            <div className='grid grid-cols-3 mx-10 pt-4 gap-10'>
                <div className='woman-pant w-[500px] h-[600px] rounded text-start text-white'>
                    <h4 className='pl-5 pt-5 text-lg'>Womans Pants</h4>
                    <div className='flex items-center gap-2 text-sm'>
                        <h4 className='pl-5'>Explore</h4>
                        <BsArrowRight className='mt-1'></BsArrowRight>
                    </div>
                </div>
                <div className='grid grid-flow-row gap-4 pl-6'>
                    <div className='mens-jacket w-[450px] h-[293px] rounded text-start text-white'>
                        <h4 className='pl-5 pt-5 text-lg'>Mens Jacket</h4>
                        <div className='flex items-center gap-2 text-sm'>
                            <h4 className='pl-5'>Explore</h4>
                            <BsArrowRight className='mt-1'></BsArrowRight>
                        </div>
                    </div>
                    <div className='womens-tops w-[450px] h-[292px] rounded text-start text-white'>
                        <h4 className='pl-5 pt-5 text-lg'>Womans Tops</h4>
                        <div className='flex items-center gap-2 text-sm'>
                            <h4 className='pl-5'>Explore</h4>
                            <BsArrowRight className='mt-1'></BsArrowRight>
                        </div>
                    </div>
                </div>


                <div className='grid grid-flow-row gap-4'>
                    <div className='sweater w-[450px] h-[293px] rounded text-start text-white'>
                        <h4 className='pl-5 pt-5 text-lg'>Sweater</h4>
                        <div className='flex items-center gap-2 text-sm'>
                            <h4 className='pl-5'>Explore</h4>
                            <BsArrowRight className='mt-1'></BsArrowRight>
                        </div>
                    </div>
                    <div className='w-[450px] h-[292px] grid grid-cols-2 gap-4'>
                        <div className='w-[220px] h-[292px] pants rounded text-start text-white'>
                            <h4 className='pl-5 pt-5 text-lg'>Pants</h4>
                            <div className='flex items-center gap-2 text-sm'>
                                <h4 className='pl-5'>Explore</h4>
                                <BsArrowRight className='mt-1'></BsArrowRight>
                            </div>
                        </div>
                        <div className='w-[220px] h-[292px] woman-jackets rounded text-start text-white'>
                            <h4 className='pl-5 pt-5 text-lg'>Woman Jackets</h4>
                            <div className='flex items-center gap-2 text-sm'>
                                <h4 className='pl-5'>Explore</h4>
                                <BsArrowRight className='mt-1'></BsArrowRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;