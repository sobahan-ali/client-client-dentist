import React from 'react';

const Option = ({option, setTreatment}) => {
    const {name, slots} = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className=" text-2xl text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className="btn btn-primary" onClick={() => setTreatment(option)}>Book Appointment</label>
                </div>
            </div>
           
        </div>
    );
};

export default Option;