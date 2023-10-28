import React from 'react';
import Banner from '../Components/Banner/Banner';
import FoodSlide from '../Components/FoodSlide/FoodSlide';
import Poster1 from '../Components/Poster/Poster1';
import Checkout from '../Components/Checkout/Checkout';
import Recommend from '../Components/Recommend/Recommend';
import Announce from '../Components/Announce/Announce';
import CheckoutForm from '../Components/ChekoutSlide/CheckoutForm';
import Testimonial from '../Components/reviews/Testimonial';
import Footer from '../../../Shared/Footer/Footer';

const Home = () => {
    return (
        <>
        <Banner/>
        <FoodSlide/>
        <Poster1/>
        <Checkout/>
        <Recommend/>
        <Announce/>
        <CheckoutForm/>
        <Testimonial/>
        </>
    );
};

export default Home;