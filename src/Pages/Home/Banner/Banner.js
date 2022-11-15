import React from 'react';
import bgimage from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const Banner = () => {
    return (
        <div style={{ backgroundImage:`url(${bgimage})`,backgroundRepeat:"no-repeat" }} className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   <ButtonPrimary>get started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Banner;