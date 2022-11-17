import React, { useEffect, useState } from 'react';
import BookingModal from '../Appointment/BookingModal/BookingModal';
import Option from './Option';

const AppointmentOption = ({ selectedDate }) => {
    const [dentalOption, setDentalOption] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setDentalOption(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                dentalOption.map(option => <Option
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}
                ></Option>)
            }
            {treatment && <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment = {setTreatment}

            ></BookingModal>}
        </div>


    );
};

export default AppointmentOption;