import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='flex items-center gap-20 bg-white h-[80px] navbar'>
            <div className='w-[57px] h-[48px] ml-[50px]'>
                <img src="https://i.ibb.co/wsgBZsT/Vector-1.png" alt="" />
            </div>
            <div className='pl-16'>
                <Link className='pr-10' to='/men'>Men</Link>
                <Link className='pr-10' to='/women'>Women</Link>
                <Link className='pr-10' to='/kids'>Kids</Link>
                <Link className='pr-10' to='/shop'>Shop</Link>
                <Link className='pr-10' to='/contactus'>Contact us</Link>
            </div>
            <div className='flex flex-row-reverse items-center pl-24'>
                <p className='absolute pr-6 text-lg'><AiOutlineSearch></AiOutlineSearch></p>
                <input className='bg-slate-100 border rounded w-[330px] h-[30px] pl-5' type="text" placeholder='Search here' />
            </div>
            <div className='flex items-center gap-5'>
                <img className='w-[26px] h-[23px] mr-3' src="https://i.ibb.co/hDGy7s8/Vector-2.png" alt="" />
                <img className='w-[25px] h-[19px] mr-3' src="https://i.ibb.co/QNB5cNf/Vector-3.png" alt="" />
                <img className='w-[39px] h-[39px]' src="https://i.ibb.co/4F1VxBZ/Ellipse-1.png" alt="" />
                <p>Anne Doe</p>
            </div>
        </div>
    );
};

export default Navbar;