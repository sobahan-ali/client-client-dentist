import React from 'react';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Banner from '../Banner/Banner';
import ExpectTerms from '../ExpectTerms/ExpectTerms';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <h2>home</h2>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExpectTerms></ExpectTerms>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;