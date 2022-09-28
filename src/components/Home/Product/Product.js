import React from 'react';
import { AiFillStar } from "react-icons/ai";
import './Product.css';

const Product = () => {
    return (
        <div className='mb-20'>
            <section>
                <h2 className='text-3xl font-bold text-start pl-10 pb-3'>Trending Now</h2>
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
            <section className='mt-24'>
                <h2 className='text-3xl font-bold text-start pl-10 pb-3'>Deals of the Day</h2>
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
            <section>
                <h2 className='text-3xl font-bold text-start pl-10 pb-6 mt-24'>Trending Offers</h2>
                <div class="carousel w-full">
                    <div id="slide1" class="carousel-item relative w-full">
                        <div className='flex'>
                            <div className='h-[241px] w-[250px] pt-16 pr-8'>
                                <img src="https://i.ibb.co/sVr6YVh/Rectangle-13-1.png" alt="" />
                            </div>
                            <div className='w-[412px] h-[430px] first-slide-div flex flex-col justify-center items-center gap-6'>
                                <img className='w-[275px] h-[72px]' src="https://i.ibb.co/sQ1KCKG/Vector-4.png" alt="" />
                                <h3 className='text-3xl font-semibold'>Min 60% off</h3>
                                <button className='pl-6 pr-6 border rounded-md border-black'>Explore</button>

                            </div>
                            <div className='w-[442px] h-[487px]'>
                                <img src="https://i.ibb.co/bNcgKrX/Rectangle-13.png" alt="" />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-6 ml-12 mt-12 first-slide-div w-[368px] h-[341px]'>
                                <h3 className='text-3xl font-semibold'>FOREVER 21</h3>
                                <h3 className='text-3xl font-semibold'>Min 50% off</h3>
                                <button className='pl-6 pr-6 border rounded-md border-black'>Explore</button>
                            </div>

                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <div className='flex'>
                            <div className='h-[241px] w-[250px] pt-16 pr-8'>
                                <img src="https://i.ibb.co/sVr6YVh/Rectangle-13-1.png" alt="" />
                            </div>
                            <div className='w-[412px] h-[430px] first-slide-div flex flex-col justify-center items-center gap-6'>
                                <img className='w-[275px] h-[72px]' src="https://i.ibb.co/sQ1KCKG/Vector-4.png" alt="" />
                                <h3 className='text-3xl font-semibold'>Min 60% off</h3>
                                <button className='pl-6 pr-6 border rounded-md border-black'>Explore</button>

                            </div>
                            <div className='w-[442px] h-[487px]'>
                                <img src="https://i.ibb.co/bNcgKrX/Rectangle-13.png" alt="" />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-6 ml-12 mt-12 first-slide-div w-[368px] h-[341px]'>
                                <h3 className='text-3xl font-semibold'>FOREVER 21</h3>
                                <h3 className='text-3xl font-semibold'>Min 50% off</h3>
                                <button className='pl-6 pr-6 border rounded-md border-black'>Explore</button>
                            </div>

                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <div className='flex'>
                            <div className='h-[241px] w-[250px] pt-16 pr-8'>
                                <img src="https://i.ibb.co/sVr6YVh/Rectangle-13-1.png" alt="" />
                            </div>
                            <div className='w-[412px] h-[430px] first-slide-div flex flex-col justify-center items-center gap-6'>
                                <img className='w-[275px] h-[72px]' src="https://i.ibb.co/sQ1KCKG/Vector-4.png" alt="" />
                                <h3 className='text-3xl font-semibold'>Min 60% off</h3>
                                <button className='pl-6 pr-6 border rounded-md border-black'>Explore</button>

                            </div>
                            <div className='w-[442px] h-[487px]'>
                                <img src="https://i.ibb.co/bNcgKrX/Rectangle-13.png" alt="" />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-6 ml-12 mt-12 first-slide-div w-[368px] h-[341px]'>
                                <h3 className='text-3xl font-semibold'>FOREVER 21</h3>
                                <h3 className='text-3xl font-semibold'>Min 50% off</h3>
                                <button className='pl-6 pr-6 border rounded-md border-black'>Explore</button>
                            </div>

                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" class="carousel-item relative w-full">
                        <div className='flex'>
                            <div className='h-[241px] w-[250px] pt-16 pr-8'>
                                <img src="https://i.ibb.co/sVr6YVh/Rectangle-13-1.png" alt="" />
                            </div>
                            <div className='w-[412px] h-[430px] first-slide-div flex flex-col justify-center items-center gap-6'>
                                <img className='w-[275px] h-[72px]' src="https://i.ibb.co/sQ1KCKG/Vector-4.png" alt="" />
                                <h3 className='text-3xl font-semibold'>Min 60% off</h3>
                                <button className='pl-6 pr-6 border rounded-md border-black'>Explore</button>

                            </div>
                            <div className='w-[442px] h-[487px]'>
                                <img src="https://i.ibb.co/bNcgKrX/Rectangle-13.png" alt="" />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-6 ml-12 mt-12 first-slide-div w-[368px] h-[341px]'>
                                <h3 className='text-3xl font-semibold'>FOREVER 21</h3>
                                <h3 className='text-3xl font-semibold'>Min 50% off</h3>
                                <button className='pl-6 pr-6 border rounded-md border-black'>Explore</button>
                            </div>

                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;