import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import ContactUs from '../ContactUs/ContactUs';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
        
            
        </div>
    );
};

export default Home;