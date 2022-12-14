import React from 'react';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Banner from '../Banner/Banner';
import ExpectTerms from '../ExpectTerms/ExpectTerms';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExpectTerms></ExpectTerms>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;