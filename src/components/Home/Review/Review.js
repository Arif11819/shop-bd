import React from 'react';
import './Review.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Review = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-start pl-10 pb-3'>What Our Customer Says</h2>
            <div class="carousel w-full pt-5">
                <div id="slide7" class="carousel-item relative w-full">
                    <div className='flex flex-col gap-4 justify-center items-center w-[800px] h-[440px] mx-auto review-card'>
                        <img className='w-[140px] h-[140px]' src="https://i.ibb.co/PYxf0zK/Ellipse-60.png" alt="" />
                        <div className='flex items-center gap-3'>
                            <div className='flex'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div>
                            <p>4.4</p>
                        </div>
                        <p className='flex justify-center items-center mx-auto pl-5'>Not really a website, but the private community of doers, not wantrepreneurs. Here you can leverage the business strategy, share and get knowledge of 1,000 high-revenue store owners. Tap into a profound experience of peers from all over the world and learn how easily your problems may be resolved with the help of eCommerce Fuel.The best thing about the private expert community is getting real-time feedback on your unique question. Besides, the professional experience is always much more insightful than the baseless theory beginners collect from the Internet.!</p>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide8" class="carousel-item relative w-full">
                    <div className='flex flex-col gap-4 justify-center items-center w-[800px] h-[440px] mx-auto'>
                        <img className='w-[140px] h-[140px]' src="https://i.ibb.co/PYxf0zK/Ellipse-60.png" alt="" />
                        <div className='flex items-center gap-3'>
                            <div className='flex'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div>
                            <p>4.4</p>
                        </div>
                        <p className='flex justify-center items-center mx-auto pl-5'>Not really a website, but the private community of doers, not wantrepreneurs. Here you can leverage the business strategy, share and get knowledge of 1,000 high-revenue store owners. Tap into a profound experience of peers from all over the world and learn how easily your problems may be resolved with the help of eCommerce Fuel.The best thing about the private expert community is getting real-time feedback on your unique question. Besides, the professional experience is always much more insightful than the baseless theory beginners collect from the Internet.!</p>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide9" class="carousel-item relative w-full">
                    <div className='flex flex-col gap-4 justify-center items-center w-[800px] h-[440px] mx-auto'>
                        <img className='w-[140px] h-[140px]' src="https://i.ibb.co/PYxf0zK/Ellipse-60.png" alt="" />
                        <div className='flex items-center gap-3'>
                            <div className='flex'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div>
                            <p>4.4</p>
                        </div>
                        <p className='flex justify-center items-center mx-auto pl-5'>Not really a website, but the private community of doers, not wantrepreneurs. Here you can leverage the business strategy, share and get knowledge of 1,000 high-revenue store owners. Tap into a profound experience of peers from all over the world and learn how easily your problems may be resolved with the help of eCommerce Fuel.The best thing about the private expert community is getting real-time feedback on your unique question. Besides, the professional experience is always much more insightful than the baseless theory beginners collect from the Internet.!</p>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide10" class="carousel-item relative w-full">
                    <div className='flex flex-col gap-4 justify-center items-center w-[800px] h-[440px] mx-auto'>
                        <img className='w-[140px] h-[140px]' src="https://i.ibb.co/PYxf0zK/Ellipse-60.png" alt="" />
                        <div className='flex items-center gap-3'>
                            <div className='flex'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div>
                            <p>4.4</p>
                        </div>
                        <p className='flex justify-center items-center mx-auto pl-5'>Not really a website, but the private community of doers, not wantrepreneurs. Here you can leverage the business strategy, share and get knowledge of 1,000 high-revenue store owners. Tap into a profound experience of peers from all over the world and learn how easily your problems may be resolved with the help of eCommerce Fuel.The best thing about the private expert community is getting real-time feedback on your unique question. Besides, the professional experience is always much more insightful than the baseless theory beginners collect from the Internet.!</p>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;