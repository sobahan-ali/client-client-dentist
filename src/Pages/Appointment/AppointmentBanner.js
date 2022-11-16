import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png';
import bgImage from '../../assets/images/bg.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  
    return (
        <header style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover"}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='dentist chair' />
                    <div className='mr-10'>
                        < DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;