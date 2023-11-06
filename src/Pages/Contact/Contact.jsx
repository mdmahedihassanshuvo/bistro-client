import React from 'react';
import ContactInfo from './Components/ContactInfo';
import Cover from '../../Shared/Components/Cover/Cover';
import contactImg from "../../assets/contact/banner.jpg"
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <>
        <Helmet
        title='Bistro-Contact Us'
        />
        <Cover img={contactImg} title="contact us" />
        <ContactInfo/>
        </>
    );
};

export default Contact;