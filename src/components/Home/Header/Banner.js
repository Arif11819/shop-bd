import React from 'react';
import './Banner.css';
import { BsCircleFill } from "react-icons/bs";

const Banner = () => {
    return (
        <div className='mt-4 mb-20'>
            <h4>Invite Friends and get 50% off on your next purchase <a className='text-blue-600 pl-2' href="#">Invite Now</a> </h4>
            <div className='flex mt-4'>
                <div>
                    <img className='w-[1028px] h-[596px]' src="https://i.ibb.co/DDRk9JC/Rectangle-374-1.png" alt="" />
                </div>
                <div>
                    <img className='w-[882px] h-[596px]' src="https://i.ibb.co/Bz9T3Xb/Rectangle-373.png" alt="" />
                </div>
            </div>
            <div className='flex justify-center items-center mt-3 gap-2 circle'>
                <BsCircleFill className='first-circle w-[12px] h-[12px]'></BsCircleFill>
                <BsCircleFill className='second-circle w-[8px] h-[8px]'></BsCircleFill>
                <BsCircleFill className='third-circle w-[8px] h-[8px]'></BsCircleFill>
                <BsCircleFill className='fourth-circle w-[8px] h-[8px]'></BsCircleFill>
                <BsCircleFill className='fifth-circle w-[8px] h-[8px]'></BsCircleFill>
                {/* <img className='w-[14px] h-[14px] first-circle' src="https://i.ibb.co/W5b6YzQ/Ellipse-45-2.png" alt="" />
                <img className='w-[14px] h-[14px]' src="https://i.ibb.co/W5b6YzQ/Ellipse-45-2.png" alt="" />
                <img className='w-[14px] h-[14px]' src="https://i.ibb.co/W5b6YzQ/Ellipse-45-2.png" alt="" />
                <img className='w-[14px] h-[14px]' src="https://i.ibb.co/W5b6YzQ/Ellipse-45-2.png" alt="" />
                <img className='w-[14px] h-[14px]' src="https://i.ibb.co/W5b6YzQ/Ellipse-45-2.png" alt="" /> */}
            </div>
        </div>
    );
};

export default Banner;