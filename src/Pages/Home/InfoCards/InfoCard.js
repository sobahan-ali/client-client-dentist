import React from 'react';

const InfoCard = ({ card }) => {
    const { name, icon, bgClass, about } = card
    return (
        <div className={`card p-5 md:card-side shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{about}</p>
                
            </div>
        </div>);
};

export default InfoCard;