import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceItem from './ServiceItem';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: fluoride,
            name: 'fluoride treatment',
            description: 'our service is modern and equipment more modern '
        },
        {
            id: 2,
            icon: cavity,
            name: 'fluoride treatment',
            description: 'our service is modern and equipment more modern '
        },
        {
            id: 3,
            icon: whitening,
            name: 'fluoride treatment',
            description: 'our service is modern and equipment more modern '
        },
    ]
    return (
       <div>
        <h3 className='text-center text-primary mt-20 text-2xl'>Our Services</h3>
        <h1 className='text-center text-3xl font-bold'>Service We Provide</h1>
         <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <ServiceItem
                    key={service.id}
                    service = {service}
                ></ServiceItem>)
            }
        </div>
       </div>
    );
};

export default Services;