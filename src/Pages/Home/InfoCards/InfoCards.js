import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardsData = [
        {
            id: 1,
            name: 'opening hours',
            about: 'opening at morning 10 am to 10 pm everyday',
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            icon: clock
        },
        {
            id: 2,
            name: 'opening hours',
            about: 'opening at morning 10 am to 10 pm everyday',
            bgClass: 'bg-accent',
            icon: marker
        },
        {
            id: 3,
            name: 'opening hours',
            about: 'opening at morning 10 am to 10 pm everyday',
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            icon: phone
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-white'>
            {
                cardsData.map(card => <InfoCard
                    key={card.id}
                    card = {card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;