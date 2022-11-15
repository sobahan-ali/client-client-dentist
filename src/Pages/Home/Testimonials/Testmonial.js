import React from 'react';

const Testmonial = ({ review }) => {
    const { name, img, comments, country } = review;
    return (
        <div className="card w-full shadow-xl">
            <div className="card-body">
                <p>{comments}</p>
            </div>
            <div className='p-10 flex items-center '>
                <figure className='mr-3'>
                    <img src={img} alt="Shoes" />
                </figure>
                <div>
                    <h2>{name}</h2>
                    <p>{country}</p>
                </div>
            </div>
        </div>
    );
};

export default Testmonial;