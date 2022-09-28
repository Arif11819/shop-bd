import React from 'react';
import Festival from './Festival/Festival';
import Banner from './Header/Banner';
import Navbar from './Header/Navbar';
import Product from './Product/Product';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Product></Product>
            <Festival></Festival>
        </div>
    );
};

export default Home;