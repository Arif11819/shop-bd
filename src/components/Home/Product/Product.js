import React from 'react';
import { AiFillStar } from "react-icons/ai";
import './Product.css';

const Product = () => {
    return (
        <div className='mb-20'>
            <section>
                <h2 className='text-2xl font-bold text-start pl-10 pb-3'>Trending Now</h2>
                <div className='flex px-10 gap-6'>
                    <div>
                        <img src="https://i.ibb.co/9gSNH9j/Rectangle-375-1.png" alt="" />
                        <div className='pl-3 pt-2'>
                            <h4 className='font-bold text-start text-xl'>Womans Denim Jacket</h4>
                            <div className='flex text-sm'>
                                <p>Brand Name</p>
                                <p className='flex items-center pl-5'>4.4<AiFillStar className='ml-1'></AiFillStar></p>
                            </div>
                            <div className='text-start flex gap-3 items-center'>
                                <p className='font-bold'>Rs. 700</p>
                                <p className='text-sm offer-price'>Rs. 1000</p>
                                <p className='text-green-700 font-bold text-sm'>(30% off)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/2nNFM33/Rectangle-375-2.png" alt="" />
                        <div className='pl-3 pt-2'>
                            <h4 className='font-bold text-start text-xl'>Womans Denim Jacket</h4>
                            <div className='flex text-sm'>
                                <p>Brand Name</p>
                                <p className='flex items-center pl-5'>4.4<AiFillStar className='ml-1'></AiFillStar></p>
                            </div>
                            <div className='text-start flex gap-3 items-center'>
                                <p className='font-bold'>Rs. 700</p>
                                <p className='text-sm offer-price'>Rs. 1000</p>
                                <p className='text-green-700 font-bold text-sm'>(30% off)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/DLJSr3x/Rectangle-375-3.png" alt="" />
                        <div className='pl-3 pt-2'>
                            <h4 className='font-bold text-start text-xl'>Womans Denim Jacket</h4>
                            <div className='flex text-sm'>
                                <p>Brand Name</p>
                                <p className='flex items-center pl-5'>4.4<AiFillStar className='ml-1'></AiFillStar></p>
                            </div>
                            <div className='text-start flex gap-3 items-center'>
                                <p className='font-bold'>Rs. 700</p>
                                <p className='text-sm offer-price'>Rs. 1000</p>
                                <p className='text-green-700 font-bold text-sm'>(30% off)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/1RDTPMB/Rectangle-375-4.png" alt="" />
                        <div className='pl-3 pt-2'>
                            <h4 className='font-bold text-start text-xl'>Womans Denim Jacket</h4>
                            <div className='flex text-sm'>
                                <p>Brand Name</p>
                                <p className='flex items-center pl-5'>4.4<AiFillStar className='ml-1'></AiFillStar></p>
                            </div>
                            <div className='text-start flex gap-3 items-center'>
                                <p className='font-bold'>Rs. 700</p>
                                <p className='text-sm offer-price'>Rs. 1000</p>
                                <p className='text-green-700 font-bold text-sm'>(30% off)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-16'>
                <h2 className='text-2xl font-bold text-start pl-10 pb-3'>Deals of the Day</h2>
                <div className='flex px-10 gap-6'>
                    <div>
                        <img src="https://i.ibb.co/9gSNH9j/Rectangle-375-1.png" alt="" />
                        <div className='pt-5 flex justify-center items-center flex-col'>
                            <img className='w-[151px] h-[62px]' src="https://i.ibb.co/sQ1KCKG/Vector-4.png" alt="" />
                            <p className='text-2xl font-bold pt-6'>Best Of Styles</p>
                            <p className='text-sm font-bold pt-2'>Under Rs. 799</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/bv6zpPX/Rectangle-375-5.png" alt="" />
                        <div className='pt-5 flex justify-center items-center flex-col'>
                            <img className='w-[151px] h-[62px]' src="https://i.ibb.co/sQ1KCKG/Vector-4.png" alt="" />
                            <p className='text-2xl font-bold pt-6'>Best Of Styles</p>
                            <p className='text-sm font-bold pt-2'>Under Rs. 799</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/9ZdD1hq/Rectangle-375-6.png" alt="" />
                        <div className='pt-5 flex justify-center items-center flex-col'>
                            <img className='w-[151px] h-[62px]' src="https://i.ibb.co/sQ1KCKG/Vector-4.png" alt="" />
                            <p className='text-2xl font-bold pt-6'>Best Of Styles</p>
                            <p className='text-sm font-bold pt-2'>Under Rs. 799</p>
                        </div>
                    </div>
                </div>
            </section>
            <section></section>
        </div>
    );
};

export default Product;