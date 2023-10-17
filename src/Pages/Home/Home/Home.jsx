import React from 'react';
import Banner from '../Components/Banner/Banner';
import FoodSlide from '../Components/FoodSlide/FoodSlide';
import Poster1 from '../Components/Poster/Poster1';
import Checkout from '../Components/Checkout/Checkout';
import Recommend from '../Components/Recommend/Recommend';
import Announce from '../Components/Announce/Announce';

const Home = () => {
    return (
        <>
        <Banner/>
        <FoodSlide/>
        <Poster1/>
        <Checkout/>
        <Recommend/>
        <Announce/>
        </>
    );
};

export default Home;