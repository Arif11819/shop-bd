import React from 'react';
import Festival from './Festival/Festival';
import Banner from './Header/Banner';
import Navbar from './Header/Navbar';
import Product from './Product/Product';
import Review from './Review/Review';
import Shop from './Shop/Shop';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Product></Product>
            <Festival></Festival>
            <Shop></Shop>
            <Review></Review>
        </div>
    );
};

export default Home;