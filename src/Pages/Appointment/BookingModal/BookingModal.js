import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }

        console.log(booking)
        setTreatment(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-10 mt-10'>
                        <input disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                           
                            {
                                slots.map((slot, i) =><option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Type your name" className="input input-bordered w-full" />
                        <input type="email" name='email' placeholder="Type your email" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Type your phone" className="input input-bordered w-full" />
                        <input className='w-full btn btn-primary' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;