import React from 'react';
import ContactInfo from './Components/ContactInfo';
import Cover from '../../Shared/Components/Cover/Cover';
import contactImg from "../../assets/contact/banner.jpg"

const Contact = () => {
    return (
        <>
        <Cover img={contactImg} title="contact us" />
        <ContactInfo/>
        </>
    );
};

export default Contact;