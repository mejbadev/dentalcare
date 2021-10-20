import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../../images/Banner/Banner2.jpg'

const About = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='container mt-2 mb-2'>
                <h2 className='text-primary' >ABOUT</h2>
                <div className='row'>
                    <div className='col-lg-5 col-md-6 col-12'>
                        <img src={Banner2} className='img-fluid' alt="" />
                    </div>
                    <div className='col-lg-7 col-md-6 col-12'>
                    <p className='text-start'>How does a dental website make a great first impression in a city known for an emphasis on cosmetics and beauty? Glo Modern Dentistry in Los Angeles uses their memorable brand and logo to connect with patients. Their homepage advertises a new-patient special for a signature whitening treatment.

But the site doesn’t simply focus on cosmetic care. An entire section of the site is devoted to explaining common dental health concerns. Delmain is seeing this type of educational content on many of the best dental websites, and for good reason. Patients must trust their dentist’s expertise, and these health-focused pages are an opportunity for dentists to show both their knowledge and unique approach to dentistry.

One tip for improvement—this site’s contact form asks for much more information than most dentists need. Research shows the more information you ask for, the fewer people who will complete the form. Think about what’s essential: name, phone number, and email. Then your front office staff can contact people to set up their appointments.</p>
                    </div>

                </div>
                

            </div>
        </div>
    );
};

export default About;