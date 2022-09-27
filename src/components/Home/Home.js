import React from 'react';
import Banner from './Header/Banner';
import Navbar from './Header/Navbar';
import Product from './Product/Product';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Product></Product>
        </div>
    );
};

export default Home;