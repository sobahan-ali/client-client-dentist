import { format } from 'date-fns';
import React from 'react';
import AppointmentOption from '../../AppointmentOption/AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {

    return (
        <div className='mt-32'>
            <p className='text-center text-secondary font-bold'>Available Appointments on : {format(selectedDate, "PP")}</p>

            <AppointmentOption selectedDate={selectedDate}></AppointmentOption>
        </div>
    );
};

export default AvailableAppointment;