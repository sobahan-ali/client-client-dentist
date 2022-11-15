import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';

const MakeAppointment = () => {
    return (
        <section className='mt-32' style={{backgroundImage:`url(${appointment})`}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" -mt-32 lg:w-1/2 hidden md:block rounded-lg shadow-2xl " alt='' />
                    <div>
                        <h1 className=" text-white text-5xl font-bold">Appointment</h1>
                        <p className="py-6 text-white font-bold text-4xl">Make an appointment Today</p>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonPrimary>for serial</ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;