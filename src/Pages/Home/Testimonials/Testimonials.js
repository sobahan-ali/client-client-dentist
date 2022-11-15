import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import person1 from '../../../assets/images/people1.png';
import person2 from '../../../assets/images/people2.png';
import person3 from '../../../assets/images/people3.png';
import Testmonial from './Testmonial';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            comments: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person1,
            name: 'Winson Herry',
            country: 'california'
        },
        {
            _id: 2,
            comments: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person2,
            name: 'Winson Herry',
            country: 'california'
        },
        {
            _id: 3,
            comments: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person3,
            name: 'Winson Herry',
            country: 'california'
        },
    ]
    return (
        <section className='mt-32'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-primary text-xl'>Testimonial</h3>
                    <h2 className='text-4xl font-bold'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Testmonial
                        key={review._id}
                        review={review}
                    ></Testmonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;